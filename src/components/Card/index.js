import React from "react";
import { CardColumns, Card } from "react-bootstrap";
import "./index.css";

function Boxes(props) {
  return (
    <CardColumns>
      <Card className="text-center card">
        <Card.Body>
          <Card.Title>{props.heading}</Card.Title>
          <Card.Text>
            <ul>
                <li>{props.child1}</li>
                <li>{props.child2}</li>
                <li>{props.child3}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

export default Boxes;
