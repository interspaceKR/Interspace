// 문서가 로드된 이후에 처리되는 함수 정의
$(document).ready(function() {
    // 탭메뉴 타이틀이 선택되지 않은 내용은 숨김 처리
    // 탭메뉴 타이틀의 a태그가 가지는 href의 값과 내용의 id가 동일한가를 확인함
    $(".tab_panel li:not("+$(".tab_title li a.selected").attr("href")+")").hide();

    // 탭메뉴 타이틀 클릭시 내용 보이기
    $(".tab_title li a").click(function(){
        $(".tab_title li a").removeClass("selected");
        $(this).addClass("selected");
        $(".tab_panel li").hide();
        $($(this).attr("href")).show();
        return false;
    });
});
// 홈페이지--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel1 li:not("+$(".tab_title1 li a.selected").attr("href")+")").hide();
    $(".tab_title1 li a").click(function(){        $(".tab_title1 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel1 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 종합인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_종합인테리어 li:not("+$(".tab_title_종합인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_종합인테리어 li a").click(function(){        $(".tab_title_종합인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_종합인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 부분인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_부분인테리어 li:not("+$(".tab_title_부분인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_부분인테리어 li a").click(function(){        $(".tab_title_부분인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_부분인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 상가/매장인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_상가매장인테리어 li:not("+$(".tab_title_상가매장인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_상가매장인테리어 li a").click(function(){        $(".tab_title_상가매장인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_상가매장인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 카페/식당인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_카페식당인테리어 li:not("+$(".tab_title_카페식당인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_카페식당인테리어 li a").click(function(){        $(".tab_title_카페식당인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_카페식당인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 학원/교육인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_학원교육인테리어 li:not("+$(".tab_title_학원교육인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_학원교육인테리어 li a").click(function(){        $(".tab_title_학원교육인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_학원교육인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 호텔/펜션인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_호텔펜션인테리어 li:not("+$(".tab_title_호텔펜션인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_호텔펜션인테리어 li a").click(function(){        $(".tab_title_호텔펜션인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_호텔펜션인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 기타인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_기타인테리어 li:not("+$(".tab_title_기타인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_기타인테리어 li a").click(function(){        $(".tab_title_기타인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_기타인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 전자제품인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_전자제품인테리어 li:not("+$(".tab_title_전자제품인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_전자제품인테리어 li a").click(function(){        $(".tab_title_전자제품인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_전자제품인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 조명인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_조명인테리어 li:not("+$(".tab_title_조명인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_조명인테리어 li a").click(function(){        $(".tab_title_조명인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_조명인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
// 가구인테리어--------------------------------------------------------------------------------
$(document).ready(function() {    $(".tab_panel_가구인테리어 li:not("+$(".tab_title_가구인테리어 li a.selected").attr("href")+")").hide();
    $(".tab_title_가구인테리어 li a").click(function(){        $(".tab_title_가구인테리어 li a").removeClass("selected");
        $(this).addClass("selected");        $(".tab_panel_가구인테리어 li").hide();        $($(this).attr("href")).show();
        return false;    });});
