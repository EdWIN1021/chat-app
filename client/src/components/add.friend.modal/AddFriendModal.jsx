import React, { useState } from "react";
import { Button, Modal, Input } from "semantic-ui-react";
const AddFriendModal = () => {
  const [open, setOpen] = useState(false);
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
            fluid
            placeholder="Search users..."
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddFriendModal;
