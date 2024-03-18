import styled from "@emotion/styled";
import { Box, Button, Modal, TextField } from "@mui/material";

type NoIngredientsProps = {

  isModalOpen: boolean;
  handleClose: () => void;

};
 const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
const StyledPreviewModal = styled.div`
 
`;
export default function StepsPreviewModal({
  isModalOpen,
  handleClose,
}: NoIngredientsProps) {

 
 

  return (
    <StyledPreviewModal>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="custom-modal"
      >
          <Box sx={style}>
        <div
          id="modal-paper"
        
        >
          <h2 id="modal-modal-title">Ingredient not found</h2>
    <div> Add this Ingredient and its details first before adding it to recepie </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClose()}
          >
           Close
          </Button>
        </div>
        </Box>
      </Modal>
    </StyledPreviewModal>
  );
}
