import React from "react";
import { BannerForm } from "./BannerForm";
import { FooterForm } from "./FooterForm";

export function ForgetPasswordForm ({onFormTypeChanged}) {
    return <div>
        <BannerForm />
        <h2>mot de passe oublié</h2>
        <button onClick={() => onFormTypeChanged(null)}>Annuler</button>
        <FooterForm />
    </div>
}