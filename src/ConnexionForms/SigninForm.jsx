import React from "react";
import { BannerForm } from "./BannerForm";
import { FooterForm } from "./FooterForm";

export function SigninForm ({onFormTypeChanged}) {

    const handleSubmit = function (e) {
        onFormTypeChanged(null)
    }

    return <div>
        < BannerForm />
        <div className="container">
            <h2>Inscription</h2>

            <form className="container" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlfor="name">Nom d'utilisateur</label>
                    <input type="text" name="name" id="name" required/>
                </div>

                <div className="form-group">
                    <label htmlfor="username">Nom :</label>
                    <input type="text" name="username" id="username" required/>
                </div>
                <div className="form-group">
                    <label htmlfor="surname">Prénom :</label>
                    <input type="text" name="surname" id="surname" required/>
                </div>
                <div className="form-group">
                    <label htmlfor="pseudo">Pseudo :</label>
                    <input type="text" name="pseudo" id="pseudo" required/>
                </div>
                
                <div className="form-group">
                    <label htmlfor="email">Email :</label>
                    <input type="text" name="email" id="email" required/>
                </div>
                
                <div className="form-group">
                    <label htmlfor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password" required/>
                </div>
                <button type="submit" className="">S'inscrire</button>
            </form>
            <a href="#" onClick={() => onFormTypeChanged(null)}>Vous avez déjà un compte?</a>
        </div>
        <FooterForm />
    </div>
}