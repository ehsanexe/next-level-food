"use client";

import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imagePicker = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  const onChangePicker = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by user." fill />
          )}
        </div>
        <input
          className={classes.input}
          ref={imagePicker}
          type="file"
          name={name}
          id={name}
          accept="image/png image/jpg"
          required
          onChange={onChangePicker}
        />
        <button
          className={classes.button}
          onClick={() => imagePicker.current.click()}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}
