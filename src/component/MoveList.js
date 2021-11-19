import React, { useState } from "react";
import styled from 'styled-components';
import DisplayMoves from './DisplayMoves';

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background: black;
  border: 1px solid #d8f8dd;
  outline: 0;
  ${({ active }) =>
    active &&
    `border: 4px solid gold; 
    `
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 1em;
  margin: 0 auto;
  min-width: 380px;
  width: 100%;
`;

function MoveList(props) {
  const data = props.data;
  const [active, setActive] = useState(data[0]);

  return (
    <div>
      <div className="button-container">
        <h1>
          {props.title}
          <div className="underline"></div>
        </h1>

        <ButtonGroup>
          {data.map(type => (
            <Button
              key={type.name}
              active={active === type}
              onClick={() => setActive(type)}
            >
              <img src={type.dpad} alt=""/>
            </Button>
          ))}
        </ButtonGroup>
      </div>
      {/* When a key changes, React will create a new component instance
          rather than update the current one. Thus, using the defaultIndex*/}
      <DisplayMoves {...active} key={active.id} defaultIndex={0}/>

    </div>
  );
}

export default MoveList;
