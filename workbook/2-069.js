function test(n) {
    if(n===1){
        alert(1);
    }
    else if (n%2===0){
        alert((test(n-1))-1.0/n);
    }
    else
    {
        alert((test(n-1))+1.0/n);
    }
}
