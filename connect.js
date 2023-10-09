$(function() {
    $("#form").on('submit', function(event) {
        event.preventDefault(); 

        const data = {
            name: $("#first__name").val(),
            email: $("#delivery__address").val(),
            mobile_phone: $("#mobile__phone").val(),
        };

        $.ajax({
            url: "", 
            type: "post",
            data: data,
            success: function(response) {
                console.log("Данные успешно отправлены!");
                
            },
            complete: function() {

            }
        });
    });
});


var modal = document.getElementById('myModal');
var closeButton = document.getElementsByClassName('close')[0];

document.getElementById('form').onsubmit = function(event) {
    event.preventDefault(); 

    modal.style.display = 'block';

    setTimeout(function() {
        modal.style.display = 'none';
        document.getElementById('form').reset(); 
    }, 900);
};

closeButton.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};




