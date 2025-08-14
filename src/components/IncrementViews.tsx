'use client';
import { useEffect } from 'react';

export default function IncrementView() {
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_FUNC_URL!).catch(() => {});
  }, []);
  return null;
}
