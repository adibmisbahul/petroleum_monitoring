import { useState } from "react";
import DashboardLayout from "../layouts/dashboardLayout";

export default function Teams() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [uploadedUrl, setUploadedUrl] = useState();

  const handleFileChange = () => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = () => {};

  return (
    <DashboardLayout>
      <div style={{ padding: "20px" }}>
        <h1>Upload Foto Profil</h1>

        <input type="file" onChange={handleFileChange} accept="image/*" />

        <br />
        <br />

        {preview && (
          <div>
            <p>Preview (Local):</p>
            <img
              src={preview}
              alt="Preview"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <br />
            <button onClick={handleUpload}>Simpan ke Server</button>
          </div>
        )}

        <hr />

        {uploadedUrl && (
          <div>
            <p>Foto Profil Tersimpan (Dari Server):</p>
            <img
              src={uploadedUrl}
              alt="Server File"
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <p>Link: {uploadedUrl}</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
