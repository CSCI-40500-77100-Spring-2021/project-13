import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

import Event from './Event';
import { useStyles } from '../../Util';

const Events = ({ events, onAddEvent, onDoneEvent, onDeleteItem }) => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState('');
  const [date, setDate] = useState(new Date());

  const handleChnage = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    onAddEvent(userInput, moment(date).format('ll'), moment(date).format('LT'));
    setUserInput('');
    setDate(new Date());
  };

  return (
    <>
      <form onSubmit={handleAddEvent} noValidate>
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
            label="Add An Event"
            variant="outlined"
            value={userInput}
            onChange={handleChnage}
          />
        </Box>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Box marginTop={2} className={classes.label}>
              <DateTimePicker
                label="Date & Time"
                inputVariant="outlined"
                disablePast
                value={date}
                onChange={setDate}
                showTodayButton
              />
            </Box>
          </MuiPickersUtilsProvider>
          <Button
            type="submit"
            variant="contained"
            size="large"
            style={{
              marginTop: '20px',
              background: '#90c695',
              borderRadius: '50px',
              flex: '0.6',
            }}
          >
            Add
          </Button>
        </div>
      </form>
      <div>
        {events.map((event) => {
          return (
            <React.Fragment key={event.id}>
              <Event
                event={event}
                onDoneEvent={onDoneEvent}
                onDeleteItem={onDeleteItem}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Events;
