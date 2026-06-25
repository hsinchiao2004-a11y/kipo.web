const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'contacts.json');

app.use(cors());
app.use(express.json());

// 確保資料資料夾存在
if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

// 讀取所有聯絡資料（輔助函式）
function readContacts() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

// 寫入所有聯絡資料（輔助函式）
function writeContacts(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ──────────────────────────────────────────
// 中文標籤：後端儲存房間（接收聯絡表單）
// ──────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, company, email, product, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: '姓名與電子郵件為必填欄位' });
  }

  // 儲存到本地 JSON 檔
  const contacts = readContacts();
  const newEntry = {
    id: Date.now().toString(),
    name,
    company: company || '',
    email,
    product: product || '',
    message: message || '',
    createdAt: new Date().toISOString(),
  };
  contacts.push(newEntry);
  writeContacts(contacts);

  // 寄送 email 通知
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"KIPO 官網" <${process.env.MAIL_USER}>`,
      to: 'howard@kipotec.com.tw',
      subject: `【新詢問】${name}（${company || '無公司'}）`,
      html: `
        <h2>新聯絡表單詢問</h2>
        <table border="1" cellpadding="8" cellspacing="0">
          <tr><th>姓名</th><td>${name}</td></tr>
          <tr><th>公司</th><td>${company || '—'}</td></tr>
          <tr><th>電子郵件</th><td>${email}</td></tr>
          <tr><th>產品類別</th><td>${product || '—'}</td></tr>
          <tr><th>訊息</th><td>${message || '—'}</td></tr>
          <tr><th>送出時間</th><td>${newEntry.createdAt}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error('Email 寄送失敗：', err.message);
  }

  res.status(201).json({ success: true, message: '詢問已收到，我們將盡快回覆！' });
});

// ──────────────────────────────────────────
// 中文標籤：後端讀取房間（查詢所有詢問）
// ──────────────────────────────────────────
app.get('/api/contact', (req, res) => {
  const contacts = readContacts();
  res.json(contacts);
});

// ──────────────────────────────────────────
// 中文標籤：後端刪除房間（刪除指定詢問）
// ──────────────────────────────────────────
app.delete('/api/contact/:id', (req, res) => {
  const { id } = req.params;
  const contacts = readContacts();
  const index = contacts.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: '找不到該筆資料' });
  }

  contacts.splice(index, 1);
  writeContacts(contacts);
  res.json({ success: true, message: '已成功刪除' });
});

app.listen(PORT, () => {
  console.log(`✅ KIPO 後端已啟動：http://localhost:${PORT}`);
});
