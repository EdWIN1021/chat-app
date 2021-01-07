import React, { useState } from "react";
import { Button, Modal, Input, Message } from "semantic-ui-react";
import { fireStore } from "../../firebase/config";
const AddFriendModal = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleOnClick = async (e) => {
    const friendRef = fireStore.collection("users").doc(searchId);
    const doc = await friendRef.get();

    if (!doc.exists) {
      setError("user does not exist");
    } else {
      const doc = await friendRef.collection("requests").add({
        id: user.uid,
        displayName: user.displayName,
      });

      setError("");
      setOpen(false);
    }
  };

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button primary>Add Friend</Button>}
    >
      <Modal.Header>Enter your friend ID</Modal.Header>
      <Modal.Content>
        {error !== "" ? (
          <Message negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        ) : null}

        <Modal.Description>
          <Input
            icon="users"
            iconPosition="left"
            placeholder="Search users..."
            onChange={handleOnChange}
            fluid
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleOnClick}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddFriendModal;
