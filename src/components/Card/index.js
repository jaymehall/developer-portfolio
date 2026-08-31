import React from "react";
import { CardColumns, Card } from "react-bootstrap";
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
                  <div>{props.child1}</div>
                  <div>{props.child2}</div>
                  <div>{props.child3}</div>
                  <div>{props.child4}</div>
                  <div>{props.child5}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
  );
}

export default Box;
