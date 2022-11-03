let tanggal = new Date().getDate();
tanggal = tanggal.toString().length > 1 ? tanggal : "0" + tanggal;
let bulan = new Date().getMonth() + 1;
bulan = bulan.toString().length > 1 ? bulan : "0" + bulan;
let tahun = new Date().getFullYear();
const tanggalHariIni = `${tahun}-${bulan}-${tanggal}`;

export const initialInputState = {
  inputTransaksi: {
    tanggal: tanggalHariIni,
    keterangan: "",
    nominal: "",
  },
  errors: {
    tanggal: "",
    keterangan: "",
    nominal: "",
  },
};

// Membuat reducer untuk expense tracker
export const inputReducer = (state = initialInputState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Menambahkan case Update untuk manipulasi state
    case "input/UPDATE":
      return {
        ...state,
        inputTransaksi: { ...payload },
      };
    case "input/RESET":
      return {
        ...state,
        inputTransaksi: { ...initialInputState.inputTransaksi },
      };
    case "errors/UPDATE":
      return {
        ...state,
        errors: { ...payload },
      };
    default:
      return {
        ...state,
      };
  }
};
