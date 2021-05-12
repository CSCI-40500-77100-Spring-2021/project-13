import { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import Posts from './Post/Posts';
import { useAuth } from '../../AuthContext';

const postURI = 'https://myday-posts.vercel.app/posts/';
const getURI = 'https://myday-query.vercel.app/posts/';

const Journal = () => {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    timeOut(500);
    fetchPosts();
  }, []);

  const timeOut = (time) => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
    }, time);
  };

  const fetchPosts = async () => {
    const res = await axios.get(getURI + `${currentUser.uid}`);
    setPosts(res.data.reverse());
  };

  const addPost = async (title, body, time) => {
    timeOut(2000);
    await axios.post(postURI, {
      uid: `${currentUser.uid}`,
      postId: Math.floor(Math.random() * 10000) + 1,
      userName: `${currentUser.displayName}`,
      userEmail: `${currentUser.email}`,
      title,
      body,
      createdAt: time,
      modifiedAt: time,
    });
    fetchPosts();
  };

  const editPost = async (postId, editedTitle, editedBody, editTime) => {
    timeOut(500);
    await axios.put(postURI + `${currentUser.uid}/${postId}`, {
      title: editedTitle,
      body: editedBody,
      modifiedAt: editTime,
    });
    fetchPosts();
  };

  const deletePost = async (postId) => {
    timeOut(500);
    await axios.delete(postURI + `${currentUser.uid}/${postId}`);
    fetchPosts();
  };

  if (loading) {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <CircularProgress style={{ color: '#fff' }} />
      </div>
    );
  }

  return (
    <div className="card-container">
      <Posts
        posts={posts}
        onAddPost={addPost}
        onEditPost={editPost}
        onDeletePost={deletePost}
      />
    </div>
  );
};

export default Journal;
