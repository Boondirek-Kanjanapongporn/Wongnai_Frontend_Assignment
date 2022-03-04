import React, { Fragment } from "react";
import './imageModal.css'

const CreateImageModal = ({ img, close }) => {
  return (
    <Fragment>
      <div className="modal">
          <img className="modal-image" src={img} alt="รูปภาพModal"/>
        <div className="modal-overlay" onClick={close}></div>
      </div>
    </Fragment>
  );
};
export default CreateImageModal;
