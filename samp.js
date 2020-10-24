(function() {
  "use strict";
  kv.events.record.mounted.push(function(state){
    var targetField = 'Q1'; //表示非表示を切り替えるフィールドのフィールドコード
    var targetField2 = 'リンクA'; //表示非表示を切り替えるフィールドのフィールドコード
    if(state.record[targetField].value >='2' )  xalert(123);
  });
})();
