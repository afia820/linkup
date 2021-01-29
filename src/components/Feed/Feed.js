import React, { useEffect, useState } from 'react';
import {
  Create,
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from '@material-ui/icons';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

import './Feed.css';
import InputOptions from './InputOptions';
import Post from './Post';
import { db } from '../../firebase/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={Image} title="Photo" color="#70B5F9" />
          <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOptions Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
