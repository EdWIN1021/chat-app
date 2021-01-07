import React, { useState } from "react";
import { Button, Modal, Input } from "semantic-ui-react";
import { fireStore } from "../../firebase/config";
const AddFriendModal = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [searchId, setSearchId] = useState("");

  const handleOnChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleOnClick = async (e) => {
    setOpen(false);
    console.log(user);
    const userRef = fireStore
      .collection("users")
      .doc(searchId)
      .collection("requests");
    const doc = await userRef.add({ id: "weewewew" });
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
