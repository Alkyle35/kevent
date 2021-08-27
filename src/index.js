import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class KEventButton extends React.Component {
  render () {
    return (
      <div className={this.props.type=="online"? "kevent_button_online" : "kevent_button"} onClick={() => this.props.onClick()}>
        <button>
          {this.props.label}
        </button>
      </div>
    );
  }
}

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

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Site web réalisé en collaboration par Kévin Jordao et Volkan Guineri.</p>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  render () {
    return (
      <div className="login_form">
        <h1>Se connecter à Kevent</h1>
        <LoginInput label={"Identifiant : "} isPassWord={false}/>
        <LoginInput label={"Mot de passe : "} isPassWord={true}/>

        <KEventButton label="Connexion" onClick={() => this.props.onLoginClick()} />
          
        <KEventButton label="mot de passe oublié?" type="online"/>
        
        <div>--- ou ---</div>
        <KEventButton label="Inscription" onClick={() => this.props.onSigninClick()} />
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
        <Footer />
      </div>
    );
  }
}

class SigninForm extends React.Component {
  render() {
    return (
      <div className="signin_form">
        <LoginInput label={"Nom : "} isPassWord={false}/>
        <LoginInput label={"Prénom : "} isPassWord={false}/>
        <LoginInput label={"Pseudo : "} isPassWord={false}/>
        <LoginInput label={"Email : "} isPassWord={false}/>
        <LoginInput label={"Mot de passe : "} isPassWord={true}/>
        <KEventButton label="S'inscrire" onClick={() => this.props.onSigninValidateClick()}/>
      </div>
    );
  }
}

class MainSignin extends React.Component {
  render () {
    return (
      <div className="main_signin">
        <Banner />
        <SigninForm onSigninValidateClick={() => this.props.onSigninValidateClick()}/>
        
        <Footer />
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
    alert("handle co logyuyuiin");
  }

  handleSigninClick() {
    this.setState({
      component: <MainSignin onSigninValidateClick={() => this.handleSigninValidateClick()} />,
      });
  }

  handleSigninValidateClick() {
    alert("inscription effectuée");
  }

  render() {
    return this.state.component;
  }
}

ReactDOM.render(<Main />,  document.getElementById('root'));
