import "./skill.css";

const Skill = () => {
  return (
    <div className="innerBox">
      <div className="container">
        {/* <span>Skill</span> */}
        <h2 className="firstH1">My front end skills</h2>
        <div className="skillWrap">
          <section className="firstSection">
            <h2>DESIGN SKILL</h2>
            <div className="designWrap">
              <div className="box02 skillHover01">
                <div className="imgBox">
                  <img src="../images/photoshop.png" />
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
                  <img src="../images/illustrate.png" />
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
            <div>
              <p>
              
              </p>
            </div>
          </section>
          <section className="secondSection">
            <h2>FRONT END SKILL</h2>
            <div className="designWrap">
              <div className="box02">
                <div className="imgBox">
                  <img src="../images/html5.png" />
                </div>
                <div className="textBox">
                  <strong>HTML5</strong>
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
                  <img src="../images/css3.png" />
                </div>
                <div className="textBox">
                  <strong>CSS3</strong>
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
                  <img src="../images/javascript.png" />
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
              <div className="box02 jquery">
                <div className="imgBox">
                  <img src="../images/jquery.png" />
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
                  <img src="../images/react.png" />
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
                  <img src="../images/git.png" />
                </div>
                <div className="textBox">
                  <strong>git</strong>
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
          <section className="thirdSection">
            <h2>BACK END SKILL</h2>
            <div className="designWrap">
              <div className="box02">
                <div className="imgBox">
                  <img src="../images/java.png" />
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
                  <img src="../images/oracle.png" />
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
        </div>
      </div>
    </div>
  );
};
export default Skill;
