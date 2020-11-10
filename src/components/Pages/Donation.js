import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./Donation.css";

export default function Donation() {
  return (
    <div className="donation container">
      <h1>Donation page</h1>
      <div className="projects-section">
        Here are some of our active projects needing funding at the moment and
        no amount is to small to donate toward the healthy living of this
        wonderful and amazinf souls. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Nisi corrupti quas dolore odit ullam, voluptas ab
        dolorem consequatur eum nostrum perferendis itaque culpa possimus at
        voluptatem, expedita magnam. Quos, aperiam?
        <div className="blogpost-row">
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                height="300"
                src="https://cdn.pixabay.com/photo/2015/03/16/18/37/surgery-676388_1280.jpg"
              />
              <Card.Body>
                <Card.Title>Heart Transplant</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                  praesentium!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="/post-1" className="nav-link">
                    Donate
                  </a>
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                height="300"
                src="https://cdn.pixabay.com/photo/2016/04/16/02/06/mosquito-1332382_1280.jpg"
              />
              <Card.Body>
                <Card.Title>2000 mosquito net for Araromi Community</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque, magnam!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="/post-1" className="nav-link">
                    Donate
                  </a>
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                height="300"
                src="https://5.imimg.com/data5/FC/YR/MY-36668675/below-knee-prosthetic-leg-500x500.jpg"
              />
              <Card.Body>
                <Card.Title>Prostectic Legs for Daniel Buchi</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis, dolorum?
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="/post-1" className="nav-link">
                    Donate
                  </a>
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                height="300"
                src="https://cdn.pixabay.com/photo/2015/07/30/14/36/hypertension-867855_1280.jpg"
              />
              <Card.Body>
                <Card.Title>Bone marrow surgery for Hannah Beans</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudiandae, eveniet.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href="/post-1" className="nav-link">
                    Donate
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
}
