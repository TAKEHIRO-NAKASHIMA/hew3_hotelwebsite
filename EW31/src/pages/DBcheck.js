import React, { useEffect, useState } from 'react';

export default function DBcheck() {
  const [dbStatus, setDbStatus] = useState(null); // DB接続状況

  // 初回レンダリング時にDB接続チェックを実行
  useEffect(() => {
    fetch('http://localhost:3007/check-db') // Node.jsバックエンドのAPIを呼び出す
      .then((response) => response.json())
      .then((data) => setDbStatus(data.message))
      .catch((error) => setDbStatus('DB接続エラー: ' + error.message));
  }, []);

  return (
    <div>
      <h1>DB接続チェック</h1>
      <p>{dbStatus ? dbStatus : '確認中...'}</p>
    </div>
  );
}
