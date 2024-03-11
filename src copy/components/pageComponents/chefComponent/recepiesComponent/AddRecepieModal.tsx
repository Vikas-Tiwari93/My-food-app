

import React from "react";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import styled from "@emotion/styled";
type AddRecepieModalProps = {
  popupVisible: boolean;
  hideInfo: () => void;
};
const StyledModal=styled.div`


`
export default function AddRecepieModal({
  popupVisible, hideInfo
}: AddRecepieModalProps) {
  return (
  
    <StyledModal>
        <Dialog open={popupVisible} onClose={hideInfo}>
    <DialogTitle>
      <div style={{ display:"flex",
  justifyContent:"space-between"}}>
      Dialog Title <Button onClick={hideInfo} color="primary">
    <i className="dx-icon-close "
            ></i>
      </Button></div></DialogTitle>
    <DialogContent>
      <DialogContentText>
      <div style={{width:"500px"}}>i am vikas</div>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={hideInfo} color="primary">
        Submit
      </Button>
      <Button onClick={hideInfo} color="primary">
        Reset
      </Button>
      
    </DialogActions>
  </Dialog>
    </StyledModal>
   
  );
}
