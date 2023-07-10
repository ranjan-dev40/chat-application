import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import Modal from './components/LoginForm';
import './App.css';

const projectID = "a93f9594-2b9e-4ea5-aa54-1244ad734437";

const App = () => {
  if (!localStorage.getItem('username')) return <Modal />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;