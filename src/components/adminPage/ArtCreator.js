import React, { useState, useCallback } from "react";
import { Button, Input } from "@material-ui/core";
import { imageUpload } from "../utils";
import { useDropzone } from "react-dropzone";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  
});

function ArtCreator(props) {
  const [fileData, setFileData] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();

  const onDrop = useCallback(file => {
    imageUpload(file).then(r => setFileData(r.data));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const {classes} = props
  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop files here</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
      <Button onClick={() => console.log(fileData)}>Test</Button>

    </>
  );
}

export default withStyles(styles)(ArtCreator);
