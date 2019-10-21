import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import PrositFormIndex from "../PrositForm/PrositFormIndex";
import IndivPrositForm from "./IndivPrositForm";
import { filterPrositByNomProsit } from "../../utils/helpers";

const PrositFeedIndex = ({ data, loading, error, filterStore = "" }) => {
  const [filtreState, setFiltre] = useState("");
  useEffect(() => {
    if (filterStore) {
      setFiltre(filterStore.filterStore.filterWord);
    }
  }, [filterStore]);

  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;

  return (
    <div>
      <PrositFormIndex></PrositFormIndex>
      {data.prositsByPromo
        .filter(prosit => filterPrositByNomProsit(prosit, filtreState))
        .map(prosit => {
          return (
            <div key={`divPrositPromo_${prosit._id}`}>
              <IndivPrositForm
                key={`indivForm${prosit._id}`}
                nomProsit={prosit.nomProsit}
                unite={prosit.unite}
                prositId={prosit._id}
              ></IndivPrositForm>
              <h4 key={`h4_${prosit._id}`}>
                {" "}
                {prosit.nomProsit
                  .replace(/_/g, " ")
                  .split(/(?=[A-Z])/)
                  .join(" ")}{" "}
              </h4>
              <p key={`p_${prosit.allerFichier.id}`}>
                <a
                  key={`a_${prosit.allerFichier.id}`}
                  href={prosit.allerFichier.path}
                >
                  {prosit.allerFichier.nom} Aller
                </a>
              </p>
              <p key={`p_${prosit.retourFichier.id}`}>
                <a
                  key={`a_${prosit.retourFichier.id}`}
                  href={prosit.retourFichier.path}
                >
                  {prosit.retourFichier.nom} Retour
                </a>
              </p>
              {prosit.ressourceEleve.map((ressource, index) => (
                <p key={`pRessourceEleve_${index}`}>
                  <a key={ressource.id} href={ressource.path}>
                    {ressource.nom} Ressoruce{" "}
                  </a>
                </p>
              ))}
              {/* <p><a href={prosit.UploadProfRessource.path}>{prosit.UploadProfRessource.nom} Retour</a></p> */}

              <ul>
                {prosit.motsClef.slice(0, 4).map((motsClef, index) => (
                  <li key={index} className="">
                    {motsClef}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

PrositFeedIndex.propTypes = {};

export default PrositFeedIndex;
