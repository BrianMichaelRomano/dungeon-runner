// Gets the appropriate content for the given hashRoute.
const getContent = function(hashRoute, callback) {

    // Create a new AJAX request for fetching the partial HTML file.
    const request = new XMLHttpRequest();

    // Call the callback with the content loaded from the file.
    request.onload = function() {
        callback(request.responseText);
    };

    // Fetch the partial HTML file for the given fragment id.
    request.open('GET',`views/${hashRoute}.html`);
    request.send(null);
}

const navigate = function() {

    // Get a reference to the "content" div.
    const view = document.getElementById('view');

    // Isolate the fragment identifier using substr.
    // This gets rid of the "#" character.
    const hashRoute = location.hash.substr(1);

    // Set the "view" section innerHTML based on the hashRoute.
    getContent(hashRoute, (content) => {
        view.innerHTML = content;
    });
}

navigate();

window.addEventListener('hashchange', navigate);