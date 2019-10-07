import React, { useState } from 'react'
import { useLogin } from '../../graphql/handlers/authHandling';

const LoginIndex = props => {
    const [form, setValues] = useState({
        login: '',
    });

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    let login = useLogin();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={(event) => { event.preventDefault(); login({ password: form.login }) }}>
                        <div className="form-group mt-4">
                            <h1>Connexion</h1>
                            <input className="form-control" id="connexion" autoFocus placeholder="Entrez le mot de passe" autoComplete="false" value={form.login} name="login" onChange={updateField} type="password" />
                            <small id="emailHelp" className="form-text text-muted">Merci de ne pas partager le mot de passe dans un cadre autre que professionnel.
                            </small>
                            <label aria-label="connexion" id="lblConnexion" htmlFor="connexion"> &nbsp;</label>
                            {(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPad/i)) && (<button className="btn btn-primary my-8 my-sm-7 btn-block"> Connexion </button>)}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

LoginIndex.propTypes = {

}

export default LoginIndex
