// Membuat action untuk mengupdate input
export const updateInput = (data) => {
  return {
    type: "input/UPDATE",
    payload: data,
  };
};

export const resetInput = () => {
  return {
    type: "input/RESET",
  };
};

// Membuat action untuk mengupdate errors
export const updateErrors = (data) => {
  return {
    type: "errors/UPDATE",
    payload: data,
  };
};
