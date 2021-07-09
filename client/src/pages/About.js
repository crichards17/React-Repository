import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
        <h1>Cameron Richards</h1>
        <h2>Trained engineer, IT professional, aspiring full-stack developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Thanks for visiting. My name is Cameron, and I am a burgeoning full-stack developer looking to transition professionally into software development. I currently work as an enterprise software support engineer for a division of Salesforce, and I'm based out of the Seattle area. 
            </p>
            <p>
              My formal education and professional background are in Mechanical Engineering, having graduated with my BSME from the University of Washington and subsequently worked in the Aerospace industry as an engineer in multiple capacities. During school I took multiple computer science courses through the UW CSE department, and since then I have continued to audit UW CSE course material for my own continuing education.  
            </p>
            <p style={{marginBottom: '50px'}}>
              This past year, I made the decision to push for a career change to software development. I first ramped up my self-study, going through materials and activities from multiple foundational UW CSE courses and associated literature. I then entered the UW Full-Stack Development program, which is nearing completion. I'm looking forward to the projects and challenges I can take on moving forward. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
