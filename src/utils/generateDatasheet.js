import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generateDatasheet(product) {
  const doc = new jsPDF("p", "mm", "a4");

  /* ================= HEADER ================= */
  doc.setFillColor(12, 22, 53); // dark blue
  doc.rect(0, 0, 210, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("SCAF XS", 15, 20);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("ENGINEERED ACCESS SYSTEMS", 15, 26);

  /* ================= PRODUCT TITLE ================= */
  doc.setTextColor(12, 22, 53);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(product.title, 15, 45);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(`Category: ${product.category}`, 15, 52);
  doc.text(`Product Code: ${product.id}`, 15, 58);

  /* ================= DESCRIPTION ================= */
  doc.setFontSize(11);
  doc.setTextColor(80);
  doc.text(
    product.description || "Industrial-grade engineered access solution.",
    15,
    70,
    { maxWidth: 180 }
  );

  /* ================= SPECIFICATIONS TABLE ================= */
  autoTable(doc, {
    startY: 85,
    head: [["Specification", "Details"]],
    body: Object.entries(product.specs || {}).map(([k, v]) => [
      k.toUpperCase(),
      v,
    ]),
    styles: {
      fontSize: 10,
      cellPadding: 4,
    },
    headStyles: {
      fillColor: [220, 38, 38], // red
      textColor: 255,
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245],
    },
  });

  /* ================= DIMENSIONS TABLE ================= */
  if (product.dimensions) {
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Dimensions", "Values"]],
      body: Object.entries(product.dimensions).map(([k, v]) => [
        k.toUpperCase(),
        v,
      ]),
      styles: {
        fontSize: 10,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [12, 22, 53],
        textColor: 255,
        fontStyle: "bold",
      },
    });
  }

  /* ================= FEATURES ================= */
  if (product.features?.length) {
    let y = doc.lastAutoTable.finalY + 15;

    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(12, 22, 53);
    doc.text("Key Features", 15, y);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60);

    product.features.forEach((f, i) => {
      doc.text(`✔ ${f}`, 18, y + 8 + i * 6);
    });
  }

  /* ================= FOOTER ================= */
  doc.setDrawColor(220, 38, 38);
  doc.line(15, 285, 195, 285);

  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    "ScafXS Engineering | info@scafxs.com | UAE",
    15,
    292
  );
  doc.text(
    "Datasheet subject to engineering approval. Not for construction use without authorization.",
    15,
    297
  );

  /* ================= SAVE ================= */
  doc.save(`${product.id}-datasheet.pdf`);
}
