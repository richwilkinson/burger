$(document).ready(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        if ($(this).data("devoured") === 0){
           var devoured = true
        }else devoured = false
     
        console.log(devoured);
        console.log(id);
    
        var mondoBurger = {
            burger_name: $("#mondo").val(),
            devoured: 0
        };    
        // Send the POST request.
        $.ajax("/api/burgers" + id, {
            type: "POST",
            data: mondoBurger
        }).then(
            function () {
                console.log("created new burger on the menu");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        var userDevoured = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: userDevoured
        }).then(
            function () {
                console.log("Burger Eaten");
                location.reload();
            }
        );
    });



});