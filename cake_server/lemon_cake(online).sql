-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 172.81.238.103
-- Generation Time: 2019-01-25 06:43:49
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lemon_cake`
--


set names utf8;
drop database if EXISTS lemon_cake;
CREATE database lemon_cake CHARSET=utf8;
use lemon_cake;

-- --------------------------------------------------------

--
-- 表的结构 `cake_all`
--

CREATE TABLE `cake_all` (
  `caid` int(11) NOT NULL,
  `title` varchar(25) DEFAULT NULL,
  `headerImg` varchar(255) DEFAULT NULL,
  `imgList` varchar(1000) DEFAULT NULL,
  `descr` varchar(50) DEFAULT NULL,
  `specs` varchar(500) DEFAULT NULL,
  `alert` varchar(1000) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `saleTotal` varchar(25) DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  `classType` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cake_all`
--

INSERT INTO `cake_all` (`caid`, `title`, `headerImg`, `imgList`, `descr`, `specs`, `alert`, `comments`, `saleTotal`, `star`, `classType`) VALUES
(1, '生日蜡烛', 'http://172.81.238.103:3002/img/candle01.png', '[{\"url\":\"http://172.81.238.103:3002/img/candle01.png\"},{\"url\":\"http://172.81.238.103:3002/img/candle02.png\"},{\"url\":\"http://172.81.238.103:3002/img/candle03.png\"},{\"url\":\"http://172.81.238.103:3002/img/candle04.png\"}]', '生日蜡烛', '[{\"spec\":\"1支\",\"oldPrice\":\"10.00\",\"discount\":\"8.5\",\"total\":\"130\"}]', '[{\"value\":\"一经售出，除质量问题，不退不换\"}]', '1', '925', 100, 8),
(2, '贺寿蛋糕001', 'http://172.81.238.103:3002/img/birthday01.png', '[{\"url\":\"http://172.81.238.103:3002/img/birthday01.png\"},{\"url\":\"http://172.81.238.103:3002/img/birthday02.png\"},{\"url\":\"http://172.81.238.103:3002/img/birthday03.png\"},{\"url\":\"http://172.81.238.103:3002/img/birthday04.png\"}]', '贺寿蛋糕多种尺寸可选', '[{\"spec\":\"6英寸\",\"oldPrice\":\"168\",\"discount\":\"8.0\",\"total\":\"30\"},{\"spec\":\"8英寸\",\"oldPrice\":\"218\",\"discount\":\"8.0\",\"total\":\"40\"},{\"spec\":\"12英寸\",\"oldPrice\":\"318\",\"discount\":\"8.0\",\"total\":\"50\"}]', '[{\r\n	\"value\": \"乳汁奶油水果，内含奶油\"\r\n}, {\r\n	\"value\": \"规格: 圆形（6英寸，8英寸，12英寸）可选\"\r\n}, {\r\n	\"value\": \"生产日期: 当天裱花制作\"\r\n}, {\r\n	\"value\": \"保存须知: 冷藏保存\"\r\n}, {\r\n	\"value\": \"免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买\"\r\n}, {\r\n	\"value \": \"可免费在蛋糕上写6个字； 如需卡片,请另行购买\"\r\n}, {\r\n	\"value \": \"免费提供包装\"\r\n}, {\r\n	\"value \": \"下单后第二天制作,请提前一天下单\"\r\n}]', '1', '920', 85, 1),
(3, '情侣蛋糕001', 'http://172.81.238.103:3002/img/lover01.png', '[{\"url\":\"http://172.81.238.103:3002/img/lover01.png\"},{\"url\":\"http://172.81.238.103:3002/img/lover02.png\"},{\"url\":\"http://172.81.238.103:3002/img/lover03.png\"},{\"url\":\"http://172.81.238.103:3002/img/lover04.png\"}]', '情侣蛋糕多种尺寸可选', '[{\"spec\":\"6英寸\",\"oldPrice\":\"168\",\"discount\":\"8.5\",\"total\":\"30\"},{\"spec\":\"8英寸\",\"oldPrice\":\"218\",\"discount\":\"8.5\",\"total\":\"40\"},{\"spec\":\"12英寸\",\"oldPrice\":\"318\",\"discount\":\"8.5\",\"total\":\"50\"}]', '[{\r\n	\"value\": \"乳汁奶油水果，内含奶油\"\r\n}, {\r\n	\"value\": \"规格: 圆形（6英寸，8英寸，12英寸）可选\"\r\n}, {\r\n	\"value\": \"生产日期: 当天裱花制作\"\r\n}, {\r\n	\"value\": \"保存须知: 冷藏保存\"\r\n}, {\r\n	\"value\": \"免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买\"\r\n}, {\r\n	\"value \": \"可免费在蛋糕上写6个字； 如需卡片,请另行购买\"\r\n}, {\r\n	\"value \": \"免费提供包装\"\r\n}, {\r\n	\"value \": \"下单后第二天制作,请提前一天下单\"\r\n}]', '1', '926', 75, 2),
(4, '儿童礼物001', 'http://172.81.238.103:3002/img/gift01.png', '[{\"url\":\"http://172.81.238.103:3002/img/gift01.png\"},{\"url\":\"http://172.81.238.103:3002/img/gift02.png\"},{\"url\":\"http://172.81.238.103:3002/img/gift03.png\"},{\"url\":\"http://172.81.238.103:3002/img/gift04.png\"}]', '儿童礼物', '[{\"spec\":\"1个\",\"oldPrice\":\"168\",\"discount\":\"8.5\",\"total\":\"30\"}]', '[{\"value\":\"一经售出，除质量问题，不退不换\"}]', '1', '926', 75, 7),
(5, '婚庆蛋糕001', 'http://172.81.238.103:3002/img/merry01.png', '[{\"url\":\"http://172.81.238.103:3002/img/merry01.png\"},{\"url\":\"http://172.81.238.103:3002/img/merry02.png\"},{\"url\":\"http://172.81.238.103:3002/img/merry03.png\"},{\"url\":\"http://172.81.238.103:3002/img/merry04.png\"}]', '婚庆蛋糕多种尺寸可选', '[{\"spec\":\"6英寸\",\"oldPrice\":\"168\",\"discount\":\"7.5\",\"total\":\"30\"},{\"spec\":\"8英寸\",\"oldPrice\":\"218\",\"discount\":\"7.0\",\"total\":\"40\"},{\"spec\":\"12英寸\",\"oldPrice\":\"318\",\"discount\":\"7.0\",\"total\":\"50\"}]', '[{\r\n	\"value\": \"乳汁奶油水果，内含奶油\"\r\n}, {\r\n	\"value\": \"规格: 圆形（6英寸，8英寸，12英寸）可选\"\r\n}, {\r\n	\"value\": \"生产日期: 当天裱花制作\"\r\n}, {\r\n	\"value\": \"保存须知: 冷藏保存\"\r\n}, {\r\n	\"value\": \"免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买\"\r\n}, {\r\n	\"value \": \"可免费在蛋糕上写6个字； 如需卡片,请另行购买\"\r\n}, {\r\n	\"value \": \"免费提供包装\"\r\n}, {\r\n	\"value \": \"下单后第二天制作,请提前一天下单\"\r\n}]', '1', '926', 75, 3),
(6, '鲜花001', 'http://172.81.238.103:3002/img/flower01.png', '[{\"url\":\"http://172.81.238.103:3002/img/flower01.png\"},{\"url\":\"http://172.81.238.103:3002/img/flower02.png\"},{\"url\":\"http://172.81.238.103:3002/img/flower03.png\"},{\"url\":\"http://172.81.238.103:3002/img/flower04.png\"}]', '鲜花', '[{\"spec\":\"1束\",\"oldPrice\":\"168\",\"discount\":\"6.5\",\"total\":\"30\"}]', '[{\"value\":\"一经售出，不退不换\"}]', '1', '926', 75, 6),
(7, '儿童蛋糕001', 'http://172.81.238.103:3002/img/child01.png', '[{\"url\":\"http://172.81.238.103:3002/img/child01.png\"},{\"url\":\"http://172.81.238.103:3002/img/child02.png\"},{\"url\":\"http://172.81.238.103:3002/img/child03.png\"},{\"url\":\"http://172.81.238.103:3002/img/child04.png\"}]', '儿童蛋糕多种尺寸可选', '[{\"spec\":\"6英寸\",\"oldPrice\":\"168\",\"discount\":\"7.5\",\"total\":\"30\"},{\"spec\":\"8英寸\",\"oldPrice\":\"218\",\"discount\":\"7.0\",\"total\":\"40\"},{\"spec\":\"12英寸\",\"oldPrice\":\"318\",\"discount\":\"7.0\",\"total\":\"50\"}]', '[{\r\n	\"value\": \"乳汁奶油水果，内含奶油\"\r\n}, {\r\n	\"value\": \"规格: 圆形（6英寸，8英寸，12英寸）可选\"\r\n}, {\r\n	\"value\": \"生产日期: 当天裱花制作\"\r\n}, {\r\n	\"value\": \"保存须知: 冷藏保存\"\r\n}, {\r\n	\"value\": \"免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买\"\r\n}, {\r\n	\"value \": \"可免费在蛋糕上写6个字； 如需卡片,请另行购买\"\r\n}, {\r\n	\"value \": \"免费提供包装\"\r\n}, {\r\n	\"value \": \"下单后第二天制作,请提前一天下单\"\r\n}]', '1', '925', 100, 4),
(8, '早餐糕点001', 'http://172.81.238.103:3002/img/breakfast01.png', '[{\"url\":\"http://172.81.238.103:3002/img/breakfast01.png\"},{\"url\":\"http://172.81.238.103:3002/img/breakfast02.png\"},{\"url\":\"http://172.81.238.103:3002/img/breakfast03.png\"},{\"url\":\"http://172.81.238.103:3002/img/breakfast04.png\"}]', '早餐糕点', '[{\"spec\":\"1份\",\"oldPrice\":\"15.00\",\"discount\":\"8.0\",\"total\":\"30\"}]', '[{\"value\":\"一经售出，不退不换\"}]', '1', '926', 75, 5),
(9, '贺寿蛋糕001', 'http://172.81.238.103:3002/upload/15476260208583018.png', '[{\"url\":\"http://172.81.238.103:3002/upload/15476260236113098.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547626026296494.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15476260299438471.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15476260328384905.png\"}]', '贺寿蛋糕多种尺寸可选', '[{\"spec\":\"6英寸\",\"oldPrice\":\"123\",\"discount\":\"8.0\",\"total\":\"12\"},{\"spec\":\"8英寸\",\"oldPrice\":\"200\",\"discount\":\"7.5\",\"total\":\"13\"},{\"spec\":\"12英寸\",\"oldPrice\":\"268\",\"discount\":\"7.0\",\"total\":\"14\"}]', '[{\"value\":\"乳汁奶油水果，内含奶油\"},{\"value\":\"规格: 圆形（6英寸，8英寸，12英寸）可选\"},{\"value\":\"生产日期: 当天裱花制作\"},{\"value\":\"保存须知: 冷藏保存\"},{\"value\":\"免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买\"},{\"value\":\"可免费在蛋糕上写6个字； 如需卡片,请另行购买\"},{\"value\":\"免费提供包装\"},{\"value\":\"下单后第二天制作,请提前一天下单\"}]', '0', '100', 75, 1),
(10, '粉色之恋', 'http://172.81.238.103:3002/upload/15477886772954522.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547788721365871.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477887442236563.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477887483016196.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477887520362309.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477887571525449.png\"}]', '粉色之恋（结婚送女）', '[{\"spec\":\"1束\",\"oldPrice\":\"520\",\"discount\":\"8.5\",\"total\":\"10\"}]', '[{\"value\":\"每束520支\"},{\"value\":\"包含一张卡片\"},{\"value\":\"请提前一天订购\"},{\"value\":\"包送到家\"}]', '0', '100', 75, 6),
(11, '热恋的心', 'http://172.81.238.103:3002/upload/1547789193972988.png', '[{\"url\":\"http://172.81.238.103:3002/upload/15477891988672081.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477892027555687.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477892155684755.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477892208204151.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"1000\",\"discount\":\"8\",\"total\":\"8\"}]', '[{\"value\":\"1000支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(12, '心爱', 'http://172.81.238.103:3002/upload/15477894426391254.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"520\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(13, '火热的心', 'http://172.81.238.103:3002/upload/1547789549525606.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"520\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(14, '给妈妈的爱', 'http://172.81.238.103:3002/upload/15477895722149170.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(15, 'MYLOVE', 'http://172.81.238.103:3002/upload/15477896001979116.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(16, '康乃馨', 'http://172.81.238.103:3002/upload/15477896291576504.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(17, '永远的爱', 'http://172.81.238.103:3002/upload/15477896646062141.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(18, '我的最爱', 'http://172.81.238.103:3002/upload/15477896823474588.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(19, '结婚吧', 'http://172.81.238.103:3002/upload/15477897095407976.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(20, '百年好合', 'http://172.81.238.103:3002/upload/1547789731170880.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(21, '五彩缤纷', 'http://172.81.238.103:3002/upload/15477897677003818.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(22, '你是我的小太阳', 'http://172.81.238.103:3002/upload/15477897977413758.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(23, '纷纷的爱', 'http://172.81.238.103:3002/upload/15477898230031093.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789457271292.png\"},{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6),
(24, '甜甜蜜蜜', 'http://172.81.238.103:3002/upload/15477898436109868.png', '[{\"url\":\"http://172.81.238.103:3002/upload/1547789461633839.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894656673797.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477894696658428.png\"},{\"url\":\"http://172.81.238.103:3002/upload/15477898515214776.png\"}]', '红色玫瑰', '[{\"spec\":\"1束\",\"oldPrice\":\"500\",\"discount\":\"8.5\",\"total\":\"8\"}]', '[{\"value\":\"520支玫瑰\"},{\"value\":\"含卡片一张，可备注贺词\"},{\"value\":\"包送到家\"},{\"value\":\"价格含包装\"},{\"value\":\"一经售出，不退不换\"}]', '0', '100', 75, 6);

-- --------------------------------------------------------

--
-- 表的结构 `cake_comment`
--

CREATE TABLE `cake_comment` (
  `ccid` int(11) NOT NULL,
  `caid` int(11) DEFAULT NULL,
  `user_name` varchar(25) DEFAULT NULL,
  `ctime` datetime DEFAULT NULL,
  `content` varchar(120) DEFAULT NULL,
  `classType` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cake_comment`
--

INSERT INTO `cake_comment` (`ccid`, `caid`, `user_name`, `ctime`, `content`, `classType`) VALUES
(1, 1, 'dd', '2019-01-16 15:40:27', '111', 1),
(2, 1, 'dd', '2019-01-16 15:40:27', '112', 2),
(3, 1, 'dd', '2019-01-16 15:40:27', '113', 3),
(4, 1, 'dd', '2019-01-16 15:40:27', '114', 4),
(5, 1, 'dd', '2019-01-16 15:40:27', '115', 5),
(6, 1, 'dd', '2019-01-16 15:40:28', '116', 6),
(7, 1, 'dd', '2019-01-16 15:40:28', '117', 7),
(8, 1, 'dd', '2019-01-16 15:40:28', '118', 8),
(9, 1, 'dd', '2019-01-16 15:40:28', '119', 9),
(10, 2, 'dd', '2019-01-16 15:40:28', '1110', 1),
(11, 1, 'dd', '2019-01-16 15:40:28', '1111', 2),
(12, 1, 'dd', '2019-01-16 15:40:28', '1112', 3),
(13, 1, 'dd', '2019-01-16 15:40:28', '1113', 4),
(14, 1, 'dd', '2019-01-16 15:40:28', '1114', 5),
(15, 1, 'dd', '2019-01-16 15:40:28', '1115', 6),
(16, 1, 'dd', '2019-01-16 15:40:28', '1116', 7),
(17, 1, 'dd', '2019-01-16 15:40:28', '111', 8),
(18, 1, 'dd', '2019-01-16 15:40:28', '112', 9),
(19, 1, 'dd', '2019-01-16 15:40:28', '113', 1),
(20, 1, 'dd', '2019-01-16 15:40:28', '114', 2),
(21, 1, 'dd', '2019-01-16 15:40:28', '115', 3),
(22, 1, 'dd', '2019-01-16 15:40:28', '116', 4),
(23, 1, 'dd', '2019-01-16 15:40:29', '117', 5),
(24, 1, 'dd', '2019-01-16 15:40:29', '118', 6),
(25, 1, 'dd', '2019-01-16 15:40:29', '119', 7),
(26, 1, 'dd', '2019-01-16 15:40:29', '1110', 8),
(27, 1, 'dd', '2019-01-16 15:40:29', '1111', 9),
(28, 1, 'dd', '2019-01-16 15:40:29', '1112', 1),
(29, 1, 'dd', '2019-01-16 15:40:29', '1113', 2),
(30, 1, 'dd', '2019-01-16 15:40:29', '1114', 3),
(31, 1, 'dd', '2019-01-16 15:40:29', '1115', 4),
(32, 1, 'dd', '2019-01-16 15:40:29', '1116', 5);

-- --------------------------------------------------------

--
-- 表的结构 `cake_discount`
--

CREATE TABLE `cake_discount` (
  `cdid` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `ctime` date DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `desc1` varchar(255) DEFAULT NULL,
  `discount` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cake_discount`
--

INSERT INTO `cake_discount` (`cdid`, `title`, `ctime`, `img_url`, `desc1`, `discount`) VALUES
(1, '年终大促！！', '2018-10-10', 'http://172.81.238.103:3002/img/timg.gif', '一年仅一次，年度最优惠', '6.8折'),
(2, '今日特惠！！', '2018-10-11', 'http://172.81.238.103:3002/img/carousel05.png', '七彩饼干', '5折'),
(3, '本周主打！！', '2018-10-13', 'http://172.81.238.103:3002/img/carousel03.png', '玫瑰情怀', '8.0折'),
(4, '人气商品！！', '2018-10-14', 'http://172.81.238.103:3002/img/carousel04.png', '小矮人', '6.8折'),
(5, '今日特惠！！', '2018-10-15', 'http://172.81.238.103:3002/img/carousel07.png', '多层方块', '8.8折'),
(6, '今日特惠！！', '2018-10-10', 'http://172.81.238.103:3002/img/carousel06.png', '慕斯双拼', '7.8折'),
(7, '过年了，发红包了！！', '2019-01-05', 'http://172.81.238.103:3002/img/carousel09.png', '抢的是红包，更是福气！！', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `cake_user`
--

CREATE TABLE `cake_user` (
  `cuid` int(11) NOT NULL,
  `wx_openid` varchar(255) DEFAULT NULL,
  `upwd` varchar(255) DEFAULT NULL,
  `isManager` tinyint(1) DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cake_user`
--

INSERT INTO `cake_user` (`cuid`, `wx_openid`, `upwd`, `isManager`, `uname`, `avatar`) VALUES
(1, 'oFGQN5IbdI1sWQSt4ZL-I3UlKXec', '123456', 1, '管理员', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cake_all`
--
ALTER TABLE `cake_all`
  ADD PRIMARY KEY (`caid`);

--
-- Indexes for table `cake_comment`
--
ALTER TABLE `cake_comment`
  ADD PRIMARY KEY (`ccid`);

--
-- Indexes for table `cake_discount`
--
ALTER TABLE `cake_discount`
  ADD PRIMARY KEY (`cdid`);

--
-- Indexes for table `cake_user`
--
ALTER TABLE `cake_user`
  ADD PRIMARY KEY (`cuid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cake_all`
--
ALTER TABLE `cake_all`
  MODIFY `caid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用表AUTO_INCREMENT `cake_comment`
--
ALTER TABLE `cake_comment`
  MODIFY `ccid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用表AUTO_INCREMENT `cake_discount`
--
ALTER TABLE `cake_discount`
  MODIFY `cdid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `cake_user`
--
ALTER TABLE `cake_user`
  MODIFY `cuid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
