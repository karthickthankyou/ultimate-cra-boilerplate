import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './store/counter'

function App() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0
  const obj = { msg: 'Objects are not valid as a React child' }
  const [text, textSetter] = useState<string>(JSON.stringify(obj))

  return (
    <div className='py-12 bg-gray-50'>
      <div className='max-w-md mx-auto'>
        <h1 className='text-3xl font-semibold'>CRA Boilerplate</h1>
        <div className='mt-4 text-gray-700'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
          laboriosam autem ipsam perferendis unde accusamus quis libero
          temporibus magni? Beatae culpa sint aliquid asperiores. quis libero
          temporibus magni perferendis?
        </div>
        <div className='mt-4 text-gray-700'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
          laboriosam vero totam eligendi delectus inventore hic porro sit
          doloremque in, accusamus quis libero temporibus magni? Beatae culpa
          sint aliquid asperiores.
        </div>

        <div className='mt-4 text-gray-700'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
        <h2 className='mt-6 text-xl font-semibold'>Redux Demo</h2>
        <div className='p-5 mt-2 bg-white border rounded shadow-lg'>
          <div>
            <div className='font-mono text-right text-blue-700 text-9xl font-extralight'>
              {count.status === 'loading' ? '...' : count.value}
            </div>
            <div className='flex justify-end mt-2 space-x-2'>
              <button
                type='button'
                className='w-8 h-8 border border-gray-200 rounded-sm '
                aria-label='Increment value'
                onClick={() => dispatch(increment())}
              >
                +
              </button>
              <button
                type='button'
                className='w-8 h-8 border border-gray-200 rounded-sm '
                aria-label='Decrement value'
                onClick={() => dispatch(decrement())}
              >
                -
              </button>
            </div>
          </div>
          <div className='mt-2'>
            <div className='my-2 text-xs text-gray-600'>Custom</div>
            <input
              id='increment-value'
              aria-label='Set increment amount'
              value={incrementAmount}
              type='text'
              className='block w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-sm'
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <div className='grid grid-cols-2 gap-2 mt-2'>
              <button
                type='button'
                className='btn'
                onClick={() => dispatch(incrementByAmount(incrementValue))}
              >
                Add Amount
              </button>
              <button
                type='button'
                className='btn'
                onClick={() => dispatch(incrementAsync(incrementValue))}
              >
                Add Async
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
