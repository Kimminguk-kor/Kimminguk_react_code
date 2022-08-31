import "./skill.css";

const Skill = () => {
  return (
    <div className="innerBox">
      <div className="container">
        {/* <span>Skill</span> */}
        <h2 className="firstH1">SKILLS</h2>
        <div className="skillWrap">
          <section className="firstSection">
            <h2>DESIGN SKILL</h2>
            <div className="designWrap">
              <div className="box02 skillHover01">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/photoshop.png" />
                </div>
                <div className="textBox">
                  <strong>PHOTOSHOP</strong>
                </div>
                <ul className="dotBox">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li className="active"></li>
                </ul>
                <p>80%</p>
              </div>
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/illustrate.png" />
                </div>
                <div className="textBox">
                  <strong>ILLUSTRATE</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                  </ul>
                  <p>80%</p>
                </div>
              </div>
            </div>
          </section>
          <section className="firstSubSection">
            <div className="designWrap">
              <div className="box02 subText">
                <strong>PHOTOSHOP</strong>
                <p>이미지 편집 및 보정, 웹페이지 목업 제작</p>
              </div>
              <div className="box02 subText">
                <strong>PHOTOSHOP</strong>
                <p>이미지 편집 및 보정, 아이콘 제작 및 텍스트 편집</p>
              </div>
            </div>
          </section>
          <section className="secondSection">
            <h2>FRONT END SKILL</h2>
            <div className="designWrap">
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/html5.png" />
                </div>
                <div className="textBox">
                  <strong>HTML5</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="active test"></li>
                  </ul>
                  <p>90%</p>
                </div>
              </div>
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/css3.png" />
                </div>
                <div className="textBox">
                  <strong>CSS3</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="active test"></li>
                  </ul>
                  <p>90%</p>
                </div>
              </div>
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/javascript.png" />
                </div>
                <div className="textBox">
                  <strong>JAVASCRIPT</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="active test"></li>
                    <li className="active"></li>
                  </ul>
                  <p>70%</p>
                </div>
              </div>
            </div>
          </section>
          <section className="secondSubSection">
            <div className="designWrap">
              <div className="box02 subText">
                <strong>HTML5</strong>
                <p>웹 접근성과 웹 표준을 지키며, 시멘틱 태그를 준수합니다.</p>
              </div>
              <div className="box02 subText">
                <strong>CSS3</strong>
                <p>디자인에 맞게 구현하며, 여러 기기에 대한 반응형 웹 구현.</p>
              </div>
              <div className="box02 subText">
                <strong>JavaScript</strong>
                <p>다양한 이벤트를 활용해 배너, 메뉴등의 동적인 구현을 했습니다.</p>
              </div>
            </div>
          </section>
          <section>
            <div className="designWrap">
              <div className="box02 jquery">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/jquery.png" />
                </div>
                <div className="textBox">
                  <strong>JQUERY</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                  </ul>
                  <p>80%</p>
                </div>
              </div>
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/react.png" />
                </div>
                <div className="textBox">
                  <strong>REACT</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                    <li className="active"></li>
                    <li className="active"></li>
                  </ul>
                  <p>40%</p>
                </div>
              </div>
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/git.png" />
                </div>
                <div className="textBox">
                  <strong>Git</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                    <li className="active"></li>
                    <li className="active"></li>
                  </ul>
                  <p>40%</p>
                </div>
              </div>
            </div>
          </section>
          <section className="thirdSubSection">
            <div className="designWrap">
              <div className="box02 subText">
                <strong>JQUERY</strong>
                <p>Jquery를 이용한 배너 및 플러그인 이용한 작업</p>
              </div>
              <div className="box02 subText">
                <strong>REACT</strong>
                <p>JSX를 이용한 컴포넌트 기반의 TodoList 구현, SPA 홈페이지 작업</p>
              </div>
              <div className="box02 subText">
                <strong>Git</strong>
                <p>git을 이용한 버전관리, branch를 통한 협업</p>
              </div>
            </div>
          </section>
          <section className="thirdSection">
            <h2>BACK END SKILL</h2>
            <div className="designWrap">
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/java.png" />
                </div>
                <div className="textBox">
                  <strong>JAVA</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                    <li className="active"></li>
                    <li className="active"></li>
                  </ul>
                  <p>40%</p>
                </div>
              </div>
              <div className="box02">
                <div className="imgBox">
                  <img src="https://kimminguk-kor.github.io/Kimminguk_Portfolio/images/oracle.png" />
                </div>
                <div className="textBox">
                  <strong>DB(ORACLE)</strong>
                  <ul className="dotBox">
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                    <li className="active"></li>
                    <li className="active"></li>
                  </ul>
                  <p>40%</p>
                </div>
              </div>
            </div>
          </section>
          <section className="forthSubSection">
            <div className="designWrap">
              <div className="box02 subText">
                <strong>JAVA</strong>
                <p>JAVA언어 기반 이벤트관리</p>
              </div>
              <div className="box02 subText">
                <strong>DB(ORACLE)</strong>
                <p>Oracle sql 기반으로 DB 작업</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Skill;
