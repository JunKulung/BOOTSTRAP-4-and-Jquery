$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(" .navbar-brand").css({
                
                "font-size": "22px"
            })
        } else {
            $(".navbar-brand").css({
                
                "font-size": "25px",
              
            })

        }
    })
})
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".nav-item, .navbar-toggler-icon").css({
                
                "font-size": "15px"
            })
        } else {
            $(".nav-item, .navbar-toggler-icon").css({
                
                "font-size": "20px"
            })

        }
    })
})



