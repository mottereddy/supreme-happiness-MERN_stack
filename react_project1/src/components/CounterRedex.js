import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CounterRedex() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    console.log(counter, 'state')
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>Inc</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Dec</button>
        </>
    )
}


