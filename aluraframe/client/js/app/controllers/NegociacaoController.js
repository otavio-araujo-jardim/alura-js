class NegociacaoController {

    constructor() {                
        let $ = document.querySelector.bind(document);        
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this.negociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView($("#negociacoesView"));
        this.negociacoesView.update(this.negociacoes);
        this.mensagem = new Mensagem();
        this.mensagemView = new  MensagensView($("#mensagemView"))
    }

    adiciona(event) {
        event.preventDefault();
        
        this.negociacoes.adiciona(this._criaNegociacao())
        this.negociacoesView.update(this.negociacoes);
        this.mensagem.texto = "Negociação adicionada com sucesso!";
        this.mensagemView.update(this.mensagem);
        this._limpaFormulario();
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