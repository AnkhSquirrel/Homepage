const duckduckgoQuery = "https://duckduckgo.com/?t=ffab&q="
const youtubeQuery = "https://www.youtube.com/results?search_query="

document.addEventListener("DOMContentLoaded", () => {

    window.browser = window.browser || window.chrome;

    const textField = document.getElementById('text-field');
    const duckduckgoBtn = document.getElementById('duckduckgo-btn');
    const youtubeBtn = document.getElementById('youtube-btn');

    duckduckgoBtn.addEventListener('click', () => {
        executeQuery(duckduckgoQuery, textField.value)
    });

    youtubeBtn.addEventListener('click', () => {
        executeQuery(youtubeQuery, textField.value)
    });

});

function executeQuery(website, query) {
    window.open(website + query, "_blank");
}