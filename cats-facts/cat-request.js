function makeApiRequest() {
    // API endpoint
    var url = 'https://catfact.ninja/fact';

    // Make the API request using the Fetch API
    fetch(url)
      .then(function(response) {
        // Check if the API request was successful
        if (response.ok) {
          // Extract the value from the API response
          return response.json().then(function(data) {
            var value = data.fact;

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