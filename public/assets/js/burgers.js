$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger!");
                location.reload();
            }
        );
    });

    $(".eatburger").on("click", function(event) {
        // event.preventDefault();
        var id = $(this).data("id");
        // var newDevoured = $(this).data("newdevour");

        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                console.log("You ate the burger!");
                location.reload();
            }
        )
    })
});