import React,{useReducer} from 'react'

export default function TestuseReducer() {
  const [count, dispath] = useReducer((state,action)=> {
    switch(action){
        case 'add':
             return state + 1;
         case 'sub':
             return state - 1;
         default:
             return state;
    }
 }, 0);
 return (
     <div>
         <h1 className="title">{count}</h1>
         <button className="btn is-primary"
             onClick={()=> dispath('add')}
             >Increment</button>
         <button className="btn is-warnning"
             onClick={()=> dispath('sub')}
             >Decrement</button>
     </div>
 )
}