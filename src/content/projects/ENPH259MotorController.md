---
title: "Closed-loop DC Motor Controller"
description: "Created as part of ENPH 259 Lab Course"
image: "/projects/ENPH259MotorController/MotorControllerThumbnail.jpg"
imageCaption: "Closed-loop RPM control using a mixed digital and analog servo loop"
heroWidth: "max-w-md"
skills: ["Circuit Construction", "Debugging", "Digital Logic", "Op-Amp Circuits", "Feedback Control"]
---

## Overview

I built a closed-loop controller that sets and actively regulates the RPM of a DC motor using feedback from an optical sensor. This was my ENPH 259 final lab, and it brought together most of the term’s circuit skills in one system.

At a high level, the motor’s speed is measured as a pulse count, that count is latched and converted into an analog voltage, and an op-amp based PI controller drives a power transistor to correct the error.

#### System architecture

The full loop has five main blocks:

1) LATCH and RESET signal generation  
2) Counter and D-latch (stores the measured speed)  
3) 8-bit DAC (converts the stored count to an analog feedback voltage)  
4) Error signal amplifier (PI control)  
5) Motor sensor and motor driver (phototransistor sensing + BJT power stage)

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerSystemDiagram.jpg"
    alt="Servo motor controller block diagram"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Overall feedback loop architecture</figcaption>
</figure>

## Circuit Breakdown

#### 1) LATCH and RESET generator

This section creates two timing signals that define the measurement window.

A 5 Hz square wave is used as the master timing reference. The LATCH signal is essentially a cleaned up square wave that clocks the D-latch so it can store the counter value. A delayed path then creates a short RESET pulse that clears the counter after the latch has already captured the measurement.

The Schmitt trigger inverters matter here because they clean up edges and make the timing more consistent. I found this especially important since inconsistent timing directly turns into inconsistent RPM readings.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerLatchReset.jpg"
    alt="Latch and reset generator on the breadboard"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Latch and reset timing section</figcaption>
</figure>

#### 2) Counter and D-latch

The counter measures speed by counting clock pulses produced by the motor sensor during each measurement window. Right before the counter is reset, the D-latch stores the 8-bit count so the rest of the circuit sees a stable value while the counter starts counting again.

This “count, latch, reset” pattern is what makes the measurement usable in a real-time feedback loop.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerCounterLatch.jpg"
    alt="Counter and latch section"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">8-bit counter feeding an 8-bit D-latch</figcaption>
</figure>

#### 3) 8-bit DAC

The latched 8-bit value is converted into an analog voltage using an R-2R ladder network. That analog signal represents the measured speed in a form that can be directly compared to the analog setpoint voltage.

A buffer op-amp is used after the ladder so the DAC output is not loaded by the following stages.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerDAC.jpg"
    alt="R-2R DAC and buffer op-amp"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">R-2R ladder DAC and output buffer</figcaption>
</figure>

#### 4) Error signal amplifier (PI control)

This stage compares the setpoint voltage (from the potentiometer) to the measured-speed voltage (from the DAC). The key behavior is that the circuit does not just apply proportional correction, it also integrates the error over time.

That integration is what makes the controller “push back” when the motor is disturbed. When I gently touched the disc, the motor slowed down and then gradually sped back up to compensate. When I let go, it overshot briefly due to the sudden unload, then settled back to the target speed.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerErrorAmp.jpg"
    alt="Error signal amplifier"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Error amplifier implementing PI control</figcaption>
</figure>

#### 5) Motor sensor and motor driver

The sensor is an LED and phototransistor arrangement that produces a pulse train as the slotted disc rotates. In my setup the disc produced 10 pulses per rotation, so the counter is effectively measuring pulses per window rather than raw revolutions.

The driver stage uses a BJT power transistor to control the motor current based on the controller output. A diode protects the circuit from inductive kickback from the motor.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerBJTDriver.jpg"
    alt="BJT motor driver and phototransistor sensor"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Phototransistor RPM sensing and BJT motor drive</figcaption>
</figure>

## Results

#### Maximum speed and setpoint mapping

With the setpoint potentiometer at maximum, the latch reading was approximately 132 ± 3 counts. Using the 5 Hz measurement window and 10 pulses per rotation, that corresponds to a maximum speed of about:

- Measured max RPM: 30 × 132 = 3960 RPM  
- Expected max RPM (half-scale latch): 30 × 127.5 = 3825 RPM

From the same relationships, the conversion between setpoint voltage, latch reading, and RPM is:

- Latch value = (Vset / 5) × 256  
- RPM = 1536 × Vset  
- RPM = 30 × (latch value)

#### Voltage vs RPM table

| Vset (V) | Latch reading (counts) | RPM |
| --- | --- | --- |
| 0.0 | 0.0 | 0 |
| 1.0 | 51.2 | 1536 |
| 2.0 | 102.4 | 3072 |
| 2.5 | 127.5 | 3825 |

One interesting takeaway is that the latch reading converts to RPM by multiplying by 30. If I wanted the digital readout to show RPM directly, one option would be to slow down the latch and reset rate by a factor of 30, but that trades off with counter range and makes overflow more likely at higher speeds.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerMaxSpeedLatch.jpg"
    alt="Logic analyzer showing latch value at maximum speed"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Latch reading at maximum motor speed</figcaption>
</figure>

## Troubleshooting

After the circuit was working, a TA intentionally made a small change and I had to find it without using picture reference.

The motor would not move regardless of potentiometer position, so I narrowed it down to a short list of likely causes: motor power path issue, bad RPM measurement, or a setpoint issue. I confirmed the power wiring, diode direction, and motor connections first. After that, I traced the LATCH and RESET generator wiring and checked that it matched the schematic.

The actual issue was the potentiometer being moved over by one pin. Instead of being wired (5V, op-amp input, 0V), it was effectively giving the op-amp a 0 V setpoint, which commands a target speed of zero. Fixing that one connection immediately restored normal behavior.

This was a good reminder that neat wiring and clear routing is not just aesthetic, it directly reduces debugging time.

## What I’d improve next

If I were revisiting this project, I would focus on making the “speed readout” more directly meaningful. The latch value is already a clean digital measurement, so either scaling the timing window or adding a simple conversion stage could make the displayed number closer to RPM without doing math off-board.
