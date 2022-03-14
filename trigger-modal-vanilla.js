function showMD(getmid){
var getmodalid = document.getElementById(getmid);
getmodalid.style.display="block";
getmodalid.style.position="fixed";
var calMt = getmodalid.offsetHeight;
var calMl = getmodalid.offsetWidth;
var divML = calMl / 2;
var divMT = calMt / 2;
getmodalid.style.marginLeft=-Math.abs(divML)+"px";
getmodalid.style.marginTop=-Math.abs(divMT)+"px";
getmodalid.style.top="50%";
getmodalid.style.left="50%";
console.log(-divML);
console.log(-divMT);
}
function hideMD(getmid){
var getmodalid = document.getElementById(getmid);
getmodalid.style.display="none";
getmodalid.style.position="relative";
}

var showModal = showMD;
var hideModal = hideMD;
var sMD = showMD;
var hMD = hideMD;