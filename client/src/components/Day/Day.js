import { Grid } from '@material-ui/core';

import DayInfo from './DayInfo';

const Day = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <DayInfo />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Day;
