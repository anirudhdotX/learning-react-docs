import { useDebugValue, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div>

     <h1>Welcome to app</h1>
     <MyButton />
     <AboutPage />
     <Image />
     <br />
     <Profile />
     <br />
     <GreetUser />
     <br />
     <ButtonCounter />
     <br />
     <br />
     <h5>Counters that update separately</h5>
     <ButtonUpdater />
     <ButtonUpdater />
     <br />
     <h1>Sepated(Now updates at same time) updater</h1>
     <ButtonSeparate />

    
    </div>
  )
}


// React Component names must always start with Capital letters
function MyButton(){
  function handleClick(){
    alert("You Clicked me");
  }
  return(
    <button onClick={handleClick}>I'm a Button</button>
  )
}


function AboutPage(){
  return (
    <div>
      <h1>About</h1>
      <p>Hello there. <br /> How do u do?</p>
    </div>
  )
}

function Image(){  

  const name = "Jai Jagannath"

return(
  <div>
    {/* JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript */}
    <img style={{borderRadius : 100, height: 150, width:150}} src="./src/assets/jaga.jpg" alt="" />
    <p>{name}</p>
  </div>
)
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile(){
  return(
    <div>
      <h1>{user.name}</h1>
       <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
  
        }}
      />
    </div>
  )
}

function GreetUser(){
  const ifLoggenIn = false;

  return(
    <div>
    {ifLoggenIn ? "Hello User" : "Hello Guest" }
    </div>
  )

}

function ButtonCounter(){
  const [count, setCount] = useState(0);


  function handleClick(){
  setCount(count + 1);
}

  return(
    <div>
      <button onClick={handleClick}>
        <h1>Counters that are not update separately</h1>
        Clicked {count} times <br />
        Clicked {count} times
        {/* They are getting updated at the same time cause they are a part of the same component */}
      </button>
    </div>
  )
}


// Building a counter that don't update the counters simultaneosly

function ButtonUpdater(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return(
    <div>
    
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
    </div>
  )
}


// Hooks are used for sharing data between components
function ButtonSeparate(){
   const [count, setCount] = useState(0);

function handleClick(){
  setCount(count + 1);
}
  return(
    <div>
      <button onClick={handleClick}>Clicked {count} Times</button>
      <button onClick={handleClick}>Clicked {count} Times</button>
    </div>
  )
}




 


export default App


