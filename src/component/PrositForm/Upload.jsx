import React, { useState, useRef } from "react";
import Dropzone from "./Dropzone";
// import "./Dropzone.css";
import { Text, Svg, Modal } from "../../styles/layout";
import { RoundedInput } from "../../styles/input";
import { useUpload } from "../../graphql/handlers/fileHandling";
import { RoundedButtonAlt } from "../../styles/buttons";
import { TitleCard } from "../../styles/Card";

export default function Upload({ hide }) {
  const [uploading, setUploading] = useState(false);
  const [successfullUploaded, setSuccessfullUploaded] = useState(false);
  const [files, setFiles] = useState([]);

  const Upload = useUpload();
  // eslint-disable-next-line
  const [form, setValues] = useState({
    file: "",
    nomProsit: "",
    unite: "",
    motsClef: ""
  });
  const [status, setStatus] = useState("Déposer Prosit ! ");

  const fileInputRef = useRef();

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const updateFile = e =>
    e.target.validity.valid && setValues({ ...form, file: e.target.files[0] });

  const onDragEnter = event => {
    setStatus("Fichier Detecté");
    event.preventDefault();
  };
  const onDragLeave = event => {
    setStatus("Déposer içi");
    event.preventDefault();
  };

  const onDrop = event => {
    const supportedFilesTypes = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    const { type } = event.dataTransfer.files[0];

    setValues({ ...form, file: event.dataTransfer.files[0] });
    event.preventDefault();
  };
  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const doNothing = event => event.preventDefault();

  return (
    <div class="flex items-center justify-center min-h-screen">
      <Modal>
        <button
          type="button"
          className="modal-close-button"
          data-dismiss="modal"
          aria-label="Close"
          onClick={hide}
        >
          <span
            aria-hidden="true"
            className="font-extrabold text-3xl text-gray-600 hover:text-gray-100"
          >
            &times;
          </span>
        </button>
        <div className="Content flex flex-col ">
          <div id="dropZone" className="w-full ">
            <div
              className=" flex flex-col justify-center"
              style={{ cursor: "cell" }}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDragOver={doNothing}
              onDrop={onDrop}
              onClick={openFileDialog}
            >
              {form.file ? (
                <Text>Ajouter {form.file.name}</Text>
              ) : (
                <Svg
                  style={{}}
                  height="100pt"
                  viewBox="0 0 512 512"
                  width="512pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m512 451.894531v-371.054687h-185.855469l-70.144531-80.839844-70.144531 80.839844h-185.855469v371.054687h160.9375v30.046875h-30.039062v30h250.203124v-30h-30.035156v-30.046875zm-182.050781-320.894531h-37.261719v150.78125h-73.375v-150.78125h-37.261719l73.949219-85.222656zm-170.125-20.160156-43.523438 50.160156h73.011719v150.78125h133.375v-150.78125h73.011719l-43.527344-50.160156h129.828125v230.988281h-452v-230.988281zm-129.824219 260.988281h452v50.066406h-452zm291.0625 110.113281h-130.125v-30.046875h130.128906v30.046875zm0 0" />
                </Svg>
              )}
              <div style={{ display: "none" }} id="icon copyright">
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <Text className="flex justify-center mt-10">
                {" "}
                {!form.file && status}
              </Text>
            </div>
            <input
              style={{ display: "none" }}
              ref={fileInputRef}
              className="FileInput"
              type="file"
              onChange={updateFile}
            />
          </div>
          <div id="inputGroupField" className=" w-full">
            <div className=" flex  flex-col w-full">
              <div className="flex flex-col justify-between my-2 w-full">
                <label htmlFor="nomProsit">
                  <Text className=" text-center text-2xl my-2">
                    {" "}
                    nom du prosit
                  </Text>
                </label>
                <RoundedInput
                  required
                  onChange={updateField}
                  placeholder="nom du Prosit"
                  name="nomProsit"
                  id="nomProsit"
                  value={form.nomProsit}
                ></RoundedInput>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <label htmlFor="unite">
                  <Text className="text-center text-2xl my-2">
                    nom de l'unite
                  </Text>
                </label>
                <RoundedInput
                  required
                  onChange={updateField}
                  placeholder="unite du prosit"
                  name="unite"
                  id="unite"
                  value={form.unite}
                ></RoundedInput>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <label htmlFor="motsClef">
                  <Text className="text-center text-2xl my-2">
                    {" "}
                    liste de mots clefs
                  </Text>
                </label>
                <RoundedInput
                  required
                  onChange={updateField}
                  placeholder="liste des mots clef à separer par des virgules"
                  name="motsClef"
                  id="motsClef"
                  value={form.motsClef}
                ></RoundedInput>
              </div>
            </div>
          </div>
        </div>
        <div id="submitButton" className="">
          <RoundedButtonAlt
            className="w-full mx-auto my-8"
            onClick={event => {
              event.preventDefault(event);
              Upload({
                file: form.file,
                title: form.file.name,
                nomProsit: form.nomProsit,
                unite: form.unite,
                motsClef: form.motsClef
              });
            }}
            type="submit"
          >
            Publier Prosit
          </RoundedButtonAlt>
        </div>
      </Modal>
    </div>
  );
}
