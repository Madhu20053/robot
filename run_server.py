#!/usr/bin/env python3
"""
Quick Start Server for Robot Error Code Lookup App
Run this script to start a local web server and open the app in your browser
"""

import os
import sys
import http.server
import socketserver
import webbrowser
from pathlib import Path

PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

def main():
    # Get the directory where this script is located
    app_dir = Path(__file__).parent
    
    # Change to app directory
    os.chdir(app_dir)
    
    # Create server
    with socketserver.TCPServer(("", PORT), HANDLER) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"🚀 Robot Error Code Lookup App Server Started!")
        print(f"📱 Opening app at: {url}")
        print(f"📁 Serving from: {app_dir}")
        print(f"⏹️  Press Ctrl+C to stop the server")
        print()
        
        # Open browser
        webbrowser.open(url)
        
        # Start server
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✓ Server stopped.")
            sys.exit(0)

if __name__ == "__main__":
    main()
