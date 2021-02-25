
import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { auth, provider } from "./firebase";


function App() {

  const [rooms, setRooms] = useState([]) 
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user'))); 

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })

  }

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() =>{
    getChannels();
  }, [])


  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={setUser}/>
          :
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar  rooms={rooms}  /> 
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  Select or Create Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`

// Testing

// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyCnYXZBGqg9zJmelmx95LFkIaSXnHQ5-Q8",
//   authDomain: "slack-clone-challenge-8b8bc.firebaseapp.com",
//   projectId: "slack-clone-challenge-8b8bc",
//   storageBucket: "slack-clone-challenge-8b8bc.appspot.com",
//   messagingSenderId: "509144420840",
//   appId: "1:509144420840:web:348d59e9fa64e6117f545d"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider()

// export {auth, provider}
// export default db;

// // testing