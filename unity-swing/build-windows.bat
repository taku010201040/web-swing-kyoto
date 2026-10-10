@echo off
chcp 65001 > nul
setlocal

set UNITY="C:\Program Files\Unity\Hub\Editor\2022.3.62f3\Editor\Unity.exe"
set PROJECT=%~dp0unity-swing
if not exist "%PROJECT%" set PROJECT=%~dp0
set LOG=%TEMP%\unity_build.log

echo ============================================================
echo  WebSwing Kyoto : Unity Windows スタンドアロンビルド
echo ============================================================
echo.
echo ライセンス未認済の場合はここで失敗します。
echo その場合は Unity Hub を起動してサインイン/ライセンス認証を行ってください。
echo.

%UNITY% -batchmode -quit -projectPath "%PROJECT%" -executeMethod WebSwingKyoto.EditorTools.BuildScript.BuildWindows -logFile "%LOG%"

set CODE=%ERRORLEVEL%
echo.
echo Unity exit code = %CODE%
if %CODE%==0 (
  echo.
  echo ビルド成功: %PROJECT%\Builds\Windows\WebSwingKyoto.exe
) else (
  echo.
  echo ビルド失敗。ログ: %LOG%
)
echo.
pause
