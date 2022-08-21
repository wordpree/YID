import React from "react";
import { useField } from "formik";
import Image from "next/image";

const Input = ({ label, img, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <div className="input-wrapper">
        <div className="input-field">
          <div className="img-wrapper">
            <Image
              className="name-img"
              src={img}
              height="20"
              width="20"
              alt="person icon"
            />
          </div>
          <input className="text-input" {...field} {...props} />
        </div>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default Input;
