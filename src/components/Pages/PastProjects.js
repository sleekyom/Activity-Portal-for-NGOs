import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PastProject.css";
import { Link } from "react-router-dom";

export default function PastProjects() {
  return (
    <div className="container">
      <div className="project-row">
        <div className="project-description">
          <div className="project-title">
            <h3>Project 1</h3>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo
          perspiciatis itaque, modi placeat repudiandae in possimus accusamus
          excepturi fuga!
        </div>
        <div className="project-card">
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2020/09/06/20/21/cat-5550033_1280.jpg"
            />
            <Card.Body>
              <Button variant="dark">
                <Link to="/">Read more</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <hr />

      <div className="project-row">
        <div className="project-card">
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2020/09/06/20/21/cat-5550033_1280.jpg"
            />
            <Card.Body>
              <Button variant="dark">
                <Link to="/">Read more</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="project-description">
          <div className="project-title">
            <h3>Project 2</h3>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo
          perspiciatis itaque, modi placeat repudiandae in possimus accusamus
          excepturi fuga!
        </div>
      </div>

      <hr />

      <div className="project-row">
        <div className="project-description">
          <div className="project-title">
            <h3>Project 3</h3>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo
          perspiciatis itaque, modi placeat repudiandae in possimus accusamus
          excepturi fuga!
        </div>
        <div className="project-card">
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2020/09/06/20/21/cat-5550033_1280.jpg"
            />
            <Card.Body>
              <Button variant="dark">
                <Link to="/">Read more</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <hr />

      <div className="project-row">
        <div className="project-card">
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2020/09/06/20/21/cat-5550033_1280.jpg"
            />
            <Card.Body>
              <Button variant="dark">
                <Link to="/">Read more</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="project-description">
          <div className="project-title">
            <h3>Project 4</h3>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo
          perspiciatis itaque, modi placeat repudiandae in possimus accusamus
          excepturi fuga!
        </div>
      </div>
    </div>
  );
}
