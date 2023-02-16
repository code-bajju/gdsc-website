import React from "react";
import "../sassfiles/About.sass";
import Stats from "../Subcomponents/Stats";
import "../sassfiles/Stats.css";

function About() {
  return (
    <div className="main_About container-fluid">
      <section id="clients" class="s-clients box">
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full pe-0">
            <h3 className="subhead " style={{fontWeight:"bolder",color:"black"}}> Hello There</h3>
            <br />
            
            <h1 id="h1">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h1>
          </div>
          <h2 id="h2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            ex accusamus. Voluptates voluptatibus aperiam, eaque voluptas optio
            qui expedita doloribus? Deleniti, reprehenderit. Similique omnis
            tenetur perferendis accusamus placeat est numquam odio ducimus. Et
            asperiores repudiandae voluptatem delectus cumque, eum recusandae ut
            possimus architecto eaque ipsum illo ullam blanditiis accusamus. Sit
            est quibusdam ratione ipsa veritatis quae excepturi. Corrupti nam
            dolorum est voluptatum cum totam magnam!
          </h2>
          <div className="card-container">
            <Stats />
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
