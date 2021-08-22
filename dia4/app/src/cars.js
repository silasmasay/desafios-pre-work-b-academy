const form = document.querySelector('[data-js="form-cars"]');
const tbody = document.querySelector('[data-js="table-cars"] tbody');

const url = 'http://localhost:3333/cars';

function createNewTr(data) {
  data.map((json) => {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td><img src="${json.image}" alt="Foto do Carro"/></td>
      <td>${json.brandModel}</td>
      <td>${json.year}</td>
      <td>${json.plate}</td>
      <td class="color-cars"><div style="background: ${json.color};"></div></td>
    `;
    
    tbody.appendChild(tr);
  });
}

function createAlert(response) {
  const div = document.createElement('div');

  div.className = `alert alert-${response.error ? 'error' : 'success'}`;
  div.innerHTML = `${response.message}`;

  setTimeout(() => {
    div.classList.add('is-active');

    setTimeout(() => {
      setTimeout(() => div.remove(), 300);

      div.classList.remove('is-active');
    }, 5000);
  }, 100);

  document.body.prepend(div);
}

document.addEventListener("DOMContentLoaded", async function() {
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const data = await resp.json();
  
  if (!data.length) {
    tbody.innerHTML = '<span data-js="empty-table">Nenhum carro encontrado.</span>';
  } else {
    createNewTr(data);
  }
});

form.addEventListener('submit', async function(ev) {
  ev.preventDefault();

  const json = {
    image: this.elements.image.value,
    brandModel: this.elements.brandModel.value,
    year: this.elements.year.value,
    plate: this.elements.plate.value,
    color: this.elements.color.value
  }

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  });

  const response = await resp.json();

  if (!response.error) {
    const emptyTable = document.querySelector('[data-js="empty-table"]');

    if (emptyTable) emptyTable.remove();

    createNewTr([json]);

    this.reset();
    this.elements.image.focus();
  }

  createAlert(response);
});

