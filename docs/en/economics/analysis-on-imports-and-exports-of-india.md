---
date: 17 Feb 2019
desc: Import and export analysis against foreign currency exchange rate, trade
    deficit & foreign currency reserve
id: 'home'
imgDesc: Image is a Line chart and it shows the import export analysis against
    trade deficit
name: 'analysis-on-imports-and-exports-of-india'
noMainImage: True
output:
  md_document:
    variant: 'markdown+backtick\_code\_blocks-fenced\_code\_attributes-header\_attributes'
title: Analysis on Imports and Exports of India
trans: 'இந்தியா-இறக்குமதி-ஏற்றுமதி-பகுப்பாய்வு'
altLang: true
---
<div>
    <adsbygoogle />
</div>
<Adsense
          data-ad-client="ca-pub-3042269102042405"
          data-ad-slot="1234567890"
/>

Introduction
------------

The objective of this analysis is to measure the impact on Import/Export
value due to change in various factors like GDP, Exchange rate (currency
inflation), inflation, trade policies, foreign currency reserves,
demand, trade deficit, countries current account, quality, productivity
& labor cost.

Out of all variables we have taken the below variables for which we have
measurable data

-   Exchange rate
-   Trade deficit
-   Foreign currency reserve

Data source for this analysis\
<https://commerce.gov.in/>\
<https://m.rbi.org.in/>

The required values are in various sub-pages of the above-mentioned websites and
we have manually copied the values of below said data variables into a
\*.CSV file. This file can be downloaded from [Imports & Exports of India](http://thedatatalks.in/datas/economics/import_export.csv)

### Data Variables:

Data for this analysis has below variables

-   Year - End of the financial year - Example the year 1998 represents the
    financial year of 1997-98
-   Import.INR.lacs. - Total import value in "lacs INR"
-   Import.USD.millions. - Total import value in "million USD"
-   Export.INR.lacs. - Total Export value in "lacs INR"
-   Export.USD.millions. - Total export value in "million USD"
-   Exchange.rate - Exchange rate (Calculated based on export INR & USD
    values)
-   Trade.deficit.INR.lacs. - Import less export in "lacs INR"
    (Calculated as import less export)
-   Trade.deficit.USD.millions. - Import less export in "million USD"
    (Calculated as import less export)
-   FC.Reserve.INR.lacs. - Foreign currency reserve in "lacs INR"
-   FC.Reserve.USD.millions. - Foreign currency reserve in "million USD"

All above USD & INR values are reported values in the current price.

### Analysis 1: Representation of Import, Export & Trade Deficit

The below chart is a representation of import, export & trade deficit in
a single line chart. We have a separate chart for INR & USD values. The
percentage values mentioned above each point are the "positive growth"/"negative growth" from the
previous year value.

-   The change in Import and Export values are directly proportional.
-   But the trade deficit increases or decreases along with
    import/export values.
-   Except for a few instances, the change in "positive
    growth"/"negative growth" is always higher in USD, when compared to
    INR. It tells the USD is more sensitive than INR.
-   The first drop occurred after 2009 and it was recovered within one
    year.
-   The second drop occurred around 2013 and it started recovering
    from 2018.
-   Also there was a stagnation of import & export from the year 2013
    to 2017.

<img src="/economics/import-export-analysis/figure-markdown/img1.png" alt="alt text" class="blogs_image">

<!-- ![](/economics/import-export-analysis/figure-markdown/img1.png) -->

### Analysis 2: Import & Export against Exchange rate

The below chart shows the import & export in USD & INR against the
exchange rate. All other variables affecting import & export were
assumed unchanged. Practically this situation is not feasible.

-   Since the data points are scattered, we have added a linear
    regression model to each chart.
-   The linear model line clearly shows that import & export are
    directly proportional to the exchange rate.

<img src="/economics/import-export-analysis/figure-markdown/img2.png" alt="alt text" class="blogs_image">

### Analysis 3: Import, Export & Foreign Currency Reserve

The below chart shows the import, export & foreign curremcy reserve in
USD & INR against the year. All other variables affecting import &
export was assumed unchanged.

-   The "positive/negative growth" is USD is mostly higher than INR.
-   The INR chart shows a growth for the year 2012, 2013 & 2014, which
    is flat in USD chart. Currency inflation could be a reason for this.
-   Also there was a stagnation of foreign currency reserve from the
    year 2012 and it started recovering from the year 2017.

<!-- ![](/economics/import-export-analysis/figure-markdown/img3.png) -->
<img src="/economics/import-export-analysis/figure-markdown/img3.png" alt="alt text" class="blogs_image">

### Analysis 4: Year on Year (YoY) Percentage growth of Import, Export, Trade deficit & Foreign currency reserve

The below chart shows positive/negative growth of import, export, trade
deficit & foreign currency reserve in USD & INR.

Even though both INR & USD charts look the same, the below findings
arrived from the USD chart.

-   When import grows more than export, then the sensitivity of the
    increase in trade deficit is more. Similarly when the import drops
    more than export, then the sensitivity of the decrease in trade
    deficit is more.
-   All variable were having negative/positive growth together for 7
    years out of 19 years (from 2001 to 2019).
-   Always import & export drops when foreign currency reserve drops in
    the previous year, except 2011 & 2012, 2017 & 2018. But this
    exception may be due to the huge fall in the succeeding/preceding years 2010, 2013 & 2019.


<img src="/economics/import-export-analysis/figure-markdown/img4.png" alt="alt text" class="blogs_image">

<style>   

</style>