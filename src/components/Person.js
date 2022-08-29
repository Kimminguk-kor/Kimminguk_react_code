const Person = (props) => {
     const personList = props.person;
     const personSet = personList.map((f) => 
          <div className="box">
               <div className="imgBox"><img src={f.icon}/></div>
               <div className="textBox">
                    <strong>{f.title}</strong>
                    <p>{f.content}</p>
                    <p><a href={f.link}>{f.linkText}</a></p>
               </div>
          </div>
     )
     return (
          <div className="aboutWrap">
               {personSet}
          </div>
     )
}
export default Person;