import Image from 'next/image'
import { useRouter } from 'next/navigation'
import verified from '../../assets/verified.png'
import Link from 'next/link'
import { BorderBeam } from '@/components/ui/border-beam'
import { Card } from '@/components/ui/card'

const extraData =
[
    {
        id:1,
        description: '32 recorded lectures'
    },
    {
        id:2,
        description: '10+ mock tests'
    },
    {
        id:3,
        description: 'Exclusive study guides'
    },
    {
        id:4,
        description: 'Lifetime access to forum'
    },

]

const CourseCard = ({level, course}) =>
{

    return(
        <Link href={level === 'admin' ? `/admin/courses/${course.id}` : `/courses/${course.id}`} className='relative bg-white rounded shadow-xl text-sm md:text-base p-4'>
            <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center justify-center h-48 rounded relative'>
                <Image className='h-[100%] w-full rounded object-cover' src={course.imageURL} alt={course.id} layout='fill'/>
            </div>
            {/* {level !== 'admin' && <BorderBeam colorFrom='var(--primary-color)' colorTo='var(--action-color)' className='rounded-xl'/>} */}
            
            <p className='md:text-base text-sm font-semibold' >{course.title}</p> 
            
            {/* <p className='md:text-3xl text-2xl text-center w-full font-bold'>${course.price}</p> */}
            {level !== 'admin' && 
            <div className='flex flex-col gap-2'>
            
                {extraData.map((data)=>
                (
                    <div key={data.id} className='flex gap-2 items-center text-sm'>
                        <Image className='h-5 w-fit' src={verified} alt='icon'/>
                        <p>{data.description}</p>
                    </div>
                ))}
                <p className='text-gray-400 mt-2 text-sm'>32 lectures, 64 hours</p>
            </div>}
            </div>
        </Link>
    )
}

export default CourseCard