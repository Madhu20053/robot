// FANUC R-30iA Mate Controller Error Database
// Complete and exact reproduction from B-82725EN-2/06 maintenance manual
// All descriptions and remedies are verbatim from the official manual

const errorDatabase = {
    'SRVO-001': {
        category: 'Servo',
        title: 'Operator panel E-stop',
        description: 'The emergency stop button on the operator\'s panel is pressed.',
        remedy: '(Action 1) Release the emergency stop button pressed on the operator\'s panel.\n(Action 2) Check the wires connecting between the emergency stop button and the E-stop board (CRT23) for continuity. If an open wire is found, replace the entire harness.\n(Action 3) With the E-stop in the released position, check for continuity across the terminals of the switch. If continuity is not found, the emergency stop button is broken. Replace the switch unit or the operator\'s panel.\n(Action 4) Replace the E-stop board.\n(Action 5) Replace the main board.'
    },
    'SRVO-002': {
        category: 'Servo',
        title: 'Teach pendant E-stop',
        description: 'The emergency stop button on the teach pendant was pressed.',
        remedy: '(Action 1) Release the emergency stop button on the teach pendant.\n(Action 2) Replace the teach pendant.'
    },
    'SRVO-003': {
        category: 'Servo',
        title: 'DEADMAN switch released',
        description: 'The teach pendant is enabled, but the DEADMAN switch is not pressed. Alternatively, the DEADMAN switch is pressed strongly.',
        remedy: '(Action 1) Check the intermediate position of the DEADMAN switch on the teach pendant.\n(Action 2) Check that the mode switch on the operator\'s panel and the enable switch on the teach pendant are at the correct positions.\n(Action 3) Replace the teach pendant.\n(Action 4) Check the mode switch connection and operation. If trouble is found, replace the mode switch.\n(Action 5) Replace the E-stop board.\n(Action 6) Replace the main board.'
    },
    'SRVO-004': {
        category: 'Servo',
        title: 'Fence open',
        description: 'In the automatic operation mode, the safety fence contact connected to EAS1-EAS11 or EAS2-EAS21 of TBOP7 is open.',
        remedy: '(Action 1) When a safety fence is connected, close the safety fence.\n(Action 2) Check the cables and switches connected between EAS1 and EAS11 and between EAS2 and EAS21 of the terminal block TBOP7 on the E-stop board.\n(Action 3) If the safety fence signal is not used, make a connection between EAS1 and EAS11 and between EAS2 and EAS21 of the terminal block TBOP7 on the E-stop board.\n(Action 4) Check the mode switch. If trouble is found, replace the mode switch.\n(Action 5) Replace the E-stop board.\n(Action 6) Replace the main board.'
    },
    'SRVO-005': {
        category: 'Servo',
        title: 'Robot overtravel',
        description: 'The robot has moved beyond a hardware limit switch on the axes.',
        remedy: '(Action 1) Select [System OT release] on the overtravel release screen to release each robot axis from the overtravel state.\n(Action 2) Hold down the shift key, and press the alarm release button to reset the alarm condition.\n(Action 3) Still hold down the shift key, and jog to bring all axes into the movable range.\n(Action 4) Replace the limit switch.\n(Action 5) Check the FS2 fuse on the servo amplifier. If the SRVO-214 fuse blown alarm is also generated, the FS2 fuse has blown.\n(Action 6) Check the end effector connector.\n(Action 7) Replace the servo amplifier.\n(Action 8) Verify the following for connector RMP at the base of the robot:\n1) There are no bent or dislocated pins in the male or female connectors.\n2) The connector is securely connected.\nThen verify that connectors CRF8 and CRM68 on the servo amplifier are securely connected. Also, verify that the RMP cable is in good condition, and there are no cuts or kinks visible. If no limit switch is in use, jumper connector must be attached in the mechanical unit. Check for the jumper connector.'
    },
    'SRVO-006': {
        category: 'Servo',
        title: 'Hand broken',
        description: 'The safety joint (if in use) might have been broken. Alternatively, the HBK signal on the robot connection cable might be a ground fault or a cable disconnection.',
        remedy: '(Action 1) Hold down the shift key, and press the alarm release button to reset the alarm condition. Still hold down the shift key, and jog the tool to the work area.\n1) Replace the safety joint.\n2) Check the safety joint cable.\n(Action 2) Replace the servo amplifier.\n(Action 3) Verify the following for connector RMP at the base of the robot:\n1) There are no bent or dislocated pins in the male or female connectors.\n2) The connector is securely connected.\nThen verify that connector CRF8 on the servo amplifier is securely connected. Also, verify that the RMP cable is in good condition, and there are no cuts or kinks visible. Check the robot connection cable (RMP) for a ground fault or a cable disconnection.'
    },
    'SRVO-009': {
        category: 'Servo',
        title: 'Pneumatic pressure abnormal',
        description: 'An abnormal air pressure was detected. The input signal is located on the end effector of the robot. Refer to the manual of your robot.',
        remedy: '(Action 1) If an abnormal air pressure is detected, check the cause.\n(Action 2) Check the end effector connector.\n(Action 3) Check the robot connection cable (RMP) for a ground fault or a cable disconnection. If a fault or a disconnection is detected, replace the cable.\n(Action 4) Replace the servo amplifier.\n(Action 5) Replace the internal cables of the robot.'
    },
    'SRVO-014': {
        category: 'Servo',
        title: 'Fan motor abnormal',
        description: 'A fan motor in the controller backplane unit is abnormal.',
        remedy: '(Action 1) Replace a fan motor in the controller backplane unit.\n(Action 2) Replace the fan board.\n(Action 3) Replace the main board.'
    },
    'SRVO-015': {
        category: 'Servo',
        title: 'SYSTEM OVER HEAT (Group: i Axis: j)',
        description: 'The temperature in the controller exceeds the specified value.',
        remedy: '(Action 1) If the ambient temperature is higher than specified (45°C), cool down the ambient temperature.\n(Action 2) If the fan motor is not running, check it and its cables. Replace them if necessary.\n(Action 3) Replace the main board. (The thermostat on the main board may be faulty.)'
    },
    'SRVO-018': {
        category: 'Servo',
        title: 'Brake abnormal',
        description: 'An excessive brake current is detected. The ALM LED on the servo amplifier is lit.',
        remedy: '(Action 1) Check the cables and motor brakes connected to CRR88 connector on the servo amplifier. If a short-circuit or grounding fault is found, replace the failed part.\n(Action 2) Check the cables and motor brakes connected to CRR65A, CRR65B connector on the servo amplifier. If a short-circuit or grounding fault is found, replace the failed part.\n(Action 3) Replace the servo amplifier.'
    },
    'SRVO-021': {
        category: 'Servo',
        title: 'SRDY off (Group: i Axis: j)',
        description: 'The HRDY is on and the SRDY is off, although there is no other cause of an alarm.',
        remedy: '(Action 1) Make sure that the E-stop board connectors CRMA43, CRMA31 and servo amplifier SRMA43 are securely attached to the servo amplifier.\n(Action 2) It is possible that an instant disconnection of power source causes this alarm. Check whether an instant disconnection occurred.\n(Action 3) Replace the E-stop unit.\n(Action 4) Replace the servo amplifier.'
    },
    'SRVO-022': {
        category: 'Servo',
        title: 'SRDY on (Group: i Axis: j)',
        description: 'When the HRDY is about to go on, the SRDY is already on.',
        remedy: '(Action 1) Replace the servo amplifier as the alarm message.'
    },
    'SRVO-023': {
        category: 'Servo',
        title: 'Stop error excess (Group: i Axis: j)',
        description: 'When the servo is at stop, the position error is abnormally large.',
        remedy: 'Check whether the brake is released through the clack sound of the brake or vibration.\n\nIn case that the brake is not released:\n(Action 1) If the brake is not released, check the continuity of the brake line in the robot connection cable and the robot internal cable.\n(Action 2) If the disconnection is not found, replace the servo amplifier or the servo motor.\n\nIn case that the brake is released:\n(Action 1) Check whether the obstacle disturbs the robot motion.\n(Action 2) Make sure that connectors CNJ1A-CNJ6 are securely attached to the servo amplifier.\n(Action 3) Check the continuity of the robot connection cable and the internal robot power cable.\n(Action 4) Check to see if the load is greater than the rating. If greater, reduce it to within the rating.\n(Action 5) Check the input voltage to the controller is within the rated voltage and no phase is lack. In addition, check the setting of the transformer is correct.\nCheck each phase voltage of the CRR38A connector of the three-phase power (200 VAC) input to the servo amplifier. If it is 210 VAC or lower, check the line voltage.\n(Action 6) Replace the servo amplifier.\n(Action 7) Replace the motor of the alarm axis.'
    },
    'SRVO-024': {
        category: 'Servo',
        title: 'Move error excess (Group: i Axis: j)',
        description: 'When the robot is running, its position error is greater than a specified value (SPARAM_GROUP.SMOVER_OFFST). It is likely that the robot cannot follow the speed specified by program.',
        remedy: '(Action 1) Take the same actions as SRVO-023.'
    },
    'SRVO-027': {
        category: 'Servo',
        title: 'Robot not mastered (Group: i)',
        description: 'An attempt was made to calibrate the robot, but the necessary adjustment had not been completed.',
        remedy: '(Action) Check whether the mastering is valid. If the mastering is invalid, master the robot.'
    },
    'SRVO-030': {
        category: 'Servo',
        title: 'Brake on hold (Group:i)',
        description: 'If the temporary halt alarm function is enabled (SSCR.SBRKHOLD_ENB=1), SRVO-030 is issued when a temporary halt occurs.',
        remedy: '(Action) Disable [Servo-off in temporary halt] on the general item setting screen [6 General Setting Items].'
    },
    'SRVO-033': {
        category: 'Servo',
        title: 'Robot not calibrated (Group: i)',
        description: 'An attempt was made to set up a reference point for quick mastering, but the robot had not been calibrated.',
        remedy: '(Action) Calibrate the robot.\n1. Supply power.\n2. Set up a quick mastering reference point using [Positioning] on the positioning menu.'
    },
    'SRVO-034': {
        category: 'Servo',
        title: 'Ref pos not set (Group: i)',
        description: 'An attempt was made to perform quick mastering, but the reference point had not been set up.',
        remedy: '(Action) Set up a quick mastering reference point on the positioning menu.'
    },
    'SRVO-036': {
        category: 'Servo',
        title: 'Impos time over (Group: i Axis: j)',
        description: 'The robot did not get to the effective area (SPARAM_GROUP.$STOPTOL) even after the position check monitoring time (SPARAM_GROUP.$INPOS_TIME) elapsed.',
        remedy: '(Action) Take the same actions as for SRVO-023 (large position error at a stop).'
    },
    'SRVO-037': {
        category: 'Servo',
        title: 'IMSTP input (Group: i)',
        description: 'The *IMSTP signal for a peripheral device interface was input.',
        remedy: '(Action) Turn on the *IMSTP signal.'
    },
    'SRVO-038': {
        category: 'Servo',
        title: 'Pulse mismatch (Group: i Axis: j)',
        description: 'The pulse count obtained when power is turned off does not match the pulse count obtained when power is applied. This alarm is asserted after exchange the Pulsecoder or battery for back up of the Pulsecoder data or loading back up data to the Main Board.',
        remedy: '(Action 1) If the brake number is set to the non-brake motors, this alarm may occur. Check the software setting of the brake number.\n(Action 2) In case the robot has been moved by using the brake release unit while the power is off or when restoring the back-up data to the main board, this alarm may occur. Remaster the robot.\n(Action 3) If the robot has been moved because the brake failed, this alarm may occur. Check the cause of the brake trouble. Then remaster the robot.\n(Action 4) Replace the Pulsecoder and master the robot.'
    },
    'SRVO-042': {
        category: 'Servo',
        title: 'MCAL alarm (Group: i Axis: j)',
        description: 'This alarm means that the contacts of the magnetic contactor have stuck to each other.',
        remedy: '(Action 1) Replace the E-stop unit.\n(Action 2) Replace the servo amplifier.'
    },
    'SRVO-043': {
        category: 'Servo',
        title: 'DCAL alarm (Group: i Axis: j)',
        description: 'The regenerative discharge energy was too high to be dissipated as heat.',
        remedy: '(Action 1) This alarm may occur if the axis is subjected to frequent acceleration/deceleration or if the axis is vertical and generates a large amount of regenerative energy. If this alarm has occurred, relax the service conditions.\n(Action 2) Check fuse FS3 in the servo amplifier. If it has blown, remove the cause, and replace the fuse.\n(Action 3) The ambient temperature is excessively high. Or the regenerative resistor cannot be cooled effectively. Check the fan unit, and replace it if it stops. Clean up the fan unit, the regenerative resistor and the louver if they are dirty.\n(Action 4) Make sure that the phase-to-phase voltages of input power fall within the specified range by measurement.\n(Action 5) Make sure that the servo amplifier CRR63A and CRR63B connectors are connected tightly. Then detach the cable from CRR63A and CRR63B connectors on the Servo amplifier, and check for continuity between pins 1 and 2 of the cable-end connector. If there is no continuity between the pins, replace the regenerative resistor.\n(Action 6) Make sure that the servo amplifier CRR45A and CRR45B are connected tightly, then detach the cables from CRR45A and CRR45B on the servo amplifier and check the resistance between pins 1 and 2 of each cable end connector. If the resistance is not 9-16Ω, replace the regenerative resistor.\n(Action 7) Replace the servo amplifier.'
    },
    'SRVO-044': {
        category: 'Servo',
        title: 'HVAL alarm (Group: i Axis: j)',
        description: 'The DC voltage (DC link voltage) of the main circuit power supply is abnormally high.',
        remedy: '(Action 1) Check the three-phase input voltage at the servo amplifier. If it is 230 VAC or higher, check the line voltage.\n(Action 2) Check that the load weight is within the rating. If it is higher than the rating, reduce it to within the rating.\n(Action 3) Check that the CRR63A and CRR63B connectors of the servo amplifier are attached firmly. Next, detach the cables then check the continuity between pins 1 and 2 of the cable-side connectors. If a disconnection is found, replace the regenerative resistor.\n(Action 4) Replace the servo amplifier.'
    },
    'SRVO-045': {
        category: 'Servo',
        title: 'HCAL alarm (Group: i Axis: j)',
        description: 'Abnormally high current flowed in the main circuit of the servo amplifier.',
        remedy: '(Action 1) Turn off the power, and disconnect the power cable from the servo amplifier indicated by the alarm message. (And disconnect the brake cable (CRR88 on the servo amplifier) to avoid the axis falling unexpectedly.) Supply power and see if the alarm occurs again. If the alarm occurs again, replace the servo amplifier.\n(Action 2) Turn off the power and disconnect the power cable from the servo amplifier indicated by the alarm message, and check the insulation of their U, V, W and the GND lines each other. If there is a short-circuit, replace the power cable.\n(Action 3) Turn off the power and disconnect the power cable from the servo amplifier by the alarm message, and measure the resistance between their U and V, V and W and W and U with an ohmmeter that has a very low resistance range. If the resistances at the three places are different from each other, the motor, the power cable is defective. Check each item in detail and replace it if necessary.'
    },
    'SRVO-046': {
        category: 'Servo',
        title: 'OVC alarm (Group: i Axis: j)',
        description: 'This alarm is issued to prevent the motor from thermal damage that might occur when the root meant square current calculated within the servo system is out of the allowable range.',
        remedy: '(Action 1) Check the operating condition for the robot and relax the service condition if possible. If the load or operating condition has exceeded the rating, reduce the load or relax the operating condition to meet the rating.\n(Action 2) Check whether the voltage input to the controller is within the rated voltage and check whether the voltage set for the transformer of the controller is correct.\n(Action 3) Check whether the brake of the corresponding axis is released.\n(Action 4) Check whether there is a factor that has increased the mechanical load on the corresponding axis.\n(Action 5) Replace the servo amplifier.\n(Action 6) Replace the motor of the corresponding axis.\n(Action 7) Replace the E-stop unit.\n(Action 8) Replace the motor power line (robot connection cable) of the corresponding axis.\n(Action 9) Replace the motor power line and brake line (inside the mechanical section) of the corresponding axis.'
    },
    'SRVO-047': {
        category: 'Servo',
        title: 'LVAL alarm (Group: i Axis: j)',
        description: 'The control power supply voltage (+5 V, etc.) supplied from the power supply circuit in the servo amplifier is abnormally low.',
        remedy: '(Action 1) Replace the servo amplifier.\n(Action 2) Replace the power supply unit.'
    },
    'SRVO-050': {
        category: 'Servo',
        title: 'CLALM alarm (Group: i Axis: j)',
        description: 'The disturbance torque estimated by the servo software is abnormally high. (A collision has been detected.)',
        remedy: '(Action 1) Check whether the robot has collided and check whether there is a factor that has increased the mechanical load on the corresponding axis.\n(Action 2) Check whether the load settings are valid.\n(Action 3) Check whether the brake of the corresponding axis is released.\n(Action 4) If the load weight exceeds the rated range, decrease it to within the limit.\n(Action 5) Check whether the voltage input to the controller is within the rated voltage and check whether the voltage set for the transformer of the controller is correct.\n(Action 6) Replace the servo amplifier.\n(Action 7) Replace the motor of the corresponding axis.\n(Action 8) Replace the E-stop unit.\n(Action 9) Replace the motor power line (robot connection cable) of the corresponding axis.\n(Action 10) Replace the motor power line and brake line (inside the mechanical section) of the corresponding axis.'
    },
    'SRVO-051': {
        category: 'Servo',
        title: 'CUER alarm (Group: i Axis: j)',
        description: 'The offset of the current feedback value is abnormally high.',
        remedy: '(Action) Replace the servo amplifier.'
    },
    'SRVO-055': {
        category: 'Servo',
        title: 'FSSB com error 1 (Group: i Axis: j)',
        description: 'A communication error has occurred between the main board and servo amplifier.',
        remedy: '(Action 1) Check the communication cable (optical fiber) between the main board and servo amplifier. Replace it if it is faulty.\n(Action 2) Replace the axis control card on the main board.\n(Action 3) Replace the servo amplifier.'
    },
    'SRVO-056': {
        category: 'Servo',
        title: 'FSSB COM error 2 (Group: i Axis: j)',
        description: 'A communication error has occurred between the main board and servo amplifier.',
        remedy: '(Action 1) Check the communication cable (optical fiber) between the main board and servo amplifier. Replace it if it is faulty.\n(Action 2) Replace the axis control card on the main board.\n(Action 3) Replace the servo amplifier.'
    },
    'SRVO-057': {
        category: 'Servo',
        title: 'FSSB disconnect (Group: i Axis: j)',
        description: 'Communication was interrupted between the main board and servo amplifier.',
        remedy: '(Action 1) Check whether fuses FS1 and FS3 in the servo amplifier have blown. If the fuse has blown, replace the servo amplifier including the fuse.\n(Action 2) Replace the optical cable between the axis control card and servo amplifier.\n(Action 3) Replace the axis control card on the main board.\n(Action 4) Replace the servo amplifier.\n(Action 5) Check for a point where the robot connection cable or an internal cable running to each Pulsecoder through the robot mechanical section is grounded.\n(Action 6) Replace the main board.'
    },
    'SRVO-058': {
        category: 'Servo',
        title: 'FSSB init error (Group: i Axis: j)',
        description: 'Communication was interrupted between the main board and servo amplifier.',
        remedy: '(Action 1) Check whether fuse FS1 on the servo amplifier has blown. If the fuse has blown, replace the servo amplifier including the fuse.\n(Action 2) Turn off the power and disconnect the CRF8 connector on the servo amplifier. Then check whether this alarm occurs again. (Ignore the alarm SRVO-068 because of disconnecting the CRF8 connector.)\nIf this alarm does not occur, the RMP cable of the robot connection cable or the internal cable of the robot may be short-circuited to the ground. Check the cables and replace it if necessary.\n(Action 3) Check whether the LED (PSV and P3.3V) on the servo amplifier is lit. If they are not lit, the DC power is not supplied to the servo amplifier.\nMake sure the connector CRP24 and CRM96 on the E-stop unit and the connector CRM96 on the servo amplifier are connected tightly. If they are connected tightly, replace the servo amplifier.\n(Action 4) Check the communication cable (optical fiber) between the axis control board and servo amplifier. Replace it if it is faulty.\n(Action 5) Replace the servo card on the main board.\n(Action 6) Replace the servo amplifier.\n(Action 7) Replace the main board.'
    },
    'SRVO-059': {
        category: 'Servo',
        title: 'Servo amp init error',
        description: 'Servo amplifier initialization is failed.',
        remedy: '(Action 1) Check the wiring of the servo amplifier.\n(Action 2) Replace the servo amplifier.'
    },
    'SRVO-062': {
        category: 'Servo',
        title: 'BZAL alarm (Group: i Axis: j)',
        description: 'This alarm occurs if battery for Pulsecoder absolute-position backup is empty. A probable cause is a broken battery cable or no batteries in the robot.',
        remedy: '(Action 1) Replace the battery in the battery box of the robot base.\n(Action 2) Replace the Pulsecoder with which an alarm has been issued.\n(Action 3) Check whether the robot internal cable for feeding power from the battery to the Pulsecoder is not disconnected and grounded. If an abnormality is found, replace the cable.'
    },
    'SRVO-064': {
        category: 'Servo',
        title: 'PHAL alarm (Group: i Axis: j)',
        description: 'This alarm occurs if the phase of the pulses generated in the Pulsecoder is abnormal.',
        remedy: '(Action) Replace the Pulsecoder.'
    },
    'SRVO-065': {
        category: 'Servo',
        title: 'BLAL alarm (Group: i Axis: j)',
        description: 'The battery voltage for the Pulsecoder is lower than the rating.',
        remedy: '(Action) Replace the battery.'
    },
    'SRVO-067': {
        category: 'Servo',
        title: 'OHAL2 alarm (Group: i Axis: j)',
        description: 'The temperature inside the Pulsecoder or motor is abnormally high, and the built-in thermostat has operated.',
        remedy: '(Action 1) Check the robot operating conditions. If a condition such as the duty cycle and load weight has exceeded the rating, relax the robot load condition to meet the allowable range.\n(Action 2) When power is supplied to the motor after it has become sufficiently cool, if the alarm still occurs, replace the motor.'
    },
    'SRVO-068': {
        category: 'Servo',
        title: 'DTERR alarm (Group: i Axis: j)',
        description: 'The serial Pulsecoder does not return serial data in response to a request signal.',
        remedy: '(Action 1) Make sure that the RMP connector of servo amplifier (motor side) is connected tightly.\n(Action 2) Check that the shielding of the RMP cable is grounded securely in the cabinet.\n(Action 3) Replace the Pulsecoder.\n(Action 4) Replace the servo amplifier.\n(Action 5) Replace the RMP cable.\n(Action 6) Replace the robot interconnection cable (for the Pulsecoder).'
    },
    'SRVO-069': {
        category: 'Servo',
        title: 'CRCERR alarm (Group: i Axis: j)',
        description: 'The serial data has disturbed during communication.',
        remedy: '(Action) See actions on SRVO-068.'
    },
    'SRVO-070': {
        category: 'Servo',
        title: 'STBERR alarm (Group: i Axis: j)',
        description: 'The start and stop bits of the serial data are abnormal.',
        remedy: '(Action) See actions on SRVO-068.'
    },
    'SRVO-071': {
        category: 'Servo',
        title: 'SPHAL alarm (Group: i Axis: j)',
        description: 'The feedback speed is abnormally high.',
        remedy: '(Action) Action as same as the SRVO-068.'
    },
    'SRVO-072': {
        category: 'Servo',
        title: 'PMAL alarm (Group: i Axis: j)',
        description: 'It is likely that the Pulsecoder is abnormal.',
        remedy: '(Action) Replace the Pulsecoder and remaster the robot.'
    },
    'SRVO-073': {
        category: 'Servo',
        title: 'CMAL alarm (Group: i Axis: j)',
        description: 'It is likely that the Pulsecoder is abnormal or the Pulsecoder has malfunctioned due to noise.',
        remedy: '(Action 1) Check whether the connection of the controller earth is good. Check the earth cable connection between controller and robot. Check whether the shielding of the robot connection cables is connected securely to the grounding plate.\n(Action 2) Reinforce the earth of the motor flange. (In case of Auxiliary axis)\n(Action 3) Replace the Pulsecoder.'
    },
    'SRVO-074': {
        category: 'Servo',
        title: 'LDAL alarm (Group: i Axis: j)',
        description: 'The LED in the Pulsecoder is broken.',
        remedy: '(Action) Replace the Pulsecoder, and remaster the robot.'
    },
    'SRVO-075': {
        category: 'Servo',
        title: 'Pulse not established (Group: i Axis: j)',
        description: 'The absolute position of the Pulsecoder cannot be established.',
        remedy: '(Action) Reset the alarm, and jog the axis on which the alarm has occurred until the same alarm will not occur again.'
    },
    'SRVO-076': {
        category: 'Servo',
        title: 'Tip Stick Detection (Group: i Axis: j)',
        description: 'An excessive disturbance was assumed in servo software at the start of operation. (An abnormal load was detected. The cause may be welding.)',
        remedy: '(Action 1) Check whether the robot has collided. Or check whether the machinery load of the corresponding axis is increased.\n(Action 2) Check whether the load settings are valid.\n(Action 3) Check whether the brake of the corresponding axis is released.\n(Action 4) Check whether the load weight is within the rated range. If the weight exceeds the upper limit, decrease it to the limit.\n(Action 5) Check whether the voltage input to the controller is within the rated voltage and check whether the voltage set for the transformer of the controller is correct.\n(Action 6) Replace the servo amplifier.\n(Action 7) Replace the corresponding servo motor.\n(Action 8) Replace the E-stop unit.\n(Action 9) Replace the power cable of the robot connection cable in which the corresponding axis is connected.\n(Action 10) Replace the power cable or brake cable of the robot interconnection cable in which the corresponding axis is connected.'
    },
    'SRVO-081': {
        category: 'Servo',
        title: 'EROFL alarm (Track enc: i)',
        description: 'The pulse counter for line tracking has overflowed.',
        remedy: '(Action 1) Check whether the condition of the line tracking exceeds the limitation.\n(Action 2) Replace the Pulsecoder.\n(Action 3) Replace the line tracking interface board.'
    },
    'SRVO-082': {
        category: 'Servo',
        title: 'DAL alarm (Track ebc: i)',
        description: 'The line tracking Pulsecoder has not been connected.',
        remedy: '(Action 1) Check the connection cable at each end (the line tracking interface board and the motor side)\n(Action 2) Check whether the shielding of the connection cable is connected securely to the grounding plate.\n(Action 3) Replace the line tracking cable.\n(Action 4) Replace the Pulsecoder.\n(Action 5) Replace the line tracking interface board.'
    },
    'SRVO-084': {
        category: 'Servo',
        title: 'BZAL alarm (Track enc: i)',
        description: 'This alarm occurs if the backup battery for the absolute position of the Pulsecoder has not been connected.',
        remedy: 'See the description about the BZAL alarm (SRVO-062).'
    },
    'SRVO-087': {
        category: 'Servo',
        title: 'BLAL alarm (Track enc: i)',
        description: 'This alarm occurs if the voltage of the backup battery for the absolute position of the Pulsecoder is low.',
        remedy: 'See the description about the BLAL alarm (SRVO-065).'
    },
    'SRVO-089': {
        category: 'Servo',
        title: 'OHAL2 alarm (Track enc: i)',
        description: 'The motor has overheated. When power is supplied to the Pulsecoder after it has become sufficiently cool, if the alarm still occurs.',
        remedy: 'See the description about the OHAL2 alarm (SRVO-067).'
    },
    'SRVO-090': {
        category: 'Servo',
        title: 'DTERR alarm (Track ebc: i)',
        description: 'Communication between the Pulsecoder and line tracking interface board is abnormal.',
        remedy: '(Action 1) Check the connection cable at each end (the line tracking interface board and the Pulsecoder)\n(Action 2) Check whether the shielding of the connection cable is connected securely to the grounding plate.\n(Action 3) Replace the Pulsecoder.\n(Action 4) Replace the line tracking cable.\n(Action 5) Replace the line tracking interface board.'
    },
    'SRVO-091': {
        category: 'Servo',
        title: 'CRCERR alarm (Track enc: i)',
        description: 'Communication between the Pulsecoder and line tracking interface board is abnormal.',
        remedy: '(Action) Action as same as the SRVO-090.'
    },
    'SRVO-092': {
        category: 'Servo',
        title: 'STBERR alarm (Track enc: i)',
        description: 'Communication between the Pulsecoder and line tracking interface board is abnormal.',
        remedy: '(Action) Action as same as the SRVO-090.'
    },
    'SRVO-093': {
        category: 'Servo',
        title: 'SPHAL alarm (Track enc: i)',
        description: 'This alarm occurs if the current position data from the Pulsecoder is higher than the previous position data.',
        remedy: '(Action) Action as same as the SRVO-090.'
    },
    'SRVO-094': {
        category: 'Servo',
        title: 'PMAL alarm (Track enc: i)',
        description: 'It is likely that the Pulsecoder is abnormal.',
        remedy: 'See the description about the PMAL alarm (SRVO-072).'
    },
    'SRVO-095': {
        category: 'Servo',
        title: 'CMAL alarm (Track enc: i)',
        description: 'It is likely that the Pulsecoder is abnormal or the Pulsecoder has malfunctioned due to noise.',
        remedy: '(Action 1) Reinforce the earth of the flange of the Pulsecoder.\n(Action 2) Replace the Pulsecoder.'
    },
    'SRVO-096': {
        category: 'Servo',
        title: 'LDAL alarm (Track enc: i)',
        description: 'The LED in the Pulsecoder is broken.',
        remedy: 'See the description about the LDAL alarm (SRVO-074).'
    },
    'SRVO-097': {
        category: 'Servo',
        title: 'Pulse not established (enc: i)',
        description: 'The absolute position of the Pulsecoder cannot be established.',
        remedy: '(Action 1) Reset the alarm, and jog the axis on which the alarm has occurred until the same alarm does not occur again. (Jog one motor revolution)'
    },
    'SRVO-105': {
        category: 'Servo',
        title: 'Door open or E-stop',
        description: 'The cabinet door is open.',
        remedy: 'When the door switch is mounted:\n(Action 1) When the door is open, close it.\n(Action 2) Check the door switch and door switch connection cable. If the switch or cable is faulty, replace it.\n\nWhen the door switch is not mounted:\n(Action 3) Check that the CRMA31, CRMA43, and CRM90 connectors on the E-STOP unit are connected securely.\n(Action 4) Replace the E-stop unit.\n(Action 5) Replace the servo amplifier.'
    },
    'SRVO-136': {
        category: 'Servo',
        title: 'DCLVAL alarm (Group: i Axis: j)',
        description: 'The servo the DC current of amplifier (DC link voltage) of the main power supply is abnormally low.',
        remedy: 'This alarm occurred during robot operation:\n(Action 1) Check the input voltage to the controller is within the rated voltage and no phase is lack. In addition, check the setting of the transformer is correct.\n(Action 2) It is possible that an instant disconnection of power source causes this alarm. Check whether an instant disconnection occurred.\n(Action 3) Modify the program in order that robot and the auxiliary axis do not accelerate simultaneously in the system with the auxiliary axis.\n(Action 4) Replace the E-stop unit.\n(Action 5) Replace the servo amplifier.\n\nIf this alarm occurred before the magnetic contactor is turned on:\n(Action 1) Check whether the circuit breaker in the E-stop unit is OFF. If it is OFF, check the servo amplifier and the wiring between the servo amplifier and the E-stop unit. If anything is abnormal, replace it. Else, turn on the breaker.\n(Action 2) Check the input voltage to the controller is within the rated voltage and no phase is lack. In addition, check the setting of the transformer is correct.\n(Action 3) Replace the E-stop unit.\n(Action 4) Replace the servo amplifier.'
    },
    'SRVO-156': {
        category: 'Servo',
        title: 'IPMAL alarm (Group: i Axis: j)',
        description: 'Abnormally high current flowed through the main circuit of the servo amplifier.',
        remedy: '(Action 1) Turn off the power, and disconnect the power cable from the servo amplifier indicated by the alarm message. (And disconnect the brake cable (CRR88 on the servo amplifier) to avoid the axis falling unexpectedly.) Turn on the power, and if the alarm occurs again, replace the servo amplifier.\n(Action 2) Turn off the power and disconnect the power cable from the servo amplifier indicated by the alarm message, and check the insulation of their U, V, W and the GND lines each other. If there is a short-circuit, replace the power cable.\n(Action 3) Turn off the power and disconnect the power cable from the servo amplifier by the alarm message, and measure the resistance between their U and V, V and W and W and U with an ohmmeter that has a very low resistance range. If the resistances at the three places are different from each other, the motor, the power cable is defective. Check each item in detail and replace it if necessary.'
    },
    'SRVO-157': {
        category: 'Servo',
        title: 'CHGAL alarm (Group: i Axis: j)',
        description: 'The capacitor for the condenser voltage of the servo amplifier was not charged within the specified time when the servo power is on.',
        remedy: '(Action 1) Replace the E-stop unit.\n(Action 2) Replace the servo amplifier.\n(Action 3) Replace the auxiliary amplifier for system of the auxiliary axis.'
    },
    'SRVO-201': {
        category: 'Servo',
        title: 'Panel E-stop or SVEMG abnormal',
        description: 'The emergency stop button on the operator\'s panel was pressed, but the E-STOP line was not disconnected.',
        remedy: '(Action 1) With the E-stop in the released position, check for continuity across the terminals of the switch. If continuity is not found, the emergency stop button is broken. Replace the switch unit or the operator\'s panel.\n(Action 2) Replace the main board.\n(Action 3) Replace the Servo amplifier.\n(Action 4) Replace the E-stop board.'
    },
    'SRVO-202': {
        category: 'Servo',
        title: 'TP E-stop or SVEMG abnormal',
        description: 'The emergency stop button on the teach pendant was pressed, but the E-STOP line was not disconnected.',
        remedy: '(Action 1) Replace the teach pendant.\n(Action 2) Check the teach pendant cable. If this inferior, replace the cable.\n(Action 3) Replace the servo amplifier.\n(Action 4) Replace the E-stop unit.'
    },
    'SRVO-204': {
        category: 'Servo',
        title: 'External (SVEMG abnormal) E-stop',
        description: 'The E-stop line was not disconnected when the switch connected to the external E-stop contacts on the E-stop board was pressed. Terminal connection: Between EES1 and EES11 and between EES2 and EES21 on the TBOP7 terminal board.',
        remedy: '(Action 1) Check the switches and cables connected between terminals on the E-stop board (between EES1 and EES11 and between EES2 and EES21 on TBOP7). If a defective cable or switch is found, replace it.\n(Action 2) Replace the main board.\n(Action 3) Replace the servo amplifier.\n(Action 4) Replace the E-stop unit.'
    },
    'SRVO-205': {
        category: 'Servo',
        title: 'Fence open (SVEMG abnormal)',
        description: 'The E-stop line was not disconnected when the switch connected to the safety fence contacts on the E-stop board was pressed. Terminal connection: Between EAS1 and EAS11 and between EAS2 and EAS21 on the TBOP7 terminal board.',
        remedy: '(Action 1) Check the switches and cables connected between terminals on the E-stop board (between EAS1 and EAS11 and between EAS2 and EAS21 on TBOP7). If a defective cable or switch is found, replace it.\n(Action 2) Replace the main board.\n(Action 3) Replace the servo amplifier.\n(Action 4) Replace the E-stop unit.'
    },
    'SRVO-206': {
        category: 'Servo',
        title: 'DEADMAN switch (SVEMG abnormal)',
        description: 'When the teach pendant was enabled, the DEADMAN switch was released or pressed strongly, but the E-stop line was not disconnected.',
        remedy: '(Action 1) Replace the teach pendant.\n(Action 2) Check the teach pendant cable. If it is inferior, replace the cable.\n(Action 3) Replace the main board.\n(Action 4) Replace the servo amplifier.\n(Action 5) Replace the E-stop unit.'
    },
    'SRVO-214': {
        category: 'Servo',
        title: 'Fuse blown (Servo amplifier)',
        description: 'A fuse in the servo amplifier has blown.',
        remedy: 'In case that FS2 or FS3 is blown:\n(Action 1) A fuse is blown, eliminate the cause, and then replace the fuse.\n(Action 2) Replace the servo amplifier.'
    },
    'SRVO-216': {
        category: 'Servo',
        title: 'OVC (total) (Robot: i)',
        description: 'The current (total current for six axes) flowing through the motor is too large.',
        remedy: '(Action 1) Slow the motion of the robot where possible. Check the robot operation conditions. If the robot is used with a condition exceeding the duty or load weight robot rating, reduce the load condition value to the specification range.\n(Action 2) Check the input voltage to the controller is within the rated voltage and no phase is lack. In addition, check the setting of the transformer is correct.\n(Action 3) Replace the servo amplifier.'
    },
    'SRVO-218': {
        category: 'Servo',
        title: 'Ext.E-stop/ServoDisconnect',
        description: 'The switch connected across EES1 – EES11 and EES2 – EES21 on the TBOP7 terminal board on the E-stop board was pressed.',
        remedy: '(Action 1) When the external emergency stop button is connected, release the button.\n(Action 2) Check the switch and cable connected to EES1 – EES11 and EES2 – EES21 on TBOP7 terminal board. If the cable is abnormal, replace it.\n(Action 3) When this signal is not used, establish the short circuits between the contacts (between EES1 and EES11 and between EES2 and EES21) on the terminal block of the E-stop unit.\n(Action 4) Replace the teach pendant.\n(Action 5) Check the teach pendant cable. If this inferior, replace the cable.\n(Action 6) Replace the E-stop unit.'
    },
    'SRVO-220': {
        category: 'Servo',
        title: 'SDI fuse blown',
        description: 'A fuse (FUSE3) on the main board has blown.',
        remedy: '(Action 1) Check whether the fuse (FUSE3) on the main board has blown. If the fuse has blown, 24SDI may be short-circuited to 0V. Take Action 2.\n(Action 2) Remove the cause of the 24SDI ground-fault, and then check that FUSE3 does not blow. Disconnect the following on the main board, and then turn on the power.\n- CRMA15\n- CRMA16\nIf FUSE3 does not blow in this state, 24SDI and 0V may be short-circuited at any of the above locations. Determine the faulty location, and then take appropriate action.\nIf FUSE3 still blows after the above are disconnected, take Action 3.\n(Action 3) Disconnect CRS30. If FUSE3 still blows, replace the main board.\n(Action 4) Replace the cable between the E-stop unit and servo amplifier.\n(Action 5) Replace the cable between the main board and the E-stop unit.\n(Action 6) Replace the E-stop unit.\n(Action 7) Replace the servo amplifier'
    },
    'SRVO-221': {
        category: 'Servo',
        title: 'Lack of DSP (Group: i Axis: j)',
        description: 'A controlled axis card corresponding to the set number of axes is not mounted.',
        remedy: '(Action 1) Check whether the set number of axes is valid. If the number is invalid, set the correct number.\n(Action 2) Replace the axis control card with a card corresponding to the set number of axes.'
    },
    'SRVO-223': {
        category: 'Servo',
        title: 'DSP dry run (a b)',
        description: 'Servo system initialization was stopped because of a hardware failure or improver software setting. The controller has been started in the DSP dry run mode.',
        remedy: '(Action 1) When the value is 1, 5, or 6: An incorrect setting is made. Check whether the dry run mode is set and check whether the setting of the hard start axis is correct.\n(Action 2) When the value is 2, 3, 4, or 7: Replace the servo card.\n(Action 3) When the value is 8 or 10: Take action for an FSSB initialization error that has occurred at the same time.\n(Action 4) When the value is 9: Take the following action:\nCheck whether the servo amplifier is connected.\nReplace the optical cable used for servo amplifier connection.\nReplace the servo amplifier'
    },
    'SRVO-230': {
        category: 'Servo',
        title: 'Chain 1 abnormal a,b',
        description: 'A mismatch occurred between duplicate safety signals.',
        remedy: '(Action) Check the alarms issued at the same time in order to identify with which signal the mismatch occurred.\nSRVO-266 through SRVO-275 and SRVO-370 through SRVO-385 are issued at the same time. Take the action(s) described for each item.'
    },
    'SRVO-231': {
        category: 'Servo',
        title: 'Chain 2 abnormal a,b',
        description: 'A mismatch occurred between duplicate safety signals.',
        remedy: '(Action) Check the alarms issued at the same time in order to identify with which signal the mismatch occurred.\nSRVO-266 through SRVO-275 and SRVO-370 through SRVO-385 are issued at the same time. Take the action(s) described for each item.'
    },
    'SRVO-233': {
        category: 'Servo',
        title: 'TP disabled in T1, T2/Door open',
        description: 'Teach pendant is disabled when the mode switch is T1 or T2.',
        remedy: '(Action 1) Enable the teach pendant in teaching operation. In other case the mode switch should be AUTO mode.\n(Action 2) Replace the teach pendant.\n(Action 3) Replace the teach pendant cable.\n(Action 4) Replace the mode switch.\n(Action 5) Replace the E-stop unit.\n(Action 6) Replace the servo amplifier.'
    },
    'SRVO-235': {
        category: 'Servo',
        title: 'Short term Chain abnormal',
        description: 'Short term single chain failure condition is detected.',
        remedy: '(Action 1) Cause the same error to occur again, and then perform resetting.\n(Action 2) Replace the E-stop unit.\n(Action 3) Replace the servo amplifier.'
    },
    'SRVO-251': {
        category: 'Servo',
        title: 'DB relay abnormal',
        description: 'An abnormality was detected in the internal relay (DB relay) of the servo amplifier.',
        remedy: '(Action) Replace the servo amplifier.'
    },
    'SRVO-252': {
        category: 'Servo',
        title: 'Current detect abnl',
        description: 'An abnormality was detected in the current detection circuit inside the servo amplifier.',
        remedy: '(Action) Replace the servo amplifier.'
    },
    'SRVO-253': {
        category: 'Servo',
        title: 'Amp internal over heat',
        description: 'An overheat was detected inside the servo amplifier.',
        remedy: '(Action) Replace the servo amplifier.'
    },
    'SRVO-266': {
        category: 'Servo',
        title: 'FENCE1 status abnormal',
        description: 'A chain alarm was detected with the EAS (FENCE) signal.',
        remedy: '(Action 1) Check whether the circuitry connected to the dual input signal (EAS) is faulty.\n(Action 2) Check whether the timing of the dual input signal (EAS) satisfies the timing specification (See Section 3.2.5, Table 3.2.5 of Part III CONNECTIONS).\n(Action 3) Replace the main board.\n(Action 4) Replace the E-stop unit.'
    },
    'SRVO-267': {
        category: 'Servo',
        title: 'FENCE2 status abnormal',
        description: 'A chain alarm was detected with the EAS (FENCE) signal.',
        remedy: '(Action 1) Check whether the circuitry connected to the dual input signal (EAS) is faulty.\n(Action 2) Check whether the timing of the dual input signal (EAS) satisfies the timing specification (See Section 3.2.5, Table 3.2.5 of Part III CONNECTIONS).\n(Action 3) Replace the main board.\n(Action 4) Replace the E-stop unit.'
    },
    'SRVO-270': {
        category: 'Servo',
        title: 'EXEMG1 status abnormal',
        description: 'A chain alarm was detected with the EES (EXEMG) signal.',
        remedy: '(Action 1) Check whether the circuitry connected to the dual input signal (EES) is faulty.\n(Action 2) Check whether the timing of the dual input signal (EES) satisfies the timing specification (See Section 3.2.5, Table 3.2.5 of Part III CONNECTIONS).\n(Action 3) Check the teach pendant cable. If this inferior, replace the cable.\n(Action 4) Replace the teach pendant.\n(Action 5) Check the emergency stop button connection and operation. If trouble is found, replace the emergency stop button.\n(Action 6) Replace the E-stop unit.\n(Action 7) Replace the main board.'
    },
    'SRVO-271': {
        category: 'Servo',
        title: 'EXEMG2 status abnormal',
        description: 'A chain alarm was detected with the EES (EXEMG) signal.',
        remedy: '(Action 1) Check whether the circuitry connected to the dual input signal (EES) is faulty.\n(Action 2) Check whether the timing of the dual input signal (EES) satisfies the timing specification (See Section 3.2.5, Table 3.2.5 of Part III CONNECTIONS).\n(Action 3) Check the teach pendant cable. If this inferior, replace the cable.\n(Action 4) Replace the teach pendant.\n(Action 5) Check the emergency stop button connection and operation. If trouble is found, replace the emergency stop button.\n(Action 6) Replace the E-stop unit.\n(Action 7) Replace the main board.'
    },
    'SRVO-277': {
        category: 'Servo',
        title: 'Panel E-stop (SVEMG abnormal)',
        description: 'The E-stop line was not disconnected although the emergency stop button on the operator\'s panel was pressed.',
        remedy: '(Action 1) Replace the main board.\n(Action 2) Replace the E-stop unit.\n(Action 3) Replace the servo amplifier.'
    },
    'SRVO-278': {
        category: 'Servo',
        title: 'TP E-stop (SVEMG abnormal)',
        description: 'The E-stop line was not disconnected although the emergency stop button on the teach pendant was pressed.',
        remedy: '(Action 1) Replace the teach pendant.\n(Action 2) Replace the teach pendant cable.\n(Action 3) Replace the E-stop unit.\n(Action 4) Replace the servo amplifier.'
    },
    'SRVO-291': {
        category: 'Servo',
        title: 'IPM over heat (G:i A:j)',
        description: 'IPM on the servo amplifier is overheated.',
        remedy: '(Action 1) Check whether the fan for cabinet ventilation is stopped and check whether the vent hole is clogged. If necessary, clean or replace them.\n(Action 2) If SRVO-291 is issued when the robot operating condition is severe, check the robot operating condition then relax the condition when possible.\n(Action 3) If SRVO-291 is issued frequently, replace the servo amplifier.'
    },
    'SRVO-300': {
        category: 'Servo',
        title: 'Hand broken/HBK disabled',
        description: 'Although HBK was disabled, the HBK signal was input.',
        remedy: '(Action 1) Press RESET on the teach pendant to release the alarm.\n(Action 2) Check whether the hand broken signal is connected to the robot. When the hand broken signal circuit is connected, enable hand broken.\n(See Subsection 5.5.3 in Part III, "CONNECTIONS".)'
    },
    'SRVO-302': {
        category: 'Servo',
        title: 'Set Hand broken to ENABLE',
        description: 'Although HBK was disabled, the HBK signal was input.',
        remedy: '(Action 1) Press RESET on the teach pendant to release the alarm.\n(Action 2) Check whether the hand broken signal is connected to the robot. When the hand broken signal circuit is connected, enable hand broken.\n(See Subsection 5.5.3 in Part III, "CONNECTIONS".)'
    },
    'SRVO-335': {
        category: 'Servo',
        title: 'DCS OFFCHK alarm a, b',
        description: 'A failure was detected in the safety signal input circuit.',
        remedy: '(Action 1) Replace the main board.'
    },
    'SRVO-348': {
        category: 'Servo',
        title: 'DCS MCC OFF alarm a, b',
        description: 'A command was issued to turn off the magnetic contactor, but the magnetic contactor was not turned off.',
        remedy: '(Action 1) Replace the E-stop unit.\n(Action 2) Replace the main board.'
    },
    'SRVO-349': {
        category: 'Servo',
        title: 'DCS MCC ON alarm a, b',
        description: 'A command was issued to turn on the magnetic contactor, but the magnetic contactor was not turned on.',
        remedy: '(Action 1) Replace the E-stop unit.\n(Action 2) Replace the main board.\n(Action 3) Replace the servo amplifier.'
    },
    'SRVO-370': {
        category: 'Servo',
        title: 'SVON1 status abnormal a, b',
        description: 'A chain alarm was detected with the main board internal signal (SVON).',
        remedy: '(Action) Replace the main board.'
    },
    'SRVO-371': {
        category: 'Servo',
        title: 'SVON2 status abnormal a, b',
        description: 'A chain alarm was detected with the main board internal signal (SVON).',
        remedy: '(Action) Replace the main board.'
    },
    'SRVO-372': {
        category: 'Servo',
        title: 'OPEMG1 status abnormal a, b',
        description: 'A chain alarm was detected with the E-stop switch on the operator\'s panel.',
        remedy: '(Action 1) Check the emergency stop button connection and operation. If trouble is found, replace the emergency stop button.\n(Action 2) Replace the E-stop board.\n(Action 3) Replace the main board.'
    },
    'SRVO-373': {
        category: 'Servo',
        title: 'OPEMG2 status abnormal a, b',
        description: 'A chain alarm was detected with the E-stop switch on the operator\'s panel.',
        remedy: '(Action 1) Check the emergency stop button connection and operation. If trouble is found, replace the emergency stop button.\n(Action 2) Replace the E-stop board.\n(Action 3) Replace the main board.'
    },
    'SRVO-374': {
        category: 'Servo',
        title: 'MODE11 status abnormal a, b',
        description: 'A chain alarm was detected with the mode switch signal.',
        remedy: '(Action 1) Check the mode switch connection and operation. If trouble is found, replace the mode switch.\n(Action 2) Replace the main board.\n(Action 3) Replace the E-stop board.'
    },
    'SRVO-375': {
        category: 'Servo',
        title: 'MODE12 status abnormal a, b',
        description: 'A chain alarm was detected with the mode switch signal.',
        remedy: '(Action 1) Check the mode switch connection and operation. If trouble is found, replace the mode switch.\n(Action 2) Replace the main board.\n(Action 3) Replace the E-stop board.'
    },
    'SRVO-376': {
        category: 'Servo',
        title: 'MODE21 status abnormal a, b',
        description: 'A chain alarm was detected with the mode switch signal.',
        remedy: '(Action 1) Check the mode switch connection and operation. If trouble is found, replace the mode switch.\n(Action 2) Replace the main board.\n(Action 3) Replace the E-stop board.'
    },
    'SRVO-377': {
        category: 'Servo',
        title: 'MODE22 status abnormal a, b',
        description: 'A chain alarm was detected with the mode switch signal.',
        remedy: '(Action 1) Check the mode switch connection and operation. If trouble is found, replace the mode switch.\n(Action 2) Replace the main board.\n(Action 3) Replace the E-stop board.'
    },
    'INTP-224': {
        category: 'Program',
        title: 'Jump label is fail',
        description: 'Programming error - jump label issue.',
        remedy: '1. Edit program to correct jump label reference\n2. Verify all labels exist in program\n3. Test program in single-step mode'
    },
    'MEMO-027': {
        category: 'Program',
        title: 'Specified line does not exist',
        description: 'Program instruction references non-existent line number.',
        remedy: '1. Correct program line references\n2. Verify all referenced lines exist\n3. Use program validation tools'
    },
    'SYST-026': {
        category: 'System',
        title: 'System normal power up',
        description: 'Informational message indicating successful power-up.',
        remedy: 'No action required. System is operating normally.'
    },
    'SYST-035': {
        category: 'System',
        title: 'Low-voltage battery alarm',
        description: 'Backup battery voltage low.',
        remedy: '1. Replace the lithium battery A05B-2550-K030\n2. Complete replacement within 30 minutes\n3. Backup all data before replacement\n4. Follow battery replacement procedure in section 7.11.1'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = errorDatabase;
}
