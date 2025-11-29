# How to Extract Error Codes from the PDF Manual

This guide explains how to extract error codes from your R30iA Mate Controller Maintenance Manual PDF and add them to the application.

## Method 1: Manual Extraction (Recommended for Small Manuals)

### Step 1: Open the PDF
- Open your R30iA Mate Controller Maintenance Manual PDF in Adobe Reader or another PDF viewer

### Step 2: Find Error Code Sections
Look for sections titled:
- "Error Codes" or "Error Messages"
- "Alarms and Warnings"
- "Troubleshooting"
- "Fault Codes"
- "Status Codes"

### Step 3: Extract Information
For each error code, note:
1. **Error Code**: The alphanumeric code (e.g., E001, A020, W100)
2. **Category**: Type of message (Error, Alert, Warning, Status, Critical)
3. **Title**: Short description
4. **Description**: Detailed explanation of what the error means
5. **Remedy**: Steps to resolve the issue

### Step 4: Format for the Application

Create entries in this format:

```javascript
'[CODE]': {
    category: '[CATEGORY]',
    title: '[SHORT TITLE]',
    description: '[DETAILED DESCRIPTION]',
    remedy: '[STEP 1]\n[STEP 2]\n[STEP 3]'
}
```

### Example:
```javascript
'E123': {
    category: 'Error',
    title: 'Motor Position Error',
    description: 'The motor position feedback does not match the commanded position. This indicates a potential encoder failure or mechanical jam.',
    remedy: '1. Check for mechanical obstructions\n2. Verify encoder connections\n3. Perform encoder diagnostics\n4. Replace encoder if faulty'
}
```

## Method 2: Semi-Automated with Copy-Paste

### Step 1: Copy from PDF
- Select the error code table/section from the PDF
- Copy the text (Ctrl+C)

### Step 2: Use a Text Editor
- Paste into Notepad or VS Code
- Use Find & Replace to format the data

### Step 3: Convert Format
Examples of common patterns:

**From PDF Format:**
```
E001    System Initialization Failure
        Description: The system failed to initialize properly
        Solution: Power cycle the device
```

**Convert To:**
```javascript
'E001': {
    category: 'Error',
    title: 'System Initialization Failure',
    description: 'The system failed to initialize properly',
    remedy: '1. Power cycle the device'
}
```

## Method 3: Using OCR Tools

If your PDF is scanned:

1. Use **Adobe Acrobat** (built-in OCR)
2. Use free tools like **Tesseract** or **Online OCR**
3. Extract text from scanned images
4. Follow Method 1 to format

## Adding Codes to data.js

### Step 1: Open data.js
```
Right-click on data.js → Open with → Notepad or VS Code
```

### Step 2: Locate the errorDatabase object
```javascript
const errorDatabase = {
    'E001': { ... },
    'E002': { ... },
    // Add your codes here
};
```

### Step 3: Add Your Codes
Insert your new entries between existing ones:

```javascript
const errorDatabase = {
    'E001': {
        category: 'Error',
        title: 'System Initialization Failure',
        description: 'The system failed to initialize properly during startup.',
        remedy: '1. Power cycle the controller\n2. Check all cable connections\n3. If issue persists, contact technical support'
    },
    'E002': {
        category: 'Error',
        title: 'Communication Timeout',
        description: 'Lost communication with one or more robot components.',
        remedy: '1. Check all network/communication cables\n2. Verify component power status\n3. Restart the affected component\n4. Reset the controller if needed'
    },
    // YOUR NEW CODES BELOW
    'E100': {
        category: 'Error',
        title: 'Your New Error Code',
        description: 'Description of what this error means',
        remedy: '1. First step\n2. Second step\n3. Third step'
    }
};
```

### Step 4: Save the File
- Press Ctrl+S in your text editor
- Refresh the web app (F5 in your browser)
- Search for the new code to test

## Important Rules for JavaScript Syntax

### Commas
- Each entry must end with a comma (except the last one)
```javascript
'E001': { ... },  // ← Comma here
'E002': { ... }   // ← No comma on last entry
```

### Special Characters in Strings
- If your text contains quotes, escape them with backslash: `\"Your \"quoted\" text\"`
- Use `\n` for newlines in remedy steps
- Use `\t` for tabs if needed

### Example with Special Characters:
```javascript
'E101': {
    category: 'Error',
    title: 'Motor \"Stalled\" Error',
    description: 'The motor failed to respond to control signals. It\'s either jammed or disconnected.',
    remedy: '1. Check connections\n2. Remove physical obstructions'
}
```

## Category Reference

### Error (E-series)
```javascript
category: 'Error'
```
For critical issues that prevent normal operation.

### Alert (A-series)
```javascript
category: 'Alert'
```
For important notifications requiring action.

### Warning (W-series)
```javascript
category: 'Warning'
```
For caution messages about potential issues.

### Status (S-series)
```javascript
category: 'Status'
```
For informational messages.

### Critical (C-series)
```javascript
category: 'Critical'
```
For system failures requiring emergency shutdown.

## Validation Checklist

Before saving, verify:

- ✅ All error codes have valid syntax
- ✅ All string values are properly quoted
- ✅ All entries have proper commas (except last)
- ✅ No duplicate error codes
- ✅ Remedy steps use `\n` for line breaks
- ✅ Category matches one of the five types
- ✅ No unterminated quotes or brackets

## Testing

After adding codes:

1. **Test Search**
   - Search for the exact error code
   - Search for partial matches
   - Search for keywords from the description

2. **Check Display**
   - Verify formatting looks correct
   - Check that line breaks appear properly
   - Confirm category color is displayed

3. **Look for Errors**
   - Open Developer Console (F12)
   - Check for any red error messages
   - Review the console output

## Troubleshooting Data Entry

### Error: "Unexpected token"
- Check for missing commas
- Verify all brackets are properly closed
- Look for quotes that need escaping

### Error: "undefined" in search
- Verify all object keys exist
- Check for typos in category names
- Ensure all required fields are present

### New codes don't appear
- Refresh the browser (Ctrl+F5 for hard refresh)
- Clear browser cache
- Check file was saved (look at modification date)

## Example: Complete Data Entry

Here's a complete example with multiple codes:

```javascript
const errorDatabase = {
    'E001': {
        category: 'Error',
        title: 'System Initialization Failure',
        description: 'The system failed to initialize properly during startup.',
        remedy: '1. Power cycle the controller\n2. Check all cable connections\n3. Contact support if issue persists'
    },
    'E002': {
        category: 'Error',
        title: 'Communication Timeout',
        description: 'Lost communication with robot components.',
        remedy: '1. Check network cables\n2. Restart affected components\n3. Reset the controller'
    },
    'A001': {
        category: 'Alert',
        title: 'Temperature Warning',
        description: 'Component temperature approaching maximum level.',
        remedy: '1. Reduce operational speed\n2. Increase ventilation\n3. Allow cooling time'
    },
    'W001': {
        category: 'Warning',
        title: 'Calibration Drift',
        description: 'Sensor calibration has drifted outside acceptable range.',
        remedy: '1. Perform sensor recalibration\n2. Follow calibration procedure\n3. Monitor for future drift'
    },
    'C001': {
        category: 'Critical',
        title: 'Critical System Failure',
        description: 'Critical component has failed - operation must stop immediately.',
        remedy: '1. STOP all operations\n2. Power off controller\n3. Contact technical support'
    },
    'S001': {
        category: 'Status',
        title: 'Self-Test Passed',
        description: 'System self-test completed successfully.',
        remedy: 'No action required. System is operating normally.'
    }
};
```

## Batch Import Tips

If you have many codes:

1. **Use a spreadsheet first**
   - Create columns: Code, Category, Title, Description, Remedy
   - Extract data into spreadsheet
   - Use formulas to generate JavaScript format

2. **Python Script for Conversion**
   - Create a CSV file with your data
   - Use a Python script to convert to JavaScript format
   - Output directly to data.js

3. **Text Editor Find & Replace**
   - Use regex find & replace to format data
   - Example: Replace line breaks with `\n`

## Need Help?

- Check existing examples in data.js
- Review the syntax carefully
- Test one code at a time
- Use browser console (F12) to debug

---

**Tips for Success:**
1. Start with a few codes to get the format right
2. Use a code editor with syntax highlighting
3. Test each batch of additions
4. Keep a backup copy of data.js
5. Document your data sources
