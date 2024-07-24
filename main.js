$(document).ready(function() {
    
    $('#formulario-tarefa').on('submit', function(e) {
        e.preventDefault(); 

        const taskInput = $('#entrada-tarefa').val().trim();

        let exists = false;
        $('#lista li').each(function() {
            if ($(this).text() === taskInput) {
                exists = true;
                return false; 
            }
        });

        if (taskInput !== '' && !exists) {
            const li = $('<li></li>').text(taskInput);

            $('#lista').append(li);

            
            $('#entrada-tarefa').val('');
        } else if (exists) {
            alert('Este item já está na lista.');
        }
    });

    
    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
