(function() {
  "use strict";
  kv.events.record.mounted.push(function(state){
    var targetField = 'Q1'; //表示非表示を切り替えるフィールドのフィールドコード
    var targetField2 = 'リンクA'; //表示非表示を切り替えるフィールドのフィールドコード
    xalert(state.record[targetField].value);
    xalert(1234);
    if(state.record[targetField].value >='2' )  xalert(123);
  });
})();
