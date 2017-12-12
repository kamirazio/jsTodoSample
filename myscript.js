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

    // 条件分岐
    // --- inputが空っぽなら注意する
    if (inputValue == '') {
      alert("You must write something!");
    } else {
      //  --- 取得した言葉をタスク要素にする
      var str = document.createTextNode(inputValue);
      //  --- タスクリストに要素を追加する
      // Create a new list item when clicking on the "Add" button
      var li = document.createElement("li");
      li.appendChild(str);
      // 全体に足す
      document.getElementById("task_list").appendChild(li);
      addCheckFunc(li);
      addCloseBtn(myTasklist[i]);
    }
      //  --- 入力したらinputを空にする
    task_input.value = "";

  }




  // チェックのされるべき要素の認識
  // ※ 新しいリストに対してチェックが認識されない問題

  var myTasklist = document.getElementsByTagName("li");
  for (var i = 0; i < myTasklist.length; i++) {
     console.log(myTasklist[i]);
     // チェックのイベントを認識する
     addCheckFunc(myTasklist[i]);
     addCloseBtn(myTasklist[i]);
  }

  function addCheckFunc(elm){
    elm.onclick = function(){
      this.classList.toggle('checked');
    }
  }

  function addCloseBtn(elm){
    var closeSign = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    closeSign.className = "close";
    closeSign.appendChild(txt);
    elm.appendChild(closeSign);

    closeSign.onclick = function() {
      elm.style.display = "none";
    }
  }
