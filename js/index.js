$(document).ready(function(){
    // alert('경고')
    $('header').mouseenter(function(){
        // $('header').stop().animate({
        //     height : '250px'
        // },500)
        $('header').addClass('down')
    })
    $('header').mouseleave(function(){
        // $('header').stop().animate({
        //     height : '50px'
        // },500)
        $('header').removeClass('down')
    })
})

$(function () {
    $(window).scroll(function () {
        // console.log($(window).scrollTop())

        if ($(window).scrollTop() >= 200) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }

        // if(윈도우스코롤 >= 200){
        //     고탑이 나와
        // }else{
        //     고탑이 사라져
        // }
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop : 0
        },500)

    })
}) 
