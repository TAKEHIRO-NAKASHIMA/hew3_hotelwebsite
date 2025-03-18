import React from "react";
import { useNavigate } from 'react-router-dom';
import "/EW31/src/css/ViewDetail.css";
import CommonHeading from "../common/CommonHeading";
import Slider2 from "./Slider2";

export default function ViewDetails3() {
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
              title="Super Deluxe"
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
                      最上級の贅沢を求めるお客様にふさわしい、究極の贅沢空間が広がるPresidential Suite。<br></br>
                      全ての面で優れた品質と非日常的な体験をお届けします。<br></br>
                      広さ: 300㎡以上の広さを誇り、最大6名様までご宿泊可能。贅沢なスペースで、ゆったりとした滞在をお楽しみください。<br></br>
                      ベッドタイプ: 高級キングサイズベッドと特別設計の寝具で、至福の眠りをご提供します。<br></br>
                      景観: 広大なプライベートテラスからの絶景。海と空が一体となる美しいパノラマビューをお楽しみいただけます。<br></br>
                      アメニティ: プレミアムスパバス、ジャグジー、24時間コンシェルジュサービス、専用ワークスペース、<br></br>
                      高速インターネット、最先端のエンターテインメントシステム。<br></br>
                      特別な設備: 完全なプライバシーを守る専用エントランス、プライベートダイニングルーム、<br></br>
                      専用フィットネスエリア、そしてオーシャンビューのインフィニティプールまで完備。<br></br>
                      この部屋では、ワンランク上の豪華さと細部にわたる贅沢を体験できます。<br></br>
                      Presidential Suiteで、真の優雅さと最高のサービスをお楽しみください。<br></br>
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
  