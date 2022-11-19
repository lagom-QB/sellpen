import styled from "styled-components";

function NavigationBar() {
  // ------------------------------
  const NavigationContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-height: 10vh;
      min-width: 100vw;
      background-color: #f5f5f5;
    `,
    NavigationMenuItems = styled.ul`
      list-style-type: none;
    `,
    NavigationMenuItem = styled.li`
      display: inline;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
      cursor: pointer;
    `;

  // ------------------------------
  return (
    <NavigationContainer>
      <NavigationMenuItems>
        <NavigationMenuItem>Home</NavigationMenuItem>
        <NavigationMenuItem>Products</NavigationMenuItem>
        <NavigationMenuItem>Team</NavigationMenuItem>
      </NavigationMenuItems>
    </NavigationContainer>
  );
}

export default NavigationBar;
