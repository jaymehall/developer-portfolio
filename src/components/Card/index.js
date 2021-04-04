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
                <p>{props.child1}</p>
                <p>{props.child2}</p>
                <p>{props.child3}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

export default Boxes;
