class NegociacaoController {

    constructor() {                
        let $ = document.querySelector.bind(document);        
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this.negociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView($("#negociacoesView"));
        this.negociacoesView.update(this.negociacoes);
    }
    
    adiciona(event) {
        event.preventDefault();

        this.negociacoes.adiciona(this._criaNegociacao())
        this.negociacoesView.update(this.negociacoes);
        this._limpaFormulario();

        console.log(this.negociacoes)
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus();
    }
}