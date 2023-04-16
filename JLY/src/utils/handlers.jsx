export const handleToggle = (state, current) => {
  console.log(current);
  state((current) => !current);
};

export const handleUpdate = (e, state) => {
  state(e.target.value);
};
