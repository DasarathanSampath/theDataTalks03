exports.ids = [39];
exports.modules = {

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ndate: 17 Feb 2019\r\ndesc: Import and export analysis against foreign currency exchange rate, trade\r\n    deficit & foreign currency reserve\r\nid: 'home'\r\nimgDesc: Image is a Line chart and it shows the import export analysis against\r\n    trade deficit\r\nname: 'analysis-on-imports-and-exports-of-india'\r\nnoMainImage: True\r\noutput:\r\n  md_document:\r\n    variant: 'markdown+backtick\\_code\\_blocks-fenced\\_code\\_attributes-header\\_attributes'\r\ntitle: Analysis on Imports and Exports of India\r\ntrans: 'இந்தியா-இறக்குமதி-ஏற்றுமதி-பகுப்பாய்வு'\r\naltLang: true\r\n---\r\n\r\nIntroduction\r\n------------\r\n\r\nThe objective of this analysis is to measure the impact on Import/Export\r\nvalue due to change in various factors like GDP, Exchange rate (currency\r\ninflation), inflation, trade policies, foreign currency reserves,\r\ndemand, trade deficit, countries current account, quality, productivity\r\n& labor cost.\r\n\r\nOut of all variables we have taken the below variables for which we have\r\nmeasurable data\r\n\r\n-   Exchange rate\r\n-   Trade deficit\r\n-   Foreign currency reserve\r\n\r\nData source for this analysis\\\r\n<https://commerce.gov.in/>\\\r\n<https://m.rbi.org.in/>\r\n\r\nThe required values are in various sub-pages of the above-mentioned websites and\r\nwe have manually copied the values of below said data variables into a\r\n\\*.CSV file. This file can be downloaded from [Imports & Exports of India](http://thedatatalks.in/datas/economics/import_export.csv)\r\n\r\n### Data Variables:\r\n\r\nData for this analysis has below variables\r\n\r\n-   Year - End of the financial year - Example the year 1998 represents the\r\n    financial year of 1997-98\r\n-   Import.INR.lacs. - Total import value in \"lacs INR\"\r\n-   Import.USD.millions. - Total import value in \"million USD\"\r\n-   Export.INR.lacs. - Total Export value in \"lacs INR\"\r\n-   Export.USD.millions. - Total export value in \"million USD\"\r\n-   Exchange.rate - Exchange rate (Calculated based on export INR & USD\r\n    values)\r\n-   Trade.deficit.INR.lacs. - Import less export in \"lacs INR\"\r\n    (Calculated as import less export)\r\n-   Trade.deficit.USD.millions. - Import less export in \"million USD\"\r\n    (Calculated as import less export)\r\n-   FC.Reserve.INR.lacs. - Foreign currency reserve in \"lacs INR\"\r\n-   FC.Reserve.USD.millions. - Foreign currency reserve in \"million USD\"\r\n\r\nAll above USD & INR values are reported values in the current price.\r\n\r\n### Analysis 1: Representation of Import, Export & Trade Deficit\r\n\r\nThe below chart is a representation of import, export & trade deficit in\r\na single line chart. We have a separate chart for INR & USD values. The\r\npercentage values mentioned above each point are the \"positive growth\"/\"negative growth\" from the\r\nprevious year value.\r\n\r\n-   The change in Import and Export values are directly proportional.\r\n-   But the trade deficit increases or decreases along with\r\n    import/export values.\r\n-   Except for a few instances, the change in \"positive\r\n    growth\"/\"negative growth\" is always higher in USD, when compared to\r\n    INR. It tells the USD is more sensitive than INR.\r\n-   The first drop occurred after 2009 and it was recovered within one\r\n    year.\r\n-   The second drop occurred around 2013 and it started recovering\r\n    from 2018.\r\n-   Also there was a stagnation of import & export from the year 2013\r\n    to 2017.\r\n\r\n<img src=\"/economics/import-export-analysis/figure-markdown/img1.png\" alt=\"alt text\" class=\"blogs_image\">\r\n\r\n<!-- ![](/economics/import-export-analysis/figure-markdown/img1.png) -->\r\n\r\n### Analysis 2: Import & Export against Exchange rate\r\n\r\nThe below chart shows the import & export in USD & INR against the\r\nexchange rate. All other variables affecting import & export were\r\nassumed unchanged. Practically this situation is not feasible.\r\n\r\n-   Since the data points are scattered, we have added a linear\r\n    regression model to each chart.\r\n-   The linear model line clearly shows that import & export are\r\n    directly proportional to the exchange rate.\r\n\r\n<img src=\"/economics/import-export-analysis/figure-markdown/img2.png\" alt=\"alt text\" class=\"blogs_image\">\r\n\r\n### Analysis 3: Import, Export & Foreign Currency Reserve\r\n\r\nThe below chart shows the import, export & foreign curremcy reserve in\r\nUSD & INR against the year. All other variables affecting import &\r\nexport was assumed unchanged.\r\n\r\n-   The \"positive/negative growth\" is USD is mostly higher than INR.\r\n-   The INR chart shows a growth for the year 2012, 2013 & 2014, which\r\n    is flat in USD chart. Currency inflation could be a reason for this.\r\n-   Also there was a stagnation of foreign currency reserve from the\r\n    year 2012 and it started recovering from the year 2017.\r\n\r\n<!-- ![](/economics/import-export-analysis/figure-markdown/img3.png) -->\r\n<img src=\"/economics/import-export-analysis/figure-markdown/img3.png\" alt=\"alt text\" class=\"blogs_image\">\r\n\r\n### Analysis 4: Year on Year (YoY) Percentage growth of Import, Export, Trade deficit & Foreign currency reserve\r\n\r\nThe below chart shows positive/negative growth of import, export, trade\r\ndeficit & foreign currency reserve in USD & INR.\r\n\r\nEven though both INR & USD charts look the same, the below findings\r\narrived from the USD chart.\r\n\r\n-   When import grows more than export, then the sensitivity of the\r\n    increase in trade deficit is more. Similarly when the import drops\r\n    more than export, then the sensitivity of the decrease in trade\r\n    deficit is more.\r\n-   All variable were having negative/positive growth together for 7\r\n    years out of 19 years (from 2001 to 2019).\r\n-   Always import & export drops when foreign currency reserve drops in\r\n    the previous year, except 2011 & 2012, 2017 & 2018. But this\r\n    exception may be due to the huge fall in the succeeding/preceding years 2010, 2013 & 2019.\r\n\r\n\r\n<img src=\"/economics/import-export-analysis/figure-markdown/img4.png\" alt=\"alt text\" class=\"blogs_image\">\r\n\r\n<style>   \r\n\r\n</style>");

/***/ })

};;
//# sourceMappingURL=39.js.map