# Spring MVC Project
- 2024. 07

## Spring MVC Project 생성하기
- `file/new/Spring Legacy Project/Spring MVC Project 2024`를 선택하여 프로젝트를 만든다


<!-- 
	spring jdbc로 검색
	spring webmvc와 버전 일치 시킬 것
 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>6.1.11</version>
</dependency>
<!-- bybatis로 검색하여 mybatis, mybatis-spring 찾기 -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.16</version>
</dependency>
<!-- 
	spring-mvc 5.2.xrelease를 사용 할 때는
	mybatis-spring을 반드시 3.0.0 이하로 사용할것
 -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>3.0.0</version>
</dependency>
<!-- dbcp로 검색하여 commons-dbcp2를 사용할 것 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-dbcp2</artifactId>
    <version>2.12.0</version>
</dependency>
<!-- 
	mysql로 검색하고
	반드시 mysql-connetor-j를 사용 할 것
	mysql-connetor-java는 한글 호환에서 문제가 발생할수 있음
 -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.4.0</version>
</dependency>
