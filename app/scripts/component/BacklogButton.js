import React from 'react';
import ReactDOM from 'react-dom';

export default class BacklogButton extends React.Component {

  constructor(props) {
    super(props);
    this.sendToJIRA = this.sendToJIRA.bind(this);
  }

  sendToJIRA() {
    chrome.runtime.sendMessage({
      type:  ReactDOM.findDOMNode(this.refs.type).value,
      key:   ReactDOM.findDOMNode(this.refs.key).value,
      title: ReactDOM.findDOMNode(this.refs.title).value,
      url:   ReactDOM.findDOMNode(this.refs.url).value
    }, (response) => {
        console.log(response);
    });
  }

  render() {
    return (
      <span>
        <input type = "button"
               onClick = {this.sendToJIRA}
               className = "Btn-orange"
               style = {{float: "left", padding: "3px 0", width: "160px"}}
               value = {chrome.i18n.getMessage('createJIRAIssue')} />;
        <input type="hidden" ref="type" value={this.props.backlogIssue.type} />
        <input type="hidden" ref="key" value={this.props.backlogIssue.key} />
        <input type="hidden" ref="title" value={this.props.backlogIssue.title} />
        <input type="hidden" ref="url" value={this.props.backlogIssue.url} />
      </span>
    )
  }
}

