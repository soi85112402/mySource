```
# releasePointerCapture
```


### 이 예제는 포인터 <div>를 누를 때 포인터 캡처를 설정 합니다. 이렇게 하면 포인터가 경계 밖으로 이동하는 경우에도 요소를 수평으로 슬라이드할 수 있습니다.

***

```
function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
```


[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture)
