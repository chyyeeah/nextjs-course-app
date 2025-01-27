const notes = new Array(21)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }));

module.exports = notes;