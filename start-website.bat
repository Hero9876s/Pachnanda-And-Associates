@echo off
echo Starting Pachnanda and Associates Website...
echo.

echo Checking Node.js...
node --version
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Checking dependencies...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo.
echo Starting development server...
echo The website will open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause








