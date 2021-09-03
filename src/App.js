import React, {useState} from "react";
import { ForgetPasswordForm } from "./ConnexionForms/ForgetPasswordForm";
import { LoginForm } from "./ConnexionForms/LoginForm";
import { SigninForm } from "./ConnexionForms/SigninForm";
import { Site } from "./Site";

export default function App() {
    const [user, setUser] = useState(null)
    const [formType, setFormType] = useState(null)

    if (user) {
        return <Site />
    } else {
        if (formType === "signin_form") {
            return <SigninForm onFormTypeChanged={setFormType} />;
        } else if (formType === "forget_password_form") {
            return <ForgetPasswordForm onFormTypeChanged={setFormType} />
        }
    }
    return <LoginForm onConnect={setUser} onFormTypeChanged={setFormType} />;
}