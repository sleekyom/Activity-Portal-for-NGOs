import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./Blogpost.css";

export default function BlogPost() {
  return (
    <div className="container blogpost-section">
      <div className="blogpost-row">
        <CardDeck>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2020/09/02/18/03/girl-5539094_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                praesentium!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2014/12/15/17/18/home-office-569359_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, magnam!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, dolorum?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 4</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae, eveniet.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>

      <div className="blogpost-row">
        <CardDeck>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 5</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                maxime.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 6</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                error.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 7</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                error.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="zoom"
              variant="top"
              height="300"
              src="https://cdn.pixabay.com/photo/2015/07/11/23/02/plane-841441_1280.jpg"
            />
            <Card.Body>
              <Card.Title>Post 8</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                laborum!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <a href="/post-1" className="nav-link">
                  Read more
                </a>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}
