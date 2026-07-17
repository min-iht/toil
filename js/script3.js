// ★★★★★★★공통★★★★★★★
// ★★★탑 버튼 시작★★★
$(function () {

    $('.top_button').hide();

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {
            $('.top_button').fadeIn();
        } else {
            $('.top_button').fadeOut();
        }

    });

});
// ☆☆☆탑 버튼 끝☆☆☆
// 부드럽게 전환
$(function () {

    $('a[href^="#"]').click(function (e) {

        e.preventDefault();

        let target = $(this.getAttribute('href'));

        if (target.length) {

            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 500);

        }

    });
});

// gnb - 조인 박스 ★★★★★★★

$(function () {
    // 조인박스 안 보이게
    $(".join_box").hide();

    // 박스 나타나게
    $(".join").mouseenter(function () {
        $(".join_box").slideDown();
    });
    // 엑스 누르면 사라지게
    $(".close_icon").click(function () {
        $(".join_box").fadeOut();
        $(".join").attr("src", "img/join_icon_white.png");
    });
    // 조인 아이콘 변하게
    $(".join").mouseenter(function () {
        $(this).attr("src", "img/join_icon_hover_white.png");//변경될 이미지 주소를 넣어주세요
    });
});


// 서브메뉴 ★★★★★★★

$(function () {
    // 서브메뉴 숨기기
    $(".submenu_wrap").hide();

    // 서브메뉴 슬라이드다운
    $(".gnb>li:nth-child(2)").mouseenter(function () {
        $(".submenu_wrap").stop(true, true).slideDown(700);
    });

    // 서브메뉴 슬라이드업
    $(".gnb>li:nth-child(2)").mouseleave(function () {
        $(".submenu_wrap").stop(true, true).slideUp(700);
    });

    // 하얗게 되게
    $(".submenu>li:nth-child(1)").mouseenter(function () {
        $(".submenu>li:nth-child(2)").addClass("off");
    })
    $(".submenu>li:nth-child(1)").mouseleave(function () {
        $(".submenu>li:nth-child(2)").removeClass("off");
    })
    $(".submenu>li:nth-child(2)").hover(function () {
        $(".submenu>li:nth-child(1)").addClass("off");
    })
    $(".submenu>li:nth-child(2)").mouseleave(function () {
        $(".submenu>li:nth-child(1)").removeClass("off");
    })
});


// 커서========================================================

$(document).ready(function () {
    var cursorDot = $('.toil-cursor-dot');
    var cursorFollower = $('.toil-cursor-follower');

    // 1. 마우스 움직임에 따라 커서 위치 업데이트
    $(document).on('mousemove', function (e) {
        // 중심 점은 마우스 포인터 위치에 칼같이 동기화
        cursorDot.css({
            left: e.clientX,
            top: e.clientY
        });
        // 팔로워 원은 CSS transition(0.08s)에 의해 미세한 단차를 두고 부드럽게 따라옴
        cursorFollower.css({
            left: e.clientX,
            top: e.clientY
        });
    });

    // 2. 인터랙션 요소에 마우스 진입/이탈 시 클래스 토글
    // 기존에 만드신 지도의 섬 노드나 범례 버튼 등의 클래스명도 여기에 추가해 주시면 됩니다.
    var interactiveElements = 'a, button, [role="button"], .entire-view-btn, .map-node';

    $(document).on('mouseenter', interactiveElements, function () {
        cursorDot.addClass('is-hover');
        cursorFollower.addClass('is-hover');
    });

    $(document).on('mouseleave', interactiveElements, function () {
        cursorDot.removeClass('is-hover');
        cursorFollower.removeClass('is-hover');
    });

    // 3. 브라우저 화면 밖으로 마우스가 나갔을 때 커서 숨기기 처리
    $(document).on('mouseleave', function () {
        cursorDot.css('opacity', 0);
        cursorFollower.css('opacity', 0);
    });

    $(document).on('mouseenter', function () {
        cursorDot.css('opacity', 1);
        cursorFollower.css('opacity', 1);
    });
});

//커서 숨기기---------------------
$(document).ready(function () {
    // 현재 적용되어 있는 두 커서 요소를 정확하게 변수로 지정합니다.
    var cursorDot = $('.toil-cursor-dot');
    var cursorFollower = $('.toil-cursor-follower');

    // 마우스 커서 효과를 '모두' 사라지게 만들고 싶은 특정 div의 클래스명을 적어주세요.
    // 예시로 .hide-cursor-zone 을 사용했습니다. 해당 div에 이 클래스를 넣어주시면 됩니다.
    var hideZone = '.hide-cursor-zone';

    $(document).on('mouseenter', hideZone, function () {
        // 특정 구역 진입 시 hidden 클래스를 부여하여 점과 잔상을 모두 지웁니다.
        cursorDot.addClass('is-hidden');
        cursorFollower.addClass('is-hidden');
    });

    $(document).on('mouseleave', hideZone, function () {
        // 구역을 탈출하면 즉시 hidden 클래스를 회수하여 커서를 복원합니다.
        cursorDot.removeClass('is-hidden');
        cursorFollower.removeClass('is-hidden');
    });
});

