@echo off
title Kouji - Personal Daily Record

 echo ====================================
echo    Kouji - Personal Daily Record

echo ====================================
echo.
echo Starting local server...
echo.

REM 切换到 web 目录
cd "%~dp0web"

REM 启动 Python 内置服务器
start "Kouji Server" python -m http.server 8000

REM 等待服务器启动
ping 127.0.0.1 -n 2 > nul

echo Opening app in default browser...
echo.

REM 在浏览器中打开应用
start "" http://localhost:8000

echo App opened in default browser!
echo.
echo To open in Trae browser:
echo 1. In Trae IDE, click "Open Preview"
echo 2. Enter: http://localhost:8000
echo.
echo Server is running at http://localhost:8000
echo.

pause