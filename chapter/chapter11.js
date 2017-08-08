test();
function  test() {
    var val=prompt("Annonce de la page http://s.codepen.io:\nChoose an option:\n1:Show links\n2:Add a link\n3:Remove a link\n0:Quit","");
    var headlineArr =[["baidu"]];
    var urlArr=[["http://www.baidu.com"]];
    var authorArr=[["baidu"]];
    var catalog=headlineArr + urlArr + authorArr;
    if(val==='1') {
        if (catalog!=null&&catalog!=""){
            alert(catalog);
            test();
        }
        else{
            alert("链接列表为空！");
            test();
        }
    }
    else if(val==='2')
    {

    }
    else if(s==='3')
    {

    }
    else if(val=='0')
    {
        window.close();
    }
}


