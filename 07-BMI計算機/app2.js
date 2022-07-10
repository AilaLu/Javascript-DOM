//在監聽後再去取輸入值
//輸入值是.value
//.value是字串所以要先轉換成Number

// 我們想要做的
// 1.拿到計算按鈕的DOM
// 2.用listener監聽 按下按鈕之後取得輸入值的DOM
// 3.做計算

// id="calculateButton"
// id="bodyHeight"
// id="resultText"
const btn = document.querySelector("#calculateButton")
const display = document.querySelector("#resultText")

const bmiFunc = () => {
  let h = Number(document.querySelector("#bodyHeight").value) //取得DOM時取到輸入值＋轉成數字
  let w = Number(document.querySelector("#bodyWeight").value)
  h = h * 0.01
  const bmi = (w / (h * h)).toFixed(2)
  //做計算
  display.textContent = bmi //在計算結果的textContent呈現
}

btn.addEventListener("click", () => {
  bmiFunc()
})
