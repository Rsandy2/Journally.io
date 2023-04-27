export const handleToggle = (state, current) => {
  console.log(current);
  state((current) => !current);
};

export const handleUpdate = (e, state) => {
  state(e.target.value);
};

export const handleWordCount = (e, state) => {
  const zero = e.length;
  const count = e.trim().split(" ").length;
  zero === 0 ? state(zero) : state(count);
};

// export const newHandleWordCount = (word, state) => {
//   const zero =
// }
