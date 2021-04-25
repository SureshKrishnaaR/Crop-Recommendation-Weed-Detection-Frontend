import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";

const PredictOutputView = ({ image, outputMatrix }) => {
  const canvas = useRef();
  let ctx = null;
  useEffect(() => {
    const canvasEle = canvas.current;
    ctx = canvasEle.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function () {
      ctx.drawImage(imageObj, 0, 0);
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;
      outputMatrix.map((output) => {
        ctx.rect(...output[0]);
      });
      ctx.stroke();
    };
    imageObj.src = image;
  }, []);
  return (
    <>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        style={{ height: "100%", overflow: "hidden" }}
      >
        <Grid item container xs={12} justify="center" alignItems="center">
          <canvas ref={canvas} width="500px" height="500px"></canvas>
        </Grid>
      </Grid>
    </>
  );
};
export default PredictOutputView;
