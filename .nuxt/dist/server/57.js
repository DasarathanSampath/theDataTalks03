exports.ids = [57];
exports.modules = {

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ndate:  26 Apr 2020\r\ndesc: Discrete & continuous models of uniform distribution\r\nimgDesc: 'Image represents a continuous uniform distribution of a random numbers'\r\nname: 'uniform-distribution'\r\nnoMainImage: True\r\ntitle: \"Uniform distribution\"\r\naltLang: false\r\n---\r\n<div>\r\n    <adsbygoogle />\r\n</div>\r\n<Adsense\r\n          data-ad-client=\"ca-pub-3042269102042405\"\r\n          data-ad-slot=\"1234567890\"\r\n/>\r\n\r\n## Uniform-distribution:\r\nA distribution, where each outcome has probability of equally, likely chances and they are impossible beyond a range.\r\n\r\n## These are discrete uniform distribution:\r\n\r\nConsider a draw of cards(suit) from a deck of playing cards, each suit (clubs, hearts, diamonds & spades) will have a probability of equally, likely chances of 1/4.\r\nThe number of values are finite for each suit. We can not get other than 2 to 10, ace, jack, queen & king. \r\n\r\nConsider a roll of a die having 6 faces (1,2,3,4,5 & 6), each face will have a probability of equally, likely chances of 1/6.\r\nThe number of values are finite viz., 1,2,3,4,5 & 6. We can not get 1.2, 8, 2.6 or some other value.\r\n\r\nThe **probability mass function(PMF)**, which gives the probability of x\r\n\\begin{equation}\r\np(x) \\geq 0     AND     \\sum_{i=1}^n p(x) =1\\\\\\      \r\np(x) = p(X=x)\r\n\\end{equation}\r\n\r\nThe below images are explaining the PMF of single fair dice & two fair dice.\r\n\r\n<div class=\"mdImageRow\">\r\n<div class=\"mdImageCol\">\r\n<img src=\"/education/uniform-distribution/single-fair-dice-pmf.png\" alt=\"alt text\" style=\"width:100%\">\r\n</div>\r\n<div class=\"mdImageCol\">\r\n<img src=\"/education/uniform-distribution/two-fair-dice-pmf.png\" alt=\"alt text\" style=\"width:100%\">\r\n</div>\r\n</div>\r\n\r\nHere the dice are fair and they are not biased. \r\n\r\nNotice the change in the shape of the graph. When the number of dice increases, the curve get closer to bell shape and the curve widens.\r\nIt always approximates to normal distribution.\r\n\r\n\r\n**Examples:**\r\n1. Single fair dice - Probability to get 3 is 1/6\r\n2. Single fair dice - Probablity to get greater than or equal to 3 & less than are equal to 5 is 1/6+1/6+1/6 = 3/6 = 1/2\r\n3. Two fair dice - Probability to get 2 is 1/36\r\n4. Two fair dice - Probablity to get greater than or equal to 3 & less than are equal to 5 is 3/36+6/36+10/36 = 19/36\r\n\r\nThe **cumulative distribution function(CDF)**, which gives the probability that the variable less than or equal to the value x\r\n\r\n\\begin{equation}\r\nF(x) = p(X \\leq x)\\\\\\\\\r\n= \\sum_{x_i \\leq x} p(x_i)\\\\\\\\\r\n= p(x_1)+p(x_2)+p(x_3)+...+p(x)\r\n\\end{equation}\r\n<!-- \r\nFor any two population values a < b, \r\n\r\n\\begin{equation}\r\np(a \\leq X \\leq b) = \\sum_{a}^b p(x)\\\\\\\\ \r\n= F(b) - F(\\overline{a})\\\\\\\\\r\n\\text{Where }\r\n\\overline{a}\\\\\\\\\r\n\\text{ is the preceding value of a, in the sorted population.}\r\n\\end{equation}\r\n -->\r\nThe below images are explaining the CDF of single fair dice & two fair dice.\r\n\r\n<div class=\"mdImageRow\">\r\n<div class=\"mdImageCol\">\r\n<img src=\"/education/uniform-distribution/single-fair-dice-cdf.png\" alt=\"alt text\" style=\"width:100%\">\r\n</div>\r\n<div class=\"mdImageCol\">\r\n<img src=\"/education/uniform-distribution/two-fair-dice-cdf.png\" alt=\"alt text\" style=\"width:100%\">\r\n</div>\r\n</div>\r\n\r\nHere the dices are fair & they are not biased. \r\n\r\n**Examples:**\r\n1. Single fair dice - Probability to get less than 3 is 1/6+1/6+1/6 = 3/6 = 1/2\r\n2. Two fair dice - Probablity to get less 3 is 1/36+3/36 = 4/36 = 1/9\r\n\r\nIf X is a discrete random variable then the **Population Mean**\r\n\r\n\\begin{equation}\r\n\\mu = E[X] = \\sum {x * p(x)}\r\n\\end{equation}\r\n\r\nIf X is a discrete random variable then the **Population variance**\r\n\r\n\\begin{equation}\r\n\\sigma^2 = E[(X-\\mu)^2] = \\sum {(x-\\mu)^2 * p(x)}\\\\\\\\\r\n\\text{The same can be written as }\\\\\\\\\r\n\\sigma^2 = E[X^2]-\\mu^2 = \\sum{x^2*p(x)-\\mu^2}\r\n\\end{equation}\r\n\r\n**Examples:**\r\n\r\nMean & variance of a single dice are\r\n\r\nMean = (1 * 1/6) + (2 * 1/6) + (3 * 1/6) + (4 * 1/6) + (5 * 1/6) + (6 * 1/6) = 21/6 = 3.5  \r\n\r\nThe same can be calculated using below formula  \r\nMean = (n + n * 6)/2  \r\nHere, 6 - is the number of faces on a dice & n - is the number of dice  \r\nSo, Mean = (1+1*6)/2 = 7/2 = 3.5\r\n\r\nVariance    = [(1-3.5)^2 * 1/6 + (2-3.5)^2 * 1/6 + (3-3.5)^2 * 1/6 + (4-3.5)^2 * 1/6 + (5-3.5)^2 * 1/6 + (6-3.5)^2 * 1/6  \r\n            = 70/24 = 35/12 = 2.91\r\n\r\nThe same can be calculated using below formula  \r\nMean = n * 35/12   \r\nn - is the number of dice    \r\nSo, Variance = 1* 35/12 = 2.91\r\n\r\nMean & variance of a 2 & 3 dice are\r\n\r\nFor, 2 Dice  \r\nMean = (2+2*6)/ = 14/2 = 7  \r\nVariance = 2 * 35/12 = 5.83\r\n\r\nFor, 3 Dice  \r\nMean = (3+3*6)/ = 21/2 = 10.5  \r\nVariance = 3 * 35/12 = 8.75\r\n\r\n\r\n## These are continious uniform distribution:\r\n\r\nConsider a random variable(a random number generation) between any two numbers. It can take any real numbers with in the range.\r\nThe number of values are finite with in the range and they are continuous.\r\n\r\nThese variables will have probability of equally likely chances with in a range at the same time the chances are impossible beyond the specified range.\r\n\r\nThe below image represents a continuous uniform distribution and it is generated using the below specified R-command\r\n\r\n> randomVariable <- runif(1000, min = -2, max = 2.5)  \r\n> hist(randomVariable, density = 50, freq = FALSE, xlim = c(-3,3), ylim = c(0, 0.3))  \r\n> curve(dunif(x, min = -2, max =2.5), from = -3, to = 3, n=1000, add = TRUE, col = \"red\", lwd=2)  \r\n\r\n1000 random numbers were generated between -2 & 2.5.  \r\nMinimum value 'a' = -2 & maximum value 'b' = 2.5.  \r\n\r\n<div class=\"mdImageRow\">\r\n<div class=\"mdImageCol\">\r\n<img src=\"/education/uniform-distribution/continuous-uniform-distribution.png\" alt=\"alt text\" style=\"width:100%\">\r\n</div>\r\n<div class=\"mdImageCol\">\r\n\r\n</div>\r\n</div>\r\n\r\nHere, \r\n\r\n\\begin{equation}\r\nDensity = f(x) = {1 \\over (b-a)} \\\\\\\\  \r\nMean = \\mu = {(b+a) \\over 2} \\\\\\\\  \r\nVariance = \\sigma^2 = {(b-a)^2 \\over 12}\r\n\\end{equation}  \r\n\r\n<style>\r\n\r\n</style>");

/***/ })

};;
//# sourceMappingURL=57.js.map