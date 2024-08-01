##  API 명세 초안

### 현금흐름 입력
```
POST /cashflow

* 요청 바디
{
  "cashflow" :  {
         "date":"2024.07.19",
         "assetsType":"카카오뱅크",
         "classification":"외식",
         "content":"식비",
         "price":"50000",
         "incomeType":"지출"
  }
}
```


### 현금흐름 조회
```
GET /cashflow?year=2024&month=1

* 응답
{
   "data":[
      {
         "date":"2024-01-19",
         "assetsType":"카카오뱅크",
         "classification":"외식",
         "content":"식비",
         "price":"50000",
         "incomeType":"지출"
      },
      {
         "date":"2024-01-19",
         "assetsType":"토스",
         "classification":"급여",
         "content":"월급",
         "price":"2400000",
         "incomeType":"수입"
      },
   ]
}
```
