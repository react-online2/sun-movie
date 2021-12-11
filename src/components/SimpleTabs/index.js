import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

// Componets
import ActorTab from "./ActorTab"
import SimilarMoviesTab from './SimilarMoviesTab';
import ImagesTab from './ImagesTab';
import TrailersTab from "./TrailersTab"

// Style
import "./style.css"
import {Wrapper} from "./SimpleTabs.styled"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      // id={`simple-tabpanel-${index}`}
      // aria-labelledby={`simple-tab-${index}`}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={[0,3]}>
          <div className="tab-content">{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    // id: `simple-tabb-${index}`,
    // 'aria-controls': `simple-tabpanel-${index}`,
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "#2aa1c2",
  },
  flexContainer: {
    background: "#020916",
    color: "#fff",
  },
  MuiTabWrapper: {
    fontSize: "18px",
  },
  MuiTabRoot: {
    maxWeight: "100%"
  }

}));

export default function SimpleTabs({ movie, mediaType }) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
      <Wrapper>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
          }}
        >
          <Tab
            label="Actors"
            disableRipple
            classes={{ wrapper: classes.MuiTabWrapper }}
            {...a11yProps(0)}
            onSubmit={(e) => e.preventDefault()}
          />
          <Tab
            label="Similar Movies"
            disableRipple
            classes={{ wrapper: classes.MuiTabWrapper }}
            {...a11yProps(1)}
            onSubmit={(e) => e.preventDefault()}
          />
          <Tab
            label="Images"
            disableRipple
            classes={{ wrapper: classes.MuiTabWrapper }}
            {...a11yProps(2)}
            onSubmit={(e) => e.preventDefault()}
          />
          <Tab
            label="Trailers"
            disableRipple
            classes={{ wrapper: classes.MuiTabWrapper }}
            {...a11yProps(3)}
            onSubmit={(e) => e.preventDefault()}
          />
        </Tabs>

        <TabPanel value={value} index={0} className="tab-panel">
          <ActorTab movie={movie}></ActorTab>
        </TabPanel>

        <TabPanel value={value} index={1} className="tab-panel">
          <SimilarMoviesTab
            similarMovies={movie.similarMovies}
            mediaType={mediaType}
          />
        </TabPanel>

        <TabPanel value={value} index={2} className="tab-panel">
          <ImagesTab movie={movie} />
        </TabPanel>

        <TabPanel value={value} index={3} className="tab-panel">
          <TrailersTab
            videoTrailer={movie.videoTrailer}
            movieTitle={movie.title ? movie.title : movie.name}
            imageBackdrops={movie.image.backdrops}
            movieBackdrops={movie.backdrop_path}
          />
        </TabPanel>
      </Wrapper>
  );
}
SimpleTabs.propTypes = {
  movie: PropTypes.object,
  mediaType: PropTypes.string,
};