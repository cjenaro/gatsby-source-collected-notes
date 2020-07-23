const axios = require("axios");
const POST_NODE_TYPE = `CollectedNote`;

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}, { notesOwner }) => {
  const { createNode } = actions;

  const result = await axios.get(`https://collectednotes.com/${notesOwner}.json`);
  if (result.status !== 200)
    throw new Error("Could not fetch notes from collected notes API");

  result.data.notes.forEach((note) =>
    createNode({
      ...note,
      id: createNodeId(`${POST_NODE_TYPE}-${note.id}`),
      internal: {
        type: POST_NODE_TYPE,
        contentDigest: createContentDigest(note),
      },
    })
  );

  return;
};
