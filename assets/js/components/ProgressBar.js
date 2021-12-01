import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
////LinearProgressWithLabel
function ProgressBar(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

ProgressBar.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({arg: func}) {
  const [progress, setProgress] = React.useState(10);
  const [achive, setAchive] = React.useState(false);
  React.useEffect(() => {
    const timer = setInterval(() => {
        
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
      //
    };
   
  }, []);
  if(progress == 100){
   // setAchive(true);
    func("end");
  }
  /*if(achive == true && progress == 10){
    func("start");
  }*/
  console.log(progress);
  return (
    <Box sx={{ width: '100%' }}>
      <ProgressBar value={progress} />
    </Box>
  );
}