import React from "react";
import { Link } from "react-router-dom";

const CollegeList = () => {
  const colleges = [
    "University of Science and Technology",
    "Art and Design Institute",
    "Science and Technology University",
    "Business and Finance Academy",
    "Music Conservatory",
    "Science and Engineering Institute",
  ];

  return (
    <div className="flex justify-center items-center w-[40%] mx-auto h-screen">
      <div className="my-4 ">
        <h2 className="text-2xl font-bold">College Names</h2>
        <div className="divider mb-4"></div>
        <ul>
          {colleges.map((college, index) => (
            <li key={index} className="mb-2 font-semibold">
              {index + 1} ...
              <Link
                to={`/admission/${college}`}
                className="text-blue-500 hover:underline"
              >
                {college}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeList;