const listElement = document.getElementById('list');

const initialList = [
  { title: 'Test Score', value: '?' },
  { title: 'Time Score', value: '?' },
  { title: 'Lint Modifier', value: '?' },
  { title: 'Total', value: '?' },
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
          { title: 'Test Score', value: data.testScore },
          { title: 'Time Score', value: data.timeScore },
          { title: 'Lint Modifier', value: data.lintModifier },
          { title: 'Total', value: data.total },
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
      ({ title = '', value = '' }) =>
        `
          <tr>
            <td>${title}</td>
            <td class="value">${value}</td>
         </tr>
       `
    )
    .join('');

const appUrl = ['localhost', '127.0.0.1'].includes(location.hostname)
  ? 'http://localhost:4200/'
  : 'https://ryanparsley.github.io/speed-run/speed-run/browser/';

document.getElementById('outbound').href = appUrl;
listElement.innerHTML = renderList(initialList);
updateList();
