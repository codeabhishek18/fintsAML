'use client'

import { Card } from "@/components/ui/card"
import Link from "next/link"

const routes =  
[
    {
        id: 1,
        title: 'Batches',
        route: '/admin/batches'
    },
    {
        id: 2,
        title: 'Courses',
        route: '/admin/courses'
    },
    {
        id: 3,
        title: 'Enrollments',
        route: '/admin/enrollments'
    },
    {
        id: 4,
        title: 'Graduates',
        route: '/admin/graduates'
    },
    {
        id: 5,
        title: 'Requests',
        route: '/admin/requests'
    }
]

const Dashboard = () =>
{
    return(
        <div className='grid grid-cols-3 gap-4'>
            {routes.map((data)=>
            (
                <Link href={data.route} key={data.id}>
                    <Card className='p-8'>
                    {data.title}
                    </Card>
                </Link>
            ))}        
        </div>
    )
}

export default Dashboard