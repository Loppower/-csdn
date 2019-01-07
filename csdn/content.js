
setTimeout(function(){
  if (window.location.host.search('csdn') !== -1) {
    if(confirm("纯净版csdn?")){
      console.log("csdn去广告")
      document.getElementById('btn-readmore').click();//先点击阅读更多的按钮，把隐藏的内容显示出来
      var aside = document.getElementsByTagName('aside');
      var recommendRight = document.getElementsByClassName('recommend-right');
      var toolBox = document.getElementsByClassName('tool-box');
      var meauGotopBox = document.getElementsByClassName('meau-gotop-box');
      var recommendBox = document.getElementsByClassName('recommend-box');
      var pulllogBox = document.getElementsByClassName('pulllog-box');
      var mainBox = document.getElementById('mainBox');
      var main = document.getElementsByTagName('main');

      remove(aside);
      remove(recommendRight);
      remove(toolBox);
      remove(meauGotopBox);
      remove(recommendBox);
      mainBox.append(document.getElementsByClassName('blog-content-box')[0]);
      remove(main);
      remove(pulllogBox);
    }
  }
}, 1000);
function remove(obj){
  obj[0].parentNode.removeChild(obj[0]);
}
