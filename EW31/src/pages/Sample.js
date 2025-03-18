
import React, { useState, useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaBed, FaDollarSign, FaCommentDots } from "react-icons/fa";
import "../css/bookdetail.css";

export default function Sample() {
    const {
        guestName,
        checkInDate,
        checkOutDate,
        roomType,
        price,
        specialRequests,
      } = 550;
  return (
    <div className="reservation-detail">
    <header className="header">
      <h1>🌴 Tropical Paradise Hotel 🌴</h1>
      <p>Relax, unwind, and enjoy your stay in paradise.</p>
    </header>
    <div className="reservation-card">
      <h2>Reservation Details</h2>
      <div className="detail-item">
        <FaUser className="icon" />
        <strong>Guest Name:</strong>
        <span>{guestName}</span>
      </div>
      <div className="detail-item">
        <FaCalendarAlt className="icon" />
        <strong>Check-In:</strong>
        <span>{checkInDate}</span>
      </div>
      <div className="detail-item">
        <FaCalendarAlt className="icon" />
        <strong>Check-Out:</strong>
        <span>{checkOutDate}</span>
      </div>
      <div className="detail-item">
        <FaBed className="icon" />
        <strong>Room Type:</strong>
        <span>{roomType}</span>
      </div>
      <div className="detail-item">
        <FaDollarSign className="icon" />
        <strong>Price:</strong>
        <span>${price}</span>
      </div>
      <div className="detail-item">
        <FaCommentDots className="icon" />
        <strong>Special Requests:</strong>
        <span>{specialRequests || "None"}</span>
      </div>
    </div>
  </div>
  );
}
