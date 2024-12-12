// Include jsPDF script dynamically (if not already included)
if (typeof jsPDF === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js';
  document.head.appendChild(script);
}

// Populate dropdowns
function populateDropdown(id, start, end) {
  const dropdown = document.getElementById(id);
  for (let i = start; i <= end; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    dropdown.appendChild(option);
  }
}

populateDropdown('order-year', 2000, new Date().getFullYear());
populateDropdown('start-year', 2000, new Date().getFullYear());
populateDropdown('end-year', 2000, new Date().getFullYear());

populateDropdown('order-month', 1, 12);
populateDropdown('start-month', 1, 12);
populateDropdown('end-month', 1, 12);

populateDropdown('order-day', 1, 31);
populateDropdown('start-day', 1, 31);
populateDropdown('end-day', 1, 31);

populateDropdown('order-hour', 0, 23);
populateDropdown('start-hour', 0, 23);
populateDropdown('end-hour', 0, 23);

populateDropdown('order-minute', 0, 59);
populateDropdown('start-minute', 0, 59);
populateDropdown('end-minute', 0, 59);

// Get form data
function getFormData() {
  return {
    orderDate: `${document.getElementById('order-year').value}-${document.getElementById('order-month').value}-${document.getElementById('order-day').value}`,
    customerName: document.getElementById('customer-name').value,
    workLocation: document.getElementById('work-location').value,
    workType: document.getElementById('work-type').value,
    startDate: `${document.getElementById('start-year').value}-${document.getElementById('start-month').value}-${document.getElementById('start-day').value} ${document.getElementById('start-hour').value}:${document.getElementById('start-minute').value}`,
    carDetails: document.getElementById('car-details').value,
    workDescription: document.getElementById('work-description').value,
    endDate: `${document.getElementById('end-year').value}-${document.getElementById('end-month').value}-${document.getElementById('end-day').value} ${document.getElementById('end-hour').value}:${document.getElementById('end-minute').value}`,
    materialCostInvoice: document.getElementById('material-cost-invoice').value,
    materialCostAmount: document.getElementById('material-cost-amount').value,
    laborHours: document.getElementById('labor-hours').value,
    transportCost: document.getElementById('transport-cost').value,
    unitPrice: document.getElementById('unit-price').value,
    totalCost: document.getElementById('total-cost').value,
  };
}

// Save as PDF
document.getElementById('save-pdf').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  
  doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
  doc.setFont('Roboto', 'normal');

  const data = getFormData();

  doc.setFontSize(12);
  doc.text('Elektromos Javítási és Karbantartási Munkalap', 10, 10);
  doc.text(`A munkavégző vállalkozó: Katonás Lajos`, 10, 20);
  doc.text(`Megrendelés időpontja: ${data.orderDate}`, 10, 30);
  doc.text(`Megrendelő neve: ${data.customerName}`, 10, 40);
  doc.text(`A munka helyszíne: ${data.workLocation}`, 10, 50);
  doc.text(`A munka jellege: ${data.workType}`, 10, 60);
  doc.text(`Munkavégzés kezdete: ${data.startDate}`, 10, 70);
  doc.text(`Gépkocsi: ${data.carDetails}`, 10, 80);
  doc.text(`Munka leírása: ${data.workDescription}`, 10, 90);
  doc.text(`Munka befejezése: ${data.endDate}`, 10, 100);
  doc.text(`Anyagköltség számla száma: ${data.materialCostInvoice}`, 10, 110);
  doc.text(`Anyagköltség összege: ${data.materialCostAmount} Ft`, 10, 120);
  doc.text(`Felhasznált munkaórák: ${data.laborHours} óra`, 10, 130);
  doc.text(`Szállítási költség: ${data.transportCost} Ft`, 10, 140);
  doc.text(`Egységár: ${data.unitPrice} Ft`, 10, 150);
  doc.text(`Összesen: ${data.totalCost} Ft`, 10, 160);

  // Save PDF
  doc.save('munkalap.pdf');
});
