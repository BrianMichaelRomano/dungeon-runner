function renderComponent(folder, component, elementID) {
    console.log(`Rendering ${component}...`);

    fetch(`./${folder}${component}.html`)
    .then((res) => {
        return res.text()
    })
    .then((text) => {
        document.getElementById(elementID).innerHTML = text;
    });
}

export {
    renderComponent
}