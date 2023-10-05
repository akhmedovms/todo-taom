import React from "react";

function CreateInput() {
  return (
    <div className=" flex justify-center">
      <div className="bg-base-100  shadow-xl w-96 flex justify-center">
        <form action="">
          <div className="form-control w-screen max-w-xs gap-4 py-10">
            <h2 className="text-center font-semibold text-2xl">MENU </h2>
            <label>
              Title
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label>
              Indgredients
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label>
              Method
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label>
              CookingTime
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label>
              Image
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <div className="text-end pt-5">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateInput;
