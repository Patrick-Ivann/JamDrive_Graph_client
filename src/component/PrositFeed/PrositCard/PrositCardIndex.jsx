import React from "react";
import PropTypes from "prop-types";
import ClickAwayListener from "react-click-away-listener";

import More from "../../common/More";
import { MainCard, TitleCard, Chip, ContentCard } from "../../../styles/Card";
import { RoundedButtonAlt } from "../../../styles/buttons";
import { usePopover } from "../../../utils/customHooks";
import ModalMenu from "../../common/ModalMenu";

const PrositCardIndex = ({
  nomProsit,
  unite,
  allerFichier,
  retourFichier,
  motsClef
}) => {
  const { isPoppedUp, show } = usePopover();
  return (
    <div>
      <MainCard id="test">
        <TitleCard>
          <p className="font-semibold  ml-auto mb-2"> {unite}</p>
        </TitleCard>
        <ContentCard>
          <div className="p-4 w-full flex flex-col justify-center leading-normal">
            <div class="max-w-full ">
              <ClickAwayListener onClickAway={() => isPoppedUp && show()}>
                <div className="flex block ">
                  <div className=" flex ml-auto ">
                    <p className="font-bold text-2xl mb-2 ">
                      {nomProsit
                        .replace(/_/g, " ")
                        .split(/(?=[A-Z])/)
                        .join(" ")}
                    </p>
                  </div>
                  <div className="">
                    <ModalMenu isPoppedUp={isPoppedUp} show={show}></ModalMenu>
                  </div>
                  <div
                    onClick={show}
                    className="bg-grey-lighter flex items-center  ml-auto"
                  >
                    <More className="flex justify-end items-center"></More>
                  </div>
                </div>
              </ClickAwayListener>
            </div>
            <div className="flex flex-row justify-between m-3">
              <RoundedButtonAlt size="w-1/3">
                <a key={`a_${allerFichier.id}`} href={allerFichier.path}>
                  {allerFichier.nom} Aller
                </a>
              </RoundedButtonAlt>
              <RoundedButtonAlt size="w-1/3">
                <a key={`a_${retourFichier.id}`} href={retourFichier.path}>
                  {retourFichier.nom} Retour
                </a>
              </RoundedButtonAlt>
            </div>

            {/* <p class="text-gray-700 text-base">
              <p key={`p_${allerFichier.id}`}>
                <a key={`a_${allerFichier.id}`} href={allerFichier.path}>
                  {allerFichier.nom} Aller
                </a>
              </p>
              <p key={`p_${retourFichier.id}`}>
                <a key={`a_${retourFichier.id}`} href={retourFichier.path}>
                  {retourFichier.nom} Retour
                </a>
              </p>
            </p> */}
            <div>
              {motsClef.slice(0, 4).map((indivMotClef, index) => {
                return <Chip>{indivMotClef}</Chip>;
              })}
            </div>
          </div>
        </ContentCard>
        <br />
      </MainCard>
    </div>
  );
};

PrositCardIndex.propTypes = {
  nomProsit: PropTypes.string,
  unite: PropTypes.string,
  allerFichier: PropTypes.string,
  retourFichier: PropTypes.string,
  motsClef: PropTypes.arrayOf(PropTypes.string)
};

export default PrositCardIndex;
