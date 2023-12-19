'use client';
import { FormEvent, useState } from 'react';
import { SearchIcon } from '@/assets/icons';
import { Input } from '@nextui-org/input';
import DropMenu from './dropdown';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        label='Find clients'
        radius='full'
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
        placeholder='Type keywords...'
        startContent={
          <SearchIcon className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
        }
        endContent={<DropMenu />}
      />
    </form>
  );
};
