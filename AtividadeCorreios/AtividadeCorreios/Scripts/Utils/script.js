var identificador = 0;

$(document).ready(function () {

    $('input[name="Calcular"]').click(function () {
        //obter as informações dos meus campos
        //Obtemos as informações do nosso formulario web completo
        var informacoes = $('form[name="formenviar"]').serializeArray();
        //Obtemos o atributo que indica a pagina que vamos enviar o post
        var obterAtributo = $('form[name="formenviar"]').attr('send-post');

        //Enviamos o post para nosso servidor web
        $.post("http://usysweb.com.br/api/" + obterAtributo + ".php?giomar=true", informacoes, function (data) {
            //aqui como recebemos uma string com formato de JSON
            //temos que passar ela para o JSON parecido com o int.Parse()
            data = JSON.parse(data);
            //Aqui carregamos as informações automaticamente
            $.each(data.cServico, function (key, value) {
                $('p[name="{key}"'.replace("{key}", key)).text(value);
            });
        });
    });

   
});

//$('#Calcular').click(function () {

//    var cepOrigem = $('#cepOrigem').val();
//    var cepDestino = $('#cepDestino').val();
//    var codServico = $('#codServico').val();

//    var url = `http://usysweb.com.br/api/correiosambev.php?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=${cepOrigem}&sCepDestino=${cepDestino}&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=${codServico}&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;
//    $.get(url, function (data) {
//        var dataJSON = JSON.parse(data);
//        console.log(dataJSON.cServico)


//        var text = `
//    <div class="card">
//        <div class="card-header" id="heading">
//            <h2 class="mb-0">
//                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${identificador}" aria-expanded="true" aria-controls="collapseOne">
//                   Origem ${cepOrigem} / Destino ${cepDestino}
//        </button>
//            </h2>
//        </div>

//        <div id="collapse${identificador}" class="collapse show" aria-labelledby="heading" data-parent="#accordionExample">
//            <div class="card-body text-secondary">
//                 <h5>Código: ${dataJSON.cServico.Codigo}</h5>
//                 <h5>Valor: ${dataJSON.cServico.Valor}</h5>
//                 <h5>Prazo de Entrega: ${dataJSON.cServico.PrazoEntrega} dias</h5>
//                 <h5>Valor Sem Adicionais: ${dataJSON.cServico.ValorSemAdicionais}</h5>
//            </div>
//        </div>
//    </div>`

//        $('#div_content').append(
//            text
//        );

//        identificador++;

//    });
//});
