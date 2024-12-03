import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmAlertBox({ onDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    handleClose();
    onDelete();
  };
  return (
    <React.Fragment>
      <Button
        variant="text"
        sx={{ fontSize: "14px", textTransform: "capitalize", color: "red" }}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ fontSize: "16px" }} id="alert-dialog-title">
          Please confirm to delete
        </DialogTitle>
        <DialogActions>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="text"
            onClick={handleConfirm}
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
