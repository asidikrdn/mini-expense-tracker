import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SaldoBox from "./components/SaldoBox";
import Transaksi from "./components/Transaksi";
import TambahTransaksi from "./components/TambahTransaksi";
import { useSelector } from "react-redux";

const App = () => {
  const transaksi = useSelector((state) => state.expenseReducer.transaksi);

  const [saldo, setSaldo] = useState({
    saldo: 0,
    pemasukan: 0,
    pengeluaran: 0,
  });

  useEffect(() => {
    let totalPemasukan = transaksi
      .filter((el) => el.tipe === "in")
      .reduce((total, current) => total + current.nominal, 0);
    let totalPengeluaran = transaksi
      .filter((el) => el.tipe === "out")
      .reduce((total, current) => total + current.nominal, 0);

    let newSaldo = {
      saldo: totalPemasukan + totalPengeluaran,
      pemasukan: totalPemasukan,
      pengeluaran: totalPengeluaran,
    };
    // console.log(newSaldo);

    setSaldo(newSaldo);
  }, [transaksi]);

  return (
    <>
      <Header />
      <main>
        <SaldoBox saldoBox={saldo} />
        <Transaksi></Transaksi>
        <TambahTransaksi></TambahTransaksi>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
