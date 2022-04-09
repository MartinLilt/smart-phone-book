const ArrayCreator = value => {
  const pseudoArray = [];
  if (value > 0) {
    for (let i = 1; i < Number(value + 1); i += 1) {
      pseudoArray.push(i);
    }
    return pseudoArray;
  }
  return pseudoArray;
};

export default ArrayCreator;
