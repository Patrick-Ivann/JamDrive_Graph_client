import React, { useState } from 'react';
import { navigatorCheck } from '../../utils/helpers';


export default function Header() {


    const [recherche, setRecherche] = useState("")


    let fileImg = null;
    (navigatorCheck() === "Safari" || navigatorCheck() === "IE" || navigatorCheck() === "unknown") ? fileImg = `${process.env.REACT_APP_ADRESS}/static/images/jampops.png` : fileImg = `${process.env.REACT_APP_ADRESS}/static/images/jampops.webp`


    return (
        <header className={"mb-4"}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img onClick className="logo mr-2" src={fileImg} alt="Logo" width="100px" />
                <div className="navbar-brand">JAMDRIVE</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <label aria-label="recherche" id="lblRecherche" htmlFor="recherche"> &nbsp;</label>

                        <input className="form-control mr-sm-2" id="recherche" name='recherche' value={recherche}
                            onChange={setRecherche} type="search" placeholder="Recherche.." />
                    </form>

                    {/* <button className="btn btn-primary my-2 mr-2 my-sm-0" data-toggle="modal" data-target="#fileModal">Nouveau prosit</button> */}
                    {/* <button className="btn btn-secondary my-2 my-sm-0" onClick={this.props.changerTheme}>Thème {(this.props.theme.theme) ? "clair" : "sombre"} </button> */}
                </div>
            </nav>
        </header>
    );
}


