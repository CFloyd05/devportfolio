---
title: "Smart USB Hub"
description: "A Google Assistant compatible USB hub for LED lights"
image: "/projects/253/253MainPhoto.jpg"
imageCaption: ""
skills: ["Circuit Design", "Soldering", "CAD", "3D Printing"]
---

## Overview

**The Problem:** I have several USB powered LED lights for my bedroom, which I never used for two reasons. 1) It's incovenient to need to plug in usb cables to turn the lights on. It's an eyesore to have extra cables lying around, but if I hide them, such as with a power bar under my desk, they're difficult to reach. 2) I often don't have USB ports available for extra lights.

**The Solution** I created a smart USB hub that can control several LED lights via a Google home, requiring just a single USB port for power.

## System Architecture

The system consists of a Google Home, Raspberry Pi, and ESP32, connected to a BJT based circuit to power USB ports.

The system flow is:

→ Google Assistant command  
→ cloud bridge  
→ home automation server on Raspberry Pi  
→ MQTT message  
→ ESP32 firmware  
→ transistor switching stage  
→ 5V USB outputs for LED lights

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/smartUsbHub/systemDiagram.png"
    alt="Smart USB hub system architecture diagram"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Smart USB hub system architecture diagram</figcaption>
</figure>

## Electronics

#### Switching Circuit

The ESP32 GPIO pins cannot drive USB loads directly, so each port is controlled through a transistor switching stage. This stage acts like an electronic switch that turns a port on or off based on a logic signal from the ESP32.

I designed and soldered a custom transistor based board for this, which kept the wiring clean and made the final assembly much easier to debug.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/smartUsbHub/SmartUsbHubSwitchingBoard.jpg"
    alt="Transistor switching board for USB outputs"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Custom transistor switching stage for the 5V USB outputs</figcaption>
</figure>

#### Power and USB Outputs

The hub is designed around 5V outputs intended for LED loads. Each USB port is treated as an independently switched 5V rail, so different lights can be controlled separately.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/smartUsbHub/SmartUsbHubWiring.jpg"
    alt="Internal wiring and power routing for the smart USB hub"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Internal wiring layout with separated logic and power routing</figcaption>
</figure>

## Enclosure Design

#### CAD and 3D Printing

I designed an enclosure in CAD and 3D printed it to house the ESP32, the switching board, and the USB ports. The goal was to make it feel like a single finished product rather than a prototype, with cable routing and mounting points planned from the start.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/smartUsbHub/SmartUsbHubCAD.jpg"
    alt="CAD model of the smart USB hub enclosure"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">CAD model used to design the enclosure and mounting features</figcaption>
</figure>

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/smartUsbHub/SmartUsbHubPrintedCase.jpg"
    alt="3D printed smart USB hub enclosure"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">3D printed enclosure during assembly</figcaption>
</figure>

## Software and Integration

#### Raspberry Pi Home Automation Server and MQTT

A Raspberry Pi acts as the local server for automation logic. It runs an MQTT broker, which is the messaging layer used to send simple commands to the ESP32 like turning a specific port on or off.

This setup kept the ESP32 firmware lightweight, since it only needs to subscribe to a few MQTT topics and apply the requested output states.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/smartUsbHub/SmartUsbHubMQTT.jpg"
    alt="MQTT message flow from Raspberry Pi to ESP32"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">MQTT message flow used to command the ESP32</figcaption>
</figure>

#### Google Assistant Cloud Bridge

To connect Google Assistant to my local server, I integrated a cloud based bridge that forwards voice commands into my home automation system. From there, the Pi publishes the corresponding MQTT messages to the ESP32.

The key idea is that the cloud piece only has to translate voice intent into a clean internal command. Everything after that happens locally on my network.

## Results

The finished hub successfully controls 5V LED lights through Google Assistant voice commands. Once it was configured, it behaved like a normal smart home device, except the hardware and control path were fully custom.

<figure class="max-w-xl mx-auto">
  <img
    src="/projects/smartUsbHub/SmartUsbHubFinal.jpg"
    alt="Final assembled smart USB hub"
    class="rounded-xl shadow-lg"
  />
  <figcaption class="text-center text-md text-gray-500">Final assembled hub</figcaption>
</figure>

## What I’d Improve Next

- Add per port current monitoring or a fuse strategy to better protect against shorts
- Move from a prototype switching board to a small PCB for easier replication
- Add status LEDs per port on the enclosure for quick debugging
- Improve the software side with clearer device states (on, off, unavailable) reported back to the server
