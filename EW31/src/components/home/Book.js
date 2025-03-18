import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Book() {
  const navigate = useNavigate();

  // フォームデータを状態として管理
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  const handleClick = () => {
    // データを持ってページ遷移
    navigate('/SelectRooms', {
      state: {
        checkIn,
        checkOut,
        adults,
        children,
      },
    });
  };

  return (
    <>
      <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div className="date" id="date1" data-target-input="nearest">
                      <input
                        type="date"
                        className="form-control datetimepicker-input"
                        placeholder="Check in"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="date" id="date2" data-target-input="nearest">
                      <input
                        type="date"
                        className="form-control datetimepicker-input"
                        placeholder="Check out"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select
                      className="form-select"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                    >
                      <option value="" disabled selected>Adult</option>
                      <option value="1">Adult 1</option>
                      <option value="2">Adult 2</option>
                      <option value="3">Adult 3</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      className="form-select"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                    >
                      <option value="" disabled selected>Child</option>
                      <option value="1">Child 1</option>
                      <option value="2">Child 2</option>
                      <option value="3">Child 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100" onClick={handleClick}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
