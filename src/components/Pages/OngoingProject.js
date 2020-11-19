import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OngoingProjects.css";

export default function OngoingProject() {
  return (
    <div>
      <div className="container ong-prj">
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
                src="https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg"
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
                src="https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg"
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
                src="https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg"
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
                src="https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg"
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
    </div>
  );
}
