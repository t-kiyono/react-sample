import { useContext, useState } from "react";
import { RootContext } from "./Root";
import { useCounter } from "hooks/counter";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Container = styled.div<{color: string}>`
  margin: 3px;
  border: solid 3px ${({ color }) => color};
`

export function ComponentA() {
  const { rootState } = useContext(RootContext);

  return (
    <Container color="red">
      <p>ComponentA</p>
      <p>x = {rootState.x}</p>
      <ComponentB />
    </Container>
  );
}

export function ComponentB() {
  const rootCtx = useContext(RootContext);
  const [count, setCount] = useState(0);

  return (
    <Container color="blue">
      <p>ComponentB</p>
      <p>count = {count}</p>
      <p>root.y = {rootCtx.rootState.y}</p>
      <Button variant="primary" onClick={() => setCount(count + 1)}>components</Button>
      <Button variant="secondary" onClick={() => useCounter(rootCtx, 1)}>rootCtx</Button>
      <ComponentC />
    </Container>
  );
}

export function ComponentC() {

  return (
    <Container color="yellow">
      <p>ComponentC</p>
    </Container>
  );
}
