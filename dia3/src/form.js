const box = document.querySelector('[data-js="box-people"]');
const inputName = document.querySelector('form[data-js="form-people"] input#name')

inputName.addEventListener('input', function (ev) {
  ev.preventDefault();

  const name = this.value.split(' ')
                .map((n) => {
                  const lowerStr = n.toLowerCase();

                  return !['de', 'da', 'do', 'dos'].includes(lowerStr)
                    ? lowerStr.slice(0, 1).toUpperCase() + lowerStr.slice(1) : lowerStr;
                }).join(' ');


  box.innerHTML = `
    <div>
      <h1>Nome Formatado</h1>
      <p>${name ? name : '???'}</p>
    </div>
  `;
});
