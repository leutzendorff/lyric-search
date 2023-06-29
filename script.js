document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // verhindert das automatische Absenden des Formulars

    let lyrics = document.getElementById('lyrics').value;
    let apiKey = 'c386b28656b34620b5d2c7adc725bd7a';

    // Wir fügen 'https://thingproxy.freeboard.io/fetch/' vor die URL, um das CORS-Problem zu umgehen.
    fetch('https://cors.bridged.cc/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=' + lyrics + '&apikey=' + apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let output = '<h2>Suchergebnisse</h2>';

            // Überprüfen Sie, ob Daten vorhanden sind
            if(data.message.body.track_list.length === 0) {
                output += '<p>Keine Übereinstimmungen gefunden</p>';
            } else {
                data.message.body.track_list.forEach(function(track) {
                    output += `
                        <h3>${track.track.track_name} by ${track.track.artist_name}</h3>
                        <p>${track.track.album_name}</p>
                        <p><a href="${track.track.track_share_url}">Song Link</a></p>
                    `;
                });
            }

            document.getElementById('results').innerHTML = output;
        })
        .catch(err => console.log(err));
});
