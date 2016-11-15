import 'chromereload/devonly';
import React from 'react';
import ReactDOM from 'react-dom';

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

class JIRAButton extends React.Component {

  constructor(props, state) {
    super(props, state);
  }

  sendToJira() {
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
  }

  render() {
    return <input type="button"
                  onClick={this.sendToJira}
                  className="Btn-orange"
                  style={{float: "left", padding: "3px 0", width: "160px"}}
                  value="この課題を JIRA に登録"/>;
  }
}

const editMenuChild = document.createElement('span');
document.querySelector('.editMenu').appendChild(editMenuChild);
ReactDOM.render(React.createElement(JIRAButton), editMenuChild);
