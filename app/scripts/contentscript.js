var $ = require('jquery')

//種別
console.log($('#issuecard>.key>.issue-type-name')[0].innerText);
// キー
console.log($('.key>strong')[0].innerText);
// タイトル
console.log($('#issuecard>.summary')[0].innerText);
// 詳細
console.log($('#issueDescription>div').html());

$('.editMenu').prepend('<input type="button" class="Btn-orange" value="この課題を JIRA に登録" onclick="copyIssue(this.form);" style="float:left; padding:5px 0; width:160px;">');
