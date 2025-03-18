import React from "react";
import { useNavigate } from 'react-router-dom';
import "/EW31/src/css/ViewDetail.css";
import CommonHeading from "../common/CommonHeading";
import Slider2 from "./Slider2";

export default function ViewDetails() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/BookCheckPage'); // 遷移先のURLを指定
  };
    return (
      <>
        <div className="container-xxl py-5">
          <div className="container">
            <CommonHeading
              heading="Our Rooms"
              title="Junior-Rooms"
              subtitle="Explore Our"
            />
            <div className="row g-4">
            </div>
                <Slider2 />
                <div className="details-section">
                  <div className="details-flex">
                    {/* 左側: 説明文 */}
                    <div className="description-container">
                      <p className="description">
                      ようこそ、ハワイの自然と調和したリラックス空間へ。<br></br>
                      Junior Roomは、広々とした快適さと南国の魅力が詰まったお部屋です。<br></br>
                        広さ: ゆったりとしたスペースで、最大2名様までご宿泊可能。<br></br>
                        ベッドタイプ: 柔らかく心地よいクイーンサイズベッドを完備。<br></br>
                        景観: バルコニーからは美しい海の景色やトロピカルガーデンを一望。<br></br>
                      プールやビーチにアクセスしやすい立地に加え、朝は波の音で目覚め、夜は星空の下でくつろぐひとときをお楽しみください。<br></br>
                      Junior Roomで、あなたの特別な旅をさらに特別なものに。
                      </p>
                    </div>
                    {/* 右側: 詳細情報テーブル */}
                    <div className="details-card">
                      <table className="details-table">
                        <tbody>
                          <tr>
                            <td className="details-label">
                              <i className="fas fa-bed"></i> Rooms
                            </td>
                            <td className="details-value">Junior Suits</td>
                          </tr>
                          <tr>
                            <td className="details-label">
                              <i className="fas fa-couch"></i> Bed Type
                            </td>
                            <td className="details-value">1 King &amp; 2 Double</td>
                          </tr>
                          <tr>
                            <td className="details-label">
                              <i className="fas fa-ruler-combined"></i> Room Size
                            </td>
                            <td className="details-value">750 ft²</td>
                          </tr>
                          <tr>
                            <td className="details-label">
                              <i className="fas fa-eye"></i> View
                            </td>
                            <td className="details-value">ocean view</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* 下部: ボタン */}
                </div>
                <div className="button-container">
                    <button onClick={handleClick} className="book-now">BOOK NOW</button>
                  </div>

            
          </div>
        </div>
      </>
    );
  }
  