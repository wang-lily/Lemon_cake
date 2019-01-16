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
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(2,'124',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(3,'1233',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(4,'124',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(5,'125',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(6,'126',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(7,'127',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(8,'128',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(9,'129',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(11,'1231',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(12,'1232',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(13,'1233',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(14,'1234',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(15,'1235',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(16,'1236',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(17,'1237',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(18,'1238',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(19,'1239',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(21,'12322',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");
-- INSERT INTO xz_news VALUES(22,'12322',now(),0,
-- "http://127.0.01:3002/img/1.jpg","..");

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
  content VARCHAR(120),
  classType INT
);
#2:添加15条
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'111',1);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'112',2);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'113',3);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'114',4);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'115',5);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'116',6);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'117',7);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'118',8);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'119',9);
INSERT INTO cake_comment VALUES(null,2,'dd',now(),'1110',1);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1111',2);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1112',3);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1113',4);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1114',5);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1115',6);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1116',7);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'111',8);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'112',9);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'113',1);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'114',2);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'115',3);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'116',4);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'117',5);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'118',6);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'119',7);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1110',8);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1111',9);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1112',1);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1113',2);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1114',3);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1115',4);
INSERT INTO cake_comment VALUES(null,1,'dd',now(),'1116',5);

-- CREATE TABLE xz_login(
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   uname VARCHAR(25) NOT NULL DEFAULT '',
--   upwd  VARCHAR(32) NOT NULL DEFAULT ''
-- );
-- INSERT INTO xz_login VALUES(null,'dd',md5('123'));
-- INSERT INTO xz_login VALUES(null,'tom',md5('123'));
-- INSERT INTO xz_login VALUES(null,'jerry',md5('123'));



#cake_all [cid;headerImg;title;saleTotal;discount;price,star]
#breakfast:5,birthday:1,candle:8,child:4,DIY:9,flower:6,gift:7,lover:2,merry:3
CREATE TABLE cake_all(
  caid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(25),
  headerImg VARCHAR(255),
  imgList VARCHAR(1000),
  descr VARCHAR(50),
  specs VARCHAR(500),
  alert VARCHAR(1000),
  comments        VARCHAR(255),
  saleTotal   INT,
  star    INT,
  classType  INT
);
INSERT INTO `cake_all` (`caid`, `headerImg`,`imgList`,`descr`, `title`,`specs`,`alert`, `saleTotal`,  `star`,`classType`,`comments`) VALUES
(null, 'http://127.0.01:3002/img/candle01.png', '[{"url":"http://127.0.01:3002/img/candle01.png"},{"url":"http://127.0.01:3002/img/candle02.png"},{"url":"http://127.0.01:3002/img/candle03.png"},{"url":"http://127.0.01:3002/img/candle04.png"}]','生日蜡烛','生日蜡烛','[{"spec":"1支","oldPrice":"10.00","discount":"8.5","total":"130"}]','[{"value":"一经售出，除质量问题，不退不换"}]',925, 100,8,1),

(null, 'http://127.0.01:3002/img/birthday01.png', '[{"url":"http://127.0.01:3002/img/birthday01.png"},{"url":"http://127.0.01:3002/img/birthday02.png"},{"url":"http://127.0.01:3002/img/birthday03.png"},{"url":"http://127.0.01:3002/img/birthday04.png"}]','贺寿蛋糕多种尺寸可选','贺寿蛋糕001','[{"spec":"6英寸","oldPrice":"168","discount":"8.0","total":"30"},{"spec":"8英寸","oldPrice":"218","discount":"8.0","total":"40"},{"spec":"12英寸","oldPrice":"318","discount":"8.0","total":"50"}]','[{
	"value": "乳汁奶油水果，内含奶油"
}, {
	"value": "规格: 圆形（6英寸，8英寸，12英寸）可选"
}, {
	"value": "生产日期: 当天裱花制作"
}, {
	"value": "保存须知: 冷藏保存"
}, {
	"value": "免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买"
}, {
	"value ": "可免费在蛋糕上写6个字； 如需卡片,请另行购买"
}, {
	"value ": "免费提供包装"
}, {
	"value ": "下单后第二天制作,请提前一天下单"
}]',920, 85,1,1),

(null, 'http://127.0.01:3002/img/lover01.png', '[{"url":"http://127.0.01:3002/img/lover01.png"},{"url":"http://127.0.01:3002/img/lover02.png"},{"url":"http://127.0.01:3002/img/lover03.png"},{"url":"http://127.0.01:3002/img/lover04.png"}]','情侣蛋糕多种尺寸可选','情侣蛋糕001','[{"spec":"6英寸","oldPrice":"168","discount":"8.5","total":"30"},{"spec":"8英寸","oldPrice":"218","discount":"8.5","total":"40"},{"spec":"12英寸","oldPrice":"318","discount":"8.5","total":"50"}]','[{
	"value": "乳汁奶油水果，内含奶油"
}, {
	"value": "规格: 圆形（6英寸，8英寸，12英寸）可选"
}, {
	"value": "生产日期: 当天裱花制作"
}, {
	"value": "保存须知: 冷藏保存"
}, {
	"value": "免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买"
}, {
	"value ": "可免费在蛋糕上写6个字； 如需卡片,请另行购买"
}, {
	"value ": "免费提供包装"
}, {
	"value ": "下单后第二天制作,请提前一天下单"
}]',926, 75,2,1),

(null, 'http://127.0.01:3002/img/gift01.png','[{"url":"http://127.0.01:3002/img/gift01.png"},{"url":"http://127.0.01:3002/img/gift02.png"},{"url":"http://127.0.01:3002/img/gift03.png"},{"url":"http://127.0.01:3002/img/gift04.png"}]','儿童礼物','儿童礼物001','[{"spec":"1个","oldPrice":"168","discount":"8.5","total":"30"}]','[{"value":"一经售出，除质量问题，不退不换"}]',926, 75,7,1),

(null, 'http://127.0.01:3002/img/merry01.png', '[{"url":"http://127.0.01:3002/img/merry01.png"},{"url":"http://127.0.01:3002/img/merry02.png"},{"url":"http://127.0.01:3002/img/merry03.png"},{"url":"http://127.0.01:3002/img/merry04.png"}]','婚庆蛋糕多种尺寸可选','婚庆蛋糕001','[{"spec":"6英寸","oldPrice":"168","discount":"7.5","total":"30"},{"spec":"8英寸","oldPrice":"218","discount":"7.0","total":"40"},{"spec":"12英寸","oldPrice":"318","discount":"7.0","total":"50"}]','[{
	"value": "乳汁奶油水果，内含奶油"
}, {
	"value": "规格: 圆形（6英寸，8英寸，12英寸）可选"
}, {
	"value": "生产日期: 当天裱花制作"
}, {
	"value": "保存须知: 冷藏保存"
}, {
	"value": "免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买"
}, {
	"value ": "可免费在蛋糕上写6个字； 如需卡片,请另行购买"
}, {
	"value ": "免费提供包装"
}, {
	"value ": "下单后第二天制作,请提前一天下单"
}]',926, 75,3,1),

(null, 'http://127.0.01:3002/img/flower01.png', '[{"url":"http://127.0.01:3002/img/flower01.png"},{"url":"http://127.0.01:3002/img/flower02.png"},{"url":"http://127.0.01:3002/img/flower03.png"},{"url":"http://127.0.01:3002/img/flower04.png"}]','鲜花','鲜花001','[{"spec":"1束","oldPrice":"168","discount":"6.5","total":"30"}]','[{"value":"一经售出，不退不换"}]',926, 75,6,1),

(null, 'http://127.0.01:3002/img/child01.png', '[{"url":"http://127.0.01:3002/img/child01.png"},{"url":"http://127.0.01:3002/img/child02.png"},{"url":"http://127.0.01:3002/img/child03.png"},{"url":"http://127.0.01:3002/img/child04.png"}]','儿童蛋糕多种尺寸可选','儿童蛋糕001','[{"spec":"6英寸","oldPrice":"168","discount":"7.5","total":"30"},{"spec":"8英寸","oldPrice":"218","discount":"7.0","total":"40"},{"spec":"12英寸","oldPrice":"318","discount":"7.0","total":"50"}]','[{
	"value": "乳汁奶油水果，内含奶油"
}, {
	"value": "规格: 圆形（6英寸，8英寸，12英寸）可选"
}, {
	"value": "生产日期: 当天裱花制作"
}, {
	"value": "保存须知: 冷藏保存"
}, {
	"value": "免费提供蜡烛 1 包 刀1 把 蛋糕叉 1 把 小盘 1包， 如需更多,请另行购买"
}, {
	"value ": "可免费在蛋糕上写6个字； 如需卡片,请另行购买"
}, {
	"value ": "免费提供包装"
}, {
	"value ": "下单后第二天制作,请提前一天下单"
}]',925, 100,4,1),

(null,  'http://127.0.01:3002/img/breakfast01.png', '[{"url":"http://127.0.01:3002/img/breakfast01.png"},{"url":"http://127.0.01:3002/img/breakfast02.png"},{"url":"http://127.0.01:3002/img/breakfast03.png"},{"url":"http://127.0.01:3002/img/breakfast04.png"}]','早餐糕点','早餐糕点001','[{"spec":"1份","oldPrice":"15.00","discount":"8.0","total":"30"}]','[{"value":"一经售出，不退不换"}]',926, 75,5,1);
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
(1, '年终大促！！', '2018-10-10', 'http://127.0.01:3002/img/timg.gif', '一年仅一次，年度最优惠', '6.8折'),
(2, '今日特惠！！', '2018-10-11', 'http://127.0.01:3002/img/carousel05.png', '七彩饼干', '5折'),
(3, '本周主打！！', '2018-10-13', 'http://127.0.01:3002/img/carousel03.png', '玫瑰情怀', '8.0折'),
(4, '人气商品！！', '2018-10-14', 'http://127.0.01:3002/img/carousel04.png', '小矮人', '6.8折'),
(5, '今日特惠！！', '2018-10-15', 'http://127.0.01:3002/img/carousel07.png', '多层方块', '8.8折'),
(6, '今日特惠！！', '2018-10-10', 'http://127.0.01:3002/img/carousel06.png', '慕斯双拼', '7.8折'),
(7, '过年了，发红包了！！', '2019-1-5', 'http://127.0.01:3002/img/carousel09.png', '抢的是红包，更是福气！！', NULL);








