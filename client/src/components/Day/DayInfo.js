import { useState } from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';

const DayInfo = () => {
  const [date] = useState(new Date());

  return (
    <div className="grid-container">
      <div>
        <Typography variant="subtitle1">
          Today is {moment(date).format('dddd')}, {moment(date).format('LL')}
        </Typography>
      </div>
    </div>
  );
};

export default DayInfo;
