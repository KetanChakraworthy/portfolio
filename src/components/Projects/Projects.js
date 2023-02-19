import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memories from "../../Assets/Projects/memories.png";
import fightingGame from "../../Assets/Projects/fighting-game.png";
import ketflix from "../../Assets/Projects/ketflix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fightingGame}
              isBlog={false}
              title="Fighting Game using JS"
              description="It is 2 player fighting game made by using Vanilla Javascript. It uses HTML5 canvas to render the Sprites to animate all the movement of characters and background."
              ghLink="https://github.com/KetanChakraworthy/fighting-game"
              demoLink="https://fighting-game-javascript.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ketflix}
              isBlog={false}
              title="KetFlix"
              description="It's the Movie Web App which shows list of movies. It's made with ReactJS using The Movie Database API."
              ghLink="https://github.com/KetanChakraworthy/ketflix"
              demoLink="https://ketflix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories"
              description="It is a simple social media app that allows users to post interesting events that happened in their lives. It is build using MERN Stack ( MongoDB, Express, React, Node ) Which is a Javascript Stack."
              ghLink="https://github.com/KetanChakraworthy/Memories"
              demoLink="https://memories-app-mern-dev.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
