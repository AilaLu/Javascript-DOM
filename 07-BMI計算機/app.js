// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方

const button = document.querySelector("#calculateButton") //取得DOM

// bmi function
bmi = (h, w) => {
  h = Number(h) * 0.01
  w = Number(w)
  return (w / (h * h)).toFixed(2)
}

//監聽click, 把回傳值指定給result的textContent
button.addEventListener("click", () => {
  const height = document.querySelector("#bodyHeight").value //取得輸入的值要用.value
  const weight = document.querySelector("#bodyWeight").value //取得輸入的值要用.value
  const result = document.querySelector("#resultText")
  result.textContent = bmi(height, weight) //把輸入值傳進bmi function, 回傳值塞進result的值
})
