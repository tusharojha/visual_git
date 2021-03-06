import { Gitgraph } from "@gitgraph/react";
import { MapInteractionCSS } from "react-map-interaction";
import React, { useState } from "react";

const VisualTree = (props) => {
  const [state, setState] = useState({
    scale: 0.6,
    translation: {
      x: 0,
      y: 0,
    },
  });

  return (
    <div>
      <MapInteractionCSS
        value={state}
        onChange={(value) => setState(value)}
        showControls={true}
      >
        <Gitgraph
          children={(gitgraph) => {
            props.setGitGraph(gitgraph);
          }}
          options={{
            orientation: "horizontal",
          }}
        ></Gitgraph>
      </MapInteractionCSS>
    </div>
  );
};

export default VisualTree;
