
import React, { useState } from "react";
import axios from "axios";
import { facility, roomItems } from "C:/EW31/src/components/data/Data";
import "../css/mailform.css";

import Heading from "../components/common/Heading";

export default function Booking() {
  const [email, setEmail] = useState("");
  const [userDataList, setUserDataList] = useState([]);
  const [roomDataList, setRoomDataList] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setUserDataList([]);
    setRoomDataList([]);
    try {
      const response = await axios.post("http://localhost:3007/getUser", { email });
      const users = response.data;
      setUserDataList(users);

      const matchingRooms = users
        .map((user) => roomItems.find((room) => room.roomid === user.roomId))
        .filter(Boolean);
      setRoomDataList(matchingRooms);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("該当するデータが見つかりませんでした。");
      } else {
        setError("エラーが発生しました。");
      }
    }
  };


  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <div>
      <h1 className="mailform-h1">予約検索フォーム</h1>
      <input
        type="email"
        placeholder="予約したメールアドレスを入力してください"
        className="email_ipt"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        className="btn_mail" 
        onClick={handleSearch}>検索
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {roomDataList.length > 0 && (
        <div>
          <h2 className="head_mail">部屋情報:</h2>
          <div className="row g-4 div_wrap">
            {roomDataList.map((room, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={room.img} alt="img" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {room.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <h5>{room.name}</h5>
                    <p>{room.description}</p>
                    <a className="btn btn-primary" href={room.detailUrl}>
                      {room.yellowbtn}
                    </a>
                    {/* <a className="btn btn-dark" href={room.bookingUrl}>
                      {room.darkbtn}
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    </>
  );
}
