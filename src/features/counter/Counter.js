import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const handleDispatch = useDispatch()

    return (
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '10px', padding: '15px' }}>
                <button  aria-label="Increment value" onClick={() => handleDispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Increment value" onClick={() => handleDispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    )
}