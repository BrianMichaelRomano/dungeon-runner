function renderComponent(component, elementID) {
    console.log(`Rendering ${component}...`);

    fetch(`./components/${component}-component/${component}-component.html`)
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