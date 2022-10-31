import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  return (
    <ListGroup>
      <LinkContainer to="/learn-context">
        <ListGroup.Item action>
          LearnContext
        </ListGroup.Item>
      </LinkContainer>
      <LinkContainer to="/learn-query">
        <ListGroup.Item action>
          LearnQuery
        </ListGroup.Item>
      </LinkContainer>
    </ListGroup>
  )
}
