import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SaldoBox from "./components/SaldoBox";
import Transaksi from "./components/Transaksi";
import TambahTransaksi from "./components/TambahTransaksi";

const arrTransaksi = [
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
  // {
  //   id: "trx5",
  //   tipe: "out",
  //   tanggal: "25 Agu 2022",
  //   keterangan: "Beli Ebook React Uncover",
  //   nominal: -70000,
  // },
];

const App = () => {
  const [saldo, setSaldo] = useState({
    saldo: 0,
    pemasukan: 0,
    pengeluaran: 0,
  });
  const [transaksi, setTransaksi] = useState(arrTransaksi);

  useEffect(() => {
    let totalPemasukan = 0;
    let totalPengeluaran = 0;

    transaksi.forEach((trx) => {
      if (trx.tipe === "in") {
        totalPemasukan += trx.nominal;
      } else if (trx.tipe === "out") {
        totalPengeluaran += trx.nominal;
      }
    });

    let newSaldo = {
      saldo: totalPemasukan + totalPengeluaran,
      pemasukan: totalPemasukan,
      pengeluaran: totalPengeluaran,
    };
    // console.log(newSaldo);

    setSaldo(newSaldo);
  }, [transaksi]);

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

  const handleTambahTransaksi = (data) => {
    // console.log(data);
    // let id = new Date().getTime().toString();

    setTransaksi((prevState) => {
      return [...prevState, { ...data, id: getNewId(transaksi, "trx") }];
    });
  };

  const handleHapusTransaksi = (id) => {
    // console.log(id);

    let newTransaksi = [...transaksi];
    newTransaksi = newTransaksi.filter((trx) => trx.id !== id);
    setTransaksi(newTransaksi);
  };

  return (
    <>
      <Header />
      <main>
        <SaldoBox saldoBox={saldo} />
        <Transaksi
          onHapusTransaksi={handleHapusTransaksi}
          transaksi={transaksi}
        ></Transaksi>
        <TambahTransaksi
          onTambahTransaksi={handleTambahTransaksi}
        ></TambahTransaksi>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
