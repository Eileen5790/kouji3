# 启动本地服务器
Write-Host "正在启动口己应用本地服务器..."

# 检查是否安装了Python
$pythonInstalled = $false
try {
    python --version | Out-Null
    $pythonInstalled = $true
} catch {
    $pythonInstalled = $false
}

if ($pythonInstalled) {
    Write-Host "使用Python启动本地服务器..."
    python -m http.server 8000 --bind 127.0.0.1
} else {
    Write-Host "未找到Python，尝试使用PowerShell启动本地服务器..."
    # 使用PowerShell的HTTP服务器
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:8000/")
    $listener.Start()
    Write-Host "服务器已启动，正在监听 http://localhost:8000"
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") {
            $path = "/index.html"
        }
        
        $filePath = Join-Path "$PSScriptRoot" $path.Substring(1)
        
        if (Test-Path $filePath) {
            $content = Get-Content -Path $filePath -Raw
            $response.ContentType = "text/html"
            if ($filePath.EndsWith(".js")) {
                $response.ContentType = "application/javascript"
            } elseif ($filePath.EndsWith(".css")) {
                $response.ContentType = "text/css"
            } elseif ($filePath.EndsWith(".json")) {
                $response.ContentType = "application/json"
            } elseif ($filePath.EndsWith(".png")) {
                $response.ContentType = "image/png"
            } elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) {
                $response.ContentType = "image/jpeg"
            }
            
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        } else {
            $response.StatusCode = 404
            $content = "404 Not Found"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        $response.Close()
    }
}
