import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { imageUpload } from "../utils";

function ImageUploader() {
  const onDrop = useCallback(file => {
    imageUpload(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop files here</p>
      ) : (
        <p>Drag n drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default ImageUploader;
