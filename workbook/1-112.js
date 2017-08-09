var a,b,c;
for(var n=100;n<1000;n++) {
    a = n / 100;
    b = n % 100 / 10;
    c = n % 10;
    if (a * a * a + b * b * b + c * c * c === n)
        alert(n + "is shui xian hua number");
}
