
import React, { useState, useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import axios from "axios"
import { FaUser, FaCalendarAlt, FaBed, FaDollarSign, FaCommentDots } from "react-icons/fa";
import "../css/Login.css";

export default function Login({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showRegister, setShowRegister] = useState(false);
    const navigate = useNavigate();


    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3007/login", {
          email,
          password,
        });
        setMessage(response.data.message);
        onLogin(response.data.user); // ログイン成功時に親コンポーネントにユーザー情報を渡す
      } catch (error) {
        setMessage("Login failed. Please try again.");
      }
    };
    const handleClick = () => {
      // データを持ってページ遷移
      navigate('/register', {
      });
    };

  return (
    <div className="login-container">
  <div className="login-card">
    <h1>🌴 ログインページ 🌴</h1>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="メールアドレス"
        className="pass_login"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="パスワード"
        className="pass_login"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="login_btn" type="submit">ログイン</button>
    </form>
    <p>
      アカウントをお持ちでないですか？{" "}
      <button onClick={() => handleClick()}>こちらで登録</button>
    </p>

    {message && <p>{message}</p>}
  </div>
</div>

  );
}
