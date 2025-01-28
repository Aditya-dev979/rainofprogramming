// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { useCreateCourseMutation } from '@/features/api/courseApi';
// import { Loader2 } from 'lucide-react';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';


// const AddCourse = () => {
//   const [ courseTitle, setCourseTitle ] = useState("");
//   const [ category, setCategory] = useState("");

//   const [createCourse , {data, isLoading, error, isSuccess}] = useCreateCourseMutation();


//   const navigate = useNavigate()

//   const getSlectedCategory = (value) =>{
//     setCategory(value)
//   }

//   const createCourseHandler = async () => {
//   await createCourse({ courseTitle, category})
//   };

//   // use effect displaying toast

//   useEffect(() =>{
//     if(isSuccess){
//       toast.success(data?.message || "Course created successfully")
//       navigate("/admin/course")
//     }

//   }, [isSuccess, error])

//   return (
//     <div className='flex-1 mx-10' >

//         <div className='mb-4'>
//             <h1 className='font-bold text-xl'> Lets add course, add some basic course deatil for your new course</h1>
          
//         </div>

//         <div className='space-y-4'>
//           <div>
//             <Label>Title</Label>
//             <Input
//              type="text"
//              value={courseTitle}
//              onChange={(e) => setCourseTitle(e.target.value)}
//              placeholder="your Course Name"
//             />

//           </div>
//           <div>
//             <Label>Category</Label>
//             <Select onValueChange={getSlectedCategory}>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a Category" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Category</SelectLabel>
//           <SelectItem value="Next JS">Next JS</SelectItem>
//           <SelectItem value="Data Science">Data Science</SelectItem>
//           <SelectItem value="Frontend Development">Frontend Development</SelectItem>
//           <SelectItem value="Fullstack Development">Fullstack Development</SelectItem>
//           <SelectItem value="Mean Stack development">Mean Stack development</SelectItem>
//           <SelectItem value="Python"> Python</SelectItem>
//           <SelectItem value="C/C++">C/C++ </SelectItem>
//           <SelectItem value="Docker">Docker</SelectItem>
//           <SelectItem value="MongoDb">MongoDb</SelectItem>
//           <SelectItem value="SQl">SQl</SelectItem>
//           <SelectItem value="Data Analytics">Data Analytics</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>

//           </div>

//           <div className='flex items-center gap-2'>
//             <Button variant="outline" onClick={()=> navigate("/admin/course")}>Back</Button>
//             <Button disabled={isLoading} onClick={createCourseHandler} >
//               {
//                 isLoading  ? (
//                   <>
//                   <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
//                   Plaese Waite
//                   </>
//                 ): "Create"
//               }
//             </Button>
//           </div>
//         </div>
      

//     </div>
//   )
// }

// export default AddCourse;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCreateCourseMutation } from '@/features/api/courseApi';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");

  const [createCourse, { data, isLoading, error, isSuccess }] = useCreateCourseMutation();
  const navigate = useNavigate();

  const getSelectedCategory = (value) => {
    setCategory(value);
  }

  const createCourseHandler = async () => {
    await createCourse({ courseTitle, category });
  };

  // useEffect displaying toast
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Course created successfully");
      navigate("/admin/course");
    }
  }, [isSuccess, error]);

  return (
    <div className="flex-1 mx-4 md:mx-10 mt-20 md:mt-0">

      <div className="mb-4">
        <h1 className="font-bold text-xl sm:text-2xl">Let's add a course, add some basic course details for your new course</h1>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Your Course Name"
            className="w-full sm:w-80"
          />
        </div>

        <div>
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-full sm:w-80">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Next JS">Next JS</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                <SelectItem value="Fullstack Development">Fullstack Development</SelectItem>
                <SelectItem value="Mean Stack Development">Mean Stack Development</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="C/C++">C/C++</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="MongoDb">MongoDb</SelectItem>
                <SelectItem value="SQL">SQL</SelectItem>
                <SelectItem value="Data Analytics">Data Analytics</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="outline" onClick={() => navigate("/admin/course")} className="w-full sm:w-auto">Back</Button>
          <Button disabled={isLoading} onClick={createCourseHandler} className="w-full sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please Wait
              </>
            ) : "Create"}
          </Button>
        </div>
      </div>

    </div>
  );
}

export default AddCourse;
