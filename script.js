function populateDropdown(id, start, end) {
  const dropdown = document.getElementById(id);
  for (let i = start; i <= end; i++) {
    const option = document.createElement('option');
    option.value = i.toString().padStart(2, '0');
    option.textContent = i.toString().padStart(2, '0');
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


document.getElementById('save-txt').addEventListener('click', () => {
  const data = {
    orderDate: `${document.getElementById('order-year').value}-${document.getElementById('order-month').value}-${document.getElementById('order-day').value} ${document.getElementById('order-hour').value}:${document.getElementById('order-minute').value}`,
    startDate: `${document.getElementById('start-year').value}-${document.getElementById('start-month').value}-${document.getElementById('start-day').value} ${document.getElementById('start-hour').value}:${document.getElementById('start-minute').value}`,
    endDate: `${document.getElementById('end-year').value}-${document.getElementById('end-month').value}-${document.getElementById('end-day').value} ${document.getElementById('end-hour').value}:${document.getElementById('end-minute').value}`,
    customerName: document.getElementById('customer-name').value || 'Nincs megadva',
    workLocation: document.getElementById('work-location').value || 'Nincs megadva',
    workType: document.getElementById('work-type').value || 'Nincs megadva',
    workDescription: document.getElementById('work-description').value || 'Nincs megadva',
    carDetails: document.getElementById('car-details').value || 'Nincs megadva',
    materialCostInvoice: document.getElementById('material-cost-invoice').value || 'Nincs megadva',
    materialCostAmount: document.getElementById('material-cost-amount').value || '0',
    laborHours: document.getElementById('labor-hours').value || '0',
    transportCost: document.getElementById('transport-cost').value || '0',
    unitPrice: document.getElementById('unit-price').value || '0',
    totalCost: document.getElementById('total-cost').value || '0'
  };

  const content = `Elektromos Javítási és Karbantartási Munkalap

A munkavégző vállalkozó: Katonás Lajos
Megrendelés időpontja: ${data.orderDate}
Megrendelő neve: ${data.customerName}
A munka helyszíne: ${data.workLocation}
A munka jellege: ${data.workType}
Munkavégzés kezdete: ${data.startDate}
Gépkocsi: ${data.carDetails}
Munka leírása: ${data.workDescription}
Munka befejezése: ${data.endDate}

--- Költségek ---
Anyagköltség számla száma: ${data.materialCostInvoice}
Anyagköltség összege: ${data.materialCostAmount} Ft
Felhasznált munkaórák: ${data.laborHours} óra
Szállítási költség: ${data.transportCost} Ft
Egységár: ${data.unitPrice} Ft
Összesen: ${data.totalCost} Ft`;

  
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'munkalap.txt';
  document.body.appendChild(a);
  a.click();

  
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
