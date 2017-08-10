var a=["","one","two","three","four","five","six","seven","eight","nine"];
var b=["ten","eleven","twelve","thirteen","fourteen","sixteen","seventeen","eighteen","nineteen"];
var c=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
var num=prompt("Please input a num which is less than 999\n","");
if((num/100!==0)&&(num%100===0)) {
        alert(a[num / 100] + " hundred");
    }
       else{
        if ((num / 10) % 10 === 1) {
            alert(a[num / 100] + " hundred and " + b[num % 10]);
        }
        else{
            alert(a[num / 100] + " hundred and " + c[(num / 10) % 10] + " " + a[num % 10]);
    }
}

