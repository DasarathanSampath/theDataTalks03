exports.ids = [45];
exports.modules = {

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ndate:  26 Apr 2020\r\ndesc: Binary out comes and it's iid trials\r\nimgDesc: 'Image is p-value curve for 100 coin flips'\r\nname: 'bernouli-distribution-binomial-trials'\r\nnoMainImage: True\r\ntitle: Bernouli distribution & binomial trials\r\naltLang: false\r\n---\r\n\r\n## Bernouli distribution\r\n\r\nBernouli distribution contains categorical variables and they are like qualitative attributes. It has only binary out comes like sucess/failure, yes/no, like/dislike, etc.\r\nWith a bernouli random variable, we will have only one trial.\r\n\r\nThere is nothing in between to find a mean or something else.\r\n\r\nSuccess = 1  \r\nFailure = 0  \r\n\r\nThe mean is calculated using probability weighted sum\r\n\r\nµ = (probability of failure)*0 + (probability of success)*1\r\n\r\nIf the probability of success is p, then the probability failure will be q = (1-p)\r\n\r\nMean = µ = E[X] = (1-p) * 0 + p * 1\r\n         = p    \r\n\r\nVariance = ν = σ² = E[(X-µ)²] = Σ(x-µ)²*p(x)  \r\n                  = (1-p)(0-p)² + p (1-p)²  \r\n                  = p² - p³ + p - 2p² + p³  \r\n                  = p(1-P) = pq  \r\n\r\nStandard deviation = σ = √(p(1-p)) = √(pq)\r\n\r\n\r\nIf the event is iid (independent identical distribution) then \r\n\r\n(**iid**: all samples are mutually independent & all samples will have the same probability distribution)\r\n\r\nVariance of sample mean = ν' = σ²/n\r\n\r\n(Please read this article for details [standard Error](http://thedatatalks.in/education/standard-deviation-and-error))\r\n\r\nStandard error  = Standard deviation of statistics   \r\n                = SE = √ν' = σ/√n\r\n\r\nIf the event is fair, then\r\n\r\np = ½  \r\nσ = √(½ * ½) = ½  \r\nSE = 1/(2√n)\r\n\r\n**Example:**\r\n\r\nSE for a 15 coin flips, If each event is fair & iid\r\n\r\nSE = 1/(2√15) = 0.1291 = 12.91%\r\n\r\nA set of R commands will return the above value\r\n\r\nGenerate 1000 rows of trials with each row contain 1500 individual trials  \r\ntrials <- matrix(sample(0:1, 15000, TRUE), 1000)\r\n\r\nFind means of each row  \r\nmeanofrows <- apply(trials, 1, mean)\r\n\r\nFind standard deviation of means  \r\nsd(meanofrows) = 0.1266 = 12.66% (This is approximately equal to 12.91%)\r\n\r\n## Binomial trials\r\n\r\nBinomial trials are generated from iid bernouli trials.\r\n\r\nLet X<sub>1</sub>, X<sub>2</sub>, X<sub>3</sub> ... X<sub>n</sub> are iid bernouli trials then\r\n\r\n\\begin{equation}\r\n\\text{ The binomial random variable } X = \\sum_{i=1}^n X_{i} \\\\\\\\  \r\n\\text{ Binomial mass function } = P_{X=x} = \\left( \\begin{array}{c} n \\\\\\\\ x \\end{array} \\right) p^{x} (1-p)^{n-x} \\\\\\\\\r\n\\text{ Here read } \\left( \\begin{array}{c} n \\\\\\\\ x \\end{array} \\right) \\text{ as n choose x. i.e., } \\\\\\\\\r\n\\left( \\begin{array}{c} n \\\\\\\\ x \\end{array} \\right) = {n! \\over x!(n-x)!}\r\n\\end{equation}\r\n\r\n**Example:**\r\n\r\nProbability of getting atleast 7 girls(none are twins) out of 8 children for a parent can be calculated as\r\n\r\n\\begin{equation}\r\n= \\left( \\begin{array}{c} 8 \\\\\\\\ 7 \\end{array} \\right) * 0.5^{7} * (1-0.5)^{(8-7)} + \\left( \\begin{array}{c} 8 \\\\\\\\ 8 \\end{array} \\right) * 0.5^{8} * (1-0.5)^{(8-8)} \\\\\\\\\r\n= 0.03516\r\n\\end{equation}\r\n\r\nA simple R command will give the above value\r\n\r\n= choose(8,7) * 0.5^7 * (1-0.5)^(8-7) + choose(8,8) * 0.5^8 * (1-0.5)^(8-8)\r\n=0.03516\r\n\r\n(OR)\r\n\r\n= pbinom(q=6, size=8, prob=0.5, lower.tail=FALSE)\r\n= 0.03516\r\n\r\nHere q = 6 means > 6 values, which are 7 & 8.\r\n\r\n## Binomial trials & p-value\r\n\r\nPlease read this page [p-value](http://thedatatalks.in/education/p-value) before starting this section.\r\n\r\nConsider a coin flip of 100 times.\r\n\r\nWe get 2<sup>100</sup> possible combinations.\r\n\r\nIf we would like to get 50 heads out of 100 coin flips i.e., probability to get 50 heads {P(X=50)} can be calculated as below.\r\n\r\n\\begin{equation}\r\n\\text{Out of } 2^{100} \\text{possible out comes only } \\left( \\begin{array}{c} 100 \\\\\\\\ 50 \\end{array} \\right) \\text{ of them will have exactly 50 heads. Here } \\left( \\begin{array}{c} 100 \\\\\\\\ 50 \\end{array} \\right) \\text{can be read as 100 choose 50 i.e., } = \r\n{(100! \\over 50!(100-50)!)} \\\\\\\\\r\n\\text{So the probability to get 50 Heads is } \\\\\\\\\r\n2^{100} ÷ \\left( \\begin{array}{c} 100 \\\\\\\\ 50 \\end{array} \\right) = 0.0796 = 7.96%\r\n\\end{equation}\r\n\r\nA simple R function will return the above value\r\n\r\n```R\r\nDensity function\r\ndbinom(50, 100, prob = 0.5) \r\n```\r\n= 0.07958924 = 7.96%\r\n\r\nWhen P(X=50) = 0.0796 then the p-value will be P(X≤49 OR X≥51), which is 1-0.0796 = 0.9204\r\n\r\nP(X≥51) can be found using the below formula\r\n\r\n\\begin{equation}\r\n\\left( \\begin{array}{c} n \\\\\\\\ x \\end{array} \\right) * P^x * (1-P)^{(n-x)} \\\\\\\\\r\n\\text{i.e., (consider the coin is not biased)} \\\\\\\\\r\n\\left( \\begin{array}{c} 100 \\\\\\\\ 51 \\end{array} \\right) * 0.5^{51} * (1-0.5)^{(100-51)} + \\left( \\begin{array}{c} 100 \\\\\\\\ 52 \\end{array} \\right) * 0.5^{52} * (1-0.5)^{(100-52)} + .... + \\left( \\begin{array}{c} 100 \\\\\\\\ 100 \\end{array} \\right) * 0.5^{100} * (1-0.5)^{(100-100)} = 0.4602 = 46.02%\r\n\\end{equation}\r\n\r\nA simple R function will return the above value\r\n\r\n<div class=\"codeBlocks\">\r\n\r\n```R\r\nCumulative distribution function\r\npbinom(50, 100, 0.5, lower.tail = FALSE) \r\n```\r\n\r\n</div>\r\n\r\n= 0.4602054 = 46.02%\r\n\r\nSimilarly p-values for other possible observations are given below\r\n\r\n|  100 coin flips E(X) = 50) |\r\n|--------------------------------|\r\n| P(X ≤ 49 or X ≥ 51) = 0.9204   |\r\n| P(X ≤ 48 or X ≥ 52) = 0.7644   |\r\n| . . . . . . . .                |\r\n| P(X ≤ 41 or X ≥ 59) = 0.0886   |\r\n| P(X ≤ 40 or X ≥ 60) = 0.0569   |\r\n| P(X ≤ 39 or X ≥ 61) = 0.0352   |\r\n| P(X ≤ 38 or X ≥ 62) = 0.0210   |\r\n| P(X ≤ 37 or X ≥ 63) = 0.0120   |\r\n| P(X ≤ 36 or X ≥ 64) = 0.0066   |\r\n| . . . . . . . .                |\r\n| P(X = 0 or X = 100) = 0.0000   |\r\n\r\n\r\nWhen we plot the above values we get the below bell curve. \r\n\r\n<img src=\"/education/binomial-distribution/coinflip.png\" alt=\"alt text\" style=\"width:100%\">\r\n\r\nFor the above binomial distribution, \r\n- Null hypothesis H<sub>0</sub> = 50 heads\r\n- At 5% significance level (α) we get 95% confidence (1-α)\r\n- We reject H<sub>0</sub>, when we get <40 heads (2.5%) or >60 heads (2.5%).\r\n- i.e., 95% of the time we correctly conclude that the coin is indeed fair\r\n- i.e., 95% of the time we correctly accept H<sub>0</sub>\r\n- i.e., 5% of the time we erroneously conclude that the coin is unfair.\r\n- i.e., 5% of the time we erroneously reject H<sub>0</sub>. This leads to Type-I error. (Fail to accept H<sub>0</sub> when it is true)\r\n\r\n<style>\r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border:2px solid gray;\r\n}\r\nth{\r\n    border:2px solid gray;\r\n}\r\ntd{\r\n    border:1px solid gray;\r\n}\r\n</style>");

/***/ })

};;
//# sourceMappingURL=45.js.map