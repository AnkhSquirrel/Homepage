document.addEventListener("DOMContentLoaded", () => {

    const textField = document.getElementById('text-field');

    fetch('queries.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(query => {
            const myDiv = document.getElementById("buttons");
            const myButton = document.createElement("button");
            myButton.textContent = query.name;
            myButton.addEventListener('click', () => {
                executeQuery(query.url, textField.value)
            });
            myDiv.appendChild(myButton);
        })
    })
    .catch(error => console.error(error));

});


function executeQuery(website, query) {
    window.open(website + query, "_blank");
}
