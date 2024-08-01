
// const MOCK = {"data":[{"date":"2024.07.19","assetsType":"카카오뱅크","classification":"외식","content":"식비","price":"50000","incomeType":"지출"},{"date":"2024.07.19","assetsType":"토스","classification":"급여","content":"월급","price":"2400000","incomeType":"수입"},{"date":"2024.07.19","assetsType":"카카오뱅크","classification":"외식","content":"식비","price":"50000","incomeType":"지출"}]}
const URL = "http://172.29.12.20:8000";
// 수익 및 지출 데이터를 받아옵니다
export const getIncomeInfo = async (year, month) => {
  try {
    const response = await fetch(`${URL}/cashflow?year=${year}&month=08`)
    if (!response.ok) throw new Error("수입/ 지출을 받아오는데 문제가 발생했습니다")
    const data  = await response.json(); 
    return data
  } catch (e) {
    console.log(e);
    alert(e.message)
  }
}



// 수입 / 지출 데이터 post
export const postUserData = async (data) => {
  try {
    const response = await fetch(`${URL}/cashflow`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials:"same-origin",
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("수입/ 지출을 입력하는데 문제가 발생했습니다");
    }
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
}