 function transactions() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/transactions',

            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    $('#xxxxxxxx').prepend('<li>' + data[i].date + data[i].description + data[i].t_type + data[i].amount + '</li>');
                }
            },
            error: function(data) {
                console.log(data);
            }

        });
 }();