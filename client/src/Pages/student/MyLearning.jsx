// // import React from 'react';
// // import Course from './Course';

// // const MyLearning = () => {
// //   const isLoading = false; // Example static value; replace with dynamic state if needed
// //   const MyLearningCourse = [ ]; // Example: replace with your actual course data

// //   return (
// //     <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
// //       <h1 className="font-bold text-2xl">MY LEARNING</h1>
// //       <div className="my-5">
// //         {isLoading ? (
// //           <MyLearningSkeleton />
// //         ) : MyLearningCourse.length === 0 ? (
// //           <p>You are not enrolled in any courses</p>) : (

// //             <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
// //               {

// //                MyLearningCourse.map((course, index) => <Course key={index} course={course} />)
// //               }
// //             </div>
         

// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // const MyLearningSkeleton = () => {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //       {[...Array(1)].map((_, index) => (
// //         <div
// //           key={index}
// //           className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
// //         ></div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MyLearning;


// import React from "react";
// import Course from "./Course";
// import { useLoadUserQuery } from "@/features/api/authApi";

// const MyLearning = () => { 
//   const {data, isLoading} = useLoadUserQuery();

//   const myLearning = data?.user.enrolledCourses || [];
//   return (
//     <div className="max-w-4xl mx-auto my-10 px-4 md:px-0 mt-20">
//       <h1 className="font-bold text-2xl">MY LEARNING</h1>
//       <p className="">Courses you're enrolled in</p>
//       <div className="my-5">
//         {isLoading ? (
//           <MyLearningSkeleton />
//         ) : myLearning.length === 0 ? (
//           <h1 className="font-normal text-lg">Courses you're enrolled in</h1>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {myLearning.map((course, index) => (
//               <Course key={index} course={course}/>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyLearning;

// // Skeleton component for loading state
// const MyLearningSkeleton = () => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//     {[...Array(3)].map((_, index) => (
//       <div
//         key={index}
//         className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
//       ></div>
//     ))}
//   </div>
// );
import React from "react";
import Course from "./Course";
import { useLoadUserQuery } from "@/features/api/authApi";

const MyLearning = () => {
  const { data, isLoading } = useLoadUserQuery();

  const myLearning = data?.user.enrolledCourses || [];
  return (
    <div className="max-w-8xl mx-auto my-10 px-4 md:px-0 mt-16 h-screen bg-gray-50 dark:bg-[#020817] text-gray-800 dark:text-gray-200">
      <h1 className="font-bold text-2xl">MY LEARNING</h1>
      <p className="text-gray-700 dark:text-gray-400">
        Courses you're enrolled in
      </p>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearning.length === 0 ? (
          <h1 className="font-normal text-lg text-gray-800 dark:text-gray-200">
            You are not enrolled in any courses.
          </h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {myLearning.map((course, index) => (
              <Course key={index} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;

// Skeleton component for loading state
const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 dark:bg-gray-700 rounded-lg h-full animate-pulse"
      ></div>
    ))}
  </div>
);
