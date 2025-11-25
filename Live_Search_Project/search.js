$(document).ready(function () {

    $("#searchBox").on("keyup", function () {
        let query = $(this).val().trim();

        $("#loading").show();

        $.ajax({
            url: "http://localhost:3003/products?q=" + query,
            method: "GET",
            success: function (data) {
                $("#loading").hide();
                $("#results").empty();

                if (data.length === 0) {
                    $("#results").html('<p class="no-result">No products found</p>');
                    return;
                }

                data.forEach(product => {
                    $("#results").append(`
                        <div class="product">
                            <img src="${product.image}" width="80">
                            <div>
                                <h3>${product.name}</h3>
                                <p><strong>Price:</strong> ₹${product.price}</p>
                            </div>
                        </div>
                    `);
                });
            },
            error: function () {
                $("#loading").hide();
                $("#results").html("<p>Error fetching results</p>");
            }
        });
    });

});
