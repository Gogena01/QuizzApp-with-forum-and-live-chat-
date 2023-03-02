import React, { useRef, useState } from 'react';
import './Chat.css'


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaChartArea, FaChartBar, FaFacebook, FaFacebookMessenger, FaFontAwesome, FaFontAwesomeLogoFull, FaGoogle, FaReact, FaSignOutAlt } from 'react-icons/fa';


firebase.initializeApp({
    apiKey: "AIzaSyA5n5J032Xm8IN8XNxJiPTSngs6dUCXK8I",
    authDomain: "reactwebsite-c8e08.firebaseapp.com",
    projectId: "reactwebsite-c8e08",
    storageBucket: "reactwebsite-c8e08.appspot.com",
    messagingSenderId: "605112163860",
    appId: "1:605112163860:web:73b7d851afc3bfd213d101",
    measurementId: "G-Y91T8N3XYW"
});

const auth = firebase.auth()
const firestore = firebase.firestore();


function Result() {
    const [user] = useAuthState(auth);

    return (
        <>
            <div className="App">
                <header>
                    <h1><FaFacebookMessenger/></h1>
                    <SignOut />
                </header>

                <section>
                    {user ? <ChatRoom /> : <SignIn />}

                </section>

            </div>

            <div className='hello'>
                <h1>Welcome to the chat</h1>
                <h2 className='welcome'>Here you can exchange knowledge with the community</h2>
                <br />
                <p className='pWelcome'>Sharing knowledge is one of the most important things to do, if you want to learn new skills.
                    This way you don't only improve your skill, but you improve your communication as well.One of the best things about building that shared knowledge base is that you can learn from your mistakes and make sure you don’t repeat them. But you can also tap into your best experiences and make sure you do repeat them! It’s pretty much as simple as that. </p>
                <img className='welcomeImg' src='holder.js/500px450' />
            </div>

        </>
    );

}


const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
    }

    return (
        <>
        <button onClick={signInWithGoogle}> Sign In with Google <FaGoogle /> </button>
        <button onClick={signInWithFacebook}>Sign In with Facebook <FaFacebook/></button>
        </>
    )
};


function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out <FaSignOutAlt /></button>
    )
}

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <main id='mainChat'>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>

        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <button type="submit" disabled={!formValue}>🕊️</button>

        </form>
    </>)
}


function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';


    return (<>
        <div className={`message ${messageClass}`}>
            <img className='chatImg' src="holder.js/40px40" alt='' />
            <p className='chatP'>{`${auth.currentUser.displayName} : ${text}`}</p>
        </div>
    </>)
}

export default Result