document.getElementById('lyricForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let lyrics = document.getElementById('lyrics').value;

    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyrics}&apikey=c386b28656b34620b5d2c7adc725bd7a`
    fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log(e);
            return e;
        });
});
