import React, {useReducer} from 'react';

import './App.css'

import Buttons from "./Buttons/Buttons";


const calculator=(type, state)=>{
    switch (type){
        case'inc':state++
            return state

        case'dec':state--
            return state

        case'res':
            return 0
    }
}

const reducer = (state,action) => {
    if(action.field==='1'){
        return{...state,count1:calculator(action.type,state.count1)}
    }
    if(action.field==='2'){
        return{...state,count2:calculator(action.type,state.count2)}
    }
    if(action.field==='3'){
        return{...state,count3:calculator(action.type,state.count3)}
    }
    return state
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {count1: 1, count2: 2, count3: 3})



    return (
        <div className={'counters'}>
            <div>
                <h2>{state.count1}</h2>
                <Buttons dispatch={dispatch} field={'1'}/>
            </div>
            <div>
                <h2>{state.count2}</h2>
                <Buttons dispatch={dispatch} field={'2'}/>
            </div>
            <div>
                <h2>{state.count3}</h2>
                <Buttons dispatch={dispatch} field={'3'}/>
            </div>
        </div>
    );
};

export default App;