import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// Styles
import { Text, ModalContent } from "./HomeModal.styles";

// Gif
import Gif from "../../images/unnamed.gif"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    padding: "1rem 1rem",
    borderRadius: "8px 8px 0 0",
    backgroundColor: "#222",

  }
}));

export default function HomeModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

//   const handleOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContent>
            <div className={classes.modalHeader}>
              <Text>
                <span
                  className="material-icons"
                  onClick={handleClose}
                  BackdropComponent={Backdrop}
                  closeAfterTransition
                >
                  close
                </span>
               </Text>
                    
               <p>Website is under construction</p>
               <img src={Gif} alt="under-construction"/>
            </div>
          </ModalContent>
        </Fade>
      </Modal>
    </>
  );
}