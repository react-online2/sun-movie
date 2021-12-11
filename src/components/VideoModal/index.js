import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Componets
import VideoTrailer from '../VideoTrailer';
// Styles
import { Text, ModalContent } from "./VideModal.styled.js"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    padding: "1rem 1rem",
    borderRadius: "8px 8px 0 0",
    backgroundColor: "#000",

  }
}));

export default function VideoModal({ playOpen, videoTrailer, movieTitle, playClose, youtubeId=null}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (playOpen === true) {
      setOpen(true);
      playClose(true);
    }
  }, [playOpen, playClose]);

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
                <span>{movieTitle}</span>
                <span
                  className="material-icons"
                  onClick={handleClose}
                  BackdropComponent={Backdrop}
                  closeAfterTransition
                >
                  close
                </span>
              </Text>
            </div>
            <VideoTrailer videoTrailer={videoTrailer} embedId={youtubeId} />
          </ModalContent>
        </Fade>
      </Modal>
    </>
  );
}

VideoModal.propTypes = {
  movieTitle: PropTypes.string,
  videoTrailer: PropTypes.object,
};
