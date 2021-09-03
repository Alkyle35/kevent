import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { BannerForm } from './BannerForm';
import { FooterForm } from './FooterForm';



export function LoginForm({onConnect, onFormTypeChanged}) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = function (e) {
        setError(null);
        setLoading(true);
        e.preventDefault();
        const data = new FormData(e.target)

        onConnect("Alkyle");

        setLoading(false);
        setError("Connexion au serveur en cours de développement.");
    }


    return (
        <>
        <BannerForm />
        <form className="container" onSubmit={handleSubmit}>
            <h2>Se connecter</h2>
            {error && <Alert>{error}</Alert>}
            <div className="form-group">
                <label htmlfor="username">Nom d'utilisateur</label>
                <input type="text" name="username" id="username" required/>
            </div>
            
            <div className="form-group">
                <label htmlfor="password">Mot de passe</label>
                <input type="password" name="password" id="password" required />
            </div>

            <button disabled={loading} type="submit" className="">Se connecter</button>

            
        </form>

        <a href="#" onClick={() => onFormTypeChanged('forget_password_form')}>Mot de passe oublié?</a>
            
        <button disabled={loading} className="" onClick={() => onFormTypeChanged('signin_form')}>Inscription</button>
        <FooterForm />
        </>
    );
}

LoginForm.propTypes = {
    onConnect: PropTypes.func.isRequired
}

function Alert({children}) {
    return <div className='alert'>{children}</div>;
}