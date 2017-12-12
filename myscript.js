// myscript.js

// Front DV
// おおまかな機能をつくる
  // イベントの作成
  function newTask(){

    // 言葉を取得し新要素を生成する
    // --- inputに入力した言葉を取得する
    var task_input = document.getElementById("task_input")
    var inputValue = task_input.value;
    console.log(inputValue);
    //  --- 取得した言葉をタスク要素にする
    var str = document.createTextNode(inputValue);
    //  --- タスクリストに要素を追加する
    // Create a new list item when clicking on the "Add" button
    var li = document.createElement("li");
    li.appendChild(str);
    // 全体に足す
    document.getElementById("task_list").appendChild(li);
    //  --- 入力したらinputを空にする
    task_input.value = "";

  }

  // 条件分岐
  // --- inputが空っぽなら注意する

  // チェックのされるべき要素の認識
  // ※ 新しいリストに対してチェックが認識されない問題
  var myTasklist = document.getElementsByTagName("li");
  for (var i = 0; i < myTasklist.length; i++) {
     console.log(myTasklist[i]);
     // チェックのイベントを認識する
     myTasklist[i].onclick = function(){
       this.classList.toggle('checked');
       // チェックされた // チェックが外れた
       console.log(this);
     }
  }
