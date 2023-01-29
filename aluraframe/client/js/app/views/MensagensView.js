class MensagensView {
    constructor(elemento) {
        this.elemento = elemento
    }

    _template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }

    update(model) {
        this.elemento.innerHTML = this._template(model);
    }
}