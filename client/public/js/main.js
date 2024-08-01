import { getIncomeInfo, postUserData } from "./api.js";

// 받은 데이터를 전역에서 다룹니다
const select = document.querySelector(".toggle_form select");
const [initYear, initMonth] = select.value.split(".");
const { data } = await getIncomeInfo(initYear, initMonth);

console.log("data")
console.log(data)
// 초기 income data를 받아옵니다
try {
  if (!data) {
    // thers is no user data
  } 
  
  const tbody = document.querySelector("#income-tbody")
  for (let item of data) {
    const {date, asset_type, classification, content, price} = item;
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    
    const tr = document.createElement("tr");
    const dateTd = document.createElement("td");
    const assetTypeTd = document.createElement("td");
    const classificationTd = document.createElement("td");
    const contentTd = document.createElement("td");
    const priceTd = document.createElement("td");
    
    dateTd.append(`${year}.${month}`);
    assetTypeTd.append(asset_type);
    classificationTd.append(classification);
    contentTd.append(content);
    priceTd.append(price);

    tr.append(dateTd);
    tr.append(assetTypeTd);
    tr.append(classificationTd);
    tr.append(contentTd);
    tr.append(priceTd);
    // for (const child of values) {
    //   const td = document.createElement("td");
    //   td.append(child);
    //   tr.append(td);
    // }
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
  const {price} = item;
  let num = parseInt(price)

  if (num < 0) {
    totalIncome += num;
    payment += Math.abs(num);
  }
  if (num > 0) {
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
  let price = formData.get("action-type") === "지출" ? parseInt(formData.get("price")) * -1 : parseInt(formData.get("price"))
  formData.set("price", price)
  formData.delete("action-type");
  // 데이터 post
  const data = {
    cashflow: {

    }
  };
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    data.cashflow[key] = value;
});


  postUserData(data);
  // 폼 데이터를 콘솔에 출력  
}
// action-type: 지출
// date: 2024-08-09
// asset-type: 토스뱅크
// classification: 급여
// price: 2800000
// content: 수입

// 수입 & 지출 toggle part

const incomeLabel = document.getElementById("income-label");
const paymentLabel = document.getElementById("payment-label");

incomeLabel.onclick = (e) => {
  console.log("income label click")
  console.log(e.target);
}

paymentLabel.onclick = (e) => {
  console.log("payment label click")
  console.log(e.target);
}

// toggle left click part
const leftBtn = document.querySelector('.toggle_form input[value="⬅"]')
console.log("leftBtn")
console.log(leftBtn)
const handleLeftClick = () => {
  console.log("click")
  if (select.selectedIndex === 0) {
    return;
  }
  select.selectedIndex -= 1;
  return;
}
leftBtn.addEventListener("click", handleLeftClick);

// toggle right click part

const rigthBtn = document.querySelector('.toggle_form input[value="➡"]')
const handleRigthClick = () => {
  console.log("click")
  if (select.selectedIndex === select.options.length - 1) {
    return;
  }
  select.selectedIndex += 1;
  return;
}
rigthBtn.addEventListener("click", handleRigthClick);