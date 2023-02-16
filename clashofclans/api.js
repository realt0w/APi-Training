const fetch = require('node-fetch');

// Set up your API request
const playerTag = "JU9YP8U2";
const url = 'https://api.clashofclans.com/v1/players/' + playerTag;
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE0NmUyYTczLTA1ZWItNDI3My05ZTg1LTliZjI5MmRhNWU2ZCIsImlhdCI6MTY3NjUxMTY1NCwic3ViIjoiZGV2ZWxvcGVyLzVmMjFjOTQzLTc0MWQtY2QyYi1mYjgxLTBhMTY1NjhjNDkzZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4LjE5Mi4yMzEuMjUyIiwiMzQuMTU5LjI1LjE5OCIsIjM0LjE1OS4yNS4xOTgiXSwidHlwZSI6ImNsaWVudCJ9XX0.fmelRgDEsVniQKb3WiebG9JaleVf_gKkMrn9kJFig91qitIW6E-9gZI8eMBWxMVQE7ERpzYoRG2pe69HO7CvGQ';

// Make the API request using the Fetch API
fetch(url, {
    headers: {
        'Authorization': 'Bearer ' + token
    }
})
    .then(response => {
        // Check if the API request was successful
        if (response.ok) {
            // Extract the value from the API response
            return response.json().then(data => {
                // Add the necessary headers to the response
                const headers = {
                    'Access-Control-Allow-Origin': '*', // Allow any domain to access this resource
                    'Access-Control-Allow-Methods': 'GET', // Only allow GET requests
                    'Content-Type': 'application/json'
                };
                response = new Response(JSON.stringify(data), { headers });

                // Return the modified response
                return response;
            });
        } else {
            // Return the error response
            const headers = {
                'Access-Control-Allow-Origin': '*', // Allow any domain to access this resource
                'Content-Type': 'text/plain'
            };
            response = new Response('Error: API request failed with status code ' + response.status, { headers });

            // Return the error response
            return response;
        }
    })
    .catch(error => {
        // Return the error response
        const headers = {
            'Access-Control-Allow-Origin': '*', // Allow any domain to access this resource
            'Content-Type': 'text/plain'
        };
        response = new Response('Error: ' + error, { headers });

        // Return the error response
        return response;
    });
