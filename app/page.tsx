import { SearchBar } from '@/components/searcher';
import { TableComponent } from '@/components/table';
import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <>
      {/* bg dots */}
      <div className='bg-dot-light dark:hidden w-screen h-screen absolute inset-0 '></div>
      <div className='light:hidden bg-dot w-screen h-screen absolute inset-0 '></div>
      <section className='flex flex-col w-full  font-solidenTrial align-middle items-center justify-center'>
        <h1 className='z-10 text-6xl font-bold '>Your clients list,</h1>
        <h1 className='z-10 text-8xl font-bold bg-gradient-to-r from-primary to-tertiary inline-block text-transparent bg-clip-text animate-text'>
          Boooooosted
        </h1>
        <div className='w-6/12 pt-28'>
          <div className='z-10 duration-1000 hover:shadow-[0px_10px_70px_1px] rounded-full hover:shadow-blue-500/60 '></div>
          <SearchBar />
        </div>
      </section>

      <section className='z-10 flex flex-col justify-center gap-4 pt-40'>
        <div className='flex gap-5 justify-end'>
          <Button color='primary' variant='shadow' className='text-black'>
            All Clients
          </Button>
          <Button color='primary' variant='ghost' className='hover:text-black'>
            Active
          </Button>
          <Button color='primary' variant='ghost' className='hover:text-black'>
            Inactive
          </Button>
        </div>
        <div className='z-10 shadow-[0px_10px_50px_1px] rounded-3xl shadow-secondary '>
          <TableComponent />
        </div>
      </section>
    </>
  );
}
