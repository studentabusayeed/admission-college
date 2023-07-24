import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ item }) => {
    const stars = Array.from({ length: item.number }).fill(null);

    return (
        <div className="mb-4">
            <div className="testimonial-section bg-white rounded p-4 shadow-md border-4 border-[#6fb9b9]">
                <p className="text-lg text-gray-800 mb-2">{item.textarea}</p>
                <h4 className="text-gray-800 font-semibold mb-2">College Name: {item.collegeName}</h4>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={item.img}
                            alt="User"
                            className="h-16 w-16 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-xl text-gray-800 mb-2">
                                {item.candidateName}
                            </h4>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-yellow-500">
                                    Rating:
                                </p>
                                {stars.map((_, index) => (
                                    <FaStar key={index} className="text-yellow-400 ml-1" />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Add any other content or actions for testimonials */}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;