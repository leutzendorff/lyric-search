document.addEventListener('DOMContentLoaded', (event) => {
    function onGet(version) {
        const url = "https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime";
        var headers = {}

        fetch(url, {
            method : "GET",
            mode: 'cors',
            headers: headers
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.error)
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('messages').innerText = data.lyrics;
        })
        .catch(function(error) {
            document.getElementById('messages').innerText = error;
        });
    }

    document.getElementById('form1').addEventListener('submit', function(e) {
        e.preventDefault(); // Verhindert das Neuladen der Seite
        onGet('v1');
    });
});
