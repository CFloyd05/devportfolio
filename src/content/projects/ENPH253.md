---
title: "Autonomous Pet Rescue Robot"
description: "Created an autonomous competition robot to rescue stuffed animals in a team of four."
image: "/projects/ENPH253/253News.jpg"
imageCaption: "Our robot was featured on a local news station!"
skills: ["SolidWorks", "Laser-Cutting", "3D Printing", "Machining"]
---

## Overview

The goal of this competition was to build an autonomous robot which would rescue stuffed animals and return them to a safe zone.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure>
    <img
      src="/projects/ENPH253/arena2D.jpg"
      alt="Top view of playing arena"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Top view of playing arena"
      />
      <figcaption class="text-center text-md text-gray-500">Top view of playing arena</figcaption>
  </figure>

  <figure>
    <img
      src="/projects/ENPH253/arena3D.jpg"
      alt="CAD of playing arena"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
              transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="CAD of playing arena"
    />
    <figcaption class="text-center text-md text-gray-500">CAD of playing arena</figcaption>
  </figure>
</div>

We participated in this competition in a team of four. I was responsible for the CAD and mechanical design of the robot. My teammates were: George Sleen - PCB design and software; Alessandra Ionescu-Zanetti - PCB design and software; Jonah Lee - Software.

## Design

I was responsible for the majority of the mechanical design and CAD of our robot, shown below.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure class="max-w-xl mx-auto">
    <img
      src="/projects/ENPH253/253Cad.jpg"
      alt="CAD Model of our Robot"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
              transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="CAD Model of our Robot"
    />
    <figcaption class="text-center text-md text-gray-500">CAD Model of our Robot</figcaption>
  </figure>

  <figure class="max-w-xl mx-auto">
    <img
      src="/projects/ENPH253/ENPH253Thumbnail.jpg"
      alt="Final Robot"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
              transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Final Robot"
    />
    <figcaption class="text-center text-md text-gray-500">Final Robot</figcaption>
  </figure>
</div>

The design we settled on used a roller intake connected to two arms. In the centre of the robot was a large basket, where we would collect the pets. We would then attach the basket to the zipline, as seen in the CAD of the playing surface, which would deliver the pets to the safe zone.

My largest challenge with this design was the size constraints. We wanted enough basket space to carry all the pets, however, the robot had to be narrow enough to fit through the doorway. This means I had to make the arm mechanisms as narrow as possible, which I accomplished over several iterations.

#### Chassis and Drivetrain

The chassis of the robot was designed to be made from flat sheets of 3mm hardboard. These could be easily laser-cut, and were assembled using finger joints and M3 hardware. To minimize the width of the robot, I incorporated part of the arms into the side of the chassis. For the drivetrain, we chose rear-wheel drive, with omni-wheels in the front. I designed 3D printed motor mounts for the drive and arm motors.

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 js-gallery">
  <figure>
    <img
      src="/projects/ENPH253/ENPH253Drivetrain.jpg"
      alt="CAD of Robot Chassis"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="CAD of Robot Chassis"
      />
      <figcaption class="text-center text-md text-gray-500">CAD of Robot Chassis</figcaption>
  </figure>

  <figure>
    <img
      src="/projects/ENPH253/ENPH253MotorMounts.jpg"
      alt="CAD of Motor Mounts"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="CAD of Motor Mounts"
      />
      <figcaption class="text-center text-md text-gray-500">CAD of Motor Mounts</figcaption>
  </figure>
</div>

#### Arm and Intake Systems

The robot uses two contra-rotating brushes to pick up pets. The intake is mounted at the end of two arms, with a single joint at their base.

To keep the motion of the two arms synchronized, I used a central driveshaft to connect them. Both arms are driven by a single motor, with an additional 4:1 gear ratio between the motor and the arms. 

Originally, I used a belt instead of a gear system to transmit torque to the arms. I 3D printed a coupler to turn a section of belt into a closed loop. However, the coupler could not go around the pulleys, which limited the range of motion of the arms. I could have modified the geometry and purchased standard length belts, but I opted to switch to gears instead. In a previous revision, I had a potentiometer mounted to the driveshaft to track the arm position. This also had a problem with the range of motion of the arm, so I later mounted a potentiometer to track the rotation of the largest gear.

The orientation of the intake is coupled to the position of the arm through the toothed belt alongside the arms. This allowed us to control the rotation of the intake without requiring an additional actuator.

<div class="grid grid-cols-1 md:grid-cols-3 gap-3 js-gallery">
  <figure>
    <img
      src="/projects/ENPH253/ENPH253ArmDrivetrain.jpg"
      alt="CAD of Arm Drivetrain System"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="CAD of Arm Drivetrain System"
      />
      <figcaption class="text-center text-md text-gray-500">CAD of Arm Drivetrain System</figcaption>
  </figure>

  <figure>
    <img
      src="/projects/ENPH253/ENPH253ArmAndClaw.jpg"
      alt="CAD of Arms and Intake"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="CAD of Arms and Intake"
      />
      <figcaption class="text-center text-md text-gray-500">CAD of Arms and Intake</figcaption>
  </figure>

  <figure>
    <img
      src="/projects/ENPH253/253IntakePickup.jpg"
      alt="Robot Picking up Pet"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Robot Picking up Pet"
      />
      <figcaption class="text-center text-md text-gray-500">Robot Picking up Pet</figcaption>
  </figure>
</div>

#### Basket and Zipline System

Once our robot had traversed the course and collected all the pets, we opted to send them down the zipline, rather than drive back to the start, to save time. This meant we needed a detachable basket, with a roller system to ride on the zipline. I designed a large basket, with two arms on either side, connected to our roller mechanism which used skateboard bearings to slide. The arms of the basket needed to be folded back in order to fit through the doorway, and not get in the way of the main arm. To accomplish this, I used torsion springs so the arm would swing up by itself; I then used a servo motor to control a release mechanism, allowing the basket arms to swing up.

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 js-gallery">
  <figure>
    <img
      src="/projects/ENPH253/253BasketCAD.jpg"
      alt="CAD of Basket"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="CAD of Basket"
      />
      <figcaption class="text-center text-md text-gray-500">CAD of Basket</figcaption>
  </figure>

  <figure>
    <img
      src="/projects/ENPH253/253BasketDelivery.jpg"
      alt="Basket Carrying Pets Down Zipline"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Basket Carrying Pets Down Zipline"
      />
      <figcaption class="text-center text-md text-gray-500">Basket Carrying Pets Down Zipline</figcaption>
  </figure>
</div>


## Manufacturing

I was also responsible for the majority of the manufacturing of the robot. The chassis and gears were laser-cut out of a mix of hardboard, acrylic, and Delrin. For the shafts of the basket arms, which housed the torsion springs, I made aluminum shafts on the lathe. Pulleys and many other miscellaneous components were 3D printed in PETG.

Throughout the two-month competition, I was constantly iterating on my designs. I made around 5 revisions of each subsystem, for some of them even more.

<div class="grid max-w-lg gap-3 js-gallery mx-auto">
  <figure>
    <img
      src="/projects/ENPH253/253Chassis.jpg"
      alt="Laser-cut Robot Chassis"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Laser-cut Robot Chassis"
      />
      <figcaption class="text-center text-md text-gray-500">Laser-cut Robot Chassis</figcaption>
  </figure>
</div>


## Results

Our robot performed excellently. We were consistently able to rescue 6 of the 7 pets, on par with the other top teams. Unfortunately, after the qualifying round of the competition, the potentiometer that measured the position of our arm broke. Since our robot wasn't working properly, we chose to give up our spot in the elimination round. I received a final course grade of 93%.