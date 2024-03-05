const listElement = document.getElementById('list');

const initialList = [
  { title: 'Test Score', count: '?' },
  { title: 'Lint Modifier', count: '?' },
  { title: 'Total', count: '?' },
];

const updateList = () => {
  fetch(`score.json`)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        listElement.innerHTML = renderList([
          { title: 'Test Score', count: data.testScore },
          { title: 'Time Score', count: data.timeScore },
          { title: 'Lint Modifier', count: data.lintModifier },
          { title: 'Compiler Modifier', count: data.compilerModifier },
          { title: 'Total', count: data.total },
        ]);
      });
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
  console.log('the list has been updated');
};

const renderList = (items = []) =>
  items
    .map(
      ({ title = '', count = '' }) =>
        `
          <li>
            <h2>${title}</h2>
            <p>count: ${count}</p>
         </li>
       `
    )
    .join('');

listElement.innerHTML = renderList(initialList);
updateList();
