import { BsImages } from "react-icons/bs";
import { useRef } from "react";
import "./UploadPhotos.css";

export default function UploadPhotos({ id, name, onChange }) {
  const inputRef = useRef();

  return (
    <div className="upload" onClick={() => inputRef.current.click()}>
      <BsImages className="upload_icon" />
      <input
        type="file"
        multiple
        accept="image/*"
        className="uploadimage"
        id={id}
        name={name}
        onChange={onChange}
        ref={inputRef}
        hidden
      />
    </div>
  );
}
