let luckydrawdata = [];

function drawNext() {
  var lastdraw = $("#luckyperson").html();
  var alllucky = $("#drawhistory").html();
  $("#drawhistory").html(lastdraw + '<br />' + alllucky);
  var personname = luckydrawdata[Math.floor(Math.random() * luckydrawdata.length)];
  $("#luckyperson").html(personname);
}

// Load the JSON file when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetch('data/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Array loaded successfully:', data);

      if (Array.isArray(data)) {
        // Display the array nicely on the page
        //document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        //document.querySelector('p').textContent = 'Data loaded successfully!';
        luckydrawdata = data;
      } else {
        throw new Error('The root of the JSON file is not an array.');
      }
    })
    .catch(error => {
      console.error('Error loading or parsing JSON:', error);
      document.getElementById('output').textContent = 'Error: ' + error.message;
      document.querySelector('p').textContent = 'Failed to load data.';
    });
});
