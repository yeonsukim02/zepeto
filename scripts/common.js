//common js
//1. nav>gnb 복제
//2. 복제대상을 변수 저장
//3. m_nav_wrap 위 변수 붙여넣기
const gnb = document.querySelector('nav .gnb')/* 복제할 것 변수 하나 */
const m_wrap = document.querySelector('.m_nav_wrap')/* 복제할 위치 변수 하나 */
const gnbClone = gnb.cloneNode(true)/* 복제 */
m_wrap.appendChild(gnbClone)/* 붙여넣기 */
console.log(gnb, m_wrap, gnbClone);

