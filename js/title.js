//��̬����
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //�뿪��ǰҳ��ʱ��ǩ��ʾ����
    document.title = '���ݽ���ǲ�������Ҳ��Ҫ���ɹ�ͷ��';
    clearTimeout(titleTime);
  } else {
    //���ص�ǰҳ��ʱ��ǩ��ʾ����
    document.title = '̫��������ϰ��';
    //���������������
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});