'use client';
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';

export default function DropMenu() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['Paraná, Entre Rios']));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='bordered' className='capitalize px-10 flex '>
          🗺️ {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Single selection example'
        variant='shadow'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={selectedKeys}
      >
        <DropdownItem key='text'>Text</DropdownItem>
        <DropdownItem key='number'>Number</DropdownItem>
        <DropdownItem key='date'>Date</DropdownItem>
        <DropdownItem key='single_date'>Single Date</DropdownItem>
        <DropdownItem key='iteration'>Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
