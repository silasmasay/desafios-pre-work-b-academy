// Elementos DOM
const format = document.querySelector('[data-js="format-people"]');
const inputName = document.querySelector('[data-js="form-people"] #name');

const boxSelect = document.querySelector('[data-js="box-select"');

// Elementos - criação nó select
const select = document.createElement('select');
const boxColors = document.createElement('div');

// Evento - Tratamento do nome do usuário
inputName.addEventListener('input', function (ev) {
  ev.preventDefault();

  const name = this.value.split(' ')
                .map((n) => {
                  const lowerStr = n.toLowerCase();

                  return !['de', 'da', 'do', 'dos'].includes(lowerStr)
                    ? lowerStr.slice(0, 1).toUpperCase() + lowerStr.slice(1) : lowerStr;
                }).join(' ');


  format.innerHTML = `
    <div>
      <h1>Nome Formatado</h1>
      <p>${name ? name : '???'}</p>
    </div>
  `;
});

// HTML/Evento - Incremento das informações no select como eventos e conteúdo
select.setAttribute('multiple', '');
select.innerHTML = `
  <option value="black">Preto</option>
  <option value="blue">Azul</option>
  <option value="green">Verde</option>
  <option value="red">Vermelho</option>
  <option value="gray">Cinza</option>
`;

boxColors.className = 'colors-select'

select.addEventListener('change', function (ev) {
  [...this.children].map((opt) => {
    const box = document.querySelector(`.${opt.value}`);

    if (box) box.remove();

    if (opt.selected) {
      const boxOption = document.createElement('div');

      boxOption.className = `box-color-select ${opt.value}`;

      boxColors.appendChild(boxOption);
    }
  });
});

boxSelect.appendChild(select);
boxSelect.appendChild(boxColors);
