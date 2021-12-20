const refs = {
  firstNum: document.getElementById("numFirst"),
  secondNum: document.getElementById("numSecond"),
  mathSelect: document.getElementById("mathSelect"),
  form: document.getElementById("form"),
  res: document.getElementById("result"),
};

const func = function (e) {
  e.preventDefault();

  const valueFirstNum = Number(refs.firstNum.value);
  const valueSecondNum = Number(refs.secondNum.value);
  const valueMath = refs.mathSelect.value;
  let result;

  switch (valueMath) {
    case "+":
      result = valueFirstNum + valueSecondNum;
      break;
    case "-":
      result = valueFirstNum - valueSecondNum;
      break;
    case "*":
      result = valueFirstNum * valueSecondNum;
      break;
    case "/":
      result = valueFirstNum / valueSecondNum;
      break;
  }

  refs.res.textContent = "Результат: " + Math.round(result);
};

const reset = function () {
  refs.res.textContent = "";
};

refs.form.addEventListener("submit", func);
refs.form.addEventListener("reset", reset);
