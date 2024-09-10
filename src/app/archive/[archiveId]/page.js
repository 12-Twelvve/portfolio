'use client';

import { useContext, useEffect } from 'react';
import ArchiveCardDetail from '@/app/components/ArchiveCardDetail';
import { StoreContext } from '@/app/context';
import { useRouter } from 'next/navigation'; 


export default function ArchiveDetailPage() {
  const { selectedArchive } = useContext(StoreContext); // Get selected archive from context
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    if (!selectedArchive) {
      // If selectedArchive is not available, redirect to /archive
      router.push('/archive');
    }
  }, [selectedArchive, router]); // Run the effect when selectedArchive or router changes

  return (
    <div>
      {selectedArchive ? <ArchiveCardDetail card={selectedArchive} /> : null}

       {/* <ArchiveCardDetail card = {selectedArchive}/> */}
    </div>
  )
}
