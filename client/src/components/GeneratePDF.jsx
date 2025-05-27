// src/components/GeneratePDF.js
import React from 'react';
import jsPDF from 'jspdf';

const GeneratePDF = ({ userData }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('User Details', 20, 20);

    doc.setFontSize(12);
    doc.text(`Email Address: ${userData.emailAddress}`, 20, 40);
    doc.text(`First Name: ${userData.firstName}`, 20, 50);
    doc.text(`Last Name: ${userData.lastName}`, 20, 60);
    doc.text(`Phone Number: ${userData.phoneNumber}`, 20, 70);
    doc.text(`Company: ${userData.company}`, 20, 80);

    doc.save('User_Details.pdf');
  };

  return (
    <button onClick={generatePdf} className="p-2 bg-blue-500 text-white rounded">
      Download PDF
    </button>
  );
};

export default GeneratePDF;
