import { ChatEngine } from "react-chat-engine";

import './App.css';
import ChatFeed from './components/ChatFeed.jsx'

// import LoginForm from './components/LoginForm'
import Modal from "./components/LoginForm";


const App = () => {

    if(!localStorage.getItem('username')) return <Modal />

    return(
        <ChatEngine 
            height="100vh"
            projectID="a93f9594-2b9e-4ea5-aa54-1244ad734437"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps } />}

        />
    )
}

export default App;


