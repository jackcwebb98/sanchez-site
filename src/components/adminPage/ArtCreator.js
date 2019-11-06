import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import ImageUploader from "./ImageUploader";

function ArtCreator(props) {
  const [images, setImages] = useState({ pics: [] });

  return (
    <>
      <ImageUploader />
    </>
  );
}

export default ArtCreator;

