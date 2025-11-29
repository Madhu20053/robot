# Robot Error Code Lookup App

## Overview
A professional web-based application for looking up robot maintenance error codes from the R30iA Mate Controller maintenance manual. Users can search for error codes to get descriptions and remedies.

## Features
✅ **Quick Search** - Search by error code or description  
✅ **Comprehensive Database** - 15+ pre-loaded error codes with categories  
✅ **Multiple Result Types** - Handles exact matches and partial matches  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Color-Coded Categories** - Easy visual identification of error types  
✅ **Browsable List** - Click any error code to search it  
✅ **Print-Friendly** - Full print support for documentation  

## Files Structure
```
├── index.html      - Main HTML interface
├── styles.css      - All styling and responsive design
├── app.js          - Application logic and search functionality
├── data.js         - Error code database
└── README.md       - This file
```

## How to Use

### 1. Open the Application
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### 2. Search for an Error Code
- Enter the error code in the search box (e.g., `E001`, `A020`, `W100`)
- Click "Search" or press Enter
- View the error description and remedies

### 3. Partial Matches
The app supports partial matching - you can search by:
- Error code: `E001`
- Category: `Error`, `Alert`, `Warning`
- Title keywords: `temperature`, `battery`, etc.

### 4. Browse All Codes
Scroll down to see all available error codes listed as clickable cards. Click any card to search for that code.

## Error Code Categories

- **🔴 Error (E)** - Critical issues requiring immediate attention
- **⚠️ Alert (A)** - Important notifications requiring action
- **🟡 Warning (W)** - Caution messages
- **🟢 Status (S)** - Informational messages
- **💀 Critical (C)** - System failures requiring emergency stop

## Adding New Error Codes

### Step 1: Edit `data.js`
Open `data.js` and add your error codes to the `errorDatabase` object:

```javascript
'E123': {
    category: 'Error',
    title: 'Your Error Title',
    description: 'Detailed description of what went wrong.',
    remedy: 'Step 1: Do this\nStep 2: Do that\nStep 3: Verify result'
}
```

### Step 2: Format Remedies
- Use `\n` to separate steps on different lines
- The app will automatically format them as numbered lists
- Or just write a paragraph if it's not step-based

### Example Entry:
```javascript
'E050': {
    category: 'Error',
    title: 'Emergency Stop Activated',
    description: 'Emergency stop button has been pressed or emergency condition detected.',
    remedy: '1. Identify the emergency condition\n2. Remove the cause of emergency\n3. Reset emergency stop button\n4. Power cycle controller to resume operation'
}
```

## Customization

### Change App Title
Edit `index.html`, find the `<h1>` tag:
```html
<h1>🤖 Robot Error Code Lookup</h1>
```

### Change Colors
Edit `styles.css`, modify the CSS variables at the top:
```css
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #3b82f6;
    --success-color: #10b981;
    /* ... more colors ... */
}
```

### Change Category Colors
In `app.js`, modify the `getCategoryColor()` function:
```javascript
const colors = {
    'Error': '#dc3545',
    'Alert': '#ffc107',
    // ... more categories ...
};
```

## Browser Compatibility
- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE 11: ⚠️ Limited support (may need polyfills)

## Mobile Experience
The app is fully responsive and works great on:
- Smartphones (portrait and landscape)
- Tablets
- Desktops

## Keyboard Shortcuts
- `Enter` - Submit search (when input is focused)
- `Tab` - Navigate between elements

## Performance
- Instant search results
- No external dependencies (pure JavaScript)
- Works offline
- Small file size (~20KB total)

## Tips for Best Results

1. **Use error code format** - Error codes work best with format like `E001`, `A020`, etc.
2. **Case-insensitive** - `e001` and `E001` both work
3. **Be specific** - More specific search terms give better results
4. **Check remedies carefully** - Follow all steps in order
5. **Print for reference** - Use Ctrl+P to print error details

## Data Source
This application's database should be populated with error codes extracted from the R30iA Mate Controller Maintenance Manual. To add codes from the manual:

1. Extract error code information from the PDF
2. Format as shown in the example above
3. Add to `data.js`
4. Test the search functionality

## Example Pre-loaded Codes
- `E001` - System Initialization Failure
- `E002` - Communication Timeout
- `E010` - Joint Encoder Error
- `E020` - Motor Overload
- `E050` - Emergency Stop Activated
- `A001` - Temperature Warning
- `A010` - Low Battery Voltage
- `A020` - Maintenance Required
- `W001` - Calibration Drift
- `W100` - Software Update Available
- `C001` - Critical System Failure
- `C010` - Power Supply Failure
- ... and more

## Technical Details

### Search Algorithm
1. First checks for exact match
2. If not found, searches for partial matches in:
   - Error code
   - Title
   - Description
3. Returns all matches or "not found" message

### Data Structure
Each error code entry contains:
```javascript
{
    category: String,      // Error, Alert, Warning, Status, Critical
    title: String,         // Short title
    description: String,   // Detailed description
    remedy: String         // Steps separated by \n
}
```

## Troubleshooting

### Search not working
- Check that error code format is correct
- Ensure no extra spaces in search term
- Try partial search (just the letter, e.g., "E")

### Styling looks odd
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check that styles.css is in the same folder

### Error codes not appearing
- Verify data.js is in the same folder
- Check for JavaScript errors (F12 to open Developer Tools)
- Ensure no syntax errors in data.js

## License & Attribution
This application is provided as a tool for managing robot maintenance documentation. Please ensure you have proper rights to use the maintenance manual content.

## Support
For issues or improvements, review the code structure and comments in each file. The application is straightforward and easy to modify.

---

**Version:** 1.0  
**Last Updated:** November 2025  
**Format:** Responsive Web App (HTML5, CSS3, JavaScript ES6)
