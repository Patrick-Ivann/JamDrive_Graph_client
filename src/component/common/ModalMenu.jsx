import React from "react";
import { ListButton } from "../../styles/buttons";
import { StyledUl } from "../../styles/layout";

const ModalMenu = ({ isPoppedUp, show, children }) => {
  return (
    isPoppedUp && (
      <React.Fragment>
        <StyledUl margin="-mt-32 ml-10">
          <ListButton>supprimer</ListButton>
          <ListButton>Telecharger Ressource</ListButton>
        </StyledUl>
      </React.Fragment>
    )
  );
};

ModalMenu.propTypes = {};

export default ModalMenu;
