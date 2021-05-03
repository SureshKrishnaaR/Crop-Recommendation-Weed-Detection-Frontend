import React from "react";
import GuideMapModalView from "./guideMapModal.view";

const GuideMapModal = ({
  openGuideMapModal,
  handleOpenGuideMapModal,
  handleCloseGuideMapModal,
  progress,
  approach,
}) => {
  return (
    <>
      <GuideMapModalView
        openGuideMapModal={openGuideMapModal}
        handleOpenGuideMapModal={handleOpenGuideMapModal}
        handleCloseGuideMapModal={handleCloseGuideMapModal}
        progress={progress}
        approach={approach}
      />
    </>
  );
};

export default GuideMapModal;
