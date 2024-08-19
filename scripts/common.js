//common js
//1. nav>gnb 복제
//2. 복제대상을 변수 저장
//3. m_nav_wrap 위 변수 붙여넣기
const gnb = document.querySelector('nav .gnb')/* 복제할 것 변수 하나 */
const m_wrap = document.querySelector('.m_nav_wrap')/* 복제할 위치 변수 하나 */
const gnbClone = gnb.cloneNode(true)/* 복제 */
m_wrap.appendChild(gnbClone)/* 붙여넣기 */
console.log(gnb, m_wrap, gnbClone);

//main-nav (jquery)
//1. sub, sub_bg 숨기기
//중복되는 대상 있을 때 부모 태그 꼭 쓰기 (클론노드에도 있어서)
$('nav .sub').hide()
$('nav .sub_bg').hide()
//2. nav 마우스오버 시 sub 보이기
$('nav').on('mouseover', function () {
    /* 동적 움직임을 추가 하고 싶다면 */
    $('nav .sub').stop(true).slideDown(300)
    $('nav .sub_bg').stop(true).slideDown(300)
/* 
    $('nav .sub').show()
    $('nav .sub_bg').show()
 */
})
$('nav').on('mouseout', function () {
    /* 동적 움직임을 추가 하고 싶다면 */
    $('nav .sub').stop(true).slideUp(300)
    $('nav .sub_bg').stop(true).slideUp(300)
/* 
    $('nav .sub').hide()
    $('nav .sub_bg').hide()
 */
})

//mobile menu
//1. 모바일 메뉴 숨기기
//보통 터치 클릭 이벤트 이기 때문에 하나의 이벤트에 쓰지만 없어지고 사라지는 것을 표현하려면 true false boolean 논리형 데이터 필요
$('.m_nav_wrap .gnb').hide();
//0. 모바일 메뉴의 현재 상태를 알기 위한 논리형 데이터 생성
var m_nav_state = true;
//2. 전체메뉴 아이콘 클릭시
$('.m_nav').on('click', function () {
    m_nav_state = !m_nav_state//상태반전
    console.log(`현재상태는 : ${m_nav_state}`)
    //2-1. (모바일 메뉴가 숨겨진 상태면) 보이기
    //      꺼져있다면 켜라
    if(m_nav_state == false) {
        $('.m_nav_wrap .gnb').show();
        //m_nav_state = true//상태변경
    //2-2. (모바일 메뉴가 보이는 상태면) 숨기기
    //      켜져있다면 꺼라
    }else{
        $('.m_nav_wrap .gnb').hide();
        //m_nav_state = false//상태변경
    }
})

/* 
const m_nav = document.querySelector('.m_nav')
addEventListener('click')
m_nav.computedStyle.display = 'block'
m_nav.computedStyle.display = 'none' 
*/