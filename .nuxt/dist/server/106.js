exports.ids = [106];
exports.modules = {

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ndate: 05 Apr 2020\r\ndesc: 'நோய் பரவல் மற்றும் அதனால் ஏற்படும் மரணத்தின் வளர்ச்சி விகிதம்'\r\nid: 'covid19-corona-virus-china-data'\r\nimgDesc: 'படம் ஒரு புள்ளி விளக்க படம். இது தினசரி புதிய பரவல் மற்றும் இறப்புகளைக் காட்டுகிறது.'\r\nname: 'covid19-corona-virus-china-data'\r\nnoMainImage: True\r\noutput:\r\n  md_document:\r\n    variant: 'markdown+backtick\\_code\\_blocks-fenced\\_code\\_attributes-header\\_attributes'\r\ntitle: 'சீனா, கோவிட் -19 கொரோனா வைரஸ்'\r\ntrans: 'covid19-corona-virus-china-data'\r\naltLang: true\r\n---\r\n\r\n**தரவு மூலம்:** <https://www.who.int/>  \r\n**பதிவிறக்கம் செய்யப்பட்ட தேதி:** 05-Apr-2020  \r\n\r\nசூழ்நிலை அறிக்கை 1 முதல் (21-Jan-2020) 75 வரை (04-Apr-2020).\r\n\r\nசீனாவின் மொத்த நோய் பரவல் (குறிப்பிட்ட தேதியின்படி): 82802 (உலகம்-1051635)   \r\nசீனாவின் மொத்த இறப்பு (குறிப்பிட்ட தேதியின்படி): 3331 (உலகம்-56985)  \r\nசீனாவின் புதிய நோய் பரவலின் தினசரி சராசரி: 950 (உலகம்-13863) - தற்போதைய மதிப்புகள் சராசரியை விட மிகக் குறைவு.  \r\nசீனாவின் புதிய இறப்பின் தினசரி சராசரி: 40 (உலகம்-756) - தற்போதைய மதிப்புகள் சராசரியை விட மிகக் குறைவு.  \r\nசீனாவின் நோய் பரவலின் சராசரி \"அதிவேக வளர்ச்சி மாறிலி\" 'k' : 0.17/நாள் (உலகம்-0.18/நாள்) - தற்போதைய மதிப்புகள் சராசரியை விட மிகக் குறைவு.  \r\nசீனாவின் இறப்பின் சராசரி \"அதிவேக வளர்ச்சி மாறிலி\" 'k' : 0.04/நாள் (உலகம்-0.04/நாள்) - தற்போதைய மதிப்புகள் சராசரியை விட குறைவு. \r\n\r\nகீழே உள்ள புள்ளி விளக்கப்படத்தில்\r\n\r\n-   X-அச்சு மாறி அறிக்கை எண் (அல்லது) நாள் எண் (அறிக்கை எண் 1 , 21-ஜனவரி -2020 அன்று தொடங்குகிறது )\r\n-   Y-அச்சு மாறி அறிக்கையிடப்பட்ட தேதியின்படி மொத்த இறப்புகள் மற்றும் மொத்த பரவல்கள்.\r\n\r\nகீழேயுள்ள வரைபடம் கோவிட் -19 நோய் பரவல் ஆரம்பத்தில் அதிவேக சமன்பாட்டை (exponential) பின்பற்றி பிறகு  மடக்கை சமன்பாட்டை (logarithmic) பின்பற்றத் தொடங்கியுள்ளது.\r\n\r\n<img src=\"/environment/covid19-corona-virus-china-data_files/figure-markdown/world%20corona%20plot-1.png\" alt=\"alt text\" class=\"blogs_image\">\r\n\r\nகீழே உள்ள புள்ளி விளக்கப்படத்தில்\r\n\r\n-   X-அச்சு மாறி அறிக்கை எண் (அல்லது) நாள் எண் (அறிக்கை எண் 1 , 21-ஜனவரி -2020 அன்று தொடங்குகிறது )\r\n-   y-அச்சு மாறி தினசரி புதிய இறப்புகள் மற்றும் நோய் பரவல்கள்\r\n\r\nகோவிட் -19 தினசரி புதிய நோய் பரவல் விரிவாக கட்டுப்படுத்தப்பட்டது என்பதை கீழே உள்ள வரைபடம் தெளிவாகக் காட்டுகிறது.\r\n\r\n<img src=\"/environment/covid19-corona-virus-china-data_files/figure-markdown/world%20corona%20plot-2.png\" alt=\"alt text\" class=\"blogs_image\">\r\n\r\n\r\nகீழே உள்ள புள்ளி விளக்கப்படத்தில்\r\n\r\n-   X-அச்சு மாறி அறிக்கை எண் (அல்லது) நாள் எண் (அறிக்கை எண் 1 , 21-ஜனவரி -2020 அன்று தொடங்குகிறது )\r\n-   y-அச்சு மாறி நோய் பரவல் மற்றும் இறப்பின் அதிவேக வளர்ச்சி மாறிலி (K)\r\n\r\nவளர்ச்சி மாறிலி கீழே உள்ள பொதுவான வளர்ச்சி / வீழ்ச்சி சூத்திரத்திலிருந்து கணக்கிடப்படுகிறது\r\n\r\nA=Pe<sup>kt</sup>\r\n\r\nஇறப்பு மற்றும் நோய் பரவலின் \"அதிவேக வளர்ச்சி மாறிலி\" 'k' வீழ்ச்சி அடைந்து கொண்டே செல்கிறது மற்றும் தற்போதய மதிப்புகள் சராசரியை விட மிகக்குறைவு.\r\n\r\n**மொத்த நோய் பரவலுக்கான வளர்ச்சி மாறிலி k இன் சுருக்கம்**\r\n\r\n| Min.  | 1st Qu. | Median | Mean  | 3rd Qu. | Max.   |\r\n|-------|---------|--------|-------|---------|--------|\r\n| 0.0000 | 0.09704| 0.14136| 0.16834 | 0.23287| 0.34905|\r\n\r\n**மொத்த இறப்புக்கான வளர்ச்சி மாறிலி k இன் சுருக்கம்**\r\n\r\n| Min.  | 1st Qu. | Median | Mean  | 3rd Qu. | Max.   |\r\n|-------|---------|--------|-------|---------|--------|\r\n| 0.0000 | 0.03023| 0.03845| 0.03468 | 0.04936 | 0.05717 |\r\n\r\n<img src=\"/environment/covid19-corona-virus-china-data_files/figure-markdown/growth%20constant%20plot-1.png\" alt=\"alt text\" class=\"blogs_image\">\r\n\r\n<style>\r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border:2px solid gray;\r\n}\r\n\r\nth{\r\n    border:2px solid gray;\r\n}\r\n\r\ntd{\r\n    border:1px solid gray;\r\n}\r\n</style>");

/***/ })

};;
//# sourceMappingURL=106.js.map