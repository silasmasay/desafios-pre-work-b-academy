const form = document.querySelector('[data-js="form-cars"]');
const tbody = document.querySelector('[data-js="table-cars"] tbody');

const url = 'http://localhost:3333/cars';

document.addEventListener("DOMContentLoaded", async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  
  if (!data.length) {
    tbody.innerHTML = '<span>Nenhum carro encontrado.</span>';
  }
});

