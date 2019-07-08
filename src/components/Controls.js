import React from "react";

export default function Controls({ actions }) {
  return actions.map(action => (
    <button key={action.id} onClick={action.callback}>
      {action.id}
    </button>
  ));
}
