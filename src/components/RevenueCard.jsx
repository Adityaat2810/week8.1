import React from 'react'

export const RevenueCard = ({
  title,
  orderCount,
  amount
}) => {
  return (
    <div className='bg-white rounded shadow-sm p-4'>
      <div className='text-gray-700 flex'>
        <div>
          {title}
        </div>

        <div className='flex justify-center flex-col h-100'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </div>


      </div>

      <div className='flex justify-between'>
        <div className='font-semibold text-2xl p-2'>
          Rs {amount}
        </div>

        {orderCount ? <div className='flex cursor-pointer  underline font-medium fle flex-col justify-center'>
          <div className='flex'>
            <div className='text-blue-400'>
              {orderCount} order(s)
            </div>


            {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
            </svg>
            }
          </div>
        </div> : null}

      </div>
    </div>
  )
}

