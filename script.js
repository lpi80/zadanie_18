const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
    },
    {   
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
    } 
];

let moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
    );
});

const element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
     );

ReactDOM.render(element, document.getElementById('app'));