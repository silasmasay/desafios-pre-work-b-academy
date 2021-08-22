const form = document.querySelector('[data-js="form-cars"]');
const tbody = document.querySelector('[data-js="table-cars"] tbody');

form.addEventListener('submit', function(ev) {
  ev.preventDefault();

  const image = this.elements.image;
  const mark = this.elements.mark;
  const model = this.elements.model;
  const year = this.elements.year;
  const plate = this.elements.plate;
  const color = this.elements.color;

  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td><img src="${image.value}" alt="Foto do Carro"/></td>
    <td>${mark.value}</td>
    <td>${model.value}</td>
    <td>${year.value}</td>
    <td>${plate.value}</td>
    <td class="color-cars"><div style="background: ${color.value};"></div></td>
  `;

  this.reset();
  image.focus();

  tbody.appendChild(tr);
});
