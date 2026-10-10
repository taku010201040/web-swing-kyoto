@echo off
chcp 65001 > nul
title WebSwing Kyoto - local server
cd /d %~dp0

where python > nul 2>&1
if errorlevel 1 (
  echo [エラー] Python が見つかりません。Python 3 をインストールしてください。
  pause
  exit /b 1
)

echo ============================================================
echo  WebSwing Kyoto (PLATEAU 京都 LOD2) ローカルサーバー起動
echo ============================================================
echo.
echo  1) この黒い画面は開いたままにしてください
echo  2) ブラウザが自動で開きます
echo  3) 軽いのは下京区のみ: ...webswing-kyoto.html?ward
echo.
start "" http://127.0.0.1:3000/webswing-kyoto.html
python serve.py
pause
