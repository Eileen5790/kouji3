# 启动本地服务器
Write-Host "启动本地服务器..."
Write-Host "服务器将运行在 http://localhost:8000"
Write-Host ""

# 切换到 web 目录
Set-Location -Path "C:\Alfredsass\kouji3\web"

# 启动 Python 内置服务器
python -m http.server 8000