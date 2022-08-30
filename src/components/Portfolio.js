import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./portfolio.css";

const Portfolio = () => {
     const settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
     return(
          <div className="innerBox">
               <div className="container portfolioCon">
                    <h2>Portfolio</h2>
                    <a className="portfolioDown" href="../Kimminguk_portfolio.pdf" download="김민국_포트폴리오"><strong>pdf 다운로드</strong>(클릭시 다운로드)</a>
                    <div className="portfolioWrap">
                    <Slider {...settings}>
                         <div className="portFolioSubBox">
                              <img src="../images/portfolio01.png"/>
                              <div className="pfBox">
                                   <div><a href="https://kimminguk-kor.github.io/Animal_Protection/" target="_blank"><img src="../images/f01_01.jpg"/>메인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/Animal_Protection/login.html" target="_blank"><img src="../images/f01_02.jpg"/>로그인 페이지 보러가기</a></div>
                              </div>
                         </div>
                         <div className="portFolioSubBox">
                              <img src="../images/portfolio01.jpg"/>
                              <div className="pfBox">
                                   <div><a href="https://kimminguk-kor.github.io/Animal_Protection/" target="_blank"><img src="../images/f01_01.jpg"/>메인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/Animal_Protection/login.html" target="_blank"><img src="../images/f01_02.jpg"/>로그인 페이지 보러가기</a></div>
                              </div>
                         </div>
                         <div className="portFolioSubBox">
                              <img src="../images/portfolio02.png"/>
                              <div className="pfBox">
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/" target="_blank"><img src="../images/f02_01.jpg"/>메인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/carmenu.html" target="_blank"><img src="../images/f02_02.jpg"/>차 상세 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/login.html" target="_blank"><img src="../images/f02_03.jpg"/>로그인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/intro.html" target="_blank"><img src="../images/f02_04.jpg"/>회사소개 보러가기</a></div>
                              </div>
                         </div>
                         <div className="portFolioSubBox">
                         <img src="../images/portfolio02.jpg"/>
                              <div className="pfBox">
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/" target="_blank"><img src="../images/f02_01.jpg"/>메인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/carmenu.html" target="_blank"><img src="../images/f02_02.jpg"/>차 상세 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/login.html" target="_blank"><img src="../images/f02_03.jpg"/>로그인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/hyundai_portfolio/intro.html" target="_blank"><img src="../images/f02_04.jpg"/>회사소개 보러가기</a></div>
                              </div>
                         </div>
                         <div>
                         <img src="../images/portfolio03.png"/>
                         <div className="pfBox">
                                   <div><a href="https://kimminguk-kor.github.io/American_Travel/" target="_blank"><img src="../images/f03_01.jpg"/>메인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/American_Travel/login.html" target="_blank"><img src="../images/f03_02.jpg"/>상세 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/American_Travel/centralPage.html" target="_blank"><img src="../images/f03_03.jpg"/>로그인 페이지 보러가기</a></div>
                              </div>
                         </div>
                         <div>
                         <img src="../images/portfolio03.jpg"/>
                         <div className="pfBox">
                                   <div><a href="https://kimminguk-kor.github.io/American_Travel/" target="_blank"><img src="../images/f03_01.jpg"/>메인 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/American_Travel/login.html" target="_blank"><img src="../images/f03_02.jpg"/>상세 페이지 보러가기</a></div>
                                   <div><a href="https://kimminguk-kor.github.io/American_Travel/centralPage.html" target="_blank"><img src="../images/f03_03.jpg"/>로그인 페이지 보러가기</a></div>
                              </div>
                         </div>
                    </Slider>
                    </div>
               </div>
          </div>
     )
}
export default Portfolio;