import React, { useState, useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import "../css/ReservationComplete.css";

export default function Complete() {
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  // state からデータを取得
  const { stayDates, totalStay, roomType } = location.state || {};


  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className="reservation-complete">
    <div className="background"></div>
    <div className={`palm-tree ${startAnimation ? "sway" : ""}`}></div> {/* ヤシの木のアニメーション */}
    <div className="content">
      <h1>予約が完了しました！</h1>
      <div className="details">
        <h2>予約情報</h2>
        <p><strong>宿泊日　:　{stayDates}</strong> </p>
        <p><strong>部屋タイプ　:　{roomType}</strong> </p>
        <p><strong>料金　:　{totalStay}</strong> </p>
      </div>
      <div className="actions">
        <button onClick={() => navigate("/")}>ホームに戻る</button>
        <button onClick={() => navigate("/booking")}>
          予約の確認・変更
        </button>
      </div>
    </div>
  </div>
  );
}
