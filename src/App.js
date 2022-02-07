import React, {useReducer} from 'react';

import './App.css'

const reducer = (state, action) => {

    switch (action.type) {
        case'dog':
            return {...state, dogsArray: [...state.dogsArray, {name: action.payload.name, id: action.payload.id}]}
        case'cat':
            return {...state, catsArray: [...state.catsArray, {name: action.payload.name, id: action.payload.id}]}
        case'deleteCat':
            return {...state, catsArray: [...state.catsArray.filter(item => item.id !== action.payload.id)]}
        case'deleteDog':
            return {...state, dogsArray: [...state.dogsArray.filter(item => item.id !== action.payload.id)]}
        default:
            throw new Error('Some Error')
    }
    return state
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {dogsArray: [], catsArray: []})

    const submit = (e, type) => {
        e.preventDefault()
        let name = e.target[0].value
        let id = Date.now()
        if (name === '') {
            return
        }
        dispatch({type: type, payload: {name: name, id: id}})
    }

    const Pet = ({name, id, pet}) => {
        let type = null;
        if (pet === 'cat') {
            type = 'deleteCat'
        } else if (pet === 'dog') {
            type = 'deleteDog'
        }

        const deletePet = () => {
            dispatch({type: type, payload: {id: id}})
        }

        return (
            <div className={'pets_item'}>
                <h3>{name}</h3>
                <button onClick={deletePet}>delete</button>
            </div>
        )
    }

    return (
        <div>
            <div className={'header'}>
                <form onSubmit={(e) => {
                    submit(e, 'dog')
                }}>
                    <label>DOG:<input type="text" name={'dog'}/></label>
                    <button>Save</button>
                </form>
                <form onSubmit={(e) => {
                    submit(e, 'cat')
                }}>
                    <label>CAT:<input type="text" name={'dog'}/></label>
                    <button>Save</button>
                </form>
            </div>
            <div className={'pets'}>
                <div>
                    <h2>Dogs</h2>
                    {state.dogsArray.map(item => <Pet key={item.id} name={item.name} id={item.id} pet={'dog'}/>)}
                </div>
                <div>
                    <h2>Cats</h2>
                    {state.catsArray.map(item => <Pet key={item.id} name={item.name} id={item.id} pet={'cat'}/>)}
                </div>
            </div>

        </div>
    );
};

export default App;