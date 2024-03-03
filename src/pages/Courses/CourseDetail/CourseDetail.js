import React from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";

const CourseDetail = () => {
    const course = useLoaderData();
    const navigate = useNavigate();
    const { _id, title, price, img, details, rating } = course;

    const handleNavigate = () => {
    navigate(`/checkout/${_id}`);
  };
    return (
        <div className="w-9/12 mx-auto mt-20">
            <h2 className="text-4xl font-semibold mb-6 text-center">
                <span className="mr-3">{title}</span>
            </h2>
            <hr />
            <img className="mx-auto my-6 w-96" src={img} alt="" />
            <p>
                <span className="font-bold text-xl">Course Overview: </span> {details}
            </p>

            <p className="font-bold my-3">Rating: {rating}</p>
            <p className="font-bold mb-3">Price: ${price}</p>
            <button onClick={handleNavigate} className="btn glass     ">
                Get premium access
                
            </button>
    </div>
    );
};

export default CourseDetail;