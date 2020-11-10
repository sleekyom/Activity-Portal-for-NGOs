import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Stakeholders.css";

export default function Stakeholders() {
  return (
    <div className="container">
      <div className="stakeholders-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            rounded
            src="https://cdn.pixabay.com/photo/2018/03/02/10/03/wildlife-3192772_1280.jpg"
          />
          <Card.Body>
            <Card.Title>John Joe</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Button variant="dark">Profile</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            rounded
            src="https://cdn.pixabay.com/photo/2018/03/02/10/03/wildlife-3192772_1280.jpg"
          />
          <Card.Body>
            <Card.Title>Albert Lius</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Button variant="dark">Profile</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            rounded
            src="https://cdn.pixabay.com/photo/2018/03/02/10/03/wildlife-3192772_1280.jpg"
          />
          <Card.Body>
            <Card.Title>Musa Gbadamosi</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Button variant="dark">Profile</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="stakeholders-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            rounded
            src="https://cdn.pixabay.com/photo/2018/03/02/10/03/wildlife-3192772_1280.jpg"
          />
          <Card.Body>
            <Card.Title>Bruce Wayne</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Button variant="dark">Profile</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            rounded
            src="https://cdn.pixabay.com/photo/2018/03/02/10/03/wildlife-3192772_1280.jpg"
          />
          <Card.Body>
            <Card.Title>Magus Teeth</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Button variant="dark">Profile</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            rounded
            src="https://cdn.pixabay.com/photo/2018/03/02/10/03/wildlife-3192772_1280.jpg"
          />
          <Card.Body>
            <Card.Title>Wasiu Ayinde</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <Button variant="dark">Profile</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
