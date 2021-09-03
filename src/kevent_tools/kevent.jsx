import React from 'react';


export class KEventButton extends React.Component {
    render () {
      let button = <button></button>;
          
      if (this.props.type==="online") {
        button = <a href="#" onClick={() => this.props.onClick()}>{this.props.label}</a>;
      } else {
        button=<button onClick={() => this.props.onClick()}>{this.props.label}</button>;
      }
      return (
        <div className="kevent_button" >
          {button}
        </div>
      );
    }
  }

  export class KEventInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        label: props.label,
        isPassWord: props.isPassWord
      };
    }
  
    render() {
      return (
        <div className="kevent_input">
          <label >{this.state.label}</label><input type={this.state.isPassWord? "password":"text"} />
        </div>
      );
    }
  }