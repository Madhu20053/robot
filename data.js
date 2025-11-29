// Error Code Database - R30iA Mate Controller
// Comprehensive error codes with detailed descriptions and remedies
// Last Updated: 2025 - Enhanced version with detailed troubleshooting steps

const errorDatabase = {
    // SRVO Series - Servo Errors
    'SRVO-001': {
        category: 'Critical',
        title: 'Operator Panel Emergency Stop',
        description: 'The red emergency stop button on the operator control panel has been pressed, halting all robot motion for safety.',
        remedy: '1. Locate and release the pressed emergency stop button on the operator panel\n2. Check wiring continuity between emergency stop button and E-stop board (CRT23)\n3. Test emergency stop button switch functionality with multimeter\n4. Replace E-stop board if wiring tests OK but error persists\n5. Replace main board as last resort (BACKUP DATA FIRST)'
    },
    'SRVO-002': {
        category: 'Critical',
        title: 'Teach Pendant Emergency Stop',
        description: 'The emergency stop button on the teach pendant was activated, stopping robot operation immediately.',
        remedy: '1. Locate and rotate the red emergency stop button on teach pendant to release it\n2. Cycle power to controller if error doesn\'t clear\n3. Replace teach pendant unit if error persists after release\n4. Document incident for safety review'
    },
    'SRVO-003': {
        category: 'Critical',
        title: 'DEADMAN Switch Not Properly Engaged',
        description: 'The safety Deadman switch on the teach pendant is either not pressed or pressed too hard. This 3-position switch must be held at the intermediate position for robot operation.',
        remedy: '1. Gently press the Deadman switch to its middle position (not released, not fully pressed)\n2. Verify teach pendant enable switch is in correct position\n3. Check mode switch is in T1/T2 (teaching) mode, not AUTO\n4. Replace teach pendant if switch feels abnormal\n5. Replace E-stop board if issue continues'
    },
    'SRVO-004': {
        category: 'Critical',
        title: 'Safety Fence/Boundary Breach',
        description: 'Safety fence gate is open or safety boundary sensor triggered while system is in AUTO operation mode.',
        remedy: '1. Close all safety fence gates completely\n2. Verify safety gate interlocks are functioning properly\n3. Check wiring at EAS1-EAS11 and EAS2-EAS21 terminals on E-stop board\n4. If safety fence not used, install jumpers between EAS1-EAS11 and EAS2-EAS21\n5. Replace E-stop board if error persists with closed gates\n⚠️ CRITICAL: Never bypass safety fence signals without implementing alternative safety measures.'
    },
    'SRVO-005': {
        category: 'Error',
        title: 'Robot Overtravel Limit Exceeded',
        description: 'Robot arm has moved beyond its physical limit switches, triggering hardware safety stops.',
        remedy: '1. Select [System OT release] from overtravel release screen\n2. Hold SHIFT + press ALARM RESET to clear alarm\n3. While holding SHIFT, carefully jog robot back within safe limits\n4. Replace faulty limit switches if damaged\n5. Check FS2 fuse on servo amplifier\n6. Inspect robot base connector RMP for bent pins or damage'
    },
    'SRVO-006': {
        category: 'Error',
        title: 'Hand Broken / Tool Safety Joint Triggered',
        description: 'The safety joint between robot wrist and end effector has disengaged, indicating a collision or excessive force.',
        remedy: '1. Hold SHIFT + press ALARM RESET to clear alarm\n2. Carefully jog tool away from obstruction\n3. Reset or replace the mechanical safety joint\n4. Check safety joint wiring for continuity\n5. Replace servo amplifier if wiring tests OK\n6. Inspect robot connection cable for ground faults'
    },
    'SRVO-009': {
        category: 'Error',
        title: 'Pneumatic Pressure Abnormal',
        description: 'Air pressure to pneumatic tools or grippers has dropped below required operating level.',
        remedy: '1. Check main air supply pressure gauge\n2. Verify air lines are connected and not leaking\n3. Inspect pneumatic pressure sensor on end effector\n4. Check robot connection cable for ground faults\n5. Replace servo amplifier if pressure is normal but error persists\n6. Replace internal robot pneumatic cables'
    },
    'SRVO-014': {
        category: 'Error',
        title: 'Controller Fan Motor Failure',
        description: 'Cooling fan in controller backplane unit has stopped or is malfunctioning.',
        remedy: '1. Listen for abnormal fan noises or silence\n2. Replace the faulty fan motor immediately\n3. Replace fan control board if multiple fans fail\n4. Replace main board if issue persists after fan replacement\n5. Clean air filters and vents during maintenance'
    },
    'SRVO-015': {
        category: 'Error',
        title: 'System Overheating',
        description: 'Internal controller temperature has exceeded safe operating limits (45°C+).',
        remedy: '1. Measure ambient temperature around controller\n2. Improve ventilation or add external cooling if ambient > 45°C\n3. Verify all cooling fans are operating\n4. Clean heat exchanger fins and air filters\n5. Replace main board if temperature sensors are faulty\n6. Allow system to cool before restarting'
    },
    'SRVO-018': {
        category: 'Error',
        title: 'Brake System Abnormal',
        description: 'Excessive current detected in motor brake circuits, indicating potential brake failure.',
        remedy: '1. Check brake cables at CRR88 connector on servo amplifier\n2. Test brake coils for short circuits or ground faults\n3. Replace servo amplifier if electrical tests OK\n4. Ensure brake release unit switch is OFF during normal operation\n5. Replace faulty brake units as needed'
    },
    'SRVO-021': {
        category: 'Error',
        title: 'Servo Ready Signal Lost (SRDY Off)',
        description: 'Host ready signal active but servo amplifier not responding with servo ready signal.',
        remedy: '1. Check connectors CRMA43, CRMA31 on E-stop board and SRMA43 on servo amplifier\n2. Check for momentary power interruptions\n3. Replace E-stop unit\n4. Replace servo amplifier\n5. Power cycle entire system'
    },
    'SRVO-022': {
        category: 'Error',
        title: 'Servo Ready Signal Active When Not Expected',
        description: 'Servo ready signal active before host ready signal was sent.',
        remedy: '1. Replace servo amplifier (internal circuit fault)\n2. Power cycle to verify error clears\n3. Document occurrence for pattern analysis'
    },
    'SRVO-023': {
        category: 'Error',
        title: 'Excessive Position Error at Stop',
        description: 'Robot position differs significantly from commanded position when stationary.',
        remedy: '1. Listen for brake engagement (should hear click)\n2. If no brake sound: check brake wiring continuity\n3. If brake working: check for mechanical obstructions\n4. Verify all motor power connectors (CNJ1A-CNJ6) are secure\n5. Check if load exceeds robot capacity\n6. Measure 3-phase input voltage at CRR38A (should be 200-230VAC)\n7. Replace servo amplifier or motor as needed'
    },
    'SRVO-024': {
        category: 'Error',
        title: 'Excessive Position Error During Motion',
        description: 'Robot cannot follow commanded path accurately during movement.',
        remedy: '1. Perform same troubleshooting as SRVO-023\n2. Reduce programmed speed and acceleration\n3. Verify payload parameters are correctly set\n4. Check for mechanical binding or wear'
    },
    'SRVO-027': {
        category: 'Error',
        title: 'Robot Not Mastered',
        description: 'Attempting to operate robot without proper axis position mastering.',
        remedy: '1. Perform robot mastering procedure\n2. Verify mastering data is valid in system parameters\n3. Use fixture position mastering for precision applications\n4. Check mastering reference points are accessible'
    },
    'SRVO-030': {
        category: 'Status',
        title: 'Brake Hold During Temporary Stop',
        description: 'Brakes engaged during programmed pauses (feature, not error).',
        remedy: '1. Disable [Servo-off in temporary halt] in general settings if not required\n2. Adjust temporary halt parameters as needed\n3. Understand this is a safety feature, not a malfunction'
    },
    'SRVO-033': {
        category: 'Error',
        title: 'Robot Not Calibrated',
        description: 'Attempting quick mastering without proper robot calibration.',
        remedy: '1. Perform full robot calibration procedure\n2. Power cycle controller to initiate auto-calibration\n3. Use positioning function to set reference points'
    },
    'SRVO-034': {
        category: 'Error',
        title: 'Reference Position Not Set',
        description: 'Quick mastering attempted without reference position data.',
        remedy: '1. Set up quick mastering reference position\n2. Use positioning menu to establish reference points\n3. Verify mastering procedure sequence'
    },
    'SRVO-036': {
        category: 'Error',
        title: 'In-position Timeout',
        description: 'Robot took too long to reach target position within tolerance.',
        remedy: '1. Perform same troubleshooting as SRVO-023\n2. Adjust SPARAM_GROUP.$INPOS_TIME parameter if needed\n3. Increase position tolerance (SPARAM_GROUP.$STOPTOL) if appropriate'
    },
    'SRVO-037': {
        category: 'Critical',
        title: 'External Immediate Stop Signal Active',
        description: '*IMSTP signal from peripheral equipment requesting emergency stop.',
        remedy: '1. Identify which external device is sending stop signal\n2. Reset emergency stop on peripheral equipment\n3. Check wiring of peripheral device interface\n4. Verify *IMSTP signal line is active high'
    },
    'SRVO-038': {
        category: 'Error',
        title: 'Pulsecoder Position Mismatch',
        description: 'Position data inconsistency between power cycles, often after battery replacement or encoder maintenance.',
        remedy: '1. Verify brake settings match actual hardware configuration\n2. Remaster robot if moved during power-off\n3. Check brake functionality if axis drifted\n4. Replace Pulsecoder and remaster if damaged\n5. Check battery backup system'
    },
    'SRVO-042': {
        category: 'Error',
        title: 'Magnetic Contactor Stuck Closed',
        description: 'Main power contactor failed to open when commanded off.',
        remedy: '1. Replace E-stop unit (contains magnetic contactor)\n2. Replace servo amplifier\n3. Check for welded contactor contacts\n4. Verify contactor control circuitry'
    },
    'SRVO-043': {
        category: 'Error',
        title: 'Regenerative Energy Overload',
        description: 'Excessive regenerative energy from deceleration/descending cannot be dissipated.',
        remedy: '1. Reduce operating speed and acceleration rates\n2. Space out rapid motion sequences\n3. Check FS3 fuse in servo amplifier\n4. Verify cooling fans are working on regenerative resistor\n5. Measure input voltage phases (should be balanced 200-230VAC)\n6. Check CRR63A/B connectors and regenerative resistor continuity\n7. Replace servo amplifier or regenerative resistor'
    },
    'SRVO-044': {
        category: 'Error',
        title: 'High DC Link Voltage',
        description: 'Main circuit DC voltage exceeds safe maximum.',
        remedy: '1. Measure 3-phase input voltage (should be < 230VAC)\n2. Reduce mechanical load if overweight\n3. Check CRR63A/B connectors and regenerative resistor\n4. Replace servo amplifier\n5. Install voltage stabilizer if line voltage fluctuates'
    },
    'SRVO-045': {
        category: 'Critical',
        title: 'High Current Alarm',
        description: 'Dangerous overcurrent detected in servo power stage.',
        remedy: '1. Disconnect motor power cables from alarmed amplifier\n2. Disconnect brake cable (CRR88) to prevent axis drop\n3. Test motor and cables for short circuits to ground\n4. Measure phase-to-phase resistances (should be equal)\n5. Replace servo amplifier if electrical tests OK\n6. Replace motor or cables if faults found'
    },
    'SRVO-046': {
        category: 'Error',
        title: 'Overcurrent Protection',
        description: 'Continuous current exceeds motor thermal capacity.',
        remedy: '1. Reduce duty cycle and operating speeds\n2. Verify payload weight within specifications\n3. Check input voltage and transformer settings\n4. Verify brakes are releasing properly\n5. Replace servo amplifier\n6. Replace overheated motor\n7. Replace motor power cables'
    },
    'SRVO-047': {
        category: 'Error',
        title: 'Low Control Voltage',
        description: 'Servo amplifier internal power supply voltage too low.',
        remedy: '1. Replace servo amplifier\n2. Replace power supply unit\n3. Check main AC input voltage'
    },
    'SRVO-050': {
        category: 'Error',
        title: 'Collision Detection',
        description: 'Software detected abnormal resistance (collision or obstruction).',
        remedy: '1. Check for physical collisions or obstructions\n2. Verify load inertia and weight parameters\n3. Check brake operation\n4. Reduce payload if overweight\n5. Check input voltage stability\n6. Replace servo components as needed'
    },
    'SRVO-051': {
        category: 'Error',
        title: 'Current Feedback Error',
        description: 'Current sensing circuit offset out of specification.',
        remedy: '1. Replace servo amplifier\n2. Power cycle to verify error clears\n3. Document for potential pattern analysis'
    },
    'SRVO-055': {
        category: 'Error',
        title: 'FSSB Communication Error',
        description: 'Fiber optic communication failure between main board and servo.',
        remedy: '1. Check fiber optic cables for damage or disconnection\n2. Replace axis control card on main board\n3. Replace servo amplifier\n4. Clean fiber optic connectors if dirty\n5. Verify cable routing away from noise sources'
    },
    'SRVO-056': {
        category: 'Error',
        title: 'FSSB Communication Error',
        description: 'Fiber optic communication failure between main board and servo.',
        remedy: '1. Check fiber optic cables for damage or disconnection\n2. Replace axis control card on main board\n3. Replace servo amplifier\n4. Clean fiber optic connectors if dirty\n5. Verify cable routing away from noise sources'
    },
    'SRVO-057': {
        category: 'Critical',
        title: 'FSSB Communication Disconnected',
        description: 'Complete loss of communication with servo amplifier.',
        remedy: '1. Check FS1 and FS3 fuses in servo amplifier\n2. Replace fiber optic cables\n3. Replace axis control card\n4. Replace servo amplifier\n5. Check robot cables for ground faults\n6. Replace main board as last resort'
    },
    'SRVO-058': {
        category: 'Error',
        title: 'FSSB Initialization Error',
        description: 'Servo communication failed to initialize at power-up.',
        remedy: '1. Check FS1 fuse in servo amplifier\n2. Disconnect CRF8 connector to isolate robot side\n3. Check PSV and P3.3V LEDs on servo amplifier\n4. Verify CRP24, CRM96 connectors are secure\n5. Replace fiber optic cables\n6. Replace servo amplifier\n7. Replace main board if all else fails'
    },
    'SRVO-059': {
        category: 'Error',
        title: 'Servo Amplifier Initialization Failed',
        description: 'Servo amplifier internal startup process failed.',
        remedy: '1. Check all servo amplifier wiring\n2. Replace servo amplifier\n3. Power cycle entire system\n4. Check for consistent reoccurrence'
    },
    'SRVO-062': {
        category: 'Critical',
        title: 'Absolute Position Battery Dead',
        description: 'Pulsecoder backup battery depleted, position data lost.',
        remedy: '⚠️ CRITICAL ACTIONS: 1. REPLACE BATTERY IMMEDIATELY in robot base\n2. Replace Pulsecoder if battery replacement doesn\'t help\n3. Check battery cable continuity\n4. Set $MCR.$SPC_RESET = TRUE after repair\n5. REMASTER ROBOT REQUIRED after data loss\n6. Backup all programs before battery failure'
    },
    'SRVO-064': {
        category: 'Error',
        title: 'Pulsecoder Phase Error',
        description: 'Encoder pulse signal quality degraded or lost.',
        remedy: '1. Replace Pulsecoder encoder\n2. Check encoder cable routing\n3. Verify encoder mounting secure\n4. May accompany other encoder errors'
    },
    'SRVO-065': {
        category: 'Alert',
        title: 'Absolute Position Battery Low',
        description: 'Pulsecoder backup battery voltage below warning level.',
        remedy: '⚠️ URGENT ACTIONS: 1. REPLACE BATTERY WITHIN 1-2 WEEKS\n2. Backup all programs and parameters immediately\n3. Schedule maintenance for battery replacement\n4. Delay will cause SRVO-062 and require remastering'
    },
    'SRVO-067': {
        category: 'Error',
        title: 'Motor Overheat',
        description: 'Motor temperature exceeded safe limits, thermal protection activated.',
        remedy: '1. Allow motor to cool completely\n2. Reduce duty cycle and operating speeds\n3. Verify payload within specifications\n4. Replace motor if error persists when cool\n5. Improve motor cooling if possible'
    },
    'SRVO-068': {
        category: 'Error',
        title: 'Encoder Communication Error',
        description: 'Serial communication failure with Pulsecoder.',
        remedy: '1. Secure RMP connector at robot base\n2. Verify shield grounding in controller\n3. Replace Pulsecoder encoder\n4. Replace servo amplifier\n5. Replace RMP communication cable\n6. Replace robot internal encoder cables'
    },
    'SRVO-069': {
        category: 'Error',
        title: 'Encoder Communication Error',
        description: 'Serial communication failure with Pulsecoder.',
        remedy: '1. Secure RMP connector at robot base\n2. Verify shield grounding in controller\n3. Replace Pulsecoder encoder\n4. Replace servo amplifier\n5. Replace RMP communication cable\n6. Replace robot internal encoder cables'
    },
    'SRVO-070': {
        category: 'Error',
        title: 'Encoder Communication Error',
        description: 'Serial communication failure with Pulsecoder.',
        remedy: '1. Secure RMP connector at robot base\n2. Verify shield grounding in controller\n3. Replace Pulsecoder encoder\n4. Replace servo amplifier\n5. Replace RMP communication cable\n6. Replace robot internal encoder cables'
    },
    'SRVO-071': {
        category: 'Error',
        title: 'High Speed Feedback',
        description: 'Encoder reporting impossibly high rotation speed.',
        remedy: '1. Perform same troubleshooting as SRVO-068\n2. Usually accompanies other encoder errors\n3. Check for electrical noise on encoder lines'
    },
    'SRVO-072': {
        category: 'Error',
        title: 'Pulsecoder Hardware Failure',
        description: 'Encoder component failure detected.',
        remedy: '1. REPLACE PULSECODER ENCODER\n2. REMASTER ROBOT AFTER REPLACEMENT\n3. Improve encoder cable grounding\n4. Reinforce motor flange grounding (auxiliary axes)'
    },
    'SRVO-073': {
        category: 'Error',
        title: 'Pulsecoder Hardware Failure',
        description: 'Encoder component failure detected.',
        remedy: '1. REPLACE PULSECODER ENCODER\n2. REMASTER ROBOT AFTER REPLACEMENT\n3. Improve encoder cable grounding\n4. Reinforce motor flange grounding (auxiliary axes)'
    },
    'SRVO-074': {
        category: 'Error',
        title: 'Pulsecoder Hardware Failure',
        description: 'Encoder component failure detected.',
        remedy: '1. REPLACE PULSECODER ENCODER\n2. REMASTER ROBOT AFTER REPLACEMENT\n3. Improve encoder cable grounding\n4. Reinforce motor flange grounding (auxiliary axes)'
    },
    'SRVO-075': {
        category: 'Error',
        title: 'Absolute Position Not Established',
        description: 'Encoder cannot determine absolute position after power-up.',
        remedy: '1. Reset alarm and jog affected axis\n2. Rotate axis at least one full motor revolution\n3. Repeat until position establishes\n4. Replace Pulsecoder if persistent'
    },
    'SRVO-076': {
        category: 'Error',
        title: 'Tip Stick Detection',
        description: 'Abnormal resistance detected at operation start (welding stick or obstruction).',
        remedy: '1. Check for welding stick buildup or obstructions\n2. Verify load parameters are accurate\n3. Check brake operation\n4. Reduce payload if overweight\n5. Check input voltage stability\n6. Replace servo components as needed'
    },
    'SRVO-105': {
        category: 'Alert',
        title: 'Controller Door Open',
        description: 'Cabinet access door opened during operation.',
        remedy: '1. Close and secure controller door\n2. Check door interlock switch operation\n3. Verify CRMA31, CRMA43, CRM90 connectors\n4. Replace E-stop unit\n5. Replace servo amplifier'
    },
    'SRVO-136': {
        category: 'Error',
        title: 'Low DC Link Voltage',
        description: 'Main circuit DC voltage below minimum operating level.',
        remedy: '1. Check 3-phase input voltage and phase balance\n2. Check for momentary power loss\n3. Resequence robot and auxiliary axis accelerations\n4. Replace E-stop unit\n5. Replace servo amplifier'
    },
    'SRVO-156': {
        category: 'Error',
        title: 'IPM Overcurrent',
        description: 'Intelligent Power Module detected dangerous overcurrent.',
        remedy: '1. Isolate and test motor/power cables for shorts\n2. Measure motor winding resistances\n3. Replace servo amplifier\n4. Replace faulty motor or cables'
    },
    'SRVO-157': {
        category: 'Error',
        title: 'Capacitor Charge Timeout',
        description: 'DC link capacitors failed to charge within time limit.',
        remedy: '1. Replace E-stop unit\n2. Replace servo amplifier\n3. Replace auxiliary axis amplifier if present\n4. Check precharge circuit components'
    },
    'SRVO-201': {
        category: 'Critical',
        title: 'Safety Circuit Malfunction',
        description: 'Emergency stop circuit failure.',
        remedy: '1. Check specific emergency stop button/switches\n2. Test safety circuit wiring continuity\n3. Replace main board (BACKUP DATA FIRST)\n4. Replace E-stop board/unit\n5. Check mode switch and emergency buttons'
    },
    'SRVO-214': {
        category: 'Error',
        title: 'Servo Amplifier Fuse Blown',
        description: 'Protective fuses in servo amplifier opened.',
        remedy: '1. IDENTIFY AND CORRECT CAUSE before replacement\n2. FS1: Control power - replace servo amplifier\n3. FS2: 24V outputs - check end effector for shorts\n4. FS3: Regenerative circuit - check resistor and auxiliary axis\n5. REPLACE SERVO AMPLIFIER after fixing root cause'
    },
    'SRVO-216': {
        category: 'Error',
        title: 'Total Overcurrent',
        description: 'Combined current for all six axes exceeds system capacity.',
        remedy: '1. Reduce overall robot motion speed\n2. Verify total payload within specifications\n3. Check input voltage quality\n4. Replace servo amplifier'
    },
    'SRVO-218': {
        category: 'Critical',
        title: 'External Emergency Stop Active',
        description: 'External emergency stop circuit activated.',
        remedy: '1. Locate and reset external emergency stop buttons\n2. Check external E-stop wiring at EES terminals\n3. Install jumpers if external E-stop not used\n4. Replace E-stop unit'
    },
    'SRVO-220': {
        category: 'Error',
        title: 'Main Board Fuse Blown',
        description: 'Fuse FUSE3 on main board opened.',
        remedy: '1. Check for 24SDI to 0V short circuit\n2. Disconnect CRMA15, CRMA16 to isolate\n3. Disconnect CRS30 if needed\n4. Replace main board if short persists\n5. Replace related cables and units'
    },
    'SRVO-221': {
        category: 'Error',
        title: 'Missing Axis Control Card',
        description: 'No axis control card installed for configured number of axes.',
        remedy: '1. Verify axis count setting matches hardware\n2. Install correct axis control card\n3. Reconfigure system parameters'
    },
    'SRVO-223': {
        category: 'Error',
        title: 'DSP Dry Run Mode',
        description: 'Servo system initialized in test mode due to hardware/software issue.',
        remedy: '1. Check dry run mode and hard start axis settings\n2. Replace servo control card\n3. Check servo amplifier connections\n4. Replace fiber optic cables'
    },
    'SRVO-230': {
        category: 'Critical',
        title: 'Safety Chain Mismatch',
        description: 'Dual redundant safety signals show different states.',
        remedy: '⚠️ CRITICAL ACTIONS: 1. IDENTIFY SPECIFIC FAILING SAFETY CIRCUIT\n2. REPAIR FAULTY CIRCUIT COMPLETELY\n3. DO NOT RESET UNTIL REPAIRED\n4. Use chain error reset procedure after repair\n5. Document safety system maintenance'
    },
    'SRVO-231': {
        category: 'Critical',
        title: 'Safety Chain Mismatch',
        description: 'Dual redundant safety signals show different states.',
        remedy: '⚠️ CRITICAL ACTIONS: 1. IDENTIFY SPECIFIC FAILING SAFETY CIRCUIT\n2. REPAIR FAULTY CIRCUIT COMPLETELY\n3. DO NOT RESET UNTIL REPAIRED\n4. Use chain error reset procedure after repair\n5. Document safety system maintenance'
    },
    'SRVO-233': {
        category: 'Alert',
        title: 'Teach Pendant Mode Conflict',
        description: 'Teach pendant disabled due to mode switch position.',
        remedy: '1. Enable teach pendant for teaching operations\n2. Set mode switch to T1/T2 for pendant use\n3. Replace teach pendant/cable if faulty\n4. Replace mode switch or E-stop unit'
    },
    'SRVO-235': {
        category: 'Alert',
        title: 'Brief Safety Chain Anomaly',
        description: 'Momentary discrepancy in dual safety signals detected.',
        remedy: '1. Reproduce error to identify pattern\n2. Replace E-stop unit\n3. Replace servo amplifier\n4. Monitor for recurring issues'
    },
    'SRVO-251': {
        category: 'Error',
        title: 'Servo Amplifier Internal Fault',
        description: 'Internal component failure in servo amplifier.',
        remedy: '1. REPLACE SERVO AMPLIFIER\n2. Power cycle to confirm error\n3. Document failure for analysis'
    },
    'SRVO-252': {
        category: 'Error',
        title: 'Servo Amplifier Internal Fault',
        description: 'Internal component failure in servo amplifier.',
        remedy: '1. REPLACE SERVO AMPLIFIER\n2. Power cycle to confirm error\n3. Document failure for analysis'
    },
    'SRVO-253': {
        category: 'Error',
        title: 'Servo Amplifier Internal Fault',
        description: 'Internal component failure in servo amplifier.',
        remedy: '1. REPLACE SERVO AMPLIFIER\n2. Power cycle to confirm error\n3. Document failure for analysis'
    },
    // Line Tracking Encoder Errors (SRVO-081 to SRVO-097)
    'SRVO-081': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-082': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-083': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-084': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-085': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-086': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-087': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-088': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-089': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-090': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-091': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-092': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-093': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-094': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-095': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-096': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },
    'SRVO-097': {
        category: 'Error',
        title: 'Line Tracking Encoder Error',
        description: 'Various errors with conveyor tracking encoders.',
        remedy: '1. Check tracking encoder connections\n2. Verify cable shielding and grounding\n3. Replace tracking Pulsecoder\n4. Replace tracking interface board\n5. Replace tracking cables\n6. Improve encoder grounding'
    },

    // Safety Circuit Malfunctions (SRVO-201 to SRVO-206)
    'SRVO-202': {
        category: 'Critical',
        title: 'Safety Circuit Malfunction',
        description: 'Emergency stop circuit failure.',
        remedy: '1. Check specific emergency stop button/switches\n2. Test safety circuit wiring continuity\n3. Replace main board (BACKUP DATA FIRST)\n4. Replace E-stop board/unit\n5. Check mode switch and emergency buttons'
    },
    'SRVO-203': {
        category: 'Critical',
        title: 'Safety Circuit Malfunction',
        description: 'Emergency stop circuit failure.',
        remedy: '1. Check specific emergency stop button/switches\n2. Test safety circuit wiring continuity\n3. Replace main board (BACKUP DATA FIRST)\n4. Replace E-stop board/unit\n5. Check mode switch and emergency buttons'
    },
    'SRVO-204': {
        category: 'Critical',
        title: 'Safety Circuit Malfunction',
        description: 'Emergency stop circuit failure.',
        remedy: '1. Check specific emergency stop button/switches\n2. Test safety circuit wiring continuity\n3. Replace main board (BACKUP DATA FIRST)\n4. Replace E-stop board/unit\n5. Check mode switch and emergency buttons'
    },
    'SRVO-205': {
        category: 'Critical',
        title: 'Safety Circuit Malfunction',
        description: 'Emergency stop circuit failure.',
        remedy: '1. Check specific emergency stop button/switches\n2. Test safety circuit wiring continuity\n3. Replace main board (BACKUP DATA FIRST)\n4. Replace E-stop board/unit\n5. Check mode switch and emergency buttons'
    },
    'SRVO-206': {
        category: 'Critical',
        title: 'Safety Circuit Malfunction',
        description: 'Emergency stop circuit failure.',
        remedy: '1. Check specific emergency stop button/switches\n2. Test safety circuit wiring continuity\n3. Replace main board (BACKUP DATA FIRST)\n4. Replace E-stop board/unit\n5. Check mode switch and emergency buttons'
    },

    // Safety Signal Chain Errors (SRVO-266 to SRVO-277)
    'SRVO-266': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-267': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-268': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-269': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-270': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-271': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-272': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-273': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-274': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-275': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-276': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },
    'SRVO-277': {
        category: 'Critical',
        title: 'Safety Signal Chain Error',
        description: 'Dual-channel safety signal discrepancy.',
        remedy: '1. Check specific safety circuit wiring\n2. Verify dual signal timing meets specifications\n3. Replace main board\n4. Replace E-stop unit\n5. COMPLETE REPAIR BEFORE RESET'
    },

    'SRVO-291': {
        category: 'Error',
        title: 'IPM Overheat',
        description: 'Power module temperature exceeded limits.',
        remedy: '1. Check cabinet ventilation and fan operation\n2. Clean air filters and heat sinks\n3. Reduce operating intensity if possible\n4. Replace servo amplifier if recurring'
    },
    'SRVO-300': {
        category: 'Status',
        title: 'Hand Broken Signal Configuration',
        description: 'Hand broken signal present but disabled in software.',
        remedy: '1. Press RESET on teach pendant\n2. Enable hand broken signal in software if hardware exists\n3. Refer to manual section 5.5.3 for configuration'
    },
    'SRVO-302': {
        category: 'Status',
        title: 'Hand Broken Signal Configuration',
        description: 'Hand broken signal present but disabled in software.',
        remedy: '1. Press RESET on teach pendant\n2. Enable hand broken signal in software if hardware exists\n3. Refer to manual section 5.5.3 for configuration'
    },

    // Safety Monitoring Faults (SRVO-335, 348, 349)
    'SRVO-335': {
        category: 'Critical',
        title: 'Safety Monitoring Fault',
        description: 'Safety circuit monitoring failure.',
        remedy: '1. Replace main board\n2. Replace E-stop unit\n3. Replace servo amplifier as indicated\n4. Backup data before board replacement'
    },
    'SRVO-348': {
        category: 'Critical',
        title: 'Safety Monitoring Fault',
        description: 'Safety circuit monitoring failure.',
        remedy: '1. Replace main board\n2. Replace E-stop unit\n3. Replace servo amplifier as indicated\n4. Backup data before board replacement'
    },
    'SRVO-349': {
        category: 'Critical',
        title: 'Safety Monitoring Fault',
        description: 'Safety circuit monitoring failure.',
        remedy: '1. Replace main board\n2. Replace E-stop unit\n3. Replace servo amplifier as indicated\n4. Backup data before board replacement'
    },

    // Internal Safety Signal Errors (SRVO-370 to SRVO-377)
    'SRVO-370': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },
    'SRVO-371': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },
    'SRVO-372': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },
    'SRVO-373': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },
    'SRVO-374': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },
    'SRVO-375': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },
    'SRVO-376': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },
    'SRVO-377': {
        category: 'Critical',
        title: 'Internal Safety Signal Error',
        description: 'Main board internal safety circuit discrepancy.',
        remedy: '1. REPLACE MAIN BOARD (BACKUP DATA FIRST)\n2. Replace E-stop board as indicated\n3. Check mode switch and emergency buttons\n4. COMPLETE REPAIRS BEFORE CHAIN RESET'
    },

    // Other Error Series
    'INTP-224': {
        category: 'Error',
        title: 'Program Jump Label Error',
        description: 'Robot program contains invalid jump destination label.',
        remedy: '1. Edit program to correct jump label reference\n2. Verify all labels exist in program\n3. Test program in single-step mode'
    },
    'MEMO-027': {
        category: 'Error',
        title: 'Invalid Line Reference',
        description: 'Program instruction references non-existent line number.',
        remedy: '1. Correct program line references\n2. Verify all referenced lines exist\n3. Use program validation tools'
    },
    'SYST-026': {
        category: 'Status',
        title: 'Normal System Startup',
        description: 'Informational message indicating successful power-up.',
        remedy: 'No action required - normal operation. Confirm system ready for operation.'
    },
    'SYST-035': {
        category: 'Alert',
        title: 'Backup Battery Low',
        description: 'Main board backup battery voltage below warning level.',
        remedy: '⚠️ URGENT ACTIONS: 1. REPLACE LITHIUM BATTERY A05B-2550-K030\n2. Complete replacement within 30 minutes\n3. BACKUP ALL DATA BEFORE REPLACEMENT\n4. Follow battery replacement procedure in section 7.11.1'
    },

    // Legacy entries for backward compatibility
    'E001': {
        category: 'Error',
        title: 'System Initialization Failure',
        description: 'The system failed to initialize properly during startup.',
        remedy: '1. Power cycle the controller (turn off for 30 seconds, then on)\n2. Check all cable connections\n3. If issue persists, contact technical support'
    },
    'C001': {
        category: 'Critical',
        title: 'Critical System Failure',
        description: 'A critical system component has failed and operation must stop immediately.',
        remedy: '1. STOP all robot operations immediately\n2. Power off the controller\n3. Do not attempt to restart\n4. Contact technical support for service'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = errorDatabase;
}
