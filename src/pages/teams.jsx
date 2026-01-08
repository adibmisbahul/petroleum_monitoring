import React, { useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/dashboardLayout";

function Teams() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null); // Untuk preview sebelum upload
  const [uploadedUrl, setUploadedUrl] = useState(""); // URL dari server setelah upload

  // 1. Handle saat user memilih file
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Membuat preview gambar lokal (agar user bisa lihat sebelum klik upload)
    setPreview(URL.createObjectURL(selectedFile));
  };

  // 2. Handle saat tombol Upload diklik
  const handleUpload = async () => {
    if (!file) return alert("Pilih file dulu!");

    const formData = new FormData();
    // 'avatar' harus sama dengan upload.single('avatar') di Express
    formData.append("avatar", file);

    // Bisa kirim data lain juga (misal user id)
    // formData.append('userId', '123');

    try {
      const res = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response Server:", res.data);
      setUploadedUrl(res.data.url);
      alert("Upload Berhasil!");
    } catch (error) {
      console.error(error);
      alert("Gagal upload");
    }
  };

  return (
    <DashboardLayout>
      <div style={{ padding: "20px" }}>
        <h1>Upload Foto Profil</h1>

        {/* Input File */}
        <input type="file" onChange={handleFileChange} accept="image/*" />

        <br />
        <br />

        {/* Preview Local (Sebelum Upload) */}
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

        {/* Hasil dari Server (Setelah Upload) */}
        {uploadedUrl && (
          <div>
            <p>Foto Profil Tersimpan (Dari Server):</p>
            {/* Ini mengambil gambar langsung dari folder backend */}
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

export default Teams;
