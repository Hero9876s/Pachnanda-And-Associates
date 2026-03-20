# PowerShell script to start the website
Write-Host "Starting Pachnanda and Associates Website..." -ForegroundColor Green
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version
Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green

# Check npm
Write-Host "Checking npm..." -ForegroundColor Yellow
$npmVersion = npm --version
Write-Host "npm version: $npmVersion" -ForegroundColor Green

# Check if node_modules exists
Write-Host ""
Write-Host "Checking dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "Dependencies found ✓" -ForegroundColor Green
} else {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Clear .next cache if exists
if (Test-Path ".next") {
    Write-Host "Clearing cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "The website will open at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the dev server
npm run dev








