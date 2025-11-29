// SAMPLE EXPANSION DATA - Uncomment and paste these codes into data.js if you like

// ADDITIONAL ERROR CODES EXAMPLES
// These are provided as templates - customize for your specific robot manual

/*
Additional error codes you might find in your R30iA Mate Controller manual:

'E100': {
    category: 'Error',
    title: 'Servo Amplifier Error',
    description: 'The servo amplifier detected a fault condition.',
    remedy: '1. Check power supply voltage\n2. Verify servo amplifier connections\n3. Check motor load\n4. Replace amplifier if faulty'
},

'E110': {
    category: 'Error',
    title: 'Axis Following Error',
    description: 'Actual axis position differs significantly from commanded position.',
    remedy: '1. Check for mechanical obstruction\n2. Verify servo parameters\n3. Check load on axis\n4. Recalibrate encoder'
},

'E120': {
    category: 'Error',
    title: 'Over-Speed Detected',
    description: 'Axis speed exceeded safe operating limits.',
    remedy: '1. Reduce speed commands\n2. Check for run-away condition\n3. Verify motion limits\n4. Reset controller'
},

'E130': {
    category: 'Error',
    title: 'Software Error',
    description: 'Internal software error detected.',
    remedy: '1. Power cycle controller\n2. Check for firmware corruption\n3. Reinstall firmware if necessary\n4. Contact support'
},

'E200': {
    category: 'Error',
    title: 'Brake Release Failure',
    description: 'Mechanical brake failed to release properly.',
    remedy: '1. Check brake power supply\n2. Inspect brake mechanism\n3. Clean brake surfaces\n4. Replace brake if needed'
},

'E210': {
    category: 'Error',
    title: 'Brake Applied Timeout',
    description: 'Brake failed to engage within expected time.',
    remedy: '1. Check brake connections\n2. Verify brake solenoid\n3. Inspect mechanical brake\n4. Service or replace brake'
},

'A100': {
    category: 'Alert',
    title: 'Servo Warning',
    description: 'Servo amplifier issued a warning signal.',
    remedy: '1. Monitor servo operation\n2. Check load conditions\n3. Verify power supply stability\n4. Contact service if warning persists'
},

'A110': {
    category: 'Alert',
    title: 'Current Limit Activated',
    description: 'Motor current is approaching the limit threshold.',
    remedy: '1. Reduce motor load\n2. Check for friction\n3. Allow motor to cool\n4. Reduce speed if needed'
},

'A120': {
    category: 'Alert',
    title: 'Brake Temperature High',
    description: 'Brake temperature has risen above recommended level.',
    remedy: '1. Reduce frequency of braking\n2. Allow brake to cool\n3. Check for brake slippage\n4. Check cooling system'
},

'A200': {
    category: 'Alert',
    title: 'Preventive Maintenance Due',
    description: 'Scheduled preventive maintenance is approaching.',
    remedy: '1. Schedule maintenance window\n2. Review maintenance checklist\n3. Prepare required materials\n4. Plan downtime'
},

'A210': {
    category: 'Alert',
    title: 'Firmware Update Recommended',
    description: 'A recommended firmware update is available.',
    remedy: '1. Back up current configuration\n2. Download recommended update\n3. Schedule update during maintenance window\n4. Test thoroughly after update'
},

'W200': {
    category: 'Warning',
    title: 'Performance Degradation',
    description: 'System performance has decreased slightly.',
    remedy: '1. Monitor performance over time\n2. Check system load\n3. Clean cooling surfaces\n4. Contact support if worsens'
},

'W210': {
    category: 'Warning',
    title: 'Signal Quality Degraded',
    description: 'Signal quality between controller and components has degraded.',
    remedy: '1. Check all cable connections\n2. Inspect cables for damage\n3. Reduce electromagnetic interference\n4. Replace cables if damaged'
},

'W300': {
    category: 'Warning',
    title: 'Configuration Change Detected',
    description: 'System configuration has been modified.',
    remedy: '1. Review configuration changes\n2. Verify settings are correct\n3. Test system operation\n4. Save configuration backup'
},

'S100': {
    category: 'Status',
    title: 'Axis Initialization Complete',
    description: 'Axis has been successfully initialized.',
    remedy: 'No action required. Axis is ready for operation.'
},

'S110': {
    category: 'Status',
    title: 'Servo Ready',
    description: 'Servo drive is powered and ready to accept commands.',
    remedy: 'No action required. Servo is in standby mode.'
},

'S200': {
    category: 'Status',
    title: 'Program Execution Started',
    description: 'Motion program has started execution.',
    remedy: 'Monitor execution progress. Press stop to interrupt if needed.'
},

'S210': {
    category: 'Status',
    title: 'Program Paused',
    description: 'Motion program has been paused.',
    remedy: 'Resume program or stop it as needed.'
},

'S300': {
    category: 'Status',
    title: 'Backup Complete',
    description: 'Configuration backup has completed successfully.',
    remedy: 'No action required. Backup is stored securely.'
},

'C100': {
    category: 'Critical',
    title: 'Encoder Loss',
    description: 'Lost communication with position encoder. System cannot verify position.',
    remedy: '1. STOP all operations\n2. Check encoder connections\n3. Verify encoder power\n4. Replace encoder if needed'
},

'C110': {
    category: 'Critical',
    title: 'Thermal Runaway',
    description: 'Component temperature is rising uncontrollably.',
    remedy: '1. STOP all operations IMMEDIATELY\n2. Power off device\n3. Allow extensive cooling time\n4. Do not restart until cool\n5. Check cooling system'
},

'C200': {
    category: 'Critical',
    title: 'Electrical Fault Detected',
    description: 'Dangerous electrical condition detected. Immediate shutdown required.',
    remedy: '1. CUT POWER TO SYSTEM\n2. Check for short circuits\n3. Inspect electrical connections\n4. Do not attempt restart\n5. Contact trained technician'
},

'C210': {
    category: 'Critical',
    title: 'Mechanical Failure',
    description: 'Critical mechanical component has failed catastrophically.',
    remedy: '1. STOP ALL OPERATIONS\n2. Power down immediately\n3. Evacuate personnel if needed\n4. Do not attempt restart\n5. Contact service department'
}

*/

// TO USE THESE CODES:
// 1. Open data.js in a text editor
// 2. Find the line: const errorDatabase = {
// 3. Copy codes from above (uncomment them first)
// 4. Paste them before the closing }; 
// 5. Make sure to add commas between entries
// 6. Save the file
// 7. Refresh your browser

// EXAMPLE: How to properly insert:
/*
const errorDatabase = {
    // Original codes...
    'E001': { ... },
    'E002': { ... },
    
    // NEW CODES FROM THIS FILE (uncommented and formatted)
    'E100': {
        category: 'Error',
        title: 'Servo Amplifier Error',
        description: 'The servo amplifier detected a fault condition.',
        remedy: '1. Check power supply voltage\n2. Verify servo amplifier connections\n3. Check motor load\n4. Replace amplifier if faulty'
    },
    'E110': {
        category: 'Error',
        title: 'Axis Following Error',
        description: 'Actual axis position differs significantly from commanded position.',
        remedy: '1. Check for mechanical obstruction\n2. Verify servo parameters\n3. Check load on axis\n4. Recalibrate encoder'
    },
    // ... more codes ...
};
*/

// REMEMBER:
// - Always include a comma after each code entry
// - Except the last entry - no comma before closing }
// - Use \n for line breaks in remedy
// - Keep backup of original data.js
// - Test after adding codes
