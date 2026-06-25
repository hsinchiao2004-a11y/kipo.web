# KIPO 科普科技官網

科普科技股份有限公司（Kipotec Corporation）官方網站，包含前端靜態網站與後端 API 伺服器。

---

## 專案結構

```
kipo.web/
├── frontend/        ← 前端靜態網站
│   ├── index.html   # 網站主體結構
│   ├── styles.css   # 視覺樣式
│   ├── main.js      # 互動功能
│   ├── i18n.js      # 多語系（繁中 / 簡中 / 英文）
│   ├── logo.png     # KIPO Logo
│   ├── hero-video.mp4
│   ├── img/         # 產品與合作圖片
│   └── certs/       # 認證證書圖片
└── backend/         ← 後端 API 伺服器
    ├── server.js    # Express 主程式
    ├── package.json
    ├── .env.example # 環境變數範本
    └── .gitignore
```

---

## 前端

### 技術
- 純 HTML / CSS / JavaScript（無框架）
- 多語系切換（繁中、簡中、英文）
- 響應式設計（RWD）

### 頁面區塊
| 區塊 | 說明 |
|------|------|
| Hero | 首頁影片背景與品牌標語 |
| Solutions | 產品解決方案分類 |
| Technology | 三大核心技術 |
| Intel × KIPO | 合作夥伴展示 |
| Products | 產品規格表（液冷、氣冷、筆電、AIO、機架） |
| About | 公司介紹與認證證書 |
| Contact | 聯絡表單 |
| Careers | 加入我們，連結 104 人力銀行 |

### 啟動前端
用瀏覽器直接開啟，或用本地伺服器：
```bash
cd frontend
npx serve .
```
開啟 `http://localhost:3000`

---

## 後端

### 技術
- Node.js + Express
- nodemailer（寄送 email 通知）
- dotenv（環境變數管理）

### API 路由

| 方法 | 路徑 | 說明 |
|------|------|------|
| POST | `/api/contact` | 接收聯絡表單，寄送 email 通知 |
| GET | `/api/contact` | 讀取所有詢問紀錄 |
| DELETE | `/api/contact/:id` | 刪除指定詢問 |

### 啟動後端

**第一步：安裝套件**
```bash
cd backend
npm install
```

**第二步：設定 Gmail 應用程式密碼**

> 每個人需要用自己的 Gmail 帳號設定，步驟如下：
> 1. 登入 [myaccount.google.com/security](https://myaccount.google.com/security)
> 2. 開啟「兩步驟驗證」
> 3. 搜尋「應用程式密碼」→ 建立新密碼（名稱隨意，例如 `KIPO`）
> 4. 複製產生的 16 位密碼備用

**第三步：設定環境變數**
```bash
cp .env.example .env
```
編輯 `.env`，填入自己的 Gmail 帳號與應用程式密碼：
```
MAIL_USER=your_gmail@gmail.com
MAIL_PASS=your_app_password   # 剛才複製的 16 位密碼
PORT=3000
```

**第三步：啟動伺服器**
```bash
node server.js
```
看到 `✅ KIPO 後端已啟動：http://localhost:3000` 即成功。

---

## 開發流程

```
使用者填寫聯絡表單
        ↓
前端（index.html）送出 POST 請求
        ↓
後端（Express API）接收資料
        ↓
儲存到 data/contacts.json
        ↓
寄送格式化 email 至指定信箱
```

---

## 環境需求

- Node.js v18 以上
- Gmail 帳號（需開啟兩步驟驗證 + 應用程式密碼）

---

## 部署

| 項目 | 建議平台 |
|------|----------|
| 前端 | GitHub Pages / Vercel |
| 後端 | Render / Railway |
