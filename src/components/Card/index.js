import React from "react";
import { CardColumns, Card } from "react-bootstrap";

function Boxes(props) {
  return (
    <CardColumns>

      <Card className="text-center">
        <Card.Body>
          <Card.Title>{props.heading1}</Card.Title>
          <Card.Text>
            <ul>
                <li>{props.child1}</li>
                <li>{props.child2}</li>
                <li>{props.child3}</li>
                
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{props.heading2}</Card.Title>
          <Card.Text>
            <ul>
                <li>{props.child4}</li>
                <li>{props.child5}</li>
                <li>{props.child6}</li>
                
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{props.heading3}</Card.Title>
          <Card.Text>
            <ul>
                <li>{props.child7}</li>
                <li>{props.child8}</li>
                <li>{props.child9}</li>
                
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    
    </CardColumns>
  );
}

export default Boxes;
