
//CODE FOR QUESTION NUMBER 4

/*
import React from "react";
import ReactFlow, { Handle } from "react-flow-renderer";

const MindMap = ({ data }) => {
  const nodes = [
    {
      id: "root",
      data: { label: "Users Data" },
      position: { x: 250, y: 70 }, // Adjusted y position to be higher
      type: "input",
    },
    ...data.map((user, index) => ({
      id: user.id.toString(),
      data: { label: `${user.name} (${user.email})` },
      position: { x: 200, y: 150 + index * 100 }, // Adjusted y position for users
    })),
  ];

  const edges = data.map((user) => ({
    id: `edge-${user.id}`,
    source: "root",
    target: user.id.toString(),
  }));

  return (
    <div className="flex h-screen w-full">
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
};


export default MindMap;
*/