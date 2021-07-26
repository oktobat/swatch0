$('html, body').stop().animate({
    scrollTop : 0
}, 1000)
$('#menu li').eq(0).addClass('on')
$('#menu li a').on('click', function(e){
    e.preventDefault()
    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
    // 0번 li : 0            0*$(window).height()
    // 1번 li : 한화면높이   1*$(window).height()
    // 2번 li : 두화면높이   2*$(window).height()
    // 3번 li : 세화면높이   3*$(window).height()
    var nowTop = $(window).height() * $(this).parent().index()
    $('html, body').stop().animate({ 
        scrollTop : nowTop 
    }, 1000)
})


$(window).on('scroll', function(){
    var wh = $(this).height()
    var sct = $(this).scrollTop()

    // var wh0 = wh*0
    // var wh1 = wh*1
    // var wh2 = wh*2
    // var wh3 = wh*3
    // if ( sct>=wh0 && sct<wh1 ) {
    //     $('#menu li').eq(0).addClass('on')
    //     $('#menu li').eq(0).siblings().removeClass('on')
    // } else if ( sct>=wh1 && sct<wh2 ) {
    //     $('#menu li').eq(1).addClass('on')
    //     $('#menu li').eq(1).siblings().removeClass('on')
    // } else if ( sct>=wh2 && sct<wh3 ) {
    //     $('#menu li').eq(2).addClass('on')
    //     $('#menu li').eq(2).siblings().removeClass('on')
    // } else if ( sct>=wh3 ) {
    //     $('#menu li').eq(3).addClass('on')
    //     $('#menu li').eq(3).siblings().removeClass('on')
    // } 

    for (let i=0; i<4; i++) {
        if ( sct>=wh*i && sct<wh*(i+1) ) {
            $('#menu li').eq(i).addClass('on')
            $('#menu li').eq(i).siblings().removeClass('on')
        }
    }


    $('section').on('mousewheel', function(event, delta){
            var sectNum = $(this).index()
            if (delta>0) {    // 마우스휠을 위로 굴리면 양수
                $('html, body').stop().animate({
                    scrollTop: (sectNum-1)*wh
                }, 600)
            } else if (delta<0) {  // 마우스휠을 아래로 굴리면 음수
                $('html, body').stop().animate({
                    scrollTop: (sectNum+1)*wh
                }, 600)
            }
    })





})