const SaldoBox = (props) => {
  return (
    <section id="saldo-box">
      <div className="card card-body m-auto rounded-4 pb-0 px-0">
        <div className="d-block w-75 m-auto">
          <h5 className="text-start px-3 px-md-5">Saldo</h5>
          <h1 className="text-center">
            Rp {props.saldoBox.saldo.toLocaleString()}
          </h1>
        </div>
        <div className="d-flex flex-row justify-content-between mt-3">
          <div className="mini-saldo-in  bg-success p-2 text-light w-50">
            <p className="text-center my-0">Pemasukan</p>
            <p className="text-center">Rp {props.saldoBox.pemasukan.toLocaleString()}</p>
          </div>
          <div className="mini-saldo-out bg-danger p-2 text-light w-50">
            <p className="text-center my-0">Pengeluaran</p>
            <p className="text-center">Rp {props.saldoBox.pengeluaran.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaldoBox;
