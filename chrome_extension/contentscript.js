console.log("xss test");
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.baidu.com", true);
// xhr.onreadystatechange = function() {
//   console.log(xhr.readyState);
//   if (xhr.readyState == 4) {
//     // // 警告! 这里有可能执行了一段恶意脚本!
//     // var resp = eval("(" + xhr.responseText + ")");
//     // ...
//     console.log( xhr.responseText);
//   }
// }
// xhr.send();

//appendchild 用法
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
  }
}
loadUI();

console.log("end of define");