var identificador = 0;

$(document).ready(function () {
    $('#Calcular').click(function () {

        var cepOrigem = $('#ceporigem').val();

        var url = `http://usysweb.com.br/api/correiosambev.php?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=${cepOrigem}&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;
        $.get(url, function (data) {
            var dataJSON = JSON.parse(data);
            console.log(dataJSON.cServico)
                

                var text = `
    <div class="card">
        <div class="card-header" id="heading">
            <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${identificador}" aria-expanded="true" aria-controls="collapseOne">
                    ${cepOrigem}
        </button>
            </h2>
        </div>

        <div id="collapse${identificador}" class="collapse show" aria-labelledby="heading" data-parent="#accordionExample">
            <div class="card-body text-secondary">
                Codigo: ${dataJSON.cServico.Codigo}
                Valor: ${dataJSON.cServico.Valor}
                Prazo de Entrega: ${dataJSON.cServico.PrazoEntrega}
                Valor SemAdicionais: ${dataJSON.cServico.ValorSemAdicionais}
            </div>
        </div>
    </div>`

            $('#div_content').append(
                text
            );

            identificador++;

        });
    });
});




//var text = `<p>
//<button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapse_div${key}" aria-expanded="false" aria-controls="collapseExample">
//    ${value.bairro}
//</button>
//    </p >
//    <div class="collapse" id="collapse_div${key}">
//        <div class="card">
//            <div class=" card-header">
//                <h1 class="text-body">Cep: ${value.cep}</h1>
//            </div>
//            <div class=" card-body text-secondary">
//                <h5>${value.logradouro}</h5>
//                <h5>${value.complemento}</h5>
//                <h5>${value.bairro}</h5>
//                <h5>${value.localidade}</h5>
//                <h5>${value.uf}</h5>
//                <h5>${value.unidade}</h5>
//                <h5>${value.ibge}</h5>
//                <h5>${value.gia}</h5>
//            </div>
//        </div>
//    </div>`
//            $('#divContent').append(
//                text
//            );