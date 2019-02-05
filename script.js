const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'Krol_Lew.jpg'
    },
    {   
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'Harry_Potter.jpg'
    },
    {   
        id: 3,
        title: 'Dzień Patriotów',
        desc: 'Film o zamachu podczas maratonu bostońskiego',
        image: 'Dzien_Patriotow.jpg'
    }
 

];

let moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image, alt:""})
    );
});

const element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
     );

ReactDOM.render(element, document.getElementById('app'));