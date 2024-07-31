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