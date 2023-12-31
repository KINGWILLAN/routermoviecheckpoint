import React from "react";
import { Input, Select } from "antd";

const { Search } = Input;

const Filter = ({ memorizedMovies: { myMomorizedMovies }, setmyMovies }) => {
  //The method for filter by rating
  const filterByRate = (rate) => {
    let filteredMovies = myMomorizedMovies.filter(
      (item) => item.rating === Number(rate)
    );
    setmyMovies(filteredMovies);
  };

  //The method for filter by search
  const filterBySearch = (value) => {
    let filteredMovies = myMomorizedMovies.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase().trim())
    );
    setmyMovies(filteredMovies);
  };

  return (
    <div className="flex gap-4">
      <Search
        placeholder="Search for movie..."
        enterButton
        style={{
          width: 250,
        }}
        //   onSearch={onSearch}
      />

      {/* for filtering movies by rate */}
      <Select
        defaultValue="Filter by rate"
        style={{
          width: 150,
        }}
        // onChange={handleChange}
        options={[
          {
            value: "1",
            label: "1 ⭐",
          },
          {
            value: "2",
            label: "2 ⭐⭐",
          },
          {
            value: "3",
            label: "3 ⭐⭐⭐",
          },
          {
            value: "4",
            label: "4 ⭐⭐⭐⭐",
          },
          {
            value: "5",
            label: "5 ⭐⭐⭐⭐⭐",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
