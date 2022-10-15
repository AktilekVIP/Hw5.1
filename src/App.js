
import './App.css';


const comment = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/62/62',
    },
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
  {
    id: 3,
    date: new Date().toLocaleDateString(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
];


function App() {
  return (
    <div className="App">
      {comment.map((item) => {
        return(
          <div className='container'>
            <div className='Kitty'>
              <img src={item.author.avatarUrl} alt="car" />
              <p className='name'>{item.author.name}</p>
            </div>
            <div className='text'>
              <p className='anjoy'>{item.text}</p>
              <span className='date'>{item.date}</span>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
