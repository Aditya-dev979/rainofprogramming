// // import BuyCourseButton from '@/components/BuyCourseButton';
// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Separator } from '@/components/ui/separator';
// // import { useGetCourseDetailWithStatusQuery } from '@/features/api/purchaseApi';
// // import { BadgeInfo } from 'lucide-react';
// // import React, { useState } from 'react';
// // import ReactPlayer from 'react-player';
// // import { useParams } from 'react-router-dom';

// // const CourseDetail = () => {
// //   const params = useParams();
// //   const courseId = params.courseId;
// //   // const navigate = navigate();
// //   const { data, isLoading, isError } =
// //     useGetCourseDetailWithStatusQuery(courseId);

// //   if (isLoading) return <h1>Loading...</h1>;
// //   if (isError) return <h>Failed to load course details</h>;

// //   const { course, purchased } = data;
// //   console.log(purchased);
  
// //   return (
// //     <div className="space-y-5">
// //       <div className="bg-[#2D2F31] text-white">
// //         <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
// //           <h1 className="font-bold text-2xl md:text-3xl">
// //            {course?.courseTitle}
// //           </h1>
// //           <p className="text-base md:text-lg">Course Sub-title</p>
// //           <p>
// //             Created By{" "}
// //             <span className="text-[#C0C4FC] underline italic">
// //           {course?.creator.name}
// //             </span>
// //           </p>
// //           <div className="flex items-center gap-2 text-sm">
// //             <BadgeInfo size={16} />
// //             <p>Last update {course?.createdAt.split("T")[0]} </p>
// //           </div>
// //           <p>Students enrolled: {course?.enrolledStudent.length}</p>
// //         </div>
// //       </div>
// //       <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
// //         <div className="w-full lg:w-1/2 space-y-5">
// //           <h1 className="font-bold text-xl md:text-2xl">Description</h1>
// //           <p className="text-sm" dangerouslySetInnerHTML={{__html:course.description}}/>
          
// //           <Card>
// //             <CardHeader>
// //               <CardTitle>Course Content</CardTitle>
// //               <CardDescription>4 lectures</CardDescription>
// //             </CardHeader>
// //             <CardContent className="space-y-3">
// //               {course.lectures.map((_, idx) => (
// //                 <div key={idx} className="flex items-center gap-3 text-sm">
// //                   <span>
// //                     {true ? <PlayCircle size={14} /> : <Lock size={14} />}
// //                   </span>
// //                   <p>{lecture.lectureTitle}</p>
// //                 </div>
// //               ))}
// //             </CardContent>
// //           </Card>
// //         </div>
// //         <div className="w-full lg:w-1/3">
// //           <Card>
// //             <CardContent className="p-4 flex flex-col">
// //               <div className="w-full aspect-video mb-4">
// //                 <ReactPlayer
// //                   width="100%"
// //                   height={"100%"}
// //                   url={course.lectures[0].videoUrl}
// //                   controls={true}
// //                 />
               
// //               </div>
// //               <h1>Lecture title</h1>
// //               <Separator className="my-2" />
// //               <h1 className="text-lg md:text-xl font-semibold">Course Price</h1>
// //             </CardContent>
// //             <CardFooter className="flex justify-center p-4">
// //               {purchased ? (
// //                 <Button  className="w-full">Continue Course</Button>
// //               ) : (
// //                 <BuyCourseButton courseId={courseId}/>
// //               )}
// //             </CardFooter>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseDetail;


// import BuyCourseButton from '@/components/BuyCourseButton';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { useGetCourseDetailWithStatusQuery } from '@/features/api/purchaseApi';
// import { BadgeInfo, PlayCircle, Lock } from 'lucide-react'; // Ensure proper icon imports
// import React from 'react';
// import ReactPlayer from 'react-player';
// import { useNavigate, useParams } from 'react-router-dom';

// const CourseDetail = () => {
//   const params = useParams();
//   const courseId = params.courseId;
//   const navigate = useNavigate();

//   const { data, isLoading, isError,  } = useGetCourseDetailWithStatusQuery(courseId);

//   // Loading and Error States
//   if (isLoading) return <h1>Loading...</h1>;
//   if (isError) return <h2>Failed to load course details</h2>;

//   const { course, purchased } = data || {};

//   const handleCountinueCourse = () =>{
//     if(purchased){
//       navigate(`/course-progress/${courseId}`)
//     }

//   }

//   // Safeguard null/undefined properties
//   if (!course) return <h2>Course details are not available.</h2>;

//   return (
//     <div className="space-y-5 mt-20">
//       {/* Course Header */}
//       <div className="bg-[#2D2F31] text-white">
//         <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
//           <h1 className="font-bold text-2xl md:text-3xl">{course?.courseTitle || "Untitled Course"}</h1>
//           <p className="text-base md:text-lg">{course?.subTitle || "No subtitle available"}</p>
//           <p>
//             Created By{" "}
//             <span className="text-[#C0C4FC] underline italic">
//               {course?.creator?.name || "Unknown Creator"}
//             </span>
//           </p>
//           <div className="flex items-center gap-2 text-sm">
//             <BadgeInfo size={16} />
//             <p>Last updated: {course?.createdAt?.split("T")[0] || "N/A"}</p>
//           </div>
//           <p>Students enrolled: {course?.enrolledStudent?.length || 0}</p>
//         </div>
//       </div>

//       {/* Course Content */}
//       <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
//         <div className="w-full lg:w-1/2 space-y-5">
//           <h1 className="font-bold text-xl md:text-2xl">Description</h1>
//           <p className="text-sm" dangerouslySetInnerHTML={{ __html: course.description || "No description available." }} />

//           <Card>
//             <CardHeader>
//               <CardTitle>Course Content</CardTitle>
//               <CardDescription>{course?.lectures?.length || 0} lectures</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               {course?.lectures?.map((lecture, idx) => (
//                 <div key={idx} className="flex items-center gap-3 text-sm">
//                   <span>{purchased ? <PlayCircle size={14} /> : <Lock size={14} />}</span>
//                   <p>{lecture?.lectureTitle || "Untitled Lecture"}</p>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>

//         {/* Course Purchase Section */}
//         <div className="w-full lg:w-1/3">
//           <Card>
//             <CardContent className="p-4 flex flex-col">
//               <div className="w-full aspect-video mb-4">
//                 <ReactPlayer
//                   width="100%"
//                   height="100%"
//                   url={course?.lectures?.[0]?.videoUrl || ""}
//                   controls={true}
//                 />
//               </div>
//               <h1>{course?.lectures?.[0]?.lectureTitle || "No Lecture Title"}</h1>
//               <Separator className="my-2" />
//               <h1 className="text-lg md:text-xl font-semibold">Course Price : {course.coursePrice}</h1>
//             </CardContent>
//             <CardFooter className="flex justify-center p-4">
//               {purchased ? (
//                 <button onClick={handleCountinueCourse} className="w-full bg-blue-500 text-white py-2 rounded-lg">
//                   Continue Course
//                 </button>
//               ) : (
//                 <BuyCourseButton courseId={courseId} />
//               )}
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;


import BuyCourseButton from '@/components/BuyCourseButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useGetCourseDetailWithStatusQuery } from '@/features/api/purchaseApi';
import { BadgeInfo, PlayCircle, Lock } from 'lucide-react';
import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetail = () => {
  const params = useParams();
  const courseId = params.courseId;
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetCourseDetailWithStatusQuery(courseId);

  // Loading and Error States
  if (isLoading) return <h1 className="text-gray-900 dark:text-gray-100">Loading...</h1>;
  if (isError) return <h2 className="text-red-500 dark:text-red-400">Failed to load course details</h2>;

  const { course, purchased } = data || {};

  const handleContinueCourse = () => {
    if (purchased) {
      navigate(`/course-progress/${courseId}`);
    }
  };

  // Safeguard null/undefined properties
  if (!course) return <h2 className="text-gray-900 dark:text-gray-100">Course details are not available.</h2>;

  return (
    <div className="space-y-5 mt-16 dark:bg-[#020817]">
      {/* Course Header */}
      <div className="bg-gray-800 dark:bg-[#020817] text-gray-300 dark:text-white border-b border-gray-700 dark:border-gray-600">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">{course?.courseTitle || 'Untitled Course'}</h1>
          <p className="text-base md:text-lg">{course?.subTitle || 'No subtitle available'}</p>
          <p>
            Created By{' '}
            <span className="text-blue-600 dark:text-blue-400 bold italic">
              {course?.creator?.name || 'Unknown Creator'}
            </span>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <BadgeInfo size={16} />
            <p>Last updated: {course?.createdAt?.split('T')[0] || 'N/A'}</p>
          </div>
          <p>Students enrolled: {course?.enrolledStudent?.length || 0}</p>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-200">Description</h1>
          <p
            className="text-sm text-gray-800 dark:text-gray-200"
            dangerouslySetInnerHTML={{
              __html: course.description || 'No description available.',
            }}
          />

          <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>{course?.lectures?.length || 0} lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {course?.lectures?.map((lecture, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span>{purchased ? <PlayCircle size={14} /> : <Lock size={14} />}</span>
                  <p>{lecture?.lectureTitle || 'Untitled Lecture'}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Course Purchase Section */}
        <div className="w-full lg:w-1/3">
          <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <CardContent className="p-4 flex flex-col">
              <div className="w-full aspect-video mb-4">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={course?.lectures?.[0]?.videoUrl || ''}
                  controls={true}
                />
              </div>
              <h1>{course?.lectures?.[0]?.lectureTitle || 'No Lecture Title'}</h1>
              <Separator className="my-2" />
              <h1 className="text-lg md:text-xl font-semibold">Course Price: {course?.coursePrice}</h1>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              {purchased ? (
                <button
                  onClick={handleContinueCourse}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
                >
                  Continue Course
                </button>
              ) : (
                <BuyCourseButton courseId={courseId} />
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
