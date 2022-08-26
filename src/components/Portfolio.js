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
               <div className="container porfolioCon">
                    <h2>Portfolio</h2>
                    <div className="portfolioWrap">
                    <Slider {...settings}>
                         <div>
                              <img src="../images/portfolio01.jpg"/>
                              <p><a href="https://kimminguk-kor.github.io/Animal_Protection/" target="_blank">사이트보기</a></p>
                         </div>
                         <div>
                         <img src="../images/portfolio02.jpg"/>
                              <p><a href="https://kimminguk-kor.github.io/Animal_Protection/">사이트보기</a></p>
                         </div>
                         <div>
                         <img src="../images/portfolio03.jpg"/>
                              <p><a href="https://kimminguk-kor.github.io/Animal_Protection/">사이트보기</a></p>
                         </div>
                    </Slider>
                    </div>
               </div>
          </div>
     )
}
export default Portfolio;