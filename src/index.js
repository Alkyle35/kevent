import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BannerLogo extends React.Component {
  render () {
    return (
      <div className="banner_logo">
        <img src="img/kevent_logo.png" alt="banner logo" />
      </div>
    );
  }
}

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <BannerLogo />
        <h1>KEVENT</h1>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  render () {
    return (
      <div className="login_form">
        <h2>Se connecter à Kevent</h2>
        <LoginInput label={"Identifiant : "} isPassWord={false}/>
        <LoginInput label={"Mot de passe : "} isPassWord={true}/>

        <button className="login_button" 
        onClick={() => this.props.onLoginClick()} >
          Connexion
        </button>
        <div>
          <a href="">mot de passe oublié?</a>
        </div>
        <div>--- ou ---</div>
        <button className="signin_button" 
        onClick={() => this.props.onSigninClick()} >
          Inscription
        </button>
      </div>
    );
  }
}

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      isPassWord: props.isPassWord
    };
  }

  render() {
    return (
      <div className="login_input">
        <label >{this.state.label}</label><input type={this.state.isPassWord? "password":"text"} />
      </div>
    );
  }
}

class MainLogin extends React.Component {
  render() {
    return (
      <div className="main_login">
        <Banner />
        <LoginForm 
        onLoginClick ={() => this.props.onLoginClick()} 
        onSigninClick={() => this.props.onSigninClick()}/>
      </div>
    );
  }
}

class MainSignin extends React.Component {
  render () {
    return (
      <div className="main_signin">

      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <MainLogin onLoginClick={() => this.handleLoginClick()} onSigninClick={() => this.handleSigninClick()} />,
    };
  }

  handleLoginClick() {
    alert("handle co login");
  }

  handleSigninClick() {
    alert("handle creation compte");
  }

  render() {
    return this.state.component;
  }
}

ReactDOM.render(<Main />,  document.getElementById('root'));
