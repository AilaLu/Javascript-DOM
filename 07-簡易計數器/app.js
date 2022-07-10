// 程式碼寫在這裡
const btnPlus = document.querySelector("#plus")
const num = document.querySelector("#counter")
const btnMinus = document.querySelector("#minus")

btnPlus.addEventListener("click", () => {
  num.value = Number(num.value) + 1
  console.log(num.value)
})

btnMinus.addEventListener("click", () => {
  let currentNum = Number(num.value)
  if (currentNum > 1) {
    num.value = currentNum - 1
  }
  console.log(num.value)
})
