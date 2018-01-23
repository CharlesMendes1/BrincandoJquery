
$(function() {


    $('#myForm input').each(function () {
        var erro = $(this).next().attr('id');
        var id = this.id;
        if (id == 'nome') {
            verificaCampoNaoPreenchido(id, erro);
        } else if (id == 'email') {

        } else if (id == 'telefone') {

        }


    });

    $('#myForm').on('click', function (event) {
        event.preventDefault();

        var form = {
            nome: this.nome.value,
            email: this.email.value,
            telefone: this.telefone.value
        }

        form.each(function () {
            verificaCampoVazio(form);
        });


    });


    //$('#tabela_dados').empty();
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'Model/conectaBanco.php',
        success: function( dados ){
            alert( 'Enviou' );
            for(var i=0;dados.length>i;i++){
                //Adicionando registros retornados na tabela
                $('#tabela_dados').append('<tr><td>'+dados[i].nome+'</td><td>'+dados[i].descricao+'</td><td>'+dados[i].preco+'</td></tr>');
            }
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });


    function verificaCampoNaoPreenchido(id, erro) {
        //concatena para fazer id do erro
        var erro = "#" + erro;

        $("#" + id).keyup(function () {
            if (this.value == "") {
                $(erro).html("O campo " + id + " deve ser preenchido");
                $(erro).removeClass("invisivel").addClass("visivel");
            } else {
                $(erro).addClass("invisivel");
            }

        });
    }

    function verificaCampoVazio(form) {
        console.log(form);
        if (this.value == "") {
            $(erro).html("O campo " + id + " deve ser preenchido");
            $(erro).removeClass("invisivel").addClass("visivel");
        } else {
            $(erro).addClass("invisivel");
        }
    }


});