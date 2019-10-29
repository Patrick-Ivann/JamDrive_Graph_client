import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";

import PrositFormIndex from "../PrositForm/PrositFormIndex";
import IndivPrositForm from "./IndivPrositForm";

import { filterPrositByNomProsit } from "../../utils/helpers";
import PrositCardIndex from "./PrositCard/PrositCardIndex";
import Upload from "../PrositForm/Upload";
import Modal from "../common/Modal";
import { useModal } from "../../utils/customHooks";
import { RoundedButtonAlt } from "../../styles/buttons";

const PrositFeedIndex = ({ data, loading, error, filterStore = "" }) => {
  const [filtreState, setFiltre] = useState("");
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (filterStore) {
      setFiltre(filterStore.filterStore.filterWord);
    }
  }, [filterStore]);

  if (loading) return <div> loading </div>;
  if (error) return <div> error </div>;

  return (
    <div>
      <RoundedButtonAlt className="button-default" onClick={toggle}>
        Menu prosit
      </RoundedButtonAlt>
      <ClickAwayListener onClickAway={() => isShowing && toggle()}>
        <Modal isShowing={isShowing} hide={toggle}>
          <Upload hide={toggle}></Upload>
        </Modal>
      </ClickAwayListener>
      {data.prositsByPromo
        .filter(prosit => filterPrositByNomProsit(prosit, filtreState))
        .map(prosit => {
          return (
            <PrositCardIndex
              unite={prosit.unite}
              nomProsit={prosit.nomProsit}
              motsClef={prosit.motsClef}
              allerFichier={prosit.allerFichier}
              retourFichier={prosit.retourFichier}
            />
          );
        })}
    </div>
  );
};

PrositFeedIndex.propTypes = {};

export default PrositFeedIndex;
