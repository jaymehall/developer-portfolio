import React from "react";
import { CardColumns, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Box(props) {
  return (
          <CardColumns>
            <Card className="text-center card">
              <Card.Body>
                <FontAwesomeIcon className="icon" icon={props.icon} />
                <Card.Title className="cardTitle">{props.heading}</Card.Title>
                <Card.Text>
                  <p>{props.child1}</p>
                  <p>{props.child2}</p>
                  <p>{props.child3}</p>
                  <p>{props.child4}</p>
                  <p>{props.child5}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
  );
}

export default Box;
