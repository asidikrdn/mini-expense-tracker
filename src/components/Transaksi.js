import Pemasukan from "./Pemasukan";
import Pengeluaran from "./Pengeluaran";
import { useSelector, useDispatch } from "react-redux";
import { delTransaction } from "../store/actions/expenseAction";

const Transaksi = () => {
  // Mengambil state dari store dengan useSelector Hook
  const transaksi = useSelector((state) => state.expenseReducer.transaksi);

  const dispatch = useDispatch();

  return (
    <section id="transaksi">
      <div className="container-fluid p-0">
        <div className="row mx-3 mt-5">
          <div className="col-12 col-md-6  px-0 px-md-5">
            <h3 className="text-center">Pemasukan</h3>
            <hr className="w-75 mx-auto" />
            <div id="list-pemasukan">
              {transaksi.map((data) => {
                let trx;
                if (data.tipe === "in") {
                  trx = (
                    <Pemasukan
                      // Menghapus transaksi dengan event delTransaction dan menggunakan useDispatch Hook
                      hapusTransaksi={() => {
                        dispatch(delTransaction(data.id));
                      }}
                      key={data.id}
                      item={data}
                    />
                  );
                }
                return trx;
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 px-0 px-md-5">
            <h3 className="text-center">Pengeluaran</h3>
            <hr className="w-75 mx-auto" />
            <div id="list-pengeluaran">
              {transaksi.map((data) => {
                let trx;
                if (data.tipe === "out") {
                  trx = (
                    <Pengeluaran
                      // Menghapus transaksi dengan event delTransaction dan menggunakan useDispatch Hook
                      hapusTransaksi={() => {
                        dispatch(delTransaction(data.id));
                      }}
                      key={data.id}
                      item={data}
                    />
                  );
                }
                return trx;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaksi;
