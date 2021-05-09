import { useState, useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import axios from 'axios';

import { TabPanel, a11yProps } from '../Util';
import Posts from './Post/Posts';
import { useAuth } from '../../AuthContext';

const URI = 'http://localhost:5000/';

const Journal = () => {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get(URI);
    setPosts(res.data.reverse());
  };

  const addPost = async (title, body) => {
    await axios.post(URI, {
      uid: `${currentUser.uid}`,
      userName: `${currentUser.displayName}`,
      userEmail: `${currentUser.email}`,
      title,
      body,
    });
    fetchPosts();
  };

  const deletePost = async (postId) => {
    await axios.delete(URI + `${currentUser.uid}/${postId}`);
    fetchPosts();
  };

  return (
    <div className="card-container">
      <Posts posts={posts} onAddPost={addPost} onDeletePost={deletePost} />
    </div>
  );
};

export default Journal;
