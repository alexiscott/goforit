function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hi folks, I'm Booty!";
    return element;
}

document.body.appendChild(component());
