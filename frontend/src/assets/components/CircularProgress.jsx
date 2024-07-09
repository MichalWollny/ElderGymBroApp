import { CircularProgressbar } from 'react-circular-progressbar';
import injectSheet from 'react-jss';

const styles = {
  root: {
    width: '100%',
  },
  path: {
    stroke: '#9d174d',
    strokeLinecap: 'round',
    transition: 'stroke-dashoffset 0.5s ease 0s',
  },
  trail: {
    stroke: '#14b8a6',
  },
  text: {
    fill: '#3e98c7',
    fontSize: 45,
    dominantBaseline: 'middle',
    textAnchor: 'middle',
  },
};

const StyledCircularProgressbar = injectSheet(styles)(CircularProgressbar);

export default StyledCircularProgressbar;
