import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className="grid lg:grid-cols-12 mt-10 text-slate-200 gap-5 w-10/12 mx-auto mt-10">
            <div className=" lg:col-span-3 bg-base-300 shadow-xl rounded-lg  min-h-fit p-4">
                {courses.map((course) => (
                <p key={course._id} className=" mt-3 px-4 py-3 rounded-lg hover:underline text-black">
                    <Link to={`/course/${course._id}`}>{course.title}</Link>
                </p>
                ))}
                
            </div>
             
            <div className="lg:col-span-9 rounded-lg grid lg:grid-cols-2 gap-x-3 gap-y-8">
                {courses.map((course) => (
                <Course key={course._id} course={course}></Course>
                ))}
            
            </div>
          
    </div>
    );
};

export default Courses;