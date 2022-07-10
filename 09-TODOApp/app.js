// 程式碼寫這裡
// 先加defer到js連動！<script src="app.js" defer></script>

const btn = document.querySelector("#addBtn")
const input = document.querySelector("#taskInput") //輸入匡
const taskList = document.querySelector(".todo-list")

//輸入新的todo-item-----------------------------------------------------------------

//這是按鍵後發生的函式 新增todo-item
function createTask(task) {
  if (task != "") {
    //驗證如果輸入值不是空白
    const item = `<li class="todo-item">
  <span class="item">${task}</span>
  <button class="closeBtn">X</button>
</li>`
    taskList.insertAdjacentHTML("afterbegin", item) //把這個新的todo-item加進ul, li清單的最上面
    input.value = "" //輸入完成讓輸入匡空白
  }
}

//用input.value就可以抓到輸入匡的值
btn.addEventListener("click", () => {
  createTask(input.value)
})

//按下Enter就可以輸入值 -----------------------------------------------------
//Keyup的事件
input.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    //如果按下的是enter
    createTask(input.value) //去做todo-item
  }
})

//刪除鍵------------------------------------------------------------------
//Event Delegation按刪除鍵刪除todo-item 要處理所有鍵都可以運作的情況 就需要在整個ul下監聽器 不然新增todo-item就沒有監聽器
taskList.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    //確認是按下button按鈕
    event.target.parentElement.remove() //將現在的父層,也就是todo-item刪除
  }
})
