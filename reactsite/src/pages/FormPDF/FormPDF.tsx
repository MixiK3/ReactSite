import React, { useState } from "react";
import jsPDF from "jspdf";

const FormPDF = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.text(text, 10, 10);

    if (image) {
      const img = new Image();
      img.src = image;
      doc.addImage(img, "PNG", 10, 20, 50, 50);
    }

    doc.save("generated_pdf.pdf");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
};

export default FormPDF;