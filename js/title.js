//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '劳逸结合是不错，但也不要放松过头。';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '太素脉法传习者';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});