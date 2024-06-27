$(document).ready(function() {
    $('#menu').click(function(){
        $('#registro').show();
    })

    $('#botaoCancelar').click(function(){
        $('#registro').hide();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const addTexto = $('#text').val();
        const addTempo = $('#tempo').val();
        const addData = $('#data').val();
        const addNota = $('#nota').val();

        const novoItem = $('<li></li>');
        $(`<div class="tarefa"><h3>${addTexto}</h3></div>`).appendTo(novoItem);
        $(`<div class="tempo"><h3>${addTempo}</h3></div>`).appendTo(novoItem);
        $(`<div class="data"><h3>${addData}</h3></div>`).appendTo(novoItem);
        $(`<div class="nota"><h3>${addNota}</h3></div>`).appendTo(novoItem);
        $(`<button class="remover"><i class="fa-regular fa-trash-can"></i></button>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');

        $('#text').val('');
        $('#tempo').val('');
        $('#data').val('');
        $('#nota').val('');
        $('#text').focus();
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('concluido');
    })

    $('ul').on('click', '.remover', function(){
        $(this).closest('li').remove();
    })
})