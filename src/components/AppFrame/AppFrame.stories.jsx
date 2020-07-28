import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppFrame from "./AppFrame";

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi
      sapiente quia officia veritatis quidem odit molestias est! Veniam
      laudantium quia ut illo neque doloribus incidunt, dolorum ea fugit dolore.
    </AppFrame>
  </Router>
);

export default {
  title: "AppFrame",
  component: AppFrame,
};
