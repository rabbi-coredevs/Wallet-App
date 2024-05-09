

const ShowWallet = ({ wallets }) => {
    return (
      <div>
        <h1 className="text-xl text-center text-emerald-700">Available Wallets</h1>
        {wallets.map((wallet, index) => {
          return (
            <div key={`${wallet.walletAddress}-${index}`} className="border p-2 rounded mb-1">
              <p>{wallet.walletName}</p>
              <p>{wallet.walletAddress}</p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ShowWallet;
  
