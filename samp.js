(function() {
  "use strict";
  kv.events.record.mounted.push(function(state){
    var targetField = '質問A'; //表示非表示を切り替えるフィールドのフィールドコード
    var targetField2 = 'リンクA'; //表示非表示を切り替えるフィールドのフィールドコード
    alert(123456789);
    if(state.record[targetField].value >=2 ) kv.detail.getElementByCode(targetField).style.display = 'none';
  });
})();
