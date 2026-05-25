@echo off
echo Starting CET-4 Reading Practice...
start "" /B npm run dev
timeout /t 3 /nobreak >nul
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:3000
echo App launched in Chrome!
