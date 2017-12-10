// myscript.js

// Front DV
// おおまかな機能をつくる
  // イベントの作成
  function newTask(){

    // 言葉を取得し新要素を生成する
    // --- inputに入力した言葉を取得する
    var inputValue = document.getElementById("task_input").value;
    console.log(inputValue);
    var str = document.createTextNode(inputValue);
    // 要素の追加
    // Create a new list item when clicking on the "Add" button
    var li = document.createElement("li");
    li.appendChild(str);
    // 全体に足す
    document.getElementById("task_list").appendChild(li);
  }

  //  --- 取得した言葉をタスク要素にする
  //  --- タスクリストに要素を追加する
  //  --- 入力したらinputを空にする

  // 条件分岐
  // --- inputが空っぽなら注意する
