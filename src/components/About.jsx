import React, { useState,useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./About.css";

const About = () => {
  const [op, setOp] = useState('0');


  useEffect(() => {
    const timer = setTimeout(()=>{
        setOp('100')
    },17000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  

  return (
    <div className="about-main">
      <div className="about-inner" style={{ color: "white" }}>
        <img src="mypic.jpg" className="about-image" alt="" />
        <div className="about-text-content">
          <div className="inner-text">
            <h2 className="inner-title">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .pauseFor(100)
                    //   .loop(true)
                    .changeDelay(100)
                    .deleteAll()
                    .typeString("Rishav Dubey")

                    .start();
                }}
              />
            </h2>

            <p className="inner-desc" style={{ "text-align": "left" }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .pauseFor(2000)
                    .changeDelay(70)
                    .deleteAll()
                    .typeString(
                      'I\'m a final year engineering student. I love <strong style="color:#ECDBBA;">gaming</strong> and <strong style="color: #ECDBBA;">Coding stuff.</strong><br />and<br /></strong>I hate CSS more than my life.<br> <strong style="color: greenyellow; font-weight: lighter;">const  skills=</strong><strong style="color: #34dfb4; font-weight: lighter;">[\'Web Developer\',\'App Developer\']</strong>'
                    )

                    .start();
                }}
              />
            </p>
          </div>

          <div className="port-link" style={{'opacity':op}}>
            Want to know more about me?
            <a
              className="btn-link"
              href="https://reshavcodes.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="btn"
                
              > 
                Lets Go
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
