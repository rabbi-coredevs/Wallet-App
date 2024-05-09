import { useEffect, useState } from "react";
import "./App.css";
import { getApiCall, postApiCall } from "./utils/apiCaller";
import AddWallet from "./components/AddWallet";
import ShowWallet from "./components/ShowWallet";
import ShowTranx from "./components/ShowTranx";
import Pagination from "./components/Pagination";

function App() {
  const [wallets, setWallets] = useState([]);
  const [tranx, setTranx] = useState([]);
  const [rawData,setRawData] = useState({});

  const handleAddwallet = (data) => {
    postApiCall("/wallet", data).then((response) => {
      if (response.success) {
        console.log(response.data);
        setWallets([...wallets, response.data]);
      } else {
        console.log(response);
      }
    });
  };

  //get all wallets
  useEffect(() => {
    getApiCall("/wallet")
      .then((response) => {
        setWallets(response?.data?.docs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to handle showing all transactions
  const handleShowAllTrans = (walletAddress) => {
    const apiUrl = walletAddress  ? `/transactions?walletAddress=${walletAddress}`  : "/transactions";
    getApiCall(apiUrl).then((response) => {
      if (response.success) {
        setRawData(response.data);
        setTranx(response?.data?.docs);
      } else {
        console.log(response);
      }
    });
  };

 //handle Pagination
const handlePagination = (page) => {
  const apiUrl = `/transactions?page=${page}`;
  getApiCall(apiUrl).then((response) => {
    if (response.success) {
      console.log(response.data);
      setTranx(response?.data?.docs);
      setRawData(response.data);
    } else {
      console.log(response);
    }
  });
};


  return (
    <>
      <h1 className="text-blue-500 text-center text-2xl font-bold">
        This is Wallet App
      </h1>
      <div className="p-6 flex gap-2">
        <AddWallet handleAddwallet={handleAddwallet} />
        <ShowWallet wallets={wallets} />
        <ShowTranx tranx={tranx} handleShowAllTrans={handleShowAllTrans} />
      </div>
     {
      Object.keys(rawData).length > 0  &&
      <Pagination data = {rawData} handlePagination={handlePagination}/>
     }

    </>
  );
}

export default App;