import styled from "@emotion/styled";
import { Box, Button, Modal, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";
export type StepsElements = {
  step: string;
  details: string;
}[];
type StepsPreviewModalProps = {
  stepsElements: StepsElements;
  isModalOpen: boolean;
  handleStepsPreviewModalClose: () => void;
  handleUpdateChangeSteps: (newStepsArray: StepsElements) => void;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const StyledPreviewModal = styled.div`

`;
export default function StepsPreviewModal({
  stepsElements,
  isModalOpen,
  handleUpdateChangeSteps,
  handleStepsPreviewModalClose,
}: StepsPreviewModalProps) {
  const [stepElemenets, setStepElemenets] = useState(stepsElements);

  useEffect(() => {
    setStepElemenets(stepsElements);
  }, [stepsElements]);
  const handlePreviewChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    console.log(e.target.value);
    const newArray = [...stepElemenets];
    const newObj = { ...newArray[index] };
    newObj.details = e.target.value;
    newArray[index] = newObj;
    setStepElemenets(newArray);
  };
  const handleResetModal = () => {
    const resetStepElemenets = stepElemenets.map((elm) => {
      const newElmObj = { ...elm };
      newElmObj.details = "";
      return newElmObj;
    });
    setStepElemenets(resetStepElemenets);
  };
  const handleDeleteStep = (index: number) => {
    const resetStepElemenets = stepElemenets.filter((elm, i) => {
      if (i !== index) {
        const newElmObj = { ...elm };
        return newElmObj;
      }
    });
    setStepElemenets(resetStepElemenets);
  };
  return (
    <StyledPreviewModal>
      <Modal
        open={isModalOpen}
      
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="custom-modal"
      >
        <Box sx={style}>
          <div id="modal-paper">
            <h2 id="modal-modal-title" className="my-class">
              Modal Form
            </h2>
            {stepElemenets.map((elm, index) => (
              <ul key={index}>
                <span>Step {elm.step} :</span>
                <TextField
                  multiline
                  rows={3}
                  id="modal-modal-description"
                  name="name"
                  label={`Step ${index}`}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={elm.details}
                  onChange={(e) => handlePreviewChange(e, index)}
                />
                <Button
                sx={{height:"40px",display:"flex",gap:"10px"}}
                  variant="text"
                  color="primary"
                  onClick={() => handleDeleteStep(index)}
                >
                  Delete step {index} <i className="dx-icon-trash delete-step" style={{fontSize:"15px"}}></i>
                </Button>
              </ul>
            ))}

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleUpdateChangeSteps(stepElemenets)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleResetModal()}
            >
              Reset
            </Button>
          </div>
        </Box>
      </Modal>
    </StyledPreviewModal>
  );
}
