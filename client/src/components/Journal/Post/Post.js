import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Post = ({ post, onDeletePost }) => {
  const [showPost, setShowPost] = useState(false);

  return (
    <div className="post">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => setShowPost(!showPost)}
      >
        <p>{post.title}</p>
        <div>{!showPost ? <KeyboardArrowDown /> : <KeyboardArrowUp />}</div>
      </div>

      {showPost && (
        <React.Fragment>
          <hr />
          <p
            style={{
              padding: '5px 1rem',
              fontWeight: 'bolder',
              lineHeight: '1.7',
              textAlign: 'justify',
            }}
          >
            {post.body}
          </p>
          <hr />
          <div style={{ textAlign: 'center', paddingBottom: '5px' }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              style={{
                margin: '0',
                marginRight: '10px',
                borderRadius: '50px',
              }}
              // onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              style={{
                borderRadius: '50px',
              }}
              onClick={() => onDeletePost(post._id)}
            >
              Delete
            </Button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Post;
