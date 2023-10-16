<script>
    function consultarCEP() {
        var cep = document.getElementById('cep').value;
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => preencherCampos(data))
            .catch(error => console.error('Erro ao consultar CEP:', error));
    }

    function preencherCampos(data) {
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;
    }

    function enviarFormulario() {
        
 
</script>
