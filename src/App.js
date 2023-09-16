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

const [user] = useAuthState();

function App() {
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

export default App;
