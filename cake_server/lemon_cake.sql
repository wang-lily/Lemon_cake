set names utf8;
drop database if EXISTS lemon_cake;
CREATE database lemon_cake CHARSET=utf8;
use lemon_cake;


#1:进入库  lemon_cake
-- USE lemon_cake;
-- #2:创建表 xz_news
-- #技巧1:库名;表名;列表;全英文小写字母
-- CREATE TABLE xz_news(
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   title VARCHAR(50),
--   ctime DATETIME,
--   point INT,
--   img_url VARCHAR(255),
--   content VARCHAR(255) 
-- );
-- INSERT INTO xz_news VALUES(1,'123',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(2,'124',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(3,'1233',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(4,'124',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(5,'125',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(6,'126',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(7,'127',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(8,'128',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(9,'129',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(11,'1231',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(12,'1232',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(13,'1233',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(14,'1234',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(15,'1235',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(16,'1236',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(17,'1237',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(18,'1238',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(19,'1239',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(21,'12322',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(22,'12322',now(),0,
-- "http://23z20z4973.iask.in:40613/img/1.jpg","..");

#货币 小数计算误差
#价格 购物车合计 
#double DECIMAL(10,2)
#严格   将货币转换分单位  1.99 -> 199
#显示  1.99
#3:添加20条记录
#4:查询

#1:创建评论表 39
#   表名 几列 列名
#   cake_comment
#   id        INT        评论编号
#   nid       INT        评论所属新闻编号
#   user_name VARCHAR(25)评论人名称
#   ctime     DATETIME   时间
#   content   VARCHAR(120)内容

USE lemon_cake;
CREATE TABLE cake_comment(
  ccid INT PRIMARY KEY AUTO_INCREMENT,
  caid INT,
  user_name VARCHAR(25),
  ctime DATETIME,
  content VARCHAR(120)
);
#2:添加15条
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'111');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'112');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'113');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'114');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'115');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'116');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'117');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'118');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'119');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1110');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1111');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1112');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1113');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1114');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1115');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1116');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'111');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'112');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'113');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'114');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'115');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'116');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'117');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'118');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'119');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1110');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1111');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1112');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1113');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1114');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1115');
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1116');

-- CREATE TABLE xz_login(
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   uname VARCHAR(25) NOT NULL DEFAULT '',
--   upwd  VARCHAR(32) NOT NULL DEFAULT ''
-- );
-- INSERT INTO xz_login VALUES(null,'dd',md5('123'));
-- INSERT INTO xz_login VALUES(null,'tom',md5('123'));
-- INSERT INTO xz_login VALUES(null,'jerry',md5('123'));



#cake_all [cid;img_url;name;saleTotal;discount;price,star]
CREATE TABLE cake_all(
  caid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25),
  img_url VARCHAR(255),
  price    VARCHAR(255),
  comments        VARCHAR(255),
  discount     VARCHAR(25),
  saleTotal   VARCHAR(25),
  star    INT,
  #breakfast:5,birthday:1,candle:8,child:4,DIY:9,flower:6,gift:7,lover:2,merry:3
  cake_class  INT
);
INSERT INTO `cake_all` (`caid`, `img_url`, `name`, `saleTotal`, `discount`, `price`, `star`,`cake_class`,`comments`) VALUES
(null, 'http://23z20z4973.iask.in:40613/img/candle01.png', 'cake1', '925', '8.0', '28', 100,8,1),
(null, 'http://23z20z4973.iask.in:40613/img/candle02.png', 'cake2', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle03.png', 'cake3', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle04.png', 'cake4', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle05.png', 'cake5', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle06.png', 'cake6', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle07.png', 'cake1', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle08.png', 'cake2', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle09.png', 'cake3', '925', '8.0', '28', 85, 8,0),
(null,  'http://23z20z4973.iask.in:40613/img/candle10.png', 'cake4', '925', '8.0', '28', 85, 8,0),
(null,  'http://23z20z4973.iask.in:40613/img/candle11.png', 'cake5', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle12.png', 'cake2', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle13.png', 'cake3', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle14.png', 'cake4', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle15.png', 'cake5', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle16.png', 'cake6', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle17.png', 'cake1', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle18.png', 'cake2', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle19.png', 'cake3', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle20.png', 'cake6', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle21.png', 'cake1', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle22.png', 'cake2', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/candle23.png', 'cake3', '925', '8.0', '28', 85, 8,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday01.png', 'cake1', '925', '8.0', '28', 100,1,1),
(null, 'http://23z20z4973.iask.in:40613/img/birthday02.png', 'cake2', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday03.png', 'cake3', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday04.png', 'cake4', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday05.png', 'cake5', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday06.png', 'cake6', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday07.png', 'cake1', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday08.png', 'cake2', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday09.png', 'cake3', '925', '8.0', '28', 85, 1,0),
(null,  'http://23z20z4973.iask.in:40613/img/birthday10.png', 'cake4', '925', '8.0', '28', 85, 1,0),
(null,  'http://23z20z4973.iask.in:40613/img/birthday11.png', 'cake5', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday12.png', 'cake2', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday13.png', 'cake3', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday14.png', 'cake4', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday15.png', 'cake5', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday16.png', 'cake6', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/birthday17.png', 'cake1', '925', '8.0', '28', 85, 1,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover01.png', 'cake1', '925', '8.0', '28', 100,2,1),
(null, 'http://23z20z4973.iask.in:40613/img/lover02.png', 'cake2', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover03.png', 'cake3', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover04.png', 'cake4', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover05.png', 'cake5', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover06.png', 'cake6', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover07.png', 'cake1', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover08.png', 'cake2', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover09.png', 'cake3', '925', '8.0', '28', 85, 2,0),
(null,  'http://23z20z4973.iask.in:40613/img/lover10.png', 'cake4', '925', '8.0', '28', 85, 2,0),
(null,  'http://23z20z4973.iask.in:40613/img/lover11.png', 'cake5', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover12.png', 'cake2', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover13.png', 'cake3', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover14.png', 'cake4', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover15.png', 'cake5', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover16.png', 'cake6', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover17.png', 'cake1', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover18.png', 'cake2', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover19.png', 'cake3', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/lover20.png', 'cake6', '925', '8.0', '28', 85, 2,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift01.png', 'cake1', '925', '8.0', '28', 100,7,1),
(null, 'http://23z20z4973.iask.in:40613/img/gift02.png', 'cake2', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift03.png', 'cake3', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift04.png', 'cake4', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift05.png', 'cake5', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift06.png', 'cake6', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift07.png', 'cake1', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift08.png', 'cake2', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift09.png', 'cake3', '925', '8.0', '28', 85, 7,0),
(null,  'http://23z20z4973.iask.in:40613/img/gift10.png', 'cake4', '925', '8.0', '28', 85, 7,0),
(null,  'http://23z20z4973.iask.in:40613/img/gift11.png', 'cake5', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift12.png', 'cake2', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift13.png', 'cake3', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift14.png', 'cake4', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift15.png', 'cake5', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift16.png', 'cake6', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift17.png', 'cake1', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift18.png', 'cake2', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift19.png', 'cake3', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift20.png', 'cake6', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift21.png', 'cake1', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/gift22.png', 'cake2', '925', '8.0', '28', 85, 7,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry01.png', 'cake1', '925', '8.0', '28', 100,3,1),
(null, 'http://23z20z4973.iask.in:40613/img/merry02.png', 'cake2', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry03.png', 'cake3', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry04.png', 'cake4', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry05.png', 'cake5', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry06.png', 'cake6', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry07.png', 'cake1', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry08.png', 'cake2', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry09.png', 'cake3', '925', '8.0', '28', 85, 3,0),
(null,  'http://23z20z4973.iask.in:40613/img/merry10.png', 'cake4', '925', '8.0', '28', 85, 3,0),
(null,  'http://23z20z4973.iask.in:40613/img/merry11.png', 'cake5', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry12.png', 'cake2', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry13.png', 'cake3', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry14.png', 'cake4', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry15.png', 'cake5', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry16.png', 'cake6', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry17.png', 'cake1', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry18.png', 'cake2', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry19.png', 'cake3', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/merry20.png', 'cake6', '925', '8.0', '28', 85, 3,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower01.png', 'cake1', '925', '8.0', '28', 100,6,1),
(null, 'http://23z20z4973.iask.in:40613/img/flower02.png', 'cake2', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower03.png', 'cake3', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower04.png', 'cake4', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower05.png', 'cake5', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower06.png', 'cake6', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower07.png', 'cake1', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower08.png', 'cake2', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower09.png', 'cake3', '925', '8.0', '28', 85, 6,0),
(null,  'http://23z20z4973.iask.in:40613/img/flower10.png', 'cake4', '925', '8.0', '28', 85, 6,0),
(null,  'http://23z20z4973.iask.in:40613/img/flower11.png', 'cake5', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower12.png', 'cake2', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower13.png', 'cake3', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower14.png', 'cake4', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower15.png', 'cake5', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower16.png', 'cake6', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower17.png', 'cake1', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower18.png', 'cake2', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower19.png', 'cake3', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower20.png', 'cake6', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower21.png', 'cake1', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower22.png', 'cake2', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/flower23.png', 'cake3', '925', '8.0', '28', 85, 6,0),
(null, 'http://23z20z4973.iask.in:40613/img/child01.png', 'cake1', '925', '8.0', '28', 100,4,1),
(null, 'http://23z20z4973.iask.in:40613/img/child02.png', 'cake2', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child03.png', 'cake3', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child04.png', 'cake4', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child05.png', 'cake5', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child06.png', 'cake6', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child07.png', 'cake1', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child08.png', 'cake2', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child09.png', 'cake3', '925', '8.0', '28', 85, 4,0),
(null,  'http://23z20z4973.iask.in:40613/img/child10.png', 'cake4', '925', '8.0', '28', 85, 4,0),
(null,  'http://23z20z4973.iask.in:40613/img/child11.png', 'cake5', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child12.png', 'cake2', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child13.png', 'cake3', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child14.png', 'cake4', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child15.png', 'cake5', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child16.png', 'cake6', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child17.png', 'cake1', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child18.png', 'cake2', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/child19.png', 'cake3', '925', '8.0', '28', 85, 4,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast01.png', 'cake1', '925', '8.0', '28', 100,5,1),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast02.png', 'cake2', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast03.png', 'cake3', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast04.png', 'cake4', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast05.png', 'cake5', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast06.png', 'cake6', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast07.png', 'cake1', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast08.png', 'cake2', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast09.png', 'cake3', '925', '8.0', '28', 85, 5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast10.png', 'cake4', '925', '8.0', '28', 85,5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast11.png', 'cake5', '925', '8.0', '28', 85,5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast12.png', 'cake6', '925', '8.0', '28', 85,5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast13.png', 'cake7', '925', '8.0', '28', 85,5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast01.png', 'cake1', '925', '8.0', '28', 100,5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast02.png', 'cake2', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast03.png', 'cake3', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast04.png', 'cake4', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast05.png', 'cake5', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast06.png', 'cake6', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast07.png', 'cake1', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast08.png', 'cake2', '925', '8.0', '28', 85, 5,0),
(null, 'http://23z20z4973.iask.in:40613/img/breakfast09.png', 'cake3', '925', '8.0', '28', 85, 5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast10.png', 'cake4', '925', '8.0', '28', 85,5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast11.png', 'cake5', '925', '8.0', '28', 85,5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast12.png', 'cake6', '925', '8.0', '28', 85,5,0),
(null,  'http://23z20z4973.iask.in:40613/img/breakfast13.png', 'cake7', '925', '8.0', '28', 85,5,0);
 #lemon_cake"促销列表"
#id/title/ctime/img_url/desc/discount
CREATE TABLE cake_discount(
 cdid INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(255),
 ctime DATE,
 img_url VARCHAR(255),
 desc1  VARCHAR(255),
 discount VARCHAR(20)
);
INSERT INTO `cake_discount` (`cdid`, `title`, `ctime`, `img_url`, `desc1`, `discount`) VALUES
(1, '年终大促！！', '2018-10-10', 'http://23z20z4973.iask.in:40613/img/timg.gif', '一年仅一次，年度最优惠', '6.8折'),
(2, '今日特惠！！', '2018-10-11', 'http://23z20z4973.iask.in:40613/img/carousel05.png', '七彩饼干', '5折'),
(3, '本周主打！！', '2018-10-13', 'http://23z20z4973.iask.in:40613/img/carousel03.png', '玫瑰情怀', '8.0折'),
(4, '人气商品！！', '2018-10-14', 'http://23z20z4973.iask.in:40613/img/carousel04.png', '小矮人', '6.8折'),
(5, '今日特惠！！', '2018-10-15', 'http://23z20z4973.iask.in:40613/img/carousel07.png', '多层方块', '8.8折'),
(6, '今日特惠！！', '2018-10-10', 'http://23z20z4973.iask.in:40613/img/carousel06.png', '慕斯双拼', '7.8折'),
(7, '过年了，发红包了！！', '2019-1-5', 'http://23z20z4973.iask.in:40613/img/carousel09.png', '抢的是红包，更是福气！！', NULL);








