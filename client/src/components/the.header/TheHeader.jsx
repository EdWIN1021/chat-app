import React from "react";
import { Segment, Menu, Header } from "semantic-ui-react";
export const TheHeader = ({ currentUser }) => {
  return (
    <Menu color="blue" inverted secondary>
      <Menu.Item>
        <Header as="h2" inverted textAlign="center">
          eMessage
        </Header>
      </Menu.Item>
      {/* <Menu.Menu position="right">
          <Menu.Item>Hello, </Menu.Item>
          <Menu.Item name="logout" />
        </Menu.Menu> */}
    </Menu>
  );
};

export default TheHeader;
