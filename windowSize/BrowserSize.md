# Tablet browser innerWidth innerHeight 


---
<!-- 1. 기본적으로 해당 디바이스의 스펙에서 ppi와 해상도를 알아야 합니다. 저는 갤럭시 탭 S6 Lite 였습니다. 해당 스펙을 찾아보니 해상도는 2000 x 1200, ppi는 224였습니다. (나무위키에서 참고)

2. devicePixelRatio = 해당 기기의 ppi / 150 (왜 150인지는 여기(링크)에서 확인 가능), 저의 경우는 1.493 이 나왔고 반올림하여 1.5로 계산 하였습니다.
\n 링크 : https://feel5ny.github.io/2018/05/13/mediaQuery_01/

3. deviceWidth = 해당기기의 해상도 / devicePixelRatio (저의 경우 1333이 나왔습니다.)

4. deviceHeight = 해당기기의 해상도 / devicePixelRatio (저의 경우 800이 나왔습니다.)

출처: https://foodchain.tistory.com/153 -->
---

### Tablet

<!-- * S6 : 
> 논리적 해상도 : 1330 x 837 
> 물리적 해상도 : 2560 x 1600 
> ppi : 287 
> devicePixelRatio 1.5 -->
* S6 Lite 
> 논리적 해상도 : 1334 x 800 
> 물리적 해상도 : 2000 x 1200 
> ppi : 224 
> 화면비율 : 5:3
> devicePixelRatio : 1.5
* S7 
> 논리적 해상도 : 1205 x 753
> 물리적 해상도 : 2560 x 1600 
> ppi : 276 
> 화면비율 : 16:10
> devicePixelRatio 2.125

<!-- ### Mobile

* S8 : 778 x 378
> 2960 x 1440 ppi 570 -->