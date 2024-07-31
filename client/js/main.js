import { getIncomeInfo } from "./api.js";

// 받은 데이터를 전역에서 다룹니다
const { data } = await getIncomeInfo();

// 초기 income data를 받아옵니다
try {
  if (!data) {
    // thers is no user data
  } 
  
  const tbody = document.querySelector("#income-tbody")
  for (let item of data) {
    // const {date, assetType, classification, content, price, incomeType} = item;
    const tr = document.createElement("tr");
    const values = Object.values(item);
    for (const child of values) {
      const td = document.createElement("td");
      td.append(child);
      tr.append(td);
    }
    tbody.appendChild(tr);
  }
} catch (e) {
  console.log(`getIncomeData error : ${e}`)
}

// 수입 / 지출 / 총합을 화면에 그립니다
const totalIncomeSpan = document.querySelector("#total-income");
const incomeSpan = document.querySelector("#income-price");
const paymentSpan = document.querySelector("#payment-price");
let totalIncome = 0;
let income = 0;
let payment = 0;
for (const item of data) {
  const {price, incomeType} = item;

  if (incomeType === "지출") {
    let num = parseInt(price)
    totalIncome -= num;
    payment += num;
  }
  if (incomeType === "수입") {
    let num = parseInt(price)
    totalIncome+= num;
    income += num;
  }
}

totalIncomeSpan.innerHTML = totalIncome;
incomeSpan.innerHTML = income;
paymentSpan.innerHTML = payment;

// 사용자 수입 / 지출 onSubmit handler
const form = document.getElementById("user-form");
form.onsubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  // 폼 데이터를 콘솔에 출력
  formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
  });
}
// action-type: 지출
// date: 2024-08-09
// asset-type: 토스뱅크
// classification: 급여
// price: 2800000
// content: 수입