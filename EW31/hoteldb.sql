-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost:3307
-- 生成日時: 2025-03-20 10:10:18
-- サーバのバージョン： 10.4.32-MariaDB
-- PHP のバージョン: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `hoteldb`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `checkIn` date NOT NULL,
  `checkOut` date NOT NULL,
  `adults` int(11) DEFAULT 0,
  `children` int(11) DEFAULT 0,
  `stayDates` varchar(255) DEFAULT NULL,
  `totalStay` varchar(50) DEFAULT NULL,
  `creditCardNumber` varchar(255) DEFAULT NULL,
  `expirationMonth` int(11) DEFAULT NULL,
  `expirationYear` int(11) DEFAULT NULL,
  `cvv` int(11) DEFAULT NULL,
  `roomType` varchar(255) DEFAULT NULL,
  `bookingDate` datetime DEFAULT current_timestamp(),
  `policyAgreement` tinyint(1) DEFAULT 1,
  `roomId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- テーブルのデータのダンプ `bookings`
--

INSERT INTO `bookings` (`id`, `firstName`, `lastName`, `email`, `phone`, `country`, `address`, `checkIn`, `checkOut`, `adults`, `children`, `stayDates`, `totalStay`, `creditCardNumber`, `expirationMonth`, `expirationYear`, `cvv`, `roomType`, `bookingDate`, `policyAgreement`, `roomId`) VALUES
(1, '一翔', 'た', 'n.take-baske@outlook.com', '08088771234', '日本', 'sobue@gmail.com', '2024-12-07', '2024-12-14', 2, 1, '2024/12/11〜2024/12/13', '11,000円', 'xxxx-xxxx-xxxx-xxxx', 0, 0, 123, 'Junior Room', '2024-12-28 17:31:27', 1, NULL),
(2, '', '', '', '', NULL, NULL, '0000-00-00', '0000-00-00', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-01-01 17:53:31', 1, NULL),
(3, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-03', '2025-01-10', 2, 2, '2024/12/11〜2024/12/13', '11,000円', NULL, NULL, NULL, NULL, 'Junior Room', '2025-01-01 18:09:23', 1, NULL),
(4, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-04', '2025-01-02', 1, 1, '2024/12/11〜2024/12/13', '11,000円', NULL, NULL, NULL, NULL, 'Junior Room', '2025-01-01 18:16:55', 1, NULL),
(5, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-04', '2025-01-03', 2, 1, '2024/12/11〜2024/12/13', '11,000円', NULL, NULL, NULL, NULL, 'Junior Room', '2025-01-01 18:18:57', 1, 0),
(6, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-03', '2025-01-04', 2, 3, '2024/12/11〜2024/12/13', '11,000円', NULL, NULL, NULL, NULL, 'Junior Room', '2025-01-01 18:24:13', 1, 0),
(7, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-04', '2025-01-17', 2, 1, '2024/12/11〜2024/12/13', '11,000円', '1', 1, 1, 1, 'Junior Room', '2025-01-02 15:11:20', 1, 0),
(8, '', '', '', '', '', '', '2025-01-18', '2025-01-18', 1, 1, '2024/12/11〜2024/12/13', '11,000円', '', 0, 0, 0, 'Junior Room', '2025-01-02 15:22:57', 1, 1),
(9, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-18', '2025-01-18', 1, 1, '2024/12/11〜2024/12/13', '11,000円', '1', 1, 1, 1, 'Junior Room', '2025-01-02 15:34:30', 1, 1),
(10, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-03', '2025-01-10', 1, 1, '2024/12/11〜2024/12/13', '11,000円', '1', 1, 1, 1, 'Junior Room', '2025-01-02 15:35:29', 1, 1),
(11, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-03', '2025-01-11', 1, 1, '2024/12/11〜2024/12/13', '11,000円', '1', 1, 1, 1, 'Junior Room', '2025-01-02 15:46:45', 1, 1),
(12, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-04', '2025-01-06', 1, 1, '2024/12/11〜2024/12/13', '11,000円', '155555555', 2, 1, 1, 'Junior Room', '2025-01-03 15:38:02', 1, 1),
(13, '偉博', '中嶋', 'n.take-baske@outlook.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-11', '2025-01-17', 1, 1, '2025-01-11〜2025-01-17', '11,000円', '1', 1, 1, 4, 'Junior Room', '2025-01-03 15:43:04', 1, 1),
(14, '偉博', '中嶋', 'muscles20362@gmail.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-03', '2025-01-09', 1, 1, '2025-01-03〜2025-01-09', '11,000円', '1', 1, 1, 1, 'Junior Room', '2025-01-06 16:48:09', 1, 1),
(15, '偉博', '中嶋', 'muscles20362@gmail.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-01-09', '2025-01-18', 1, 1, '2025-01-09〜2025-01-18', '11,000円', '1', 1, 1, 1, 'Junior Room', '2025-01-06 16:58:59', 1, 1),
(16, '偉博', '中嶋', 'takenaka20362@gmail.com', '08088771234', '日本', '三重県', '2025-01-10', '2025-01-22', 1, 1, '2025-01-10〜2025-01-22', '11,000円', '1', 1, 1, 1, 'Junior Room', '2025-01-06 17:01:55', 1, 2),
(17, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '三重県津市久居野村町889-1', '2025-02-08', '2025-02-20', 1, 1, '2025-02-08〜2025-02-20', '11,000円', '1234123412341234', 7, 27, 111, 'Junior Room', '2025-02-01 16:38:02', 1, 1),
(18, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-02-01', '2025-02-08', 3, 2, '2025-02-01〜2025-02-08', '11,000円', '1111 1111 1111', 7, 25, 111, 'Junior Room', '2025-02-09 16:15:20', 1, 1),
(19, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-02-14', '2025-02-19', 1, 1, '2025-02-14〜2025-02-19', '11,000円', '1111 1111 1111 1111', 1, 27, 555, 'Junior Room', '2025-02-09 16:18:51', 1, 1),
(20, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-02-05', '2025-02-06', 1, 1, '2025-02-05〜2025-02-06', '11,000円', '1111 1111 1111 1111', 2, 25, 555, 'Junior Room', '2025-02-09 16:24:42', 1, 1),
(21, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-02-07', '2025-02-13', 2, 3, '2025-02-07〜2025-02-13', '11,000円', '1111 1111 1111 1111', 7, 29, 666, 'Junior Room', '2025-02-11 15:37:35', 1, 1),
(22, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-02-08', '2025-02-14', 1, 1, '2025-02-08〜2025-02-14', '11,000円', '1111 1111 1111 1111', 5, 28, 444, 'Junior Room', '2025-02-11 15:41:46', 1, 1),
(23, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-02-13', '2025-02-21', 1, 1, '2025-02-13〜2025-02-21', '11,000円', '1111 1111 1111 1111', 7, 25, 671, 'Junior Room', '2025-02-26 10:07:40', 1, 1),
(24, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-02-24', '2025-02-26', 1, 1, '2025-02-24〜2025-02-26', '11,000円', '1111 1111 1111 1111', 7, 25, 671, 'Junior Room', '2025-02-27 15:09:39', 1, 1),
(25, '中嶋', '偉博', 'takenaka20362@gmail.com', '08088771234', '日本', '愛知県名古屋市中区', '2025-03-28', '2025-03-31', 1, 2, '2025-03-28〜2025-03-31', '11,000円', '310482917', 11, 30, 498, 'Junior Room', '2025-03-10 10:16:07', 1, 2);

-- --------------------------------------------------------

--
-- テーブルの構造 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- テーブルのデータのダンプ `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, '', 'user@example.com', 'password123'),
(2, 'take', 'n.take-baske@outlook.com', '$2b$10$/.l.n5Qlb22HMBC.nhUEa.vSCFdc6N7RSiLekiftlCSH1WwuSK3Tm'),
(4, 'd', 'take@outlook.com', '$2b$10$lhK3oPhqKOsSGCWaTzwoguMGnE8RDX9uYLji.AM.WvdGpnevz8aG2'),
(6, 'なかしまたけひろ', 'takenaka20362@gmail.com', '$2b$10$meY/yzKutH8YU4QKPQVDheS2cS4sSBoup9QFBJ6bDFVbE/vjJ2rym');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- テーブルの AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
