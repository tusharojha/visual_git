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
  console.log(props);
  return (
    <div>
      <MapInteractionCSS
        value={state}
        onChange={(value) => setState(value)}
        showControls={true}
      >
        <Gitgraph
          options={{
            orientation: "horizontal",
          }}
        >
          {(gitgraph) => {
            // Simulate git commands with Gitgraph API.
            const master = gitgraph.branch("master");
            master.commit("Initial commit");
            const develop = gitgraph.branch("develop");
            develop.commit("Add TypeScript");
            if (props.initalized) {
              const aFeature = gitgraph.branch("a-feature");
              aFeature
                .commit("Make it work")
                .commit("Make it right")
                .commit("Make it fast");
              develop.merge(aFeature);
            }
            develop.commit("Prepare v1");
            if (state.scale < 1) master.merge(develop).tag("v1.0.0");
          }}
        </Gitgraph>
      </MapInteractionCSS>
    </div>
  );
};

export default VisualTree;
