(function() {
  "use strict";
  kv.events.record.mounted = [function(state){ 
    var targetField = '合計点'; //表示非表示を切り替えるフィールドのフィールドコード
    var targetField2 = 'リンクA'; //表示非表示を切り替えるフィールドのフィールドコード
    if(state.record[targetField].value <= '5' ) kv.detail.getElementByCode(targetField2).style.display = 'none';
  }];
  kv.events.records.mounted = [function (state) {
    console.log(state)
    console.log(kv.index.getRecordElement(state.records[0].$id.value))

    return state;
  }];
})();
