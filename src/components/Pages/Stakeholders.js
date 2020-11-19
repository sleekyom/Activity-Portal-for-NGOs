import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Stakeholders.css";

export default function Stakeholders() {
  return (
    <div className="container">
      <h1>Meet the Stakeholders</h1>
      <div className="stakeholders-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            height="350"
            rounded
            src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_1280.jpg"
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
            height="350"
            rounded
            src="https://cdn.pixabay.com/photo/2017/03/02/20/25/woman-2112292_1280.jpg"
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
            height="350"
            rounded
            src="https://cdn.pixabay.com/photo/2017/09/16/17/42/business-woman-2756210_1280.jpg"
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
            height="350"
            rounded
            src="https://cdn.pixabay.com/photo/2016/04/18/23/08/beautiful-1337737_1280.jpg"
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
            height="350"
            rounded
            src="https://cdn.pixabay.com/photo/2015/07/20/12/57/man-852766_1280.jpg"
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
            height="350"
            rounded
            src="https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_1280.jpg"
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
