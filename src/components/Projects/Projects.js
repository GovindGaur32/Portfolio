import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import images from '../../Assets/Projects/Pro';

const img1 = images.img1;
const img2 = images.img2;
const img3 = images.img3;

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
              imgPath={img2}
              isBlog={false}
              title="Snappy"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI,and socket.io,Express.js. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/GovindGaur32/Chat-App"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="Prescripto (hospital management system)"
              description="A hospital management system build with react.js, Material-UI, and Mongodb. Have features which allows user to book an appointment, view their appointment history, and also allows admin to view all the appointments and manage them."
              ghLink="https://github.com/GovindGaur32/prescripto-full-stack"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="Music app (spotify-clone)"
              description="A music app build with react.js, Material-UI, Express.js. Have features which allows user to search for songs, artists, albums, and playlists. User can also play the preview of the song and can also play the full song on Spotify."
              ghLink="https://github.com/GovindGaur32/Spotify-Clone"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
