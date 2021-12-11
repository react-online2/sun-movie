import React from "react";
import PropTypes from "prop-types";

// Maeterial UI
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";


// Componets
import MovieImage from "../../MovieImage";

// Styles
// TabsText;
import {Wrapper,TabsText} from "./ImagesTab.styles";
import { useStyles } from "./ImagesTab.makeStyles";
import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`sub-simple-tabpanel-${index}`}
      aria-labelledby={`sub-simple-tab-${index}`}
      className="sub-tabpanel"
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
}


function a12yProps(index) {
  return {
    id: `sub-simple-tabb-${index}`,
    "sub-aria-controls": `sub-simple-tabpanel-${index}`,
  };
}

export default function ImagesTabs({ movie }) {
  const classes = useStyles();
  const [subValue, setsubValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setsubValue(newValue);
  };

  return (
    <Wrapper>
      <div className="tabpanel">
        <Tabs
          //   orientation="vertical"
          value={subValue}
          onChange={handleChange}
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
            root: classes.MuiTabs,
            // wrapper: classes.wrapper,
          }}
        >
          {/* <TabsContent> */}
          <TabsText className="tabs-text">Images</TabsText>
          {/* <TabsBlock> */}
          <Tab
            label="Backdrops"
            disableRipple
            selected
            classes={{
              wrapper: classes.wrapper,
              root: classes.tabRoot,
              selected: classes.tabSelected,
              textColorInherit: classes.tabTextColorInherit,
            }}
            {...a12yProps(1)}
            onSubmit={(e) => e.preventDefault()}
          />
          <Tab
            label="Posters"
            disableRipple
            classes={{
              wrapper: classes.wrapper,
              root: classes.tabRoot,
              selected: classes.tabSelected,
              textColorInherit: classes.tabTextColorInherit,
            }}
            {...a12yProps(2)}
            onSubmit={(e) => e.preventDefault()}
          />
          <Tab
            label="Logos"
            disableRipple
            classes={{
              wrapper: classes.wrapper,
              root: classes.tabRoot,
              selected: classes.tabSelected,
              textColorInherit: classes.tabTextColorInherit,
            }}
            {...a12yProps(3)}
            onSubmit={(e) => e.preventDefault()}
          />
          {/* </TabsBlock> */}
          {/* </TabsContent> */}
        </Tabs>
      </div>
      <TabPanel value={subValue} index={1}>
        <MovieImage
          imageAlt={
            movie.title
              ? movie.title
              : movie.original_name
              ? movie.original_name
              : movie.id
          }
          movieImage={movie.image.backdrops}
          //  headerTitle="Posters"
          maxImage={6}
          nameClass={"movie-image"}
        />
      </TabPanel>
      <TabPanel value={subValue} index={2}>
        <MovieImage
          imageAlt={
            movie.title
              ? movie.title
              : movie.original_name
              ? movie.original_name
              : movie.id
          }
          movieImage={movie.image.posters}
          //  headerTitle="Backdrops"
          maxImage={6}
          nameClass={"movie-image"}
        />
      </TabPanel>
      <TabPanel value={subValue} index={3}>
        <MovieImage
          imageAlt={
            movie.title
              ? movie.title
              : movie.original_name
              ? movie.original_name
              : movie.id
          }
          movieImage={movie.image.logos}
          //  headerTitle="Backdrops"
          maxImage={6}
          nameClass={"movie-image"}
        />
      </TabPanel>
    </Wrapper>
  );
}
ImagesTabs.propTypes = {
  movie: PropTypes.object,
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};