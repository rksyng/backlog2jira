//種別
let type = document.querySelector('#issuecard>.key>.issue-type-name').innerText;
console.log(type);
// キー
let key = document.querySelector('.key>strong').innerText;
console.log(key);

// タイトル
let title = document.querySelector('#issuecard>.summary').innerText;
console.log(title);

// 詳細
let description = document.querySelector('#issueDescription');
console.log(description);

let copyIssueButton = document.createElement('input');
copyIssueButton.type = 'button';
copyIssueButton.id = 'copyIssue';
copyIssueButton.classList.add('Btn-orange');
copyIssueButton.value = 'この課題を JIRA に登録';
copyIssueButton.style.float = 'left';
copyIssueButton.style.padding = '5px 0';
copyIssueButton.style.width = '160px';
document.querySelector('.editMenu').appendChild(copyIssueButton);

copyIssueButton.addEventListener('click', function() {
  chrome.runtime.sendMessage(
    {
      backlogIssue: {
        key: key,
        title: title
      }
    },
    (response) => {
      console.log(response);
    });
});
