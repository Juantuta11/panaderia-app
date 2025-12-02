@echo off
title Panaderia-App Demo Universal

:: Abrir backend en una nueva ventana
start cmd /k "cd C:\Users\Lenovo\panaderia-app\backend && node server.js"

:: Abrir frontend en otra ventana y guardar salida en un archivo temporal
start cmd /k "cd C:\Users\Lenovo\panaderia-app\frontend && npx serve > ..\frontend_port.txt"

:: Esperar unos segundos para que el frontend arranque y escriba el puerto
timeout /t 5 >nul

:: Leer el puerto desde el archivo generado
for /f "tokens=2 delims=:" %%a in ('findstr /i "Local:" C:\Users\Lenovo\panaderia-app\frontend_port.txt') do set PORT=%%a

:: Quitar espacios
set PORT=%PORT: =%

:: Preguntar al usuario qué navegador usar
echo.
echo ============================================
echo   Selecciona el navegador para la demo:
echo   1 - Microsoft Edge
echo   2 - Firefox
echo ============================================
set /p choice=Escribe 1 o 2 y presiona ENTER: 

if "%choice%"=="1" (
    start msedge http://localhost:%PORT%/index.html
) else if "%choice%"=="2" (
    start firefox http://localhost:%PORT%/index.html
) else (
    echo Opción no válida. Abriendo en navegador predeterminado...
    start http://localhost:%PORT%/index.html
)

exit