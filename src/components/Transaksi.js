import Pemasukan from "./Pemasukan";
import Pengeluaran from "./Pengeluaran";

const Transaksi = (props) => {
  return (
    <section id="transaksi">
      <div className="container-fluid p-0">
        <div className="row mx-3 mt-5">
          <div className="col-12 col-md-6  px-0 px-md-5">
            <h3 className="text-center">Pemasukan</h3>
            <hr className="w-75 mx-auto" />
            <div id="list-pemasukan">
              {props.transaksi.map((data) => {
                let trx;
                if (data.tipe === "in") {
                  trx = (
                    <Pemasukan
                      hapusTransaksi={props.onHapusTransaksi}
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
              {props.transaksi.map((data) => {
                let trx;
                if (data.tipe === "out") {
                  trx = (
                    <Pengeluaran
                      hapusTransaksi={props.onHapusTransaksi}
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
