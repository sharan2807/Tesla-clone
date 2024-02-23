import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back-guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop Now"
        rightBtnText=""
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
