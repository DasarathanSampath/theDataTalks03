exports.ids = [3];
exports.modules = {

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ndate: 22 Apr 2020\r\ndesc: 'கணக்கி மற்றும் தொடர் வைப்புக்கான விவரங்கள்'\r\nimgDesc: 'No Image'\r\nname: 'recurring-deposit'\r\nnoMainImage: true\r\ntitle: தொடர் வைப்பு நிதி\r\naltLang: true\r\nheadA1: மாதாந்திர தொடர் வைப்பு நிதி\r\nheadA2: 'கணக்கி'\r\nheadA3: மாதாந்திர தொடர்ச்சியான வைப்பு(நாணயம்)(p)\r\nheadA4: காலம்(மாதங்கள்)(t)\r\nheadA5: ஆண்டு வட்டி(%)(i)\r\nheadA6: கூட்டு காலம்(n)\r\nheadA7: மொத்த முதலீடு(A)\r\nheadA8: பெறத்தக்க வட்டி(B)\r\nheadA9: பெறத்தக்க மொத்தத் தொகை(A+B)\r\n---\r\n<div>\r\n    <adsbygoogle />\r\n</div>\r\n<Adsense\r\n          data-ad-client=\"ca-pub-3042269102042405\"\r\n          data-ad-slot=\"1234567890\"\r\n/>\r\n\r\nவிரிவான விளக்கத்திற்கு, தயவுசெய்து இங்கே [மறு முதலீடு வைப்புத்திட்டம்](http://thedatatalks.in/ta/economics/reinvestment-deposit-scheme) பார்க்கவும்.\r\n\r\nதொடர்ச்சியான வைப்புத்தொகையிலிருந்து பெறக்கூடிய மொத்த வட்டி கீழே குறிப்பிட்டுள்ளபடி கணக்கிடப்படுகிறது\r\n\r\n- கூட்டு காலத்தை அடையாளம் காணவும்\r\n\r\n    - காலாண்டு கூட்டு வட்டியில் ஒவ்வொரு வருடமும் 4 முறை வட்டி அசலுடன் கூட்டப்படுகிறது, 3 மாதங்களுக்கு ஒருமுறை வட்டியை அசலுடன் கூட்ட வேண்டும்  \r\n    - அரையாண்டு கூட்டு வட்டியில் ஒவ்வொரு வருடமும் 2 முறை வட்டி அசலுடன் கூட்டப்படுகிறது, 6 மாதங்களுக்கு ஒருமுறை வட்டியை அசலுடன் கூட்ட வேண்டும்  \r\n    - மாதாந்திர கூட்டு வட்டியில் ஒவ்வொரு வருடமும் 12 முறை வட்டி அசலுடன் கூட்டப்படுகிறது, ஒவ்வொரு மாதத்திற்கும் வட்டியை அசலுடன் கூட்ட வேண்டும்\r\n    - முழுவாண்டு கூட்டு வட்டியில் ஒவ்வொரு வருடமும் 1 முறை வட்டி அசலுடன் கூட்டப்படுகிறது, 12 மாதங்களுக்கு ஒருமுறை வட்டியை அசலுடன் கூட்ட வேண்டும்\r\n\r\nஒவ்வொரு மாதத்திற்கும் வழக்கமான சூத்திரத்தை (pti / 100) பயன்படுத்தி சாதாரண வட்டியைக் கணக்கிடுங்கள் மற்றும் கூட்டு காலத்தின் அடிப்படையில் முதலீடு செய்யப்பட்ட தொகையில் அந்த கூட்டு காலத்திற்க்கான மொத்த வட்டியைச் சேர்க்கவும்.\r\n\r\nஇங்கே,  \r\ni - வட்டி விகிதம்(%) \r\nt - மொத்த காலங்களின் எண்ணிக்கை(மாதங்கள்)  \r\np - மாதாந்திர தொடர்ச்சியான தொகை (நாணயம்)\r\n\r\nகீழே உள்ள எடுத்துக்காட்டு, 6% வருடாந்திர வட்டிக்கு 1000 மாதாந்திர தொடர்ச்சியான வைப்புத்தொகைக்கான கணக்கீட்டு முறையை விளக்குகிறது\r\n\r\n<div class=\"lowfont\">\r\n\r\n| Monthly recuring Deposit | Interest | Remarks |\r\n|---------------------------|----------|---------|\r\n| 1000                      | 5        | 1000*6&#247;100&#247;12=5        |\r\n| 1000                      | 10       | 2000*6&#247;100&#247;12=10        |\r\n| 1000                      | 15       | 3000*6&#247;100&#247;12=15        |\r\n| 1030                      | 20.15    | (4000+5+10+15)*6&#247;100&#247;12=20.15        |\r\n| 1000                      | 25.15    | மேற்கூறியவாறு தொடரவும்        |\r\n| 1000                      | 30.15    |         |\r\n| 1075.45                   | 35.52725 |         |\r\n| 1000                      | 40.52725 |         |\r\n| 1000                      | 45.52725 |         |\r\n| 1121.582                  | 51.13516 |         |\r\n| 1000                      | 56.13516 |         |\r\n| 1000                      | 61.13516 |         |\r\n| 1168.405                  | 66.97719 |         |\r\n\r\n</div>\r\n\r\n<style>   \r\ntable{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border:2px solid gray;\r\n}\r\n\r\nth{\r\n    border:2px solid gray;\r\n}\r\n\r\ntd{\r\n    border:1px solid gray;\r\n}\r\n</style>");

/***/ })

};;
//# sourceMappingURL=3.js.map