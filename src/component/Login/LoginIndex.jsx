import React, { useState } from "react";
import { useLogin } from "../../graphql/handlers/authHandling";
import { RoundedInputAlt } from "../../styles/input";
import { Text } from "../../styles/layout";
import { RoundedButtonMain } from "../../styles/buttons";

//! on mobile, submit is inactive

const LoginIndex = props => {
  const [form, setValues] = useState({
    login: ""
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  let login = useLogin();
  return (
    <>
      <div class="flex items-center justify-center min-h-screen">
        <div
          style={{ "background-color": "#1a1b21" }}
          className="   rounded-lg shadow-lg bg-gray-900 py-10 pr-10 pl-10"
        >
          <label htmlFor="connexion" aria-label="connexion">
            <Text className=" text-center text-4xl">Connexion</Text>
          </label>
          <form
            className="flex-row"
            onSubmit={event => {
              event.preventDefault();
              login({ password: form.login });
            }}
          >
            <div id="loginGroup" className="flex justify-center my-10">
              <RoundedInputAlt
                id="connexion"
                autoFocus
                placeholder="Entrez le mot de passe"
                autoComplete="false"
                value={form.login}
                name="login"
                onChange={updateField}
                type="password"
              ></RoundedInputAlt>
              {/*               <input
                className="rounded-full py-2 px-4"
                id="connexion"
                autoFocus
                placeholder="Entrez le mot de passe"
                autoComplete="false"
                value={form.login}
                name="login"
                onChange={updateField}
                type="password"
              />
              <RoundedInput
                id="connexion"
                autoFocus
                placeholder="Entrez le mot de passe"
                autoComplete="false"
                value={form.login}
                name="login"
                onChange={updateField}
                type="password"
              /> */}
              <label
                aria-label="connexion"
                id="lblConnexion"
                htmlFor="connexion"
                className="ml-4"
              >
                <Text className=" pt-2"> Connexion</Text>
              </label>
            </div>
            {/*  <small id="emailHelp" className="form-text text-muted">
              Merci de ne pas partager le mot de passe dans un cadre autre que
              professionnel.
            </small> */}
            <Text style={{ color: "#a0aec0" }} className="text-xs flex-wrap">
              Merci de ne pas partager le mot de passe dans un cadre autre que
              professionnel.
            </Text>
            {(navigator.userAgent.match(/iPhone/i) ||
              navigator.userAgent.match(/Android/i) ||
              navigator.userAgent.match(/iPad/i)) && (
              <RoundedButtonMain type="submit"> Connexion</RoundedButtonMain>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

LoginIndex.propTypes = {};

export default LoginIndex;
