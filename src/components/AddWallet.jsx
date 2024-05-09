import { useForm } from "react-hook-form";

const AddWallet = ({handleAddwallet =()=>{}}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    handleAddwallet(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Add wallet Name"
          className="h-10 w-2/3 outline-none bg-blue-50 rounded"
          {...register("walletName", {
            required: "Enter Wallet Name",
          })}
        />
        <input
          placeholder="Add wallet address"
          className="h-10 w-2/3 outline-none bg-blue-50 rounded mt-2"
          {...register("walletAddress", {
            required: "Enter Valid Wallet Address",
          })}
        />
          <button
          className="h-10 border rounded px-4 bg-blue-600 text-white cursor-pointer"
          onClick={async () =>
            setValue("walletAddress", await navigator.clipboard.readText())
          }
        >
          Paste
        </button>
        <button
          type="submit"
          className="h-10 border rounded px-4 bg-blue-600 text-white cursor-pointer"
        >Add Wallet</button>
      </form>
      {errors.walletAddress && (
        <p className=" text-red-700">{errors.walletAddress.message}</p>
      )}
    </div>
  );
};

export default AddWallet;
