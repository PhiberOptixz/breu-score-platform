import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";

const ConfirmationDialog = ({
  title,
  isOpen,
  setIsOpen,
  content,
  handleSubmit,
}) => {
  return (
    <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
      <DialogTitle>
        {" "}
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{content?.mainContent}</Typography>
        <Typography variant="subtitle2">{content?.subContent || ""}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => setIsOpen(false)}>
          No
        </Button>
        <Button
          variant="contained"
          onClick={() => handleSubmit()}
          color="error"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
