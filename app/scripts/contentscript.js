var $ = require('jquery')

//種別
console.log($('#issuecard>.key>.issue-type-name')[0].innerText);
// キー
console.log($('.key>strong')[0].innerText);
// タイトル
console.log($('#issuecard>.summary')[0].innerText);
// 詳細
console.log($('#issueDescription>div').html());
