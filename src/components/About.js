import './about.css'
import Person from "./Person";

const About = () => {
     return(
          <div className="innerBox">
               <div className='container aboutContainer'>
               <h2>About</h2>
                    <div className='introText'>
                         <div className='aboutImg'><img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/about.jpg"/></div>
                         <p>안녕하세요. </p>
                         <p>주어진 일에 최선을 다하고</p>
                         <p>성실하게 작업하는</p>
                         <p>김민국입니다.</p>
                    </div>
                    <div className="aboutWrap">
                         <Person person={persons}/>
                    </div>
               </div>
          </div>
     )
}
const persons = [
     {id:1, title:"Name", content:"Kim min guk", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/text.svg"},
     {id:2, title:"Tel", content:"010-7102-5175", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/phone.svg"},
     {id:3, title:"Git", content:"Repository", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/git_logo.png", link:"https://github.com/Kimminguk-kor?tab=repositories", linkText:"이동하기"},
     {id:4, title:"Email", content:"come999@naver.com", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/email.png"},
     {id:5, title:"방송정보국제교육원 수료", content:"22/03/24 ~ 22/09/03", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/graduation_hat.svg"},
     {id:6, title:"성결대학교 졸업", content:"2011.03.01 ~ 2018.03", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/graduation_hat.svg"},
     {id:7, title:"1차 포트폴리오", content:"동물보호관리시스템", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/first_logo.png", link:"https://kimminguk-kor.github.io/Animal_Protection/", linkText:"이동하기"},
     {id:8, title:"2차 포트폴리오", content:"현대자동차", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/hyundai_small_logo.png", link:"https://kimminguk-kor.github.io/hyundai_portfolio/", linkText:"이동하기"},
     {id:9, title:"3차 포트폴리오", content:"American Travel", icon:"https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/ATLogo.png", link:"https://kimminguk-kor.github.io/American_Travel/", linkText:"이동하기"}
]

export default About;