// Membuat nilai awal state
export const initialTrxState = {
  transaksi: [
    {
      id: "trx1",
      tipe: "in",
      tanggal: "1 Nov 2021",
      keterangan: "Gaji Bulanan",
      nominal: 8000000,
    },
    {
      id: "trx2",
      tipe: "in",
      tanggal: "23 Nov 2021",
      keterangan: "Uang Lembur",
      nominal: 2750000,
    },
    {
      id: "trx3",
      tipe: "out",
      tanggal: "24 Sep 2021",
      keterangan: "Beli Sepatu",
      nominal: -150000,
    },
    {
      id: "trx4",
      tipe: "out",
      tanggal: "15 Jan 2022",
      keterangan: "Beli Laptop",
      nominal: -9900000,
    },
    {
      id: "trx5",
      tipe: "out",
      tanggal: "25 Agu 2022",
      keterangan: "Beli Ebook React Uncover",
      nominal: -70000,
    },
  ],
};

// Membuat reducer untuk expense tracker
export const transactionReducer = (state = initialTrxState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Menambahkan case ADD untuk manipulasi state
    case "transaction/ADD":
      return {
        ...state,
        transaksi: [...state.transaksi, payload],
      };
    // Menambahkan case DEL untuk manipulasi state
    case "transaction/DEL":
      return {
        ...state,
        transaksi: state.transaksi.filter((trx) => trx.id !== payload),
      };
    default:
      return {
        ...state,
      };
  }
};
