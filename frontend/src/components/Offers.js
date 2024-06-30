export const Offers = () => {
  return (
    <div className=" flex flex-col sm:w-full w-96 items-center sm:justify-center sm:items-start">
      <div className="flex flex-col mb-4 mr-20 sm:mr-0 ">
        <h1 className=" text-2xl sm:text-4xl font-medium">Offers</h1>
        <p className=" text-gray-700 text-base sm:text-lg">
          Explore amazing offer and earn points.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 items-center justify-center">
        <div className="sm:w-72 w-[360px] h-80 flex flex-col border-2 rounded-xl">
          <div
            className="flex basis-2/3 h-full w-full bg-cover bg-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/DC6Pb77/pre-prepared-food-showcasing-ready-eat-delicious-meals-go.jpg')",
            }}
          ></div>
          <div className="flex basis-1/3 h-full w-full px-4 py-6 text-xl font-medium">
            Flat 30% on main course menu.
          </div>
        </div>
        <div className=" sm:w-72 w-[360px] h-80 flex flex-col border-2 rounded-xl">
          <div
            className="flex basis-2/3 h-full w-full bg-cover bg-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/0BJhB5r/blue-iced-cocktail-with-lemon-slice.jpg')",
            }}
          ></div>
          <div className="flex basis-1/3 h-full w-full px-4 py-6 text-xl font-medium">
            Flat 40% on cocktails and other beverages.
          </div>
        </div>
        <div className=" sm:w-72 w-[360px] h-80 flex flex-col border-2 rounded-xl">
          <div
            className="flex basis-2/3 h-full w-full bg-cover bg-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/GT2FFWm/beef-burger-served-with-french-fries-basket.jpg')",
            }}
          ></div>
          <div className="flex basis-1/3 h-full w-full px-4 py-6 text-xl font-medium">
            Get free fries with burgers.
          </div>
        </div>
        <div className=" sm:w-72 w-[360px] h-80 flex flex-col border-2 rounded-xl">
          <div
            className="flex basis-2/3 h-full w-full bg-cover bg-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/2cbCP1c/pizza-pizza-filled-with-tomatoes-salami-olives.jpg')",
            }}
          ></div>
          <div className="flex basis-1/3 h-full w-full px-4 py-6 text-xl font-medium">
            Get 1 + 1 on pizza.
          </div>
        </div>
      </div>
    </div>
  );
};
