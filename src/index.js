import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BannerLogo extends React.Component {
  render () {
    return (
      <div className="banner_logo">
        <img src="" alt="banner logo" />
      </div>
    );
  }
}

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <BannerLogo />
      </div>
    );
  }
}

class LoginForm extends React.Component {
  render () {
    return (
      <div className="login_form">
        <LoginInput />
        <LoginInput />
        <button>Connexion</button>
        <a href="">mot de passe oublié?</a>
        <a href="">Inscription</a>
      </div>
    );
  }
}

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      isPassWord: false
    };
  }

  render() {
    return (
      <div className="login_input">
        <label>{this.state.label}</label><input />
      </div>
    );
  }
}

class MainLogin extends React.Component {
  render() {
    return (
      <div className="main_login">
        <Banner />
        <LoginForm />
      </div>
    );
  }
}

ReactDOM.render(
  <MainLogin />,
  document.getElementById('root')
);
