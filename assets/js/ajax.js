
function dashboard(){
    $.ajax({
        type: "post",
        url: "./adminview/dashboardview.php",
        success: function (response) {
            $(".all-contnet").html(response);
        }
    });
}