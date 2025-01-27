import { setRequestLocale } from 'next-intl/server';
import React from 'react'

export default function page({ locale }) {
  setRequestLocale(locale);
  return (
    <div><h1 className='text-black'>TEST</h1></div>
  )
}
