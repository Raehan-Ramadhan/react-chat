import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBE9YgYNtNXtA6uCu0r3E1uHSomOlnqVf4",
  authDomain: "react-chat-ed20b.firebaseapp.com",
  projectId: "react-chat-ed20b",
  storageBucket: "react-chat-ed20b.appspot.com",
  messagingSenderId: "334392843230",
  appId: "1:334392843230:web:e38d5649ae8d789bbf5b4f",
  measurementId: "G-NJVYYNS7LP"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState();

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign out</button>
  )
}

function ChatRoom() {
  const messagesref = firestore.collection('messages');
  const query = messagesref.orderBy('createdAT').limit(25);


  const [messages] = useCollectionData(query, { idField: 'id' });

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
      </div>

      <div>

      </div>
    </>
  )
}

export default App;
