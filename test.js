test();
function  test() {
    var va =prompt("中国的首都在哪个城市?\nA:香港 B:广州 C:北京 D:上海");
        if ( va=== 'A') {
            alert("错，香港是中国的特别行政区");
        }
        else if (va === 'B') {
            alert("错，广州市中国南部的大都市");
        }
        else if (va === 'C') {
            alert("对，北京是中国的首都");
        }
        else if (va === 'D'){
            alert("错，上海市中国东部的大都市");
        }
        else{
            alert("选择错误，只能是A,B,C,D");
        }
    }



