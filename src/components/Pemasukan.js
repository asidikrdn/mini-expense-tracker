const Pemasukan = (props) => {
  const handleHapusTransaksi = (e) => {
    props.hapusTransaksi(e.target.id, e.target.getAttribute("name"));
  };

  return (
    <div className="card card-body d-flex flex-row flex-wrap justify-content-between my-2 position-relative">
      <h5 className="d-inline-block mt-md-1 mb-0">{props.item.keterangan}</h5>
      <h5 className="d-inline-block mt-md-1 mb-0  pe-1 pe-md-0 text-end text-success">
        Rp {props.item.nominal.toLocaleString()}
      </h5>
      <p className="d-block w-100 mt-2 mt-md-0 opacity-75">{props.item.tanggal}</p>
      <span
        id={props.item.id}
        className="position-absolute top-0 end-0 px-md-2 px-1 text-danger fw-bold rounded"
        onClick={handleHapusTransaksi}
      >
        x
      </span>
    </div>
  );
};

export default Pemasukan;
