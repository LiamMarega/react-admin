'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  ChipProps,
  Chip,
  Pagination,
  Link,
} from '@nextui-org/react';
import { users, columns } from '@/assets/data/tableData';
import { StarIcon } from '@/assets/svg/star';

export const TableComponent = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 15;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const statusColorMap: Record<string, ChipProps['color']> = {
    active: 'success',
    paused: 'danger',
    vacation: 'warning',
  };

  type User = (typeof users)[0];

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'status':
        return (
          <Chip
            color={statusColorMap[user.status]}
            size='md'
            variant='dot'
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {cellValue}
          </Chip>
        );

      case 'rating':
        return (
          <div className='flex justify-between items-center '>
            <div style={{ width: '100%' }}>{cellValue}</div>
            <div className='flex items-center ml-2'>
              <StarIcon className='text-primary' />
            </div>
          </div>
        );
      case 'website':
        return (
          <Link isExternal target='_blank' href={String(cellValue)}>
            <p>{cellValue}</p>
          </Link>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label='Table clientixPlus'
      selectionMode='multiple'
      bottomContent={
        <div className='flex w-full justify-center'>
          <Pagination
            isCompact
            showControls
            color='secondary'
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column: any) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
        {(item: any) => (
          <TableRow key={item.key}>
            {(columnKey: any) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
