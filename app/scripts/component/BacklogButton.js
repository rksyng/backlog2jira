import React from 'react';

export default class BacklogButton extends React.Component {

  constructor(props) {
    super(props);
    this.sendToJIRA = this.sendToJIRA.bind(this);
  }

  sendToJIRA() {
    chrome.runtime.sendMessage(this.props.backlogIssue, (response) => {
        console.log(response);
    });
  }

  render() {
    return (
      <input type = "button"
             onClick = {this.sendToJIRA}
             className = "Btn-orange"
             style = {{float: "left", padding: "3px 0", width: "160px"}}
             value = {chrome.i18n.getMessage('createJIRAIssue')} />
    )
  }
}

