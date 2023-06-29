function onGet(version) {
    // Stellen Sie sicher, dass das Protokoll, der Host und der Port korrekt sind.
    const url = "http://localhost:8000/api/" + version + "/messages";
    var headers = {
        // Die 'Origin'-Kopfzeile zeigt an, von welcher Domain die Anfrage stammt.
        'Origin': 'http://localhost:8080'
    }

    fetch(url, {
        method: "GET",
        // Der Modus 'cors' gibt an, dass der Browser eine CORS-Anfrage senden soll.
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
        document.getElementById('messages').value = data.messages;
    })
    .catch(function(error) {
        document.getElementById('messages').value = error.message;
    });
}
