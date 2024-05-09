import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Pagination from "./Pagination";

const ShowTranx = ({ tranx= [], handleShowAllTrans =()=>{}}) => {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    handleShowAllTrans(data.walletAddress);
  };

  const handleCustomSearch = () => {
    formRef.current.classList.toggle("hidden");
  };

  return (
    <div>
      <h1 className="text-xl text-center text-emerald-700"> All the Transactions</h1>
      <button
        className="h-10 border rounded px-4 bg-blue-600 text-white cursor-pointer"
        onClick={()=>handleShowAllTrans()}
      >
        All Transactions
      </button>
      <button
        className="h-10 border rounded px-4 bg-blue-600 text-white cursor-pointer"
        onClick={handleCustomSearch}
      >
        Custom Search
      </button>

      <form onSubmit={handleSubmit(onSubmit)} ref={formRef} className="hidden">
        <input
          placeholder="Add wallet address"
          className="h-10 w-2/3 outline-none bg-blue-50 rounded mt-2"
          {...register("walletAddress", {
            required: "Enter Valid Wallet Address",
          })}
        />
        <button
          type="submit"
          className="h-10 border rounded px-4 bg-blue-600 text-white cursor-pointer"
        >
          Search
        </button>
      </form>

      <div className="">
        {tranx.length>0 &&
          tranx.map((tran, index) => {
            return (
              <div
                key={`${tran.walletAddress}-${index}`}
                className="border p-2 rounded mb-1 bg-blue-300"
              >
                <p>TranxHash: {tran.transactionHash}</p>
                <p>Token: {tran.token.tokenName}</p>
                <p>Token Symbol : {tran.token.tokenSymbol}</p>
                <p>Wallet Name : {tran.wallet.walletName}</p>
                <p>Wallet Address : {tran.wallet.walletAddress}</p>
                <p>Type: {tran.transactionType}</p>
                <p>ID: {tran.id}</p>
              </div>
            )
          })}
      </div>
      {/* <Pagination data = {rawData} handlePagination={handlePaignation}/> */}

     
    </div>
  );
};

export default ShowTranx;
