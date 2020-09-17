document.getElementById("bt1").addEventListener("click",set);
document.getElementById("bt2").addEventListener("click",show);

function set()
{
   var t=parseFloat(document.getElementById("tb1").value);
    var ans=(t*1.8)+32;
    alert("temperature in fahrenheit is " +ans);
}

function show()
{
    var t=parseFloat(document.getElementById("tb1").value);
    var ans=(t-32)/1.8;
    alert("temperature in celcius is " +ans);
}