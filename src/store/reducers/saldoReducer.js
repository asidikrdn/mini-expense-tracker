// Membuat nilai awal state
export const initialSaldoState = {
  saldo: 0,
  pemasukan: 0,
  pengeluaran: 0,
};

// Membuat reducer untuk expense tracker
export const saldoReducer = (state = initialSaldoState, action) => {
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
