import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const UsersModal = ({ users, deleteUser }) => {
  const [open, setOpen] = useState(false);
  const [confOpen, setConfOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState({ id: null, name: "" });

  const handleDelete = (id, name) => {
    setUserToDelete({ id: id, name: name });
    setConfOpen(true);
  };

  const handleDeleteUser = () => {
    deleteUser(userToDelete.id);
    setUserToDelete({ id: null, name: "" });
    setConfOpen(false);
  };

  const handleCancel = () => {
    setConfOpen(false);
  };


  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleCancel}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Delete user from the company."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-title">
            {`Are you sure you would like to delete ${userToDelete.name} from the company list?`}
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteUser} color="primary">
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersModal;
