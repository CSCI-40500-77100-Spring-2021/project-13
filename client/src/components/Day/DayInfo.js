import { useState } from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';

import { useAuth } from '../../AuthContext';

const DayInfo = () => {
  const { currentUser } = useAuth();
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
