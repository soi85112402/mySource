var n = '20110101';
var nn = new Date(
    n.substring(0,4), 
    Number(n.substring(4,6))-1,
    n.substring(6,8), 
    n.substring(8,10), 
    n.substring(10,12),
    n.substring(12,14)
)

var r = new Date(nn.getFullYear()+4)
console.log(nn);
console.log(r);