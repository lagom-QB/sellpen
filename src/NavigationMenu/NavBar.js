import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  // ------------------------------
  const [hover, setHover] = useState(false);
  const NavigationContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      min-height: 5vh;
      min-width: 100vw;
      background-color: #f9a;
    `,
    NavigationMenuItems = styled.ul`
      list-style-type: none;
    `,
    NavigationMenuItem = styled.li`
      display: inline;
      font-size: 1.5rem;
      margin: 0.2rem 10rem;
      cursor: pointer;
      border-radius: 0.2%;
      box-shadow: 1px solid #aaa;
      color: hover? #fff: #f2f;
    `;

  // ------------------------------
  return (
    <NavigationContainer>
      <NavigationMenuItems>
        <Link to="#home">
          <NavigationMenuItem>Home</NavigationMenuItem>
        </Link>
        <NavigationMenuItem>Products</NavigationMenuItem>
      </NavigationMenuItems>
    </NavigationContainer>
  );
}

export default NavigationBar;
