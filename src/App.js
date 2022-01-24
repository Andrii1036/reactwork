import React, {useEffect, useState} from 'react';

import getAll from "./services/user.service";
import UsersList from "./Components/UsersList/UsersList";
import Form from "./Components/Form/Form";

const App = () => {

    let [users, setUsers] = useState([]);
    let [formValue, setFormValue] = useState({name: '', username: '', email: ''});
    let [usersForRender, setUsersForRender] = useState([]);

    const formSubmit = (e) => {
        e.preventDefault();
        let newUsersList = [...users].filter(item => item.name.toLowerCase().includes(formValue.name.toLowerCase()))
            .filter(item => item.username.toLowerCase().includes(formValue.username.toLowerCase()))
            .filter(item => item.email.toLowerCase().includes(formValue.email.toLowerCase()));
        setUsersForRender(newUsersList);
    };

    useEffect(() => {
        getAll()
            .then(value => {
                setUsers(value);
                setUsersForRender(value);
            });
    }, []);

    return (
        <div>
            <Form onSubmit={formSubmit} formValue={formValue} setFormValue={setFormValue}/>
            <UsersList users={usersForRender}/>
        </div>
    );
};

export default App;