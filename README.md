# 口己 (Kouji)

一个基于Web和Capacitor的个人生活记录应用，支持多平台运行（Web和APK）。

## 功能特性

- 📝 **生活记录**：记录日常活动、地点、饮食和心情
- 📊 **数据分析**：活动分布、地点分布、饮食分布和心情趋势分析
- 🗓️ **日历视图**：直观查看每日记录
- 🌙 **主题切换**：支持浅色和深色模式
- 🌐 **国际化**：支持中文和英文
- 📤 **数据导出**：支持导出为Excel、CSV和剪贴板
- 📥 **数据导入**：支持从文件导入数据
- 📱 **多平台支持**：Web和Android APK

## 技术栈

- **前端**：HTML5, CSS3, JavaScript
- **跨平台**：Capacitor + PWA
- **数据存储**：LocalStorage
- **图表**：Canvas API
- **响应式设计**：适配不同屏幕尺寸

## 安装和运行

### Web版本

1. 克隆项目到本地
2. 进入项目目录
3. 运行 `start-web.bat` 启动本地服务器
4. 在浏览器中访问 `http://localhost:8000`

### Android APK版本

1. 确保已安装 Node.js 和 Android Studio
2. 进入项目目录
3. 运行 `npm install` 安装依赖
4. 运行 `npx cap add android` 添加 Android 平台
5. 运行 `npx cap sync` 同步项目文件
6. 运行 `npx cap open android` 打开 Android Studio
7. 在 Android Studio 中构建和运行 APK

## 项目结构

```
kouji3/
├── web/              # Web应用文件
│   ├── index.html     # 主HTML文件
│   ├── app.js         # 主JavaScript文件
│   ├── styles.css     # 样式文件
│   ├── manifest.json  # PWA配置文件
│   └── service-worker.js # PWA服务 worker
├── android/           # Android平台文件
├── capacitor.config.json # Capacitor配置
├── package.json       # 项目配置和依赖
├── start-web.bat      # Web版本启动脚本
├── server.ps1         # PowerShell启动脚本
└── README.md          # 项目说明
```

## 核心功能

### 记录页面
- 选择日期、活动、地点、饮食和心情
- 添加备注
- 支持多选活动和地点
- 食物选择支持自定义添加

### 分析页面
- 总记录数、平均心情、最常活动、最常地点等统计信息
- 活动分布饼状图和横向条形图
- 地点分布饼状图和横向条形图
- 饮食分布横向条形图（按次数降序排序）
- 心情趋势折线图（包含时间范围内的所有日期）
- 支持不同时间段筛选：全部、最近七天、本周、本月、上月、自定义

### 数据页面
- 按日期排序的历史记录列表
- 日历视图，显示每天的心情
- 编辑和删除记录
- 数据导入/导出功能

### 设置页面
- 语言切换（中文/英文）
- 主题切换（浅色/深色）
- 活动管理（添加、编辑、删除活动）
- 地点管理（添加、编辑、删除地点）
- 饮食管理（添加、编辑、删除食物）
- 数据管理（导出、导入、初始化）

## 数据管理

### 导出数据
- 导出为Excel格式
- 导出为CSV格式
- 复制到剪贴板

### 导入数据
- 支持从文件导入数据
- 导入前会提示确认，防止误操作

### 初始化设置
- 点击初始化按钮可以恢复所有预设值
- 预设包括活动、地点、饮食分类和食物

## 响应式设计

- 适配不同屏幕尺寸，从手机到桌面
- 触摸友好的界面设计
- 自适应布局，确保在各种设备上都能良好显示

## 开发指南

1. 修改 `web/app.js` 文件添加新功能
2. 修改 `web/styles.css` 文件调整样式
3. 运行 `start-web.bat` 测试 Web 版本
4. 运行 `npx cap sync` 和 `npx cap open android` 测试 Android 版本

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

---

**口己** - 记录生活，分析自我，提升品质。