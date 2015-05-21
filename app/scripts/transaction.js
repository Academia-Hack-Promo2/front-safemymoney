$("#botonTodas").click(function(){  
document.getElementById('titulo').innerHTML = "Todas Las Transacciones";
  $.ajax({
            type: 'get',
            url: 'http://localhost:3000/transactions/show',

            success: function(data) {             
                for (var i = 0; i < data.length; i++) {
                  // La data trae el category_id y requerimos el category_tittle (muestra undefined), pendiente por terminar
                    $('#allTransaction').append(
                      '<tr><td>' + data[i].date + '</td>' +
                      '<td>' + data[i].amount  + '</td>' +
                      '<td>' + data[i].category_id + '</td>'+
                      '<td>' + data[i].description + '</td></tr>');
                }
            },
            error: function(data) {
                console.log(data);
            }
        });  
});