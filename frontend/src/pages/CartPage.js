import CurrentOrder from "../components/CurrentOrder";

export const CartPage = () => {
  return (
    <div className=" px-6 sm:px-60 mt-5 sm:mt-10">
      <h1 className=" text-3xl font-medium">Your Cart</h1>
      <CurrentOrder />
    </div>
  );
};
