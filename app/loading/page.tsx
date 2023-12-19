import { Spinner } from '@nextui-org/react';
import React from 'react';

export default function LoadingPage() {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <Spinner color='primary' size='lg' />
    </div>
  );
}
