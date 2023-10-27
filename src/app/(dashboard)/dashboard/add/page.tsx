import AddFriendForm from '@/components/AddFriendForm'
import React from 'react'


const page = () => {
  return (
    <section className='pt-8'>
      <h1 className='font-bold text-5xl mb-8'>Add a friend</h1>
      <AddFriendForm />
    </section>
  )
}

export default page