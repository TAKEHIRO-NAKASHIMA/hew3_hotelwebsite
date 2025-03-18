import React from "react";
import { useNavigate } from 'react-router-dom';
import "/EW31/src/css/ViewDetail.css";
import CommonHeading from "../common/CommonHeading";
import Slider2 from "./Slider2";

export default function ViewDetails2() {
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
              title="Executive Suite"
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
                      さらに上質なひとときをお求めの方へ。<br></br>
                      Ocean View Suiteは、贅沢な広さと豪華な設備が魅力のお部屋です。<br></br>
                      広さ: たっぷりとした空間で、最大4名様まで快適にご宿泊いただけます。<br></br>
                      ベッドタイプ: 高級キングサイズベッドとシックなソファで、最高のリラクゼーションをお約束します。<br></br>
                      景観: 大きな窓から広がるパノラマオーシャンビュー。美しい海を一望しながら、贅沢なひとときをお楽しみいただけます。<br></br>
                      アメニティ: プレミアムバスアメニティ、24時間対応のルームサービス、無料Wi-Fi、55インチの大画面テレビ、そして豪華なバスルームを完備。<br></br>
                      特別な設備: 専用ラウンジエリアとプライベートバルコニー。朝のコーヒーを楽しみながら、ゆったりとした時間をお過ごしください。<br></br>
                      ビーチやプールへのアクセスが便利な立地に加え、ワンランク上のサービスを提供いたします。<br></br>
                      Ocean View Suiteで、非日常的な贅沢を体験してください。
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
  