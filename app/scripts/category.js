$(function() {
    var uri_url = 'http://localhost:3000/categoriesAllTransactions';

    var prueba = $('#prueba');

    (function() {
        $.ajax({
            type: 'get',
            url: uri_url,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    var categories = data[i]
                    $('#dom').append(
                        $('<div/>', {
                            class: 'col-md-6'
                        }).append(
                            $('<div/>', {
                                id: 'menu'
                            }).append(
                                $('<div/>', {
                                    class: 'panel list-group'
                                }).append(
                                    $('<h4>', {
                                        class: 'list-group-item'
                                    }).html(
                                        categories.category_title
                                    ).append($('<span>', {
                                        class: 'label label-info'
                                    }).html(data[i].transactions.length), $('<span>', {
                                        class: 'glyphicon glyphicon-envelope pull-right'
                                    }))
                                ).append(
                                    $('<a>', {
                                        href: '#',
                                        class: 'list-group-item collapsed'
                                    }).attr({
                                        'data-toggle': 'collapse',
                                        'data-target': '#category-id-' + categories.id + '',
                                        'data-parent': '#menu'
                                    }).html("Transacciones").append($('<span>', {
                                        class: 'glyphicon glyphicon-tag pull-right'
                                    }))
                                ).append(
                                    $('<div/>', {
                                        id: 'category-id-' + categories.id + '',
                                        class: 'sublinks collapse',
                                        style: 'height="0px"'
                                    })
                                )
                            )
                        )
                    )
                    for (var j = 0; j < categories.transactions.length; j++) {
                        var transacciones = categories.transactions[j];
                        var pruebaId = $('#category-id-' + categories.id).attr('id');
                        console.log(transacciones)
                        console.log('category-id-' + categories.id)

                        if (transacciones.t_type == 1) {
                            var tipo_transaccion = 'Ingreso'
                        } else if (transacciones.t_type == 2) {
                            tipo_transaccion = 'Egreso'
                        }

                        $('#category-id-' + categories.id).append($('<a>', {
                            class: 'list-group-item small'
                        }).attr({
                            'data-target': '#category-id-transaccion-' + transacciones.id + '',
                            'data-toggle': 'collapse'
                        }).append($('<span>', {
                            class: 'glyphicon glyphicon-chevron-right'
                        }).html(' ' +tipo_transaccion))).append($('<div/>', {
                            id: 'category-id-transaccion-' + transacciones.id + '',
                            class: 'sublinks collapse'
                        }).append($('<div/>', {
                            class: 'well'
                        }).html('Monto:' + ' ' + transacciones.amount + '<br>' + 'Descripcion:' + ' ' + transacciones.description)))
                    };
                }
            },
            error: function(data) {
                console.log(data);
            }
        })

    }())

})
