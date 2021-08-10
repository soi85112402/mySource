[https://www.cssdesignawards.com/blog/best-js-plugins-and-libraries-of-2015/267/](https://www.cssdesignawards.com/blog/best-js-plugins-and-libraries-of-2015/267/)


### nodeList => Array로 변경하기

```
const selectNodelist = document.querySelectorAll('.node');
const nodeArray = Array.prototype.slice.call(selectNodelist);
```