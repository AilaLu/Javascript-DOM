// 想要做的事：
// 讓輸入匡顯示按下去的數字按鈕, 按下AC歸零
// 1.用querySelector取得輸入匡的DOM
// 2.試試改變display的數字
//3.拿到所有的數字按鈕console顯示按到按鈕

const inputEntry = document.querySelector(".display")

//123--------------------------------------
const btn = document.querySelector(".calc")

btn.addEventListener("click", (e) => {
  inputEntry.textContent = e.target.textContent
})

//ac----------------------------------------

const ac = document.querySelector(".ac-key")

ac.addEventListener("click", () => {
  inputEntry.textContent = 0
})
