const submitSearchAskForm = document.querySelector('.submitSearchAskForm');
const newAskButton = document.querySelector('.newAskButton');

newAskButton.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = '/new-ask';
})

const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();

  const askValue = document.querySelector('.askInput').value;
  const askList = document.querySelector('.askList');

  askList.innerHTML = `Loading ...`;

  // convert input value to a string query string
  const formattedAskValue = new URLSearchParams({
    value: askValue
  }).toString();

  const promise = await fetch(`/ask/?${formattedAskValue}`);
  const response = await promise.json();

  askList.innerHTML = ``;
  response?.forEach(item => {
    return askList.innerHTML += `
      <div style="
        display: flex; 
        flex-direction: column; 
        background-color: #fff; 
        padding: 20px 10px;
        width: 100%;
        margin: 10px 0px;
      ">
        <span>${item?.title}</span>
        <span>${item?.text}</span>
      </div>
    `
  })

})