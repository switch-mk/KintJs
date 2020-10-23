(function() {
  "use strict";
  kv.events.record.mounted.push(function(state){
    var targetField = '質問A'; //表示非表示を切り替えるフィールドのフィールドコード
    var targetField2 = 'リンクA'; //表示非表示を切り替えるフィールドのフィールドコード
    if(state.record[targetField].value >=2 ) kv.detail.getElementByCode(targetField2).style.display = 'none';
  });
})();
