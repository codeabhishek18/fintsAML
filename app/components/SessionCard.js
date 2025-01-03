
import material from '@/assets/material.png'
import complete from '@/assets/success-icon.png'
import pending from '@/assets/pending.png'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"  
import Switch from './Switch'
import { Label } from '@/components/ui/label'

const SessionCard = ({session, index, updateSessionStatus, activeAgenda, setActiveAgenda, level}) =>
{
    const handleAgenda = (e) =>
    {
        e.stopPropagation();
        setActiveAgenda(index)
    }

    return(
        <Card className='flex justify-between rounded items-center text-sm md:text-base p-4'>
            <div className='flex items-center gap-2'>
                <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><Image className='h-6 w-fit' src={material} alt='agenda'/></TooltipTrigger>
                    <TooltipContent>
                        <p>{session.lecture.title}</p>
                    </TooltipContent>
                </Tooltip>
                </TooltipProvider>
                <p>Session {index+1}</p>
            </div>
            
            {level === "admin" ? 

            <div className='flex items-center gap-2'>
                <Switch id={session._id} status={session.status} updateSessionStatus={updateSessionStatus}/>
                <Label>{session.status}</Label>
            </div> : 
            <div className='flex items-center'>
                <p>{session.status}</p>
                <Image className='h-6 w-fit' src={session.status === 'Upcoming' ? pending : complete} alt='img'/>
            </div>}
        </Card>
    )
}

export default SessionCard