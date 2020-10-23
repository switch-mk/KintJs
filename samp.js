(function() {
  "use strict";
  kv.events.record.mounted.push(function(state){
    var targetField = '文字列__1行_'; //表示非表示を切り替えるフィールドのフィールドコード
    if(!state.record[targetField].value >=2 ) kv.detail.getElementByCode(targetField).style.display = 'none';
  });
})();
