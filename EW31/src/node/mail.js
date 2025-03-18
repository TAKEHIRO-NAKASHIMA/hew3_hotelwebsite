const nodemailer = require('nodemailer');

// メール送信用のトランスポート作成
const transporter = nodemailer.createTransport({
  service: 'gmail', // 使用するメールサービス（例：Gmail）
  auth: {
    user: 'your-email@gmail.com', // 送信元のメールアドレス
    pass: 'your-email-password'   // メールアカウントのパスワード
  }
});

// メールの内容設定
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!'
};

// メール送信
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
