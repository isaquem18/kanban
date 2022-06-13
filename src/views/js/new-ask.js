const submitSearchAskForm = document.querySelector('.submitSearchAskForm');
const newAskButton = document.querySelector('.newAskButton');

newAskButton.addEventListener('click', () => {
  location.href = '/';
});

submitSearchAskForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const askValueTitle = document.querySelector('.askTitle').value;
  const askValueText = document.querySelector('.askText').value;

  const promise = await fetch(`/ask`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: askValueTitle,
      text: askValueText
    })
  });

  const response = promise.status;

  document.querySelector('.askTitle').value = '';
  document.querySelector('.askText').value = '';

  if (response === 201) {
    alert('Usuário criado!');
  } else {
    alert('Ocorreu algum erro');
  }

})
