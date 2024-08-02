import * as mainAction from "./action.js";

let cashflow = null;
// 받은 데이터를 전역에서 다룹니다
const select = document.querySelector(".toggle_form select");
const totalIncomeSpan = document.querySelector("#total-income");
const incomeSpan = document.querySelector("#income-price");
const paymentSpan = document.querySelector("#payment-price");
const form = document.getElementById("user-form");

mainAction.init(select)
  .then((data) => cashflow = data)
  .then(() => mainAction.handleTotalIncome(cashflow, totalIncomeSpan, incomeSpan, paymentSpan));

// 사용자 수입 / 지출 onSubmit handler
form.addEventListener("submit",  async (e) => {
   await mainAction.userSubmitHandler(e)
   mainAction.loadData(select).then((data) => {
    cashflow = data;
    mainAction.handleTableRendering(cashflow);
    mainAction.handleTotalIncome(cashflow, totalIncomeSpan, incomeSpan, paymentSpan)
  })
});

// toggle left click part
const leftBtn = document.querySelector('.toggle_form input[value="⬅"]')
leftBtn.addEventListener("click", () => mainAction.togglePrevCashflow(select));
leftBtn.addEventListener("click", () => {
  // const newData = mainAction.loadData(select);
  mainAction.loadData(select).then((data) => {
    cashflow = data;
    mainAction.handleTableRendering(cashflow);
    mainAction.handleTotalIncome(cashflow, totalIncomeSpan, incomeSpan, paymentSpan)
  })
});

// toggle rigth click part
const rigthBtn = document.querySelector('.toggle_form input[value="➡"]')
rigthBtn.addEventListener("click", (e) => mainAction.toggleRigthCashflow(select));
rigthBtn.addEventListener("click", () => {
  // const newData = mainAction.loadData(select);
  mainAction.loadData(select).then((data) => {
    cashflow = data;
    mainAction.handleTableRendering(cashflow);
    mainAction.handleTotalIncome(cashflow, totalIncomeSpan, incomeSpan, paymentSpan)
  })
})
