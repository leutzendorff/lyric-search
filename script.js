document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form1');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // get the value from the input field
            const lyrics = document.getElementById('lyrics').value;

            // define the url for the api call
            const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyrics}&apikey=c386b28656b34620b5d2c7adc725bd7a`)}`;

            fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(json => {
                console.log(json);
            })
            .catch(function() {
                console.log("An error occurred while fetching the API data.");
            });
        });
    } else {
        console.log('Form element not found.');
    }
});
