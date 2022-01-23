const postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

const getPosts = (id) => {
    return (
        fetch(`${postsUrl}${id}`)
            .then(value => value.json())
    );
};

export default getPosts;