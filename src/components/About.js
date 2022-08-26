import './about.css'
import box01 from "../images/text.svg"
import box02 from "../images/phone.svg"
import box03 from "../images/home.png"
import box04 from "../images/email.png"
import box05 from "../images/go-back-arrow.png"
import box06 from "../images/go-back-arrow.png"

const About = () => {
     return(
          <div className="innerBox">
               <div className='container'>
               {/* <span>About</span> */}
               <h2>About</h2>
                    <div className="aboutWrap">
                         <div className="box">
                              <div className="imgBox"><img src={box01}/></div>
                              <div className="textBox">
                                   <strong>Name</strong>
                                   <p>김 민 국</p>
                                   <p>Kim Min Guk</p>
                              </div>
                         </div>
                         <div className="box">
                              <div className="imgBox"><img src={box02}/></div>
                              <div className="textBox">
                                   <strong>Tel</strong>
                                   <p>010-7102-5175</p>
                              </div>
                         </div>
                         <div className="box">
                              <div className="imgBox"><img src={box03}/></div>
                              <div className="textBox">
                                   <strong>Address</strong>
                                   <p>서울시 관악구 대학동 1703-1 건영3차 3동 906호</p>
                              </div>
                         </div>
                         <div className="box">
                              <div className="imgBox"><img src={box04}/></div>
                              <div className="textBox">
                                   <strong>Email</strong>
                                   <p>come999@naver.com</p>
                              </div>
                         </div>
                         <div className="box">
                              <div className="imgBox"><img src={box05}/></div>
                              <div className="textBox">
                                   <strong>222</strong>
                                   <p>Kim Min Guk</p>
                              </div>
                         </div>
                         <div className="box">
                              <div className="imgBox"><img src={box06}/></div>
                              <div className="textBox">
                                   <strong>333</strong>
                                   <p>Kim Min Guk</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default About;