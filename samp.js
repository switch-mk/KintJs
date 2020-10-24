 (function() {
    "use strict";

    kv.events.record.mounted = [function(state){ //詳細ページ非表示
        var targetField = 'Q1'; //表示非表示を切り替えるフィールドのフィールドコード
        var targetField2 = 'リンクA'; //表示非表示を切り替えるフィールドのフィールドコード
        
        xalert(1234);
       
        if(state.record[targetField].value >='2' ) kv.detail.getElementByCode(targetField).style.display = 'none';
    }];

  })();
