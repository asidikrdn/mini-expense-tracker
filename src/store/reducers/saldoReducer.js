// Membuat nilai awal state
const initialState = {
  saldo: 0,
  pemasukan: 0,
  pengeluaran: 0,
};

// Membuat reducer untuk expense tracker
const saldoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Menambahkan case Update untuk manipulasi state
    case "saldo/UPDATE":
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default saldoReducer;
