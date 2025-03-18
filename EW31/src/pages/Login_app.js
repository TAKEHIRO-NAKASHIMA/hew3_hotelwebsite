import React, { useState } from "react";
import Login from "./Login";
import MyPage from "./Mypage";

function Login_app() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <MyPage user={user} /> : <Login onLogin={setUser} />}
    </div>
  );
}

export default Login_app;
