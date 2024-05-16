import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

// function App() {
//   return (
//     <>
//       <h1>Welcome to my app</h1>
//       <MyButton/>
//     </>
//   );
// }

// function MyButton() {
// return (
//   <button>I'm a button</button>
// );
// }


// export default App;

//hello, testing git commit


export default function profile() {
 return (
<>
<h1>{user.name}</h1>
<img 
className='avatar'
src={user.imageUrl}
alt={'Photo of ' + user.name}
style={
  {
    width:user.imageSize,
    height:user.imageSize
  }
}
/>
</>
 );

}
