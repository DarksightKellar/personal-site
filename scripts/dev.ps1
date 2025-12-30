# dev.ps1 - Start all services for local development
# Run from project root: .\scripts\dev.ps1

Write-Host "Starting personal-site development environment..." -ForegroundColor Cyan

# Setup fnm
Write-Host "`n[1/4] Setting up Node.js via fnm..." -ForegroundColor Yellow
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
fnm use

# Start backend in separate terminal with conda (using conda hook)
Write-Host "`n[2/3] Starting Flask backend (port 5000) in new terminal..." -ForegroundColor Yellow
$backendPath = "$PWD\backend"
$condaPath = "$env:USERPROFILE\anaconda3"
$initScript = @"
Write-Host 'Initializing conda...' -ForegroundColor Cyan
& '$condaPath\shell\condabin\conda-hook.ps1'
conda activate base
cd '$backendPath'
Write-Host 'Starting Flask on port 5000...' -ForegroundColor Cyan
flask run --port 5000
"@
Start-Process powershell -ArgumentList "-NoExit", "-Command", $initScript

# Give backend time to start
Start-Sleep -Seconds 4

# Start frontend
Write-Host "`n[4/4] Starting Vite frontend (port 5173)..." -ForegroundColor Yellow
Write-Host "`nClose the Flask terminal window to stop the backend.`n" -ForegroundColor Green

Push-Location frontend
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression
npm run dev
Pop-Location
