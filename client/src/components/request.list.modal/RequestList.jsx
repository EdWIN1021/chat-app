import React, { useEffect, useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import RequestItem from "../request.item/RequestItem";
import { fireStore } from "../../firebase/config";
const RequestListModal = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const [numOfReq, setNumOfReq] = useState(0);
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    fireStore
      .collection("users")
      .doc(user.uid)
      .collection("requests")
      .get()
      .then((snapshot) => {
        setNumOfReq(snapshot.size);
        snapshot.forEach((doc) => {
          setRequestList((requestList) => [...requestList, doc.data()]);
        });
      });
  });

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button primary>
          <Icon name="mail" />
          {numOfReq}
        </Button>
      }
    >
      <Modal.Header>Requests</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          {requestList.map((friend) => (
            <RequestItem key={friend.id} friend={friend} user={user} />
          ))}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          ok <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default RequestListModal;
