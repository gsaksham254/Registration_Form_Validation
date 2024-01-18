// $("#sub").click(function(){
//     $("p").css("display","block");
// })
// $("#res").click(function(){
//     $("p").css("display","none");
// })
// var name = document.getElementById("fname").value;
// if (name.match('^[a-zA-Z]{3,16}$')) {
//     alert("Valid name");
// } else {
//     alert("That's not a name");
// }
function Name(){
    let store_name_value = $('#ne').val();
                // Name validation
            if (store_name_value == '') {
                $('#n').text("Please Enter Your Name");
                $('#n').css('color', '#e74c3c');
                $('#ne').focus();
                return false;
            }
            if (store_name_value.length < 3) {
                $('#n').text("Please Enter Correct Name");
                $('#n').css('color', '#ed4c67');
                $('#ne').focus();
                return false;
            }
            let name_regexp = /^[a-zA-Z]{3,50}$/;
    
            if (store_name_value.match(name_regexp)) {
                $('#n').css("display", "none");
                $('#ne').css('background-color', 'SkyBlue');
                $('#ne').focus();
            } else {
                $('#n').text("Please Enter a Valid Name");
                $('#n').css('color', '#e74c3c');
                $('#ne').focus();
                return false;
            }
}
$(document).ready(function () {
        $('#sub').on('click', function () {
            Name();
        });
    
});

