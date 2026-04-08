@echo off
chcp 65001 >nul
echo Starting Kouji App...
echo Please wait, starting local server...
echo.

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using Python to start local server...
    python -m http.server 8000 --bind 127.0.0.1
) else (
    echo Python not found, trying to start local server with PowerShell...
    powershell -ExecutionPolicy Bypass -Command "& {Start-Process powershell -ArgumentList '-ExecutionPolicy Bypass -File %~dp0server.ps1'}"
)

echo.
echo Server started, opening browser...
start http://localhost:8000

echo.
echo App started, please visit http://localhost:8000 in your browser
pause