import React  from "react";
import Summary from "./Summary";
import Testimonial from "./Testimonial";

function About({Summary1, Testimonial1}){

    return <div>
        <h1>About</h1>
        <Summary Summ={Summary1}/>
        <Testimonial Testi={Testimonial1}/>

    </div>
}

export default About;