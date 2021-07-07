# 쿠버네티스를 데모를 위한 샘플입니다.

node 와 mysql 을 사용한 게시판입니다.

[https://github.com/achowba/node-mysql-crud-app](https://github.com/achowba/node-mysql-crud-app)를 수정했습니다.


## MySQL 실행

~~~
docker run --name mydb -e MYSQL_ROOT_PASSWORD=mypassword -p 3306:3306 -d mysql:5.6
~~~


## MySQL 설정

~~~
CREATE USER 'test'@'%' IDENTIFIED BY 'Welcome1';

GRANT USAGE ON *.* TO 'test'@'%';

GRANT ALL PRIVILEGES ON *.* TO 'test'@'%';

CREATE DATABASE sample DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE sample;

CREATE TABLE IF NOT EXISTS `players` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  AUTO_INCREMENT=1;
~~~


## 환경설정
~~~
export MYSQL_SERVICE_HOST={MYSQL_IP}
export MYSQL_SERVICE_USER=test
export MYSQL_SERVICE_PASSWORD=Welcome1
export MYSQL_SERVICE_DATABASE=sample
~~~

## 실행
~~~
$ npm install
$ npm start
~~~
