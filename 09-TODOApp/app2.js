// 我想要達成的事情
// 1. 按下新增按鈕有新的todo-item(最後加上驗證不能空白, 輸入後清空輸入匡)
// 2. 按下刪除鍵會刪除整列的todo-item(提示：要監聽整個todo-list)

//到HTML加上defer <script src="app.js" defer></script>
//記得要在addEventListener之後才取.value

//抓DOM要抓對啊！
// id="taskInput"
// class="todo-list"
// class="todo-item"
// id="addBtn"

const list = document.querySelector(".todo-list")
const taskInput = document.querySelector("#taskInput") //抓到輸入匡
const btn = document.querySelector("#addBtn")

//1.--------------------------------------
function createItem(input) {
  if (input != "") {
    //驗證不能空白
    todoItem = ` <li class="todo-item">
    <span class="item">${input}</span>
    <button class="closeBtn">X</button>
  </li>` //抓到todo-item這個li字串, 把input塞進去
    list.insertAdjacentHTML("afterbegin", todoItem) //把這個li字串塞進ul的最前面(提示: Afterbegin) 用insertAdjacentHTML
    taskInput.value = "" //輸入後清空輸入匡
  }
}

btn.addEventListener("click", () => {
  createItem(taskInput.value)
  //去執行新增todo-item的function, 傳入taskInput.value
})

//2.----------------------------------------
//Event delegation 監聽整個ul, 但是只有在按到X按鈕的時候(提示：用nodeName)才會刪除(提示：用.remove())
//提示：用event.target來抓到現在的事件

list.addEventListener("click", (event) => {
  // event.target 現在這個事件 就是 <button class="closeBtn">X</button>
  if (event.target.nodeName === "BUTTON") {
    // 如果nodeName是BUTTON
    event.target.parentElement.remove()
    // event.target.parentElement 就是現在這個事件的父層 就是整個todo-item
  }
})
