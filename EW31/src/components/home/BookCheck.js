import React, { useState ,useEffect} from "react";
import { useLocation , useNavigate} from "react-router-dom";
import axios from "axios";
import "/EW31/src/css/ViewDetail.css";
import "/EW31/src/css/BookCheck.css";
import CommonHeading from "../common/CommonHeading";

export default function BookChecks() {
  // フォームデータの状態管理
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    stayDates: "2024/12/11〜2024/12/13",
    totalStay: "11,000円",
    cardNumber:"",
    expiryMonth:  "",
    expiryYear:"",
    cvv:"",
    roomid:"",

  });
    const navigate = useNavigate();

  const location = useLocation();

  // フォームデータを状態として管理
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [roomid, setRoomId] = useState("");
  const [price, setPrice] = useState("");

  

  useEffect(() => {
    // location.state から値を取得して状態を更新
    if (location.state) {
      const { checkIn, checkOut, adults, children , roomid,price } = location.state;
      setCheckIn(checkIn || "");
      setCheckOut(checkOut || "");
      setAdults(adults || "");
      setChildren(children || "");
      setRoomId(roomid || "");
      setPrice(price || "");
    }
  }, [location.state]); 

  useEffect(() => {
    // checkIn と checkOut を結合して stayDates を設定
    if (checkIn && checkOut) {
      setFormData((prevData) => ({
        ...prevData,
        stayDates: `${checkIn}〜${checkOut}`,
      }));
    }
  }, [checkIn, checkOut]); // checkIn, checkOut が変更されたときに実行

  // 入力値の変更を反映
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const payload = {
      firstName: formData.firstName, // 名
      lastName: formData.lastName,   // 姓
      email: formData.email,         // メールアドレス
      phone: formData.phone,         // 電話番号
      country: formData.country,     // 国
      address: formData.address,     // 住所
      checkIn: checkIn,              // チェックイン日
      checkOut: checkOut,            // チェックアウト日
      adults: Number(adults),        // 大人の人数
      children: Number(children),    // 子供の人数
      stayDates: formData.stayDates, // 宿泊日程
      totalStay: formData.totalStay, // 合計金額
      roomType: "Junior Room",       // 部屋タイプ (固定値として指定)
      policyAgreement: true,         // ポリシーの同意 (固定値として指定)
      payment: {
        cardNumber: formData.cardNumber, // カード番号 (実際には入力から取得)
        expiryMonth: formData.expiryMonth,                 // 有効期限 (月)
        expiryYear: formData.expiryYear,                // 有効期限 (年)
        cvv:formData.cvv ,                        // CVVコード (実際には入力から取得)
      },
      roomid:roomid,                 // 部屋ID

    };
  
    try {
      const response = await axios.post("http://localhost:3007/register", payload, {
        headers: { "Content-Type": "application/json" },
      });
      alert("登録が成功しました: " + response.data);
      navigate("/Complete", {
        state: {
          stayDates: formData.stayDates,
          totalStay: formData.totalStay,
          roomType: "Junior Room",
        },
      });
    } catch (error) {
      console.error("登録エラー:", error.response?.data || error.message);
      alert("登録に失敗しました。");
    }
  };
  
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="BookRooms"
            title="Junior-Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4"></div>

          <div className="booking-container">
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


            <main className="main-content">
              <section className="guest-info">
                <h2>お客様情報</h2>
                <p className="section-subtitle">
                  特に記載がない限り、すべての項目が必須です。
                </p>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="名"
                      className="input-half"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="姓"
                      className="input-half"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="メールアドレス"
                      className="input-half"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="tel"
                      placeholder="電話番号"
                      className="input-half"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="国"
                    className="input-full"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="住所"
                    className="input-full"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </form>
              </section>

              <section className="room-summary">
                <div className="image-placeholder">
                  <img
                    src="../assets/img/room-1.jpg"
                    width="330"
                    height="150"
                    alt="部屋"
                  />
                </div>
                <div className="room-details">
                  <p className="room-text">
                    歴史的なダブルルーム、ゲストルーム、ダブルベッド2台、リゾートビュー、ヒストリックウィング
                  </p>
                  <a href="/ViewDetail" className="room-link">
                    部屋の詳細を見る
                  </a>
                </div>
                <div className="total-price">合計: {price}</div>
              </section>
            </main>

            <section className="payment-info">
  <h2>お支払い情報</h2>
  <p className="section-subtitle">
    チェックイン時に有効な支払い方法を提示する必要があります。
  </p>
  <form>
    <input
      type="text"
      placeholder="クレジット/デビットカード番号"
      className="input-full"
      name="cardNumber"
      value={formData.cardNumber}
      onChange={handleChange}
    />
    <div className="form-group">
      <input
        type="text"
        placeholder="有効期限（月）"
        className="input-half"
        name="expiryMonth"
        value={formData.expiryMonth}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="有効期限（年）"
        className="input-half"
        name="expiryYear"
        value={formData.expiryYear}
        onChange={handleChange}
      />
    </div>
    <input
      type="text"
      placeholder="CVV番号"
      className="input-half"
      name="cvv"
      value={formData.cvv}
      onChange={handleChange}
    />
    <input
      type="text"
      placeholder="部屋番号"
      name="roomid"
      className="input-half"
      value={roomid}
      onChange={(e) => setRoomId(e.target.value)} // ステート管理
    />
  </form>
</section>

            <button
              className="btn btn-primary w-100 mt-3 btn2"
              onClick={handleSubmit}
            >
              登録完了
            </button>

            <section className="messages">
              <h3>ホテルからのお知らせ</h3>
              <p className="message-text">
                早期チェックアウトの場合、1泊分の料金と適用される税金が課されます。
              </p>
              <p className="message-text">
                毎日のリゾート料金が全ての滞在に追加されます。この料金はポイントでは支払えず、チェックイン時にお支払いいただく必要があります。
              </p>
            </section>

            <section className="policy">
              <h3>ホテルポリシー</h3>
              <p className="policy-text">
                2024年12月16日午後11時59分（現地ホテル時間、到着日の3日前）までであれば、キャンセル料なしで予約をキャンセルできます。この期限を過ぎてキャンセルされる場合は、559.20 USDのキャンセル料が発生します。事前払いをされた場合、その全額または一部を保持させていただきます。事前払いがない場合、クレジットカードに請求いたします。
              </p>
            </section>


          </div>
        </div>
      </div>
    </>
  );
}
