function makeApiRequest() {
  var playerTag = "JU9YP8U2";

  // API endpoint
  var url = 'https://api.clashofclans.com/v1/players/' + playerTag;

  // Authorization token
  var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE0NmUyYTczLTA1ZWItNDI3My05ZTg1LTliZjI5MmRhNWU2ZCIsImlhdCI6MTY3NjUxMTY1NCwic3ViIjoiZGV2ZWxvcGVyLzVmMjFjOTQzLTc0MWQtY2QyYi1mYjgxLTBhMTY1NjhjNDkzZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4LjE5Mi4yMzEuMjUyIiwiMzQuMTU5LjI1LjE5OCIsIjM0LjE1OS4yNS4xOTgiXSwidHlwZSI6ImNsaWVudCJ9XX0.fmelRgDEsVniQKb3WiebG9JaleVf_gKkMrn9kJFig91qitIW6E-9gZI8eMBWxMVQE7ERpzYoRG2pe69HO7CvGQ';

  // Make the API request using the Fetch API
  fetch(url, {
      headers: {
          'Authorization': 'Bearer ' + token
      }
  })
    .then(function(response) {
      // Check if the API request was successful
      if (response.ok) {
        // Extract the value from the API response
        return response.json().then(function(data) {
          var value = data.name;

          // Display the value
          document.getElementById("output").innerHTML = value;
        });
      } else {
        // Display an error message if the API request was unsuccessful
        document.getElementById("output").innerHTML = "Error: API request failed with status code " + response.status;
      }
    })
    .catch(function(error) {
      // Display an error message if there was a problem with the API request
      document.getElementById("output").innerHTML = "Error: " + error;
    });
}

// Add this to the server-side code
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
