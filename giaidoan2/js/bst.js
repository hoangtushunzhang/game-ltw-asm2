var images = [];
var index = 0; 
var sohinh = 11;
let text = document.getElementById("img_index");
text.innerHTML = "Ảnh " + Number(index+1)  + "/" + sohinh;
for(var i=0; i < sohinh; i++){
    images[i] = new Image();
    images[i].src = "images/" + i + ".jpeg";
}
function next(){
    index++;
    if(index >= images.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    hienthi();

}
function prev(){
    index--;
    if(index < 0) index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    hienthi();
}

function hienthi(){
  text.innerHTML = "Ảnh " + Number(index+1)  + "/" + sohinh;
}