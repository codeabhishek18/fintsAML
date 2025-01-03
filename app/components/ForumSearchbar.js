import { usePathname, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

const ForumSearchbar = ({searchQuery, getDiscussions, handleChange}) =>
{
    const pathname = usePathname();
    const router = useRouter();

    const handleFilterChange = () => 
    {
        const filteredQuery = Object.fromEntries(Object.entries(searchQuery).filter(([key,value]) => value?.trim() !== ''));
        const newURL = new URLSearchParams(filteredQuery);
        const queryURL = `${pathname}?${newURL.toString()}`
        router.push(queryURL);
        getDiscussions(`/api/forum?${newURL.toString()}`)
    };

    const handleClear = () =>
    {
        router.push(pathname)
        getDiscussions('/api/forum')
    }

    return(
        <div className=''>
            <Input value={searchQuery.search} onChange={(e)=> handleChange('search', e.target.value)}/>
            <Input value={searchQuery.search} onChange={(e)=> handleChange('search', e.target.value)}/>
            {/* <FormControl color='grey' fullWidth >
                <InputLabel color='grey' sx={{color: 'grey'}} variant='outlined'>Filter Discussions</InputLabel>
                <Select name="order" placeholder='Filter Discussions' className={styles.input} value={searchQuery.order}  
                    onChange={(e)=> handleChange('order', e.target.value)}>
                    <MenuItem value="dec">New to old</MenuItem>
                    <MenuItem value="asc">Old to new</MenuItem>
                </Select>
            </FormControl> */}

            <div>
                <button onClick={handleFilterChange}>Search</button>  
                <button onClick={handleClear}>Clear</button>    
            </div>    
        </div>
    )
}

export default ForumSearchbar