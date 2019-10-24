$(document).ready(function () {
    $("#cepOrigem").mask("99999-999");
    $("#cepDestino").mask("99999-999");
    $("#peso").mask("#.##0,000", { reverse: true });
    $("#comprimento").mask("#.##0,0", { reverse: true });
    $("#altura").mask("#.##0,0", { reverse: true });
    $("#largura").mask("#.##0,0", { reverse: true });
    $("#diametro").mask("#.##0,00", { reverse: true });
});