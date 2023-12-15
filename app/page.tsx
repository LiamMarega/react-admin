import { SearchIcon } from '@/components/icons';
import { TableComponent } from '@/components/table';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

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
          <div className='z-10 duration-1000 hover:shadow-[0px_10px_70px_1px] rounded-full hover:shadow-blue-500/60 '>
            <Input
              label='Find clients'
              isClearable
              radius='full'
              classNames={{
                label: 'text-black/50 dark:text-white/90',
                input: [
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ],
                innerWrapper: 'bg-transparent',
                inputWrapper: [
                  'shadow-xl',
                  'bg-default-200/50',
                  'dark:bg-default/60',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-default-200/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focused=true]:bg-default-200/50',
                  'dark:group-data-[focused=true]:bg-default/60',
                  '!cursor-text',
                ],
              }}
              placeholder='Type to search...'
              startContent={
                <SearchIcon className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
              }
            />
          </div>
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
