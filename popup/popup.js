console.log('popup.js');

const url = 'https://progameguides.com/dead-by-daylight/dead-by-daylight-codes/';
const selector = '#post-55315 div.entry-content ul:nth-child(8) li';

const drawData = async (url) => {
  const response = await fetch(url);
  const html = await response.text();

  const dom = document.createElement('div')
  dom.innerHTML = html;

  const lis = dom.querySelectorAll(selector);
  const codeList = document.querySelector('.code__list');
  codeList.innerHTML = '';

  lis.forEach((li) => {
    const code = li.textContent.split('—');

    const codeItem = document.createElement('div');
    codeItem.classList.add('code__item');
    codeItem.textContent = `${code[0]}: `;
    codeItem.addEventListener('dblclick', (e) => document.execCommand('copy'));
    codeItem.title = 'Double click to copy';

    const codeDesc = document.createElement('span');
    codeDesc.classList.add('code__desc');
    codeDesc.textContent = code[1];

    codeItem.appendChild(codeDesc);
    codeList.appendChild(codeItem);
  });
}

drawData(url);

