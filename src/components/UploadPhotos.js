export default function UploadPhotos({ id, name, onChange }) {
  return (
    <div className="upload">
      <input
        type="file"
        multiple
        accept="image/*"
        className="uploadimage"
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
