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
                    <a className="portfolioDown" href="../Kimminguk_portfolio.pdf" download="김민국_포트폴리오">pdf 다운로드</a>
                    <div className="portfolioWrap">
                    <Slider {...settings}>
                         <div>
                              <img src="../images/portfolio01.png"/>
                              <p><a href="https://kimminguk-kor.github.io/Animal_Protection/" target="_blank">사이트보기</a></p>
                         </div>
                         <div>
                              <img src="../images/portfolio01.jpg"/>
                              <p><a href="https://kimminguk-kor.github.io/Animal_Protection/" target="_blank">사이트보기</a></p>
                         </div>
                         <div>
                         <img src="../images/portfolio02.png"/>
                              <p><a href="https://kimminguk-kor.github.io/hyundai_portfolio/" target="_blank">사이트보기</a></p>
                         </div>
                         <div>
                         <img src="../images/portfolio02.jpg"/>
                              <p><a href="https://kimminguk-kor.github.io/hyundai_portfolio/" target="_blank">사이트보기</a></p>
                         </div>
                         <div>
                         <img src="../images/portfolio03.png"/>
                              <p><a href="https://kimminguk-kor.github.io/American_Travel/" target="_blank">사이트보기</a></p>
                         </div>
                         <div>
                         <img src="../images/portfolio03.jpg"/>
                              <p><a href="https://kimminguk-kor.github.io/American_Travel/" target="_blank">사이트보기</a></p>
                         </div>
                    </Slider>
                    </div>
               </div>
          </div>
     )
}
export default Portfolio;