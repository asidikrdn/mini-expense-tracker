// Membuat action untuk menambahkan transaksi
export const addTransaction = (trx) => {
  return {
    type: "ADD",
    payload: trx,
  };
};

// Membuat action untuk menghapus transaksi
export const delTransaction = (trx) => {
  return {
    type: "DEL",
    payload: trx,
  };
};
