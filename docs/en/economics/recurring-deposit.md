---
date: 22 Apr 2020
desc: 'Calculator and details for Recurring deposit'
imgDesc: 'No Image'
name: 'recurring-deposit'
noMainImage: True
title: Recurring deposit
altLang: true
headA1: Monthly recurring deposit
headA2: 'Calculator'
headA3: Monthly Recurring Deposit(currency)(p)
headA4: Period(Months)(t)
headA5: Yearly Interest(%)(i)
headA6: Compounding Period(n)
headA7: Total Invested(A)
headA8: Interest Receivable(B)
headA9: Total Receivable(A+B)
---

<div>
    <adsbygoogle />
</div>
<Adsense
          data-ad-client="ca-pub-3042269102042405"
          data-ad-slot="1234567890"
/>

For detailed explanation, please refer [Reinvestment Deposit Scheme](http://thedatatalks.in/economics/reinvestment-deposit-scheme)

The total interest receivable from a recurring deposit is calculated as below

- Identify the compounding period

    - Quarterly has 4 times compounding in a year, 
        we have to compound the interest for every 3 months  
    - HalfYearly has 2 times compounding in a year, 
        we have to compound the interest for every 6 months  
    - Monthly has 12 times compounding in a year, 
        we have to compound the interest for every 12 months   
    - Yearly has 1 time compounding in a year, 
        we have to compound the interest for every 1 month

Calculate the simple interest using regular formula (pti/100) for each month and add the cumulative interest to the invested amount based on the compounding period. 

where,  
i - Rate of Interest(%)  
t - Total number of periods(months)  
p - Monthly recurring amount(currency) 

Below is an example for quarterly compounding for a monthly recurring deposit of 1000 at 6% annual interest

<div class="lowfont">

| Monthly recuring Deposit | Interest | Remarks |
|---------------------------|----------|---------|
| 1000                      | 5        | 1000*6&#247;100&#247;12=5        |
| 1000                      | 10       | 2000*6&#247;100&#247;12=10        |
| 1000                      | 15       | 3000*6&#247;100&#247;12=15        |
| 1030                      | 20.15    | (4000+5+10+15)*6&#247;100&#247;12=20.15        |
| 1000                      | 25.15    | and so on        |
| 1000                      | 30.15    |         |
| 1075.45                   | 35.52725 |         |
| 1000                      | 40.52725 |         |
| 1000                      | 45.52725 |         |
| 1121.582                  | 51.13516 |         |
| 1000                      | 56.13516 |         |
| 1000                      | 61.13516 |         |
| 1168.405                  | 66.97719 |         |

</div>

<style>   
table{
    border-collapse: collapse;
    border-spacing: 0;
    border:2px solid gray;
}

th{
    border:2px solid gray;
}

td{
    border:1px solid gray;
}
</style>