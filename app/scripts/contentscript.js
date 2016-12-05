import 'chromereload/devonly';
import React from 'react';
import ReactDOM from 'react-dom';
import BacklogButton from './component/BacklogButton';

let backlogIssue = {
  type : document.querySelector('#issuecard>.key>.issue-type-name').innerText,
  key  : document.querySelector('.key>strong').innerText,
  title: document.querySelector('#issuecard>.summary').innerText,
  url  : location.href.replace(location.hash, "")
};

const editMenuChild = document.createElement('span');
const backlogButton = <BacklogButton backlogIssue={backlogIssue} />;

document.querySelector('.editMenu').appendChild(editMenuChild);
ReactDOM.render(backlogButton, editMenuChild);
