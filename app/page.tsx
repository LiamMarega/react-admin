import { SearchIcon } from '@/components/icons';
import { TableComponent } from '@/components/table';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

export default function Home() {
  return (
    <>
      <section className='flex flex-col w-full h-[30%] align-middle items-center justify-center gap-6'>
        <h1 className='text-6xl font-black '>Your clients,</h1>
        <h1 className='text-8xl font-black bg-gradient-to-r from-indigo-500 to-yellow-100 inline-block text-transparent bg-clip-text animate-text'>
          Boooooosted
        </h1>
      </section>

      <section className='flex flex-col w-full h-[35%] align-middle items-center justify-center'>
        <div className='w-6/12'>
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
      </section>
      <section className='flex flex-col justify-center gap-4 py-8 md:py-10'>
        <div className='flex gap-5 justify-end'>
          <Button color='primary' variant='shadow'>
            All Clients
          </Button>
          <Button color='primary' variant='ghost'>
            Active
          </Button>
          <Button color='primary' variant='ghost'>
            Inactive
          </Button>
        </div>
        <div className='content-center'>
          <TableComponent />
        </div>
      </section>
    </>
  );
}
