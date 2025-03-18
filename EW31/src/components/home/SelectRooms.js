import React, { useState ,useEffect} from "react";
import { useLocation , useNavigate} from "react-router-dom";
import { FaSwimmer, FaSpa, FaBicycle, FaConciergeBell, FaCar, FaWifi, FaStore } from "react-icons/fa";
// import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import "/EW31/src/css/ViewDetail.css";
import "/EW31/src/css/SelectRoom.css";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";


export default function SelectRoom() {
    const navigate = useNavigate();

  const location = useLocation();

  // フォームデータを状態として管理
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [roomid, setRoomId] = useState("");


  useEffect(() => {
    // location.state から値を取得して状態を更新
    if (location.state) {
      const { checkIn, checkOut, adults, children } = location.state;
      setCheckIn(checkIn || "");
      setCheckOut(checkOut || "");
      setAdults(adults || "");
      setChildren(children || "");
    }
  }, [location.state]); 
    // const location = useLocation();
    // const { checkIn, checkOut, adults, children } = location.state || {};

  
      const handleClick = (roomId,price) => {
        // データを持ってページ遷移
        navigate('/BookCheckPage', {
          state: {
            checkIn,
            checkOut,
            adults,
            children,
            roomid: roomId,
            price,
          },
        });
      };
    
      
    return (
      <>
        <div className="container-xxl py-5">
          <div className="container">
            <CommonHeading
              heading="BookRooms"
              title="Select Rooms"

            />
            <div className="row g-4">
            </div>


            <div className="room-selection">
      {/* Header Section */}
      <header className="header-container2">
  <div className="guest-section2">
    <span className="section-title">guest</span>
    <div className="guest-info2">
      <label className="label">
        大人：
        <input
          type="number"
          className="guest-input"
          value={adults}
          onChange={(e) => setAdults(e.target.value)} // ステート管理
        />
        人
      </label>
      <label className="label">
        子供：
        <input
          type="number"
          className="guest-input"
          value={children}
          onChange={(e) => setChildren(e.target.value)} // ステート管理
        />
        人
      </label>
    </div>
  </div>

  <div className="check-section">
    <div className="check-in">
      <span className="section-title">check in</span>
      <label className="date">

        <input
          type="date"
          className="date-input"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)} // ステート管理
        />
      </label>
    </div>
    <div className="check-out">
      <span className="section-title">check out</span>
      <label className="date">

        <input
          type="date"
          className="date-input"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)} // ステート管理
        />
      </label>
    </div>
  </div>
</header>


      {/* Title */}
      <h1 className="title">部屋の選択</h1>

      {/* Main Content */}
      <div className="main-content">
        {/* Room Selection */}
        <section className="room-list">
  <h2 className="sub-title">Select room</h2>
  {roomItems.map((item) => (
    <div className="room-card" key={item.id}>
      <img src={item.img} alt={item.name} className="room-image" />
      <div className="room-details">
        <h3 className="room-name">{item.name}</h3>
        <p className="room-info">
          {item.beds} bed &nbsp; {item.baths} bath &nbsp; {item.wifi && "Wifi"}
        </p>
        <p className="room-description">一泊当たり税金および手数料を除く</p>
        <p className="room-price">{item.price}</p>
        <button
          className="reserve-button"
          onClick={() => handleClick(item.roomid, item.price)} // roomid を渡す
        >
          今すぐ予約
        </button>
      </div>
    </div>
  ))}
</section>


        {/* Reasons to Book */}
        <aside className="reasons-to-book">
          <h2 className="reasons-title">予約する理由</h2>
          <ul className="reasons-list">
            <li>
              <FaSwimmer /> 2つのスイミングプール、ホットタブ、サンデッキ
            </li>
            <li>
              <FaSpa /> 無料の毎日の屋外ヨガクラス
            </li>
            <li>
              <FaBicycle /> 無料のビーチバイクレンタル
            </li>
            <li>
              <FaConciergeBell /> コンシェルジュサービス
            </li>
            <li>
              <FaCar /> セルフ＆バレーパーキング
            </li>
            <li>
              <FaWifi /> 高速WiFiインターネット
            </li>
            <li>
              <FaStore /> 敷地内のサンドリーショップ
            </li>
          </ul>
        </aside>
      </div>
    </div>
            
          </div>
        </div>
      </>
    );
  }
  