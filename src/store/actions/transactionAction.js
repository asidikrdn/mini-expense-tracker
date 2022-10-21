// Membuat action untuk menambahkan transaksi
export const addTransaction = (trx) => {
  return {
    type: "transaction/ADD",
    payload: trx,
  };
};

// Membuat action untuk menghapus transaksi
export const delTransaction = (trx) => {
  return {
    type: "transaction/DEL",
    payload: trx,
  };
};
