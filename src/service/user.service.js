const allUsersUrl = 'https://jsonplaceholder.typicode.com/users'

const getAll = () => {
    return (
        fetch(allUsersUrl)
            .then(value => value.json())
    );
};

export default getAll;