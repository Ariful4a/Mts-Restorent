const AllUsers = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col text-center justify-center">
          {/* Cart Title */}
          <h2 className="text-amber-500 font-medium text-2xl">---How many---</h2>

          {/* Divider before text */}
          <div className="flex justify-center">
            <div className="divider divider-secondary w-[fit-content] min-w-[460px]"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-black">Manage All Users</h1>

          {/* Divider after text */}
          <div className="flex justify-center">
            <div className="divider divider-secondary w-[fit-content] min-w-[460px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
