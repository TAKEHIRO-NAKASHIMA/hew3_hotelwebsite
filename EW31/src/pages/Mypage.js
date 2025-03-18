import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation , useNavigate} from "react-router-dom";

import { roomItems } from "C:/EW31/src/components/data/Data"; // roomItemsをインポート
import "../css/mypage.css"; // CSSファイルをインポート

export default function Mypage({ user }) {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setError(""); // エラーをリセット
        const response = await axios.get("http://localhost:3007/reservations", {
          params: { email: user.email },
        });

        // 取得した予約データと部屋データを紐づける
        const reservationsWithRoomDetails = response.data.reservations.map((reservation) => {
          const roomDetail = roomItems.find((room) => room.roomid === reservation.roomId);
          return roomDetail
            ? { ...reservation, roomDetails: roomDetail }
            : { ...reservation, roomDetails: null }; // 紐づけできなかった場合
        });

        setReservations(reservationsWithRoomDetails);
      } catch (error) {
        console.error("Error fetching reservations:", error);
        setError("予約情報の取得中にエラーが発生しました。");
      }
    };

    if (user?.email) {
      fetchReservations();
    }
  }, [user]);

  return (
    <div className="mypage-container">
  <h1 className="mypage-title">Welcome, {user.name || "Guest"}</h1>
  <h2 className="mypage-subtitle">予約詳細情報</h2>

  {error && <p className="mypage-error">{error}</p>}

  {reservations.length > 0 ? (
    <div className="reservation-list">
      {reservations.map((reservation) => (
        <div className="reservation-card" key={reservation.id}>
          {reservation.roomDetails ? (
            <>
              <img
                className="reservation-image"
                src={reservation.roomDetails.img}
                alt={reservation.roomDetails.name}
              />
              <div className="reservation-info">
                <h3>{reservation.roomDetails.name}</h3>
                <p>{reservation.roomDetails.description.slice(0, 50)}...</p>
                <p className="reservation-price">{reservation.roomDetails.price}</p>
              </div>
            </>
          ) : (
            <p className="missing-info">部屋情報が見つかりませんでした。</p>
          )}
          <p className="reservation-date">Date: {reservation.date}</p>
          <p className="reservation-status">Status: {reservation.status}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="no-reservations">No reservations found.</p>
  )}
</div>

  );
}
