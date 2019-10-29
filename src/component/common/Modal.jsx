import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalStyled = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

const ModalCard = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  padding: 2rem;
`;

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? createPortal(
        <React.Fragment>
          <ModalOverlay
            className="modal-overlay overflow-hidden top-auto mx-auto z-50 "
            onClick={hide}
          />
          <ModalWrapper
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div id="ModalContent">{children}</div>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
