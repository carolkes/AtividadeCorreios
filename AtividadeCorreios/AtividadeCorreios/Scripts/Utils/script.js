$(document).ready(function () {
    $('#Calcular').click(function () {
        var url = `http://usysweb.com.br/api/correiosambev.php?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;
        $.get(url, function (data) {
            var latim = JSON.parse(data);
            $.each(latim.cServico, function (key, value) {
                

                var text = `<div class="accordion" id="accordion_div${key}">
        <div class="card">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_div${key}" aria-expanded="true" aria-controls="collapseOne">
                        ${value.cServico}
                    </button>
                </h2>
            </div>
            </div>
        </div>`

                $('#divContent').append(
                    text
                );
         

            }); 
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