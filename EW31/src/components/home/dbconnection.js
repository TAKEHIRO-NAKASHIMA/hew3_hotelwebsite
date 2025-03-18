const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: '',
  database: 'hoteldb',
});

// DB接続チェック用エンドポイント
app.get('/check-db', (req, res) => {
  connection.ping((err) => {
    if (err) {
      res.status(500).json({ status: 'error', message: 'DB接続失敗: ' + err.message });
    } else {
      res.json({ status: 'success', message: 'DB接続成功' });
    }
  });
});

// ユーザー一覧取得エンドポイント
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('クエリエラー: ' + err.stack);
    } else {
      res.json(results);
    }
  });
});
app.post("/register", (req, res) => {
  const data = req.body;

  const sql = `
    INSERT INTO Bookings 
    (firstName, lastName, email, phone, country, address, checkIn, checkOut, adults, children, stayDates, totalStay, creditCardNumber, expirationMonth, expirationYear, cvv, roomType, policyAgreement) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.firstName,                  // 名
    data.lastName,                   // 姓
    data.email,                      // メールアドレス
    data.phone,                      // 電話番号
    data.country,                    // 国
    data.address,                    // 住所
    data.checkIn,                    // チェックイン日
    data.checkOut,                   // チェックアウト日
    data.adults,                     // 大人の人数
    data.children,                   // 子供の人数
    data.stayDates,                  // 宿泊日程
    data.totalStay,                  // 合計金額
    data.payment.cardNumber,         // クレジットカード番号
    data.payment.expiryMonth,        // 有効期限 (月)
    data.payment.expiryYear,         // 有効期限 (年)
    data.payment.cvv,                // CVVコード
    data.roomType || "Junior Room",  // 部屋タイプ (固定値)
    data.policyAgreement || true,    // ポリシー同意 (固定値)
  ];
  console.log("送信データ:", values);

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("データ登録エラー:", err);
      res.status(500).send("登録に失敗しました。");
    } else {
      res.status(200).send("登録に成功しました！");
    }
  });
});

app.listen(3007, () => {
  console.log('サーバーがポート3007で起動');
});
