@echo off
title Instalar dependencias necesarias - Postitulo
cd /d "%~dp0"

echo === Instalando dependencias principales ===
call npm install framer-motion lucide-react tailwindcss postcss autoprefixer tailwind-merge tailwindcss-animate --save

echo.
echo ✅ Dependencias instaladas correctamente
echo.
echo Ahora podes ejecutar: npm start
pause
