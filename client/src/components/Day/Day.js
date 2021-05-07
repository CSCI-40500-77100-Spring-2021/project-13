import { useAuth } from '../../AuthContext';
import { Typography, Grid } from '@material-ui/core';

import DayInfo from './DayInfo';

const Day = () => {
  const { currentUser } = useAuth();

  // useEffect(() => {
  //   setHour(date.getHours());
  // }, []);

  // const greet = () => {
  //   var greet;
  //   if (hour < 12) greet = `Good Morning, ${username}`;
  //   else if (hour >= 12 && hour < 18) greet = `Good Afternoon, ${username}`;
  //   else if (hour >= 18 && hour <= 24) {
  //     greet = `Good Evening, ${username}`;
  //   }

  //   return greet;
  // };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <DayInfo />
          </Grid>

          {/* <Grid item>
            <Typography
              className="grid-container"
              variant="h6"
              style={{ width: '20rem' }}
            >
              Hello, {currentUser.displayName}
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Day;
