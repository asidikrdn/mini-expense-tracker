import Header from "./components/Header";
import Footer from "./components/Footer";
import SaldoBox from "./components/SaldoBox";
import Transaksi from "./components/Transaksi";
import TambahTransaksi from "./components/TambahTransaksi";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <SaldoBox />
        <Transaksi />
        <TambahTransaksi />
      </main>
      <Footer />
    </>
  );
};

export default App;
