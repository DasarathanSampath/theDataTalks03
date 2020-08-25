(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{297:function(n,r,t){"use strict";t.r(r),r.default='---\r\ndate: 02 Apr 2020\r\ndesc: \'Growth of spread & death\'\r\nid: \'covid19-corona-virus-india-data\'\r\nimgDesc: \'Image is dot plot showing daily new cases & deaths\'\r\nname: \'covid19-corona-virus-india-data\'\r\nnoMainImage: True\r\noutput:\r\n  md_document:\r\n    variant: \'markdown+backtick\\_code\\_blocks-fenced\\_code\\_attributes-header\\_attributes\'\r\ntitle: \'India Covid-19 Corona virus data\'\r\ntrans: \'covid19-corona-virus-india-data\'\r\naltLang: true\r\n---\r\n\r\n*Data Source:* <https://www.who.int/>\\\r\n*Date downloaded:* 05-Apr-2020\r\n\r\nSituation report 1 (21-Jan-2020) to 74 (04-Apr-2020)\r\n\r\nFirst death due to Covid-19 was reported on 53rd day.\r\n\r\nIndia total cases as on date: 2301 (World-1051635 & China-82802)  \r\nIndia total deaths as on date: 56 (World-56985 & China-3331)  \r\nIndia daily average new cases: 35 (World-13863 & China-950)  \r\nIndia daily average new deaths: 1 (World-756 & China-40)  \r\nAverage Exponential Growth constant \'k\' for total cases: 0.06/day (World-0.18/day & China 0.17/day)  \r\nAverage Exponential Growth constant \'k\' for total deaths: 0.0047/day (World-0.04/day & China 0.04/day)  \r\n\r\nThe below chart has\r\n\r\n-   x-axis - Report number (OR) Day number (Report number 1 starts on\r\n    21-Jan-2020)\r\n-   y-axis - Cumulative total death & total cases as of reported date\r\n\r\nThe below graph clearly shows that the Covid-19 spread is exponential.\r\n\r\n<img src="/environment/covid19-corona-virus-india-data_files/figure-markdown/world%20corona%20plot-1.png" alt="alt text" class="blogs_image">\r\n\r\nThe below chart has\r\n\r\n-   x-axis - Report number (OR) Day number (Report number 1 starts on\r\n    21-Jan-2020)\r\n-   y-axis - Daily reported new deaths & cases\r\n\r\nThe below graph clearly shows that the Covid-19 daily new spread\r\nwas initially stable and floating around a constant value. Now it is increasing exponentially.\r\n\r\n<img src="/environment/covid19-corona-virus-india-data_files/figure-markdown/world%20corona%20plot-2.png" alt="alt text" class="blogs_image">\r\n\r\nThe below chart has\r\n\r\n-   x-axis - Report number (OR) Day number (Report number 1 starts on\r\n    21-Jan-2020)\r\n-   y-axis - Growth constant (K) for cases / deaths\r\n\r\nGrowth constant is calculated from the below general growth/decaying\r\nformula\r\n\r\nA=Pe<sup>kt</sup>\r\n\r\nInitially the growth constant for cases was decaying and later it is\r\ngrowing faster now.\\\r\nInitially the growth constant for deaths was negligble and started\r\nincreasing now.\r\n\r\n<div class="lowfont">\r\n\r\n**The summary of growth constant k for total cases**\r\n\r\n|Min. |1st Qu.  |Median    |Mean |3rd Qu.    |Max. |\r\n|-------|---------|--------|-------|---------|--------|\r\n|0.00000 |0.03754 |0.07086 |0.06279 |0.08600 |0.10321|\r\n\r\n**The summary of growth constant k for total deaths**\r\n\r\n|Min.  |1st Qu.   |Median     |Mean  |3rd Qu.     |Max. |\r\n|-------|---------|--------|-------|---------|--------|\r\n|0.000000 |0.000000 |0.000000 |0.004681 |0.000000 |0.035187|\r\n\r\n\r\n</div>\r\n\r\n<img src="/environment/covid19-corona-virus-india-data_files/figure-markdown/growth%20constant%20plot-1.png" alt="alt text" class="blogs_image">\r\n\r\n<style>\r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border:2px solid gray;\r\n}\r\n\r\nth{\r\n    border:2px solid gray;\r\n}\r\n\r\ntd{\r\n    border:1px solid gray;\r\n}\r\n\r\n\r\n</style>'}}]);