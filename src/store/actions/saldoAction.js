// Membuat action untuk mengupdate saldo
export const updateSaldo = (trx) => {
  return {
    type: "saldo/UPDATE",
    payload: trx,
  };
};
