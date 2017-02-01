// JavaScript File
$(document).ready(function() {
            $("#giphy").submit(function(event) {
                event.preventDefault();
                var query = $("#query").val();
                console.log(query);
                $.ajax({

                    url: "https://api.giphy.com/v1/gifs/search?q=" + query + "cats&api_key=dc6zaTOxFJmzC"
                }).done(function(response) { // the .done function happens after the API response is returned
                    console.log(response);


                });
            });
