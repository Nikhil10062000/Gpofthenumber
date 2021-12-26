var a = 20; 
a=parseInt(a);
var r = 5; 
r=parseInt(r);
var n = 10;
n=parseInt(n);

var nterm = n;
    for (var i = 0; i < n; i++) {
        nterm = a * Math.pow(r, i);
        console.log(nterm + " ");
    }