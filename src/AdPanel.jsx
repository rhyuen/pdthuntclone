import React from "react";
import styled from "styled-components";

const Root = styled.aside`
  width: 30%;
  background: papayawhip;
  box-sizing: border-box;
  padding: 1vw;
`;
const AdPanel = () => {
  return (
    <Root>
      <div>
        On Item Click Overlay.
        <br />
        On Search Click Overlay.
        <br />
      </div>
      <section>
        <h1>News</h1>
      </section>
      <section>
        <h1>Email Card</h1>
      </section>
      <section>
        <h1>Jobs CArd</h1>
      </section>
      <section>
        <h1>Close Ad Card</h1>
      </section>
      <section>Footer</section>
    </Root>
  );
};

export default AdPanel;
