document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var lyrics = document.getElementById('search-input').value;
    fetch('https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=' + lyrics + '&apikey=c386b28656b34620b5d2c7adc725bd7a')
        .then(response => response.json())
        .then(data => {
            var results = document.getElementById('results');
            results.innerHTML = '';
            for (var i = 0; i < data.message.body.track_list.length; i++) {
                var track = data.message.body.track_list[i].track;
                var resultItem = document.createElement('p');
                resultItem.textContent = track.artist_name + ' - ' + track.track_name;
                results.appendChild(resultItem);
            }
        });
});
