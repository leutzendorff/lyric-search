document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form1');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var lyrics = document.getElementById('lyrics').value;
        var version = "1.1";
        onGet(version, lyrics);
    });
});

function onGet(version, lyrics) {
    var url = "https://api.musixmatch.com/ws/" + version + "/track.search?q_lyrics=" + encodeURIComponent(lyrics) + "&apikey=c386b28656b34620b5d2c7adc725bd7a";
    var headers = {
        'Origin': 'http://localhost:8080'
    }

    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        var output = document.getElementById('output');
        output.innerText = JSON.stringify(data, null, 2);
    })
    .catch(function(error) {
        var output = document.getElementById('output');
        output.innerText = "Fehler: " + error.message;
    });
}
