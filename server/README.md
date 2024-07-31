# 수입 / 지출 조회
> [과제](https://cat-antlion-144.notion.site/5c447df92fae4936b4b1e18f30dc3fe3)의 수입 / 지출 입력 및 조회 부분에서 조회 부분의 mock data 부분입니다
```json
{
   "data":[
      {
         "date":"2024.07.19",
         "assetsType":"카카오뱅크",
         "classification":"외식",
         "content":"식비",
         "price":"50000",
         "incomeType":"지출"
      },
      {
         "date":"2024.07.19",
         "assetsType":"토스",
         "classification":"급여",
         "content":"월급",
         "price":"2400000",
         "incomeType":"수입"
      },
   ]
}
```
- **GET**을 통해 데이터를 받아옵니다
- 데이터 수입 / 지출의 부분을 **incomeType**으로 구분했습니다.
- TODO:: **endpoint 기술**
- 
# 수입 / 지출 입력
> 사용자 수입 / 지출 입력 submit handler
```javascript
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

  // in console

  // action-type: 지출
  // date: 2024-08-15
  // asset-type: 토스뱅크
  // classification: 급여
  // price: 2800000
  // content: 월급
}
```
> API method
```javascript
const postUserData = async (formData) => {
  const data = await fetch(`${URL}/endpoints`,
      {
         method: "POST",
         credentials:"same-origin",
         data: formData
      }
   )
  // 추후 구현..
  
}
```
- formData를 body에 담아 보냅니다.