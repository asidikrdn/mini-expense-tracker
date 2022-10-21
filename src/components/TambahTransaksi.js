import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "../store/actions/transactionAction";
import {
  updateInput,
  resetInput,
  updateErrors,
} from "../store/actions/inputAction";

const TambahTransaksi = () => {
  const dispatch = useDispatch();
  // Mengambil nilai state transaksi
  const trx = useSelector((state) => state.transactionReducer.transaksi);
  const inputTransaksi = useSelector(
    (state) => state.inputReducer.inputTransaksi
  );
  const errors = useSelector((state) => state.inputReducer.errors);

  const handleInputChange = (e) => {
    dispatch(
      updateInput({ ...inputTransaksi, [e.target.name]: e.target.value })
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputTransaksi);

    let transaksi = { ...inputTransaksi };

    let pesanError = {
      tipe: "",
      tanggal: "",
      keterangan: "",
      nominal: "",
    };

    // Validasi tanggal
    if (transaksi.tanggal === "") {
      pesanError.tanggal = "Tanggal harus diisi !";
    } else {
      pesanError.tanggal = "";

      let hari = transaksi.tanggal.substr(-2, 2);
      let bulan = transaksi.tanggal.substr(5, 2);
      let tahun = transaksi.tanggal.substr(0, 4);

      switch (bulan) {
        default:
          bulan = "";
          break;
        case "01":
          bulan = "Jan";
          break;
        case "02":
          bulan = "Feb";
          break;
        case "03":
          bulan = "Mar";
          break;
        case "04":
          bulan = "Apr";
          break;
        case "05":
          bulan = "Mei";
          break;
        case "06":
          bulan = "Jun";
          break;
        case "07":
          bulan = "Jul";
          break;
        case "08":
          bulan = "Agu";
          break;
        case "09":
          bulan = "Sep";
          break;
        case "10":
          bulan = "Okt";
          break;
        case "11":
          bulan = "Nov";
          break;
        case "12":
          bulan = "Des";
          break;
      }

      // console.log(hari, bulan, tahun);
      let tanggal = `${hari} ${bulan} ${tahun}`;

      transaksi.tanggal = tanggal;
    }

    // Validasi keterangan
    transaksi.keterangan === ""
      ? (pesanError.keterangan = "Keterangan harus diisi !")
      : (pesanError.keterangan = "");

    // Validasi nominal
    if (transaksi.nominal === "") {
      pesanError.nominal = "Nominal harus diisi !";
    } else if (!/^-?\d*$/.test(transaksi.nominal)) {
      pesanError.nominal = "Hanya boleh bilangan positif atau negatif";
    } else {
      pesanError.nominal = "";
      transaksi.nominal = parseInt(transaksi.nominal);
    }

    transaksi.nominal > 0 ? (transaksi.tipe = "in") : (transaksi.tipe = "out");

    // console.log(pesanError);
    dispatch(updateErrors(pesanError));

    let formValidation = true;
    for (let errorName in pesanError) {
      pesanError[errorName] && (formValidation = false);
    }
    // console.log(formValidation);

    // Fungsi untuk menambahkan/membuat id
    const getNewId = (data, kodeId) => {
      // console.log(data);

      let lastId, newId;

      if (!kodeId) {
        // Jika format id langsung berbentuk angka
        data.length > 0 ? (lastId = data.slice(-1)[0].id) : (lastId = "0");
        newId = `${parseInt(lastId) + 1}`;
      } else {
        // Jika ada tambahan kode/huruf di depan angka
        data.length > 0
          ? (lastId = data.slice(-1)[0].id)
          : (lastId = `${kodeId}0`);
        newId = `${lastId.slice(0, kodeId.length)}${
          parseInt(lastId.slice(kodeId.length)) + 1
        }`;
      }

      // console.log(newId);
      return newId;
    };

    // Menambahkan id pada transaksi baru berdasarkan id terakhir dari state transaksi
    transaksi.id = getNewId(trx, "trx");

    if (formValidation) {
      // Menambahkan transaksi baru dengan event addTransaction dan menggunakan useDispatch Hook
      dispatch(addTransaction(transaksi));
      
      // Mereset inputForm
      dispatch(resetInput());
    }
  };

  // console.log(inputTransaksi);

  return (
    <section id="tambah-transaksi">
      <div className="container">
        <div className="row mx-3 mt-5">
          <div className="col">
            <h1 className="text-center">Tambah Transaksi</h1>
            <hr className="w-75 mx-auto" />
          </div>
        </div>
        <form method="POST" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-md-2">
              <label htmlFor="tanggal" className="d-block mb-1">
                Tanggal :
              </label>
              <input
                type="text"
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
                name="tanggal"
                id="tanggal"
                className={
                  errors.tanggal
                    ? "form-control is-invalid"
                    : "form-control mb-3"
                }
                value={inputTransaksi.tanggal}
                onChange={handleInputChange}
                placeholder="Masukkan tanggal..."
              />
              <small>{errors.tanggal}</small>
            </div>
            <div className="col-md-5">
              <label htmlFor="keterangan" className="d-block mb-1">
                Keterangan :
              </label>
              <input
                type="text"
                name="keterangan"
                id="keterangan"
                className={
                  errors.keterangan
                    ? "form-control is-invalid"
                    : "form-control mb-3"
                }
                value={inputTransaksi.keterangan}
                onChange={handleInputChange}
                placeholder="Masukkan keterangan..."
              />
              <small>{errors.keterangan}</small>
            </div>
            <div className="col-md-3">
              <label htmlFor="nominal" className="d-block mb-1">
                Nominal* (+/-)
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="nominal"
                id="nominal"
                className={
                  errors.nominal
                    ? "form-control is-invalid"
                    : "form-control mb-3"
                }
                value={inputTransaksi.nominal}
                onChange={handleInputChange}
                placeholder="Masukkan nominal..."
              />
              <small>{errors.nominal}</small>
            </div>
            <div className="col-md-2">
              <p className="d-md-block d-none mb-1 opacity-0">Tombol Tambah</p>
              <button type="submit" className="btn btn-primary w-100">
                Tambah
              </button>
            </div>
            <div className="col">
              * Jika diisi angka negatif, akan tercatat di pengeluaran
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TambahTransaksi;
