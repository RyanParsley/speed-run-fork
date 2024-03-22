// Handle for where scores will be placed
const scoreHolder = document.getElementById('scores');

// Currently hard coded list of teams to include.
const contestants = ['team-a', 'team-b'];

// Create a div per team to be injected into the DOM
const renderScores = (teams) =>
  teams
    .map(
      (team) =>
        `
        <div data-team="${team}">
          <h1>Score ${team}</h1>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th class="value">Value</th>
              </tr>
            </thead>
            <tbody id="${team}-list"></tbody>
          </table>
        </div>

       `
    )
    .join('');

// create a score placeholder per team
scoreHolder.innerHTML = renderScores(contestants);

// Handles to the table set up for each team's score data
const scoreElements = contestants.map((team) => ({
  team,
  element: document.getElementById(`${team}-list`),
}));

// Adjust the app link based on if we're in dev mode or not.
const appUrl = ['localhost', '127.0.0.1'].includes(location.hostname)
  ? 'http://localhost:4200/'
  : 'https://ryanparsley.github.io/speed-run/speed-run/browser/';

// wire up a link to the demo app
document.getElementById('outbound').href = appUrl;

// Initialize the app's state
let scores = [];

// Fetch many json files and update the dom to store them.
const fetchScores = async () => {
  return contestants.map(async (team) => {
    fetch(`${team}-score.json`)
      .then(function (response) {
        if (response.status !== 200) {
          console.err(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }
        response
          .json()
          .then(function ({ testScore, timeScore, lintModifier, total }) {
            // Amend to shared state
            scores = [
              ...scores,
              {
                team,
                testScore,
                timeScore,
                lintModifier,
                total,
              },
            ];
            // render state to DOM
            updateList(scores);
          });
      })
      .catch(function (err) {
        console.err('Fetch Error :-S', err);
      });
  });
};

// Inject scores to the approprate table
const updateList = (scores) => {
  scores.forEach((score) => {
    scoreElements.find(
      (element) => element.team == score.team
    ).element.innerHTML = renderList([
      { title: 'Test Score', value: score.testScore },
      { title: 'Time Score', value: score.timeScore },
      { title: 'Lint Modifier', value: score.lintModifier },
      { title: 'Total', value: score.total },
    ]);
  });
};

// Define DOM to wrap around data
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

// Fetch data and inject it in the DOM
fetchScores();
