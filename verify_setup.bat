@echo off
REM Setup Verification Script for Robot Error Code Lookup App
REM This script checks if all required files are present

echo.
echo ============================================
echo   SETUP VERIFICATION
echo   Robot Error Code Lookup App
echo ============================================
echo.

setlocal enabledelayedexpansion

set "required_files=index.html;styles.css;app.js;data.js"
set "doc_files=README.md;DATA_EXTRACTION_GUIDE.md;QUICKSTART.html;START_HERE.txt"
set "helper_files=run.bat;run_server.py;SAMPLE_CODES.js"

set missing=0

echo Checking required files...
echo.

for %%F in (%required_files%) do (
    if exist "%%F" (
        echo [✓] %%F
    ) else (
        echo [✗] %%F - MISSING!
        set /a missing=!missing!+1
    )
)

echo.
echo Documentation files...
echo.

for %%F in (%doc_files%) do (
    if exist "%%F" (
        echo [✓] %%F
    ) else (
        echo [!] %%F - Optional
    )
)

echo.
echo Helper files...
echo.

for %%F in (%helper_files%) do (
    if exist "%%F" (
        echo [✓] %%F
    ) else (
        echo [!] %%F - Optional
    )
)

echo.
echo ============================================

if %missing% equ 0 (
    echo ✓ ALL REQUIRED FILES FOUND!
    echo.
    echo Ready to start the application.
    echo.
    echo Next steps:
    echo   1. Double-click: index.html
    echo   2. Or run: run.bat
    echo   3. Or read: START_HERE.txt
    echo.
) else (
    echo ✗ %missing% file(s) missing!
    echo.
    echo Some required files are missing. Please check
    echo that all files were extracted properly.
    echo.
)

echo ============================================
echo.
pause
