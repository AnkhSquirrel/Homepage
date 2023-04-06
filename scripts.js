const textField = document.getElementById('query-text-field');

fetch('queries.json')
.then(response => response.json())
.then(data => {
    data.forEach(query => {
        const buttonsDiv = document.getElementById("query-buttons");
        const queryButton = document.createElement("button");
        queryButton.textContent = query.name;
        queryButton.addEventListener('click', () => {
            window.open(query.url + textField.value, "_blank");
        });
        buttonsDiv.appendChild(queryButton);
    })
})
.catch(error => console.error(error));
