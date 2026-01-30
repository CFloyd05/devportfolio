---
title: "Closed-loop DC Motor Controller"
description: "Created as part of ENPH 259 Lab Course. Final course grade: 91%"
image: "/projects/ENPH259MotorController/MotorControllerThumbnail.jpg"
imageCaption: "Closed-loop RPM control using a mixed digital and analog servo loop"
heroWidth: "max-w-md"
skills: ["Circuit Construction", "Debugging", "Digital Logic", "Op-Amp Circuits", "Feedback Control"]
---

## Overview

I built a closed-loop controller that sets and actively regulates the RPM of a DC motor using feedback from an optical sensor. The motor’s speed is measured as a pulse count. That count is latched and converted into an analog voltage, and an op-amp circuit controls a power transistor via proportional-integral control to correct the error.

Throughout this lab course, I kept a detailed lab notebook. I documented my progress, challenges, and troubleshooting procedures.

## System Architecture
The full loop has five main blocks:

1) LATCH and RESET signal generation  
2) Counter and D-latch (stores the measured speed)  
3) 8-bit DAC (converts the stored count to an analog feedback voltage)  
4) Error signal amplifier (P.I. control)  
5) Motor sensor and motor driver (phototransistor sensing + BJT power stage)

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerNumbered.jpg"
    alt="Final Circuit"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Final Circuit. Five Main Blocks Highlighted</figcaption>
</figure>

## Circuit Breakdown

#### 1) LATCH and RESET generator

This section creates two timing signals used for measuring the motor speed. The signals go to the counter and D-latch in section 2).

A 5 Hz square wave is used as a timing reference. The LATCH signal is a square wave that's sent to the D-latch. After a short delay, a RESET pulse is sent to the counter.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure>
    <img
      src="/projects/ENPH259MotorController/generatorCircuitDiagram.png"
      alt="Circuit Diagram of LATCH and RESET signal generator"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Circuit Diagram of LATCH and RESET signal generator"
      />
      <figcaption class="text-center text-md text-gray-500">Circuit Diagram of LATCH and RESET signal generator</figcaption>
  </figure>
  
  <figure>
    <img
      src="/projects/ENPH259MotorController/annotatedCorrectClock.png"
      alt="Annotated LATCH and RESET signal generator circuit"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Annotated LATCH and RESET signal generator circuit"
    />
    <figcaption class="text-center text-md text-gray-500">Annotated LATCH and RESET signal generator circuit</figcaption>
  </figure>
</div>

#### 2) Counter and D-latch

The counter measures speed by counting clock pulses produced by the motor sensor during each measurement window. This count is stored digitally, as an 8-bit number. When the LATCH signal from section 1) is sent to the D-latch, it stores the current value in the counter. When the RESET pulse is sent to the counter, it's reset, and begins counting anew. The delay between the LATCH and RESET signals is critical, as it allows the count to be latched before it's reset.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure>
    <img
      src="/projects/ENPH259MotorController/clockAndLatchCircuitDiagram.png"
      alt="Circuit Diagram of Counter and D-latch"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Circuit Diagram of Counter and D-latch"
      />
      <figcaption class="text-center text-md text-gray-500">Circuit Diagram of Counter and D-latch</figcaption>
  </figure>
  
  <figure>
    <img
      src="/projects/ENPH259MotorController/annotatedCounterPicture.png"
      alt="Annotated Counter and D-latch Circuit"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Annotated Counter and D-latch Circuit"
    />
    <figcaption class="text-center text-md text-gray-500">Annotated Counter and D-latch Circuit</figcaption>
  </figure>
</div>

#### 3) 8-bit DAC

The latched 8-bit value from section 2) is converted into an analog voltage using an R-2R ladder network. The analog signal represents the measured speed in a way that can be compared with a user-defined set-point voltage.

A buffer op-amp is used after the DAC so its output is not loaded by the following section.

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure>
    <img
      src="/projects/ENPH259MotorController/DACandBufferDiagram.png"
      alt="Circuit Diagram of DAC and Buffer"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Circuit Diagram of DAC and Buffer"
      />
      <figcaption class="text-center text-md text-gray-500">Circuit Diagram of DAC and Buffer</figcaption>
  </figure>
  
  <figure>
    <img
      src="/projects/ENPH259MotorController/annotatedDAC.png"
      alt="Annotated DAC Circuit"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Annotated DAC Circuit"
    />
    <figcaption class="text-center text-md text-gray-500">Annotated DAC Circuit</figcaption>
  </figure>
  <figure>
    <img
      src="/projects/ENPH259MotorController/annotatedBuffer.png"
      alt="Annotated Buffer Circuit"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Annotated Buffer Circuit"
    />
    <figcaption class="text-center text-md text-gray-500">Annotated Buffer Circuit</figcaption>
  </figure>
</div>

#### 4) Error signal amplifier (P.I. control)

This section compares the output voltage from the DAC to a set-point voltage controlled by a potentiometer. This op-amp circuit provides both proportional and integral control.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure>
    <img
      src="/projects/ENPH259MotorController/errorAmplifierDiagram.png"
      alt="Circuit Diagram of Op-Amp Error Signal Amplifier"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Circuit Diagram of Op-Amp Error Signal Amplifier"
      />
      <figcaption class="text-center text-md text-gray-500">Circuit Diagram of Op-Amp Error Signal Amplifier</figcaption>
  </figure>
  
  <figure>
    <img
      src="/projects/ENPH259MotorController/annotatedErrorAmplifier.png"
      alt="Annotated Error Signal Amplifier Circuit"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Annotated Error Signal Amplifier Circuit"
    />
    <figcaption class="text-center text-md text-gray-500">Annotated Error Signal Amplifier Circuit</figcaption>
  </figure>
</div>

#### 5) Motor sensor and motor driver

The driver stage uses a BJT to control the current sent to the motor based on the output of the previous section. A flyback diode protects the circuit from the inductive nature of the motor.

Attached to the motor is a slotted disc, so that its rotation can be measured with an LED and phototransistor. This produces a pulse train which is input to the counter in section 2). The disc I used had 10 slots, meaning there are 10 pulses per revolution.

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure>
    <img
      src="/projects/ENPH259MotorController/motorControlDiagram.png"
      alt="Circuit Diagram of Motor Sensor and Driver"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Circuit Diagram of Motor Sensor and Driver"
      />
      <figcaption class="text-center text-md text-gray-500">Circuit Diagram of Motor Sensor and Driver</figcaption>
  </figure>
  
  <figure>
    <img
      src="/projects/ENPH259MotorController/annotatedBJT.png"
      alt="Annotated Motor Driver Circuit"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Annotated Motor Driver Circuit"
    />
    <figcaption class="text-center text-md text-gray-500">Annotated Motor Driver Circuit</figcaption>
  </figure>
  <figure>
    <img
      src="/projects/ENPH259MotorController/annotatedSensors.png"
      alt="Annotated Motor Sensor Circuit"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Annotated Motor Sensor Circuit"
    />
    <figcaption class="text-center text-md text-gray-500">Annotated Motor Sensor Circuit</figcaption>
  </figure>
</div>

After assembling the circuit, I proved its functionality, such as the adjustable speed set-point and integral control, to the course staff.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/ENPH259MotorController/MotorControllerThumbnail.jpg"
    alt="Overall Feedback Loop"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Overall Feedback Loop</figcaption>
</figure>