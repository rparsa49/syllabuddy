import React from "react";

const Search = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-semibold text-center mb-4 text-primary">
        Search
      </h1>

      <form>
        <div className="mb-10">
          <label
            className="block text-sm font-semibold text-text"
            for="courseName"
          >
            Course Name
          </label>
          <input
            className="input input-bordered input-accent w-full max-w-xs"
            placeholder="Human Condition 1"
            id="courseName"
            name="courseName"
          />
        </div>

        <div className="mb-4 flex justify-center">
          <button className="block btn btn-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

      //  <form>
      //    <div className="mb-10">
      //      <label
      //        className="block text-sm font-semibold text-text"
      //        for="courseName">
      //        Course Name
      //      </label>
      //      <input
      //        className="input input-bordered input-accent w-full max-w-xs "
      //        placeholder="Human Condition 1"
      //        id="courseName"
      //        name="courseName"
      //      />
      //    </div>

      //    <div className="mb-4 flex justify-center">
      //      <button
      //        className="block btn btn-secondary"
      //        type="submit">
      //        Search
      //      </button>

      //    </div>
      //  </form>

//    );
//  };


// export default Search;
