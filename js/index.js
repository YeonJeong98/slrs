$(document).ready(function () {
    // alert('경고')
    $('header').mouseenter(function () {
        // $('header').stop().animate({
        //     height : '250px'
        // },500)
        $('header').addClass('down')
    })
    $('header').mouseleave(function () {
        // $('header').stop().animate({
        //     height : '50px'
        // },500)
        $('header').removeClass('down')
    })
})

function toggleMobileMenu() {
    const $menu = $('.sumn');

    if ($menu.is(':visible')) {
        // 메뉴가 열려 있으면 → 닫기
        $menu.stop().slideUp();
        $('.sub_head > .mobile-header > ul > li')
            .removeClass('active')
            .children('ul').stop().slideUp();
    } else {
        // 메뉴가 닫혀 있으면 → 열기
        $menu.stop().slideDown();
    }
}

$('.sub_head > .mobile-header > ul > li').click(function (e) {
    e.stopPropagation()

    const isActive = $(this).hasClass('active')

    // 모든 메뉴 닫기
    $('.sub_head > .mobile-header > ul > li').removeClass('active').children('ul').stop().slideUp()

    if (!isActive) {
        // 클릭한 메뉴가 닫혀 있었으면 열기
        $(this).addClass('active').children('ul').stop().slideDown()
    }
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
            scrollTop: 0
        }, 500)

    })


}) 
