
const MOCK = {"data":[{"date":"2024.07.19","assetsType":"카카오뱅크","classification":"외식","content":"식비","price":"50000","incomeType":"지출"},{"date":"2024.07.19","assetsType":"토스","classification":"급여","content":"월급","price":"2400000","incomeType":"수입"},{"date":"2024.07.19","assetsType":"카카오뱅크","classification":"외식","content":"식비","price":"50000","incomeType":"지출"}]}
const URL = "http://123.123.123.1";
// 수익 및 지출 데이터를 받아옵니다
export const getIncomeInfo = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve(MOCK), 3000);
  })
  console.log(data);
  return data
}


// 수입 / 지출 데이터 post
const postUserData = async (formData) => {
  const data = await fetch(`${URL}/endpoints`, {method: "POST", credentials:"same-origin", data: formData})
  // 추후 구현..
  
}