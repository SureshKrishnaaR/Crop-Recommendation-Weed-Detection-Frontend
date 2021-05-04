import React from "react";
import { Stepper, Step, StepLabel, useMediaQuery } from "@material-ui/core";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import clsx from "clsx";
import StepConnector from "@material-ui/core/StepConnector";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import NatureIcon from "@material-ui/icons/Nature";
import LandscapeIcon from "@material-ui/icons/Landscape";
import EcoIcon from "@material-ui/icons/Eco";

const GuideMapView = ({ progress, approach }) => {
  const mediatheme2 = useTheme();
  const matchforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));
  const stepsapp1 = [
    "Choose Location",
    "Predict Crop",
    "Get NPK values",
    "Predict Fertilizer",
    "Choose Area",
    "Predict Crop Yield",
  ];
  const stepsapp2 = [
    "Choose Location",
    "Predict Crop",
    "Choose Area",
    "Predict Crop Yield",
  ];

  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      "& $line": {
        background: "#43a047",
      },
    },
    completed: {
      "& $line": {
        background: "#43a047",
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
    },
  })(StepConnector);

  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: "#ccc",
      zIndex: 1,
      color: "#fff",
      width: 50,
      height: 50,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      color: "white",
      background: "#43a047",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,0.25)",
      width: "60px",
      height: "60px",
      marginTop: "-5px",
    },
    completed: {
      color: "white",
      background: "#43a047",
    },
  });

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <PersonPinIcon />,
      2: <NaturePeopleIcon />,
      3: <EmojiNatureIcon />,
      4: <NatureIcon />,
      5: <LandscapeIcon />,
      6: <EcoIcon />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  function ColorlibStepIcon2(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <PersonPinIcon />,
      2: <NaturePeopleIcon />,
      3: <LandscapeIcon />,
      4: <EcoIcon />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
  };

  return (
    <>
      <Stepper
        activeStep={progress}
        alternativeLabel={matchforxl && true}
        orientation={matchforxl ? "horizontal" : "vertical"}
        connector={matchforxl ? <ColorlibConnector /> : <StepConnector />}
      >
        {approach === 1
          ? stepsapp1.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={matchforxl && ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))
          : stepsapp2.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={matchforxl && ColorlibStepIcon2}>
                  {label}
                </StepLabel>
              </Step>
            ))}
      </Stepper>
    </>
  );
};

export default GuideMapView;
