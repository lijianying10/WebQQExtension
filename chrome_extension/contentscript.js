console.log("xss test");
// // How to use XHR get
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.baidu.com", true);
// xhr.onreadystatechange = function() {
//   console.log(xhr.readyState);
//   if (xhr.readyState == 4) {
//     // var resp = eval("(" + xhr.responseText + ")");
//     // ...
//     console.log( xhr.responseText);
//   }
// }
// xhr.send();


//convert json object to url query
// example obj_to_query({abc:'123',kkk:'bbb'}); it will out put "?abc=123&kkk=bbb"
function obj_to_query(obj) {
    var parts = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return parts.join('&');
}





var postUrl = 'http://127.0.0.1:8080/posttest';
var params = obj_to_query({title:'test_title',kkk:'test param2'});
var xhr = new XMLHttpRequest();
xhr.open('POST', postUrl, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() { 
  console.log(xhr.readyState);
  console.log(xhr.status);
  console.log(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.send(params);





//appendchild method
// document.getElementsByClassName('suggestion')[0].appendChild(document.getElementsByClassName('text_ellipsis user_nick')[0]);









function loadUI(){
  if(document.readyState!="complete")
  {
    window.setTimeout('loadUI()', 1000);
  }
  else
  {
    var target =  document.getElementsByClassName('suggestion')[0];
    target.innerHTML = "<a href='http://ubtamator.github.io/' target='_blank'>欢迎使用Ubuntu爱好者Webqq助手</a>"; 
    target.style.width=300+'px';
    //define bg picture
    document.getElementsByClassName('bgAllImage')[0].src='http://e.hiphotos.baidu.com/image/w%3D1920%3Bcrop%3D0%2C0%2C1920%2C1080/sign=c9e903afe51190ef01fb96d6fc2ba675/503d269759ee3d6d1927548941166d224e4ade8b.jpg';
  }
}
loadUI();

console.log("end of define");