@echo off
cd /d "%~dp0website"
echo.
echo ============================================================
echo  F.R.E. CONTRACTOR L.L.C. — Website Preview
echo  Opening in your default browser...
echo ============================================================
echo.
start "" "index.html"
echo Done! Browser should open automatically.
timeout /t 2 >nul
