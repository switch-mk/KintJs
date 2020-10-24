


(function() {
  "use strict";
  kv.events.records.mounted = [function(state){ //ボタン非表示
    state.records.forEach(function(record, index){
      if(record['合計点'].value <= '2'){ //条件式 (例: record['スイッチ'].value === 'off')
        document.querySelectorAll('.kv-table-view-content tr')[index+1].querySelector('td a').style.display = 'none';
      }
    });
  }];
  kv.events.record.mounted = [function(state){ //詳細ページ非表
    if(state.record['合計点'].value <= '5'){ //条件式 (例: state.record['スイッチ'].value === 'off')
      location.href = location.href.split('/detail')[0];
      location.reload();
    }
  }];
  kv.events.records.mounted = [function (state) {
    console.log(state)
    console.log(kv.index.getRecordElement(state.records[0].$id.value))

    return state;
  }];
})();
