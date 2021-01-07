import React from "react";
import { Button, Menu, Header } from "semantic-ui-react";
import { fireStore } from "../../firebase/config";
const RequestItem = ({ friend, user }) => {
  const handleAccept = async () => {
    const userRef = fireStore.collection("users").doc(user.uid);
    const requestRef = userRef.collection("requests");
    const requestSnapshot = await requestRef.where("id", "==", friend.id).get();
    console.log(requestSnapshot.docs[0].id);
    const friendsRef = userRef.collection("friends");

    // requestSnapshot.forEach((doc) => {
    //   friendsRef.add(doc.data());
    // });

    //firend.id
    //从我的requests移到firends
    //删除request
    //firend.id 加到 friends
  };

  const handleDelete = () => {};

  return (
    <Menu key={friend.id}>
      <Menu.Item>
        <Header size="small">{friend.displayName}</Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button onClick={handleAccept} primary>
            Accept
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button onClick={handleDelete} primary>
            Delete
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default RequestItem;
