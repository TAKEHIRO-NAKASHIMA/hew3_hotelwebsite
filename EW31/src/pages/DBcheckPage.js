const express = require('express');
const nodemailer = require("nodemailer");
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require("bcrypt");


const app = express();
app.use(cors()); // フロントエンドとの通信を許可
app.use(express.json());

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: '',
  database: 'hoteldb',
});

// DB接続チェックエンドポイント
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

app.post("/register", async(req, res) => {
  const data = req.body;

  const sql = `
    INSERT INTO Bookings 
    (firstName, lastName, email, phone, country, address, checkIn, checkOut, adults, children, stayDates, totalStay, creditCardNumber, expirationMonth, expirationYear, cvv, roomType, policyAgreement,roomId) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?)
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
    data.policyAgreement || true,   // ポリシー同意 (固定値)
    data.roomid,                  // 部屋ID
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

   // メール送信用トランスポート設定
   const transporter = nodemailer.createTransport({
    service: "Gmail", // Gmailを使用する場合
    auth: {
      user: "takenaka20362@gmail.com", // 送信元メールアドレス
      pass: "ilvgshbxgixxrxno", // アプリパスワードを使用
    },
  });

  // メール内容を設定
  const mailOptions = {
    from: '"Hotel Booking" <takenaka20362@gmail.com>', // 送信者
    to: data.email, // 宛先
    subject: "Booking Confirmation", // 件名
    text: `Dear ${data.firstName} ${data.lastName},

    予約していただきありがとうございます!

    予約情報詳細:
    - Stay Dates: ${data.stayDates}
    - Total Amount: ${data.totalStay}
    - Room Type: ${data.roomType}

    ご到着を心よりお待ちしております!

    よろしくお願いいたします。,
    HOTELER
    
    Thank you for your reservation!

    Booking Details:
    - Stay Dates: ${data.stayDates}
    - Total Amount: ${data.totalStay}
    - Room Type: ${data.roomType}

    We look forward to welcoming you soon!

    Best regards,
    Hotel Team`,
  };

  // メール送信
  await transporter.sendMail(mailOptions);
});

app.post('/getUser', (req, res) => {
  const { email } = req.body;

  const query = 'SELECT * FROM Bookings WHERE email = ?';
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('データ取得エラー:', err);
      res.status(500).send('サーバーエラー');
    } else if (results.length === 0) {
      res.status(404).send('該当するデータが見つかりませんでした。');
    } else {
      res.json(results); // 全てのレコードを返す
    }
  });
});

//ログイン機能
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const query = "SELECT * FROM users WHERE email = ?";
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ message: "Internal server error." });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const user = results[0];

    // パスワードを比較
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).json({ message: "Internal server error." });
      }

      if (isMatch) {
        // ログイン成功時のレスポンス
        res.status(200).json({
          message: "Login successful!",
          user: {
            id: user.id,
            email: user.email,
            name: user.name, // 必要に応じて追加
          },
        });
      } else {
        // パスワードが一致しない場合
        res.status(401).json({ message: "Invalid email or password." });
      }
    });
  });
});

//ログイン後
app.get("/reservations", (req, res) => {
  const userEmail = req.query.email; // クエリパラメータでメールアドレスを受け取る

  const query = "SELECT * FROM Bookings WHERE email = ?";
  connection.query(query, [userEmail], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ message: "Internal server error." });
      return;
    }

    res.status(200).json({ reservations: results });
  });
});


//会員登録
app.post("/register1", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ message: "Internal server error." });
    }

    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    connection.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({ message: "Email already in use." });
        }
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "Internal server error." });
      }

      res.status(201).json({ message: "User registered successfully!" });
    });
  });
});

app.listen(3007, () => {
  console.log('バックエンドサーバーがポート3007で起動');
});



