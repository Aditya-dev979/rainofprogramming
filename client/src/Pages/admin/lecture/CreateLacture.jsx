import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateLectureMutation, useGetCourseLectureQuery } from '@/features/api/courseApi'
import { Loader2 } from 'lucide-react'
import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import Lecture from './Lecture'

const CreateLacture = () => {

    const [lectureTitle, setlectureTitle] = useState("");
    const params = useParams();
    const courseId = params.courseId
  
    const navigate = useNavigate();


    const [createLecture,{data , isLoading, error , isSuccess}] = useCreateLectureMutation();

    const {
      data: lectureData,
      isLoading: lectureLoading,
      isError: lectureError,
      refetch,
    } = useGetCourseLectureQuery(courseId);

     const createLactureHandler = async () => {
      await createLecture ({lectureTitle,courseId})
     }

     useEffect(() =>{

      if(isSuccess){
        refetch();
        toast.success(data.message);
      }

      if(error){
        toast.error(error.data.message)
      }

     },[isSuccess, error])


  return (
    <div className='flex-1 mx-10' >

    <div className='mb-4'>
        <h1 className='font-bold text-xl'> Lets add leacture, add some basic course deatil for your new lecture</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quibusdam.</p>
    </div>

    <div className='space-y-4'>
      <div>
        <Label>Title</Label>

        <Input
         type="text"
         value={lectureTitle}
         onChange={(e) => setlectureTitle(e.target.value)}
         placeholder="your Course Name"
        />

      </div>

      <div className='flex items-center gap-2'>
        <Button variant="outline" onClick={()=> navigate(`/admin/course/${courseId}`)}>Back to course</Button>
        <Button disaled={isLoading} onClick={createLactureHandler}> 
          {
            isLoading  ? (
              <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
              Plaese Waite
              </>
            ): "Create leacture"
          }
        </Button>
      </div>

      <div className="mt-10">
          {lectureLoading ? (
            <p>Loading lectures...</p>
          ) : lectureError ? (
            <p>Failed to load lectures.</p>
          ) : lectureData.lectures.length === 0 ? (
            <p>No lectures availabe</p>
          ) : (
            lectureData.lectures.map((lecture, index) => (
              <Lecture
                key={lecture._id}
                lecture={lecture}
                courseId={courseId}
                index={index}
              />
            ))
          )}
        </div>
    </div>
  

</div>
  )
}

export default CreateLacture
