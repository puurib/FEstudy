# SASS = SCSS

* CSS의 전처리 기능

* 스타일 적용 시, 태그 중첩을 하지 않아도 됨
* 주석 : /* */ , // 
* 상위 선택자 참조

`&` / 변수`$` / 산술연산 / 재활용`@mixin` - `@include` / 반복문 / 함수

![image-20220606222355038](SASS에 대해.assets/image-20220606222355038.png)



![image-20220606222530510](SASS에 대해.assets/image-20220606222530510.png)



변수

transform : translateX / X축으로 움직이는 효과

![image-20220606222724907](SASS에 대해.assets/image-20220606222724907.png)



변수 `$` 를 써서 바꿈 (전역 변수, 지역 변수가 있음)

![image-20220606222823629](SASS에 대해.assets/image-20220606222823629.png)

![image-20220606222927091](SASS에 대해.assets/image-20220606222927091.png)

변수 주의 : 한번 할당하면, 바뀜

![image-20220606223045908](SASS에 대해.assets/image-20220606223045908.png)



산술 연산

주의 : 나누기는 괄호안에서

![image-20220606223239406](SASS에 대해.assets/image-20220606223239406.png)

예로 16:9 비율로 쓴다면!

![image-20220606223423117](SASS에 대해.assets/image-20220606223423117.png)

![image-20220606223445868](SASS에 대해.assets/image-20220606223445868.png)



* 재활용

![image-20220606223927003](SASS에 대해.assets/image-20220606223927003.png)



![image-20220606224143964](SASS에 대해.assets/image-20220606224143964.png)



![image-20220606224253875](SASS에 대해.assets/image-20220606224253875.png)



![image-20220606224329372](SASS에 대해.assets/image-20220606224329372.png)



![image-20220606224414332](SASS에 대해.assets/image-20220606224414332.png)



* 반복문

![image-20220606224626772](SASS에 대해.assets/image-20220606224626772.png)



* 반복문 > 보간법

![image-20220606224716629](SASS에 대해.assets/image-20220606224716629.png)



* 반복문 > 보간법

![image-20220606224806963](SASS에 대해.assets/image-20220606224806963.png)



* 함수 

![image-20220606225040395](SASS에 대해.assets/image-20220606225040395.png)



![image-20220606225053358](SASS에 대해.assets/image-20220606225053358.png)



* 16대 9비율로 한다면?

![image-20220606225217413](SASS에 대해.assets/image-20220606225217413.png)



* 색상 내장함수

![image-20220606230028030](SASS에 대해.assets/image-20220606230028030.png)



* 연결하기

한개, 두개 이상 연결

![image-20220606230251595](SASS에 대해.assets/image-20220606230251595.png)

![image-20220606230411691](SASS에 대해.assets/image-20220606230411691.png)

---

```
$ npm init -y
```

* package.json이 생김

``` 
$ npm i -D parcel-bundler
```

![image-20220606221013322](SASS에 대해.assets/image-20220606221013322.png)

* package.json 변경 (7-8줄)



![image-20220606221121638](SASS에 대해.assets/image-20220606221121638.png)



* scss를 쓰려면, css로 파싱해줌

index.html, main,scss

![image-20220606221540104](SASS에 대해.assets/image-20220606221540104.png)

![image-20220606221600255](SASS에 대해.assets/image-20220606221600255.png)



``` 
npm run dev
```

* dist 폴더에서 파싱해주는 것

![image-20220606221328064](SASS에 대해.assets/image-20220606221328064.png)

---







![image-20220606230816235](SASS에 대해.assets/image-20220606230816235.png)

