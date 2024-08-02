import { getIncomeInfo, postUserData } from "./api.js";

export const handleTableRendering = (cashflowData) => {
  const tbody = document.querySelector("#income-tbody")
  if (!cashflowData || !cashflowData.length) {
   // TODO: remove tr node or new table
   const rows = tbody.querySelectorAll("tr");
   rows.forEach(row => {
    const td = row.querySelector("td");
    if (td) {
      row.remove();
    }
   })
  };
  
  // clear table
  const rows = tbody.querySelectorAll("tr");
  rows.forEach(row => {
   const td = row.querySelector("td");
   if (td) {
     row.remove();
   }
  })

  for (let item of cashflowData) {

    const {date, asset_type, classification, content, price} = item;
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    
    const tr = document.createElement("tr");
    const dateTd = document.createElement("td");
    const assetTypeTd = document.createElement("td");
    const classificationTd = document.createElement("td");
    const contentTd = document.createElement("td");
    const priceTd = document.createElement("td");
    
    dateTd.append(`${year}.${month + 1}`);
    assetTypeTd.append(asset_type);
    classificationTd.append(classification);
    contentTd.append(content);
    priceTd.append(price);

    tr.append(dateTd);
    tr.append(assetTypeTd);
    tr.append(classificationTd);
    tr.append(contentTd);
    tr.append(priceTd);
    tbody.appendChild(tr);
  }
  return;
}
export const loadData = async (select) => {
  const [year, month] = select.value.split(".");
  const { data } = await getIncomeInfo(year, month);
  return data;
}
export const init = async (select) => {
  try {
    const [initYear, initMonth] = select.value.split(".");
    const {data:cashflowData} = await getIncomeInfo(initYear, initMonth);
      if (!cashflowData) {
        // thers is no user data
      }  
      handleTableRendering(cashflowData);
      return cashflowData;
  } catch (e) {
    console.log(`getIncomeData error : ${e}`)
  }
}

export const handleTotalIncome = (data, totalIncomeSpan, incomeSpan, paymentSpan) => {
  // 수입 / 지출 / 총합을 화면에 그립니다
if (!data || data.length === 0) {
  totalIncomeSpan.innerHTML = "0";
  incomeSpan.innerHTML = "0";
  paymentSpan.innerHTML = "0";
  return;
};

let totalIncome = 0;
let income = 0;
let payment = 0;
for (const item of data)
 {
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
}

export const userSubmitHandler = async (e) => {
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
    data.cashflow[key] = value;
});
  await postUserData(data);
  return;
  // 폼 데이터를 콘솔에 출력  
}

//
export const togglePrevCashflow = (select) => {
  if (select.selectedIndex === 0) {
    return;
  }
  select.selectedIndex -= 1;
  return;
}

//
export const toggleRigthCashflow = (select) => {
  console.log("right click!!");
  console.log(select);
  if (select.selectedIndex === select.options.length - 1) {
    return;
  }
  select.selectedIndex += 1;
  return;
}