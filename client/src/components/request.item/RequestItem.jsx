import React, { useState } from "react";
import { Button, Menu, Header, Icon } from "semantic-ui-react";
import { fireStore } from "../../firebase/config";
const RequestItem = ({ friend, user }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = async () => {
    const userRef = fireStore.collection("users").doc(user.uid);
    const friendRef = fireStore.collection("users").doc(friend.id);

    const userRequests = userRef.collection("requests");
    const userFriends = userRef.collection("friends");
    const addMe = friendRef.collection("friends");
    const requestSnapshot = await userRequests
      .where("id", "==", friend.id)
      .get();
    addMe.add({ id: user.uid, displayName: user.displayName });
    userFriends.add(requestSnapshot.docs[0].data());
    userRequests.doc(requestSnapshot.docs[0].id).delete();
    setAccepted(true);
  };

  const handleDelete = () => {};

  return (
    <Menu key={friend.id}>
      <Menu.Item>
        <Header size="small">{friend.displayName}</Header>
      </Menu.Item>

      {accepted ? (
        <Menu.Item>
          <Icon name="check circle" />
        </Menu.Item>
      ) : null}
      <Menu.Menu position="right">
        {accepted ? null : (
          <>
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
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default RequestItem;
