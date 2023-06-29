document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const results = document.querySelector('.results');

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.deezer.com/search/`;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const userSearch = input.value;
        fetch(`${api}?q=${userSearch}`)
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.data.forEach(item => {
                output += `
                    <li>
                        <h3>${item.artist.name}</h3>
                        <p>${item.title}</p>
                    </li>
                `;
            });
            results.innerHTML = output;
        })
    });
});
