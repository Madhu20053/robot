@echo off
REM Robot Error Code Lookup - Windows Quick Start
REM This batch file starts a local web server and opens the app

echo.
echo ========================================
echo   Robot Error Code Lookup App
echo ========================================
echo.
echo Starting server on http://localhost:8000
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3 from https://www.python.org
    echo Make sure to check "Add Python to PATH" during installation
    echo.
    pause
    exit /b 1
)

REM Start the server
python run_server.py

REM If server exits, keep window open
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Server failed to start
    echo Please check the error message above
    echo.
    pause
    exit /b 1
)
