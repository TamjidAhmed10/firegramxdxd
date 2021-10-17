import { useState } from "react";

const UploadForm = ({ setFileName, fileName }) => {
  const [error, setError] = useState(null);
  const typesCheck = ["image/png", "image/jpeg"];
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && typesCheck.includes(selectedFile.type)) {
      setFileName(selectedFile);
      setError("");
    } else {
      setFileName(null);
      setError("Please select only PNG / jpeg images");
    }
  };
  return (
    <div>
      <form>
        <input type="file" onChange={handleChange} />
        {error && <div>{error}</div>}
        {fileName && <div>{fileName.name}</div>}
      </form>
    </div>
  );
};

export default UploadForm;
