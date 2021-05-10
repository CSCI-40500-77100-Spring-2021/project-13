import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@material-ui/core';
import moment from 'moment';

import { useStyles } from '../../Util';

const Post = ({ post, onEditPost, onDeletePost }) => {
  const classes = useStyles();
  const [titleInput, setTitleInput] = useState(post.title);
  const [bodyInput, setBodyInput] = useState(post.body);
  const [titleStatus, setTitleStatus] = useState(false);
  const [bodyStatus, setBodyStatus] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitleInput(post.title);
    setBodyInput(post.body);
    setTitleStatus(false);
    setBodyStatus(false);
    setOpen(false);
  };

  const validateTitle = (event) => {
    setTitleInput(event.target.value);
    event.target.value === post.title
      ? setTitleStatus(false)
      : setTitleStatus(true);
  };

  const validateBody = (event) => {
    setBodyInput(event.target.value);
    event.target.value === post.body
      ? setBodyStatus(false)
      : setBodyStatus(true);
  };

  const handleSave = () => {
    onEditPost(post._id, titleInput, bodyInput, new Date());
    setOpen(false);
  };

  if (open) {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Your Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make your changes and press 'SAVE', and if you want keep the
            original post, press 'CANCEL'!
          </DialogContentText>
          <Box
            marginTop={2}
            className={classes.label}
            autoComplete="off"
            style={{ flex: '1' }}
          >
            <TextField
              id="outlined-basic"
              fullWidth
              required
              label="Edit Post Title"
              variant="outlined"
              value={titleInput}
              onChange={validateTitle}
            />
          </Box>
          <Box marginTop={2} className={classes.root} autoComplete="off">
            <TextField
              id="outlined-basic"
              fullWidth
              required
              label="Edit Post Body"
              variant="outlined"
              multiline
              rows={7}
              value={bodyInput}
              onChange={validateBody}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={!titleStatus && !bodyStatus}
            onClick={handleSave}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

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
        <p style={{ lineHeight: '0.5' }}>{post.title}</p>
        <div>{!showPost ? <KeyboardArrowDown /> : <KeyboardArrowUp />}</div>
      </div>

      {showPost && (
        <React.Fragment>
          <div
            style={{
              lineHeight: 0.5,
              fontSize: '12px',
            }}
          >
            <p>
              Posted On: {moment(post.createdAt).format('ddd, MMM Do')} at{' '}
              {moment(post.createdAt).format('LT')}
            </p>
            <p>
              Edited On: {moment(post.modifiedAt).format('ddd, MMM Do')} at{' '}
              {moment(post.modifiedAt).format('LT')}
            </p>
          </div>
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
              onClick={handleOpen}
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
