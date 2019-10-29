import React, { useState, useRef } from "react";

function Dropzone(props) {
  // eslint-disable-next-line
  const [hightlight, setHightlight] = useState(false);
  // eslint-disable-next-line
  const fileInputRef = useRef();

  return (
    <div
      className={`Dropzone ${hightlight ? "Highlight" : ""}`}
      // onDragOver={this.onDragOver}
      // onDragLeave={this.onDragLeave}
      // onDrop={this.onDrop}
      // onClick={this.openFileDialog}
      style={{ cursor: props.disabled ? "default" : "pointer" }}
    >
      <input
        ref={fileInputRef}
        className="FileInput"
        type="file"
        multiple
        //   onChange={this.onFilesAdded}
      />
      <img alt="upload" className="Icon" src="baseline-cloud_upload-24px.svg" />
      <span>Upload Files</span>
    </div>
  );
}

export default Dropzone;
