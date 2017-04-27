/*
$('select[name="siteInstitucional"] option:selected').text();
$(function () {
  alert('.val() = ' + $('#selectnumber').val() + '  AND  html() = ' + $('#selectnumber option:selected').html() + '  AND .text() = ' + $('#selectnumber option:selected').text());
  // $("#selecServico").val("valueEcommerce1");
});  */
$(function() {
    $("#precoFreelancer").maskMoney({
        symbol: 'R$ ',
        showSymbol: true,
        thousands: '.',
        decimal: ',',
        symbolStay: true
    });
    $("#precoCliente").maskMoney({
        symbol: 'R$ ',
        showSymbol: true,
        thousands: '.',
        decimal: ',',
        symbolStay: true
    });
});

$('input').on('change', function() {
  var $precoFreelancer = $("#precoFreelancer");
  var $precoCliente = $("#precoCliente");
  // var $valorMedia = $("#valorMedia");
  var $valorMedia = 1500;

  if ($precoFreelancer.val() == '')
    return limparMedia();

  if ($precoCliente.val() == '')
    return limparMedia();

  var precoFreelancer = parseFloat($precoFreelancer.val());
  var precoCliente = parseFloat($precoCliente.val());

  var mediaFreelancer = (precoFreelancer + valorMedia) / 2;
  var mediaCliente = (precoCliente + valorMedia) / 2;

  $valorMedia.val(media)
});

function limparMedia() {
  var $valorMedia = $("#precoMedia");
  $valorMedia.val('');
  return false;
}