import React, { Component } from "react";
import FilterBlueprintsAppBar from "../../components/browseStyles/FilterBlueprintsAppBar";
import BlueprintCard from "../../components/cards/BlueprintCard";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

import Axios from "axios";

/* TODO fix slug for dynamic routing to content */

// NoBlueprintsFoundMessage is used for error handling incase an error ever happens with the API call
function NoBlueprintsFoundMessage() {
  return (
    <Typography component="div" variant="h4">
      {" "}
      No Blueprints Found
    </Typography>
  );
}

function BrowseAllBlueprintsLayout({ children, childToParentFilterValues }) {
  const childToParent = (beds, baths, stories, squareFeet) => {
    childToParentFilterValues(beds, baths, stories, squareFeet);
  };

  const styleSelectionContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, 0.13)",
    height: "100%",
    width: "100%",
    border: "solid black 15px",
    borderStyle: "inset",
    borderRadius: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: "3rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.28)",
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h3"> Browse All Blueprints</Typography>
        <hr width="100%" />
      </div>
      <FilterBlueprintsAppBar
        handleClick={() => parentToChild()}
        childToParent={childToParent}
      />
      <Box
        className="stylesSelectionContainer"
        sx={styleSelectionContainerStyles}
      >
        {children}
      </Box>
    </>
  );
}

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blueprints: [],
      filterOn: false,
      filterBlueprints: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3002/api/get").then((response) => {
      try {
        this.setState({ blueprints: response.data });
      } catch (error) {
        console.log(error);
      }
    });
  }

  render() {
    const filteredList = [];

    const childToParentFilterValues = (beds, baths, stories, squareFeet) => {
      this.setState({ filterOn: true });
      this.state.blueprints.forEach((blueprint) => {
        if (
          blueprint.beds === beds &&
          blueprint.baths === baths &&
          blueprint.stories === stories
        ) {
          filteredList.push(blueprint);
        }
        console.log("filtered List " + filteredList);
        return filteredList;
      });

      this.setState({ filterBlueprints: filteredList });
      console.log(
        "filterblueprints state " + JSON.stringify(this.state.filterBlueprints)
      );
    };

    return (
      <motion.div
        className="mainContainer"
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ display: "grid", width: "100%", gap: "1rem" }}
      >
        <BrowseAllBlueprintsLayout
          childToParentFilterValues={childToParentFilterValues}
        >
          {this.state.blueprints.length === 0 &&
          this.state.filterBlueprints.length === 0 ? (
            <NoBlueprintsFoundMessage />
          ) : this.state.filterOn === true ? (
            this.state.filterBlueprints.map((blueprint, index) => (
              <>
                <BlueprintCard
                  key={index}
                  image={blueprint.image}
                  planNumber={blueprint.plan_number}
                  beds={blueprint.beds}
                  baths={blueprint.baths}
                  sqFt={blueprint.sq_ft}
                  stories={blueprint.stories}
                  garages={blueprint.garages}
                  slug="browsebpbystyle"
                  style={blueprint.style}
                />
              </>
            ))
          ) : (
            this.state.blueprints.map((blueprint, index) => (
              <>
                <BlueprintCard
                  key={index}
                  image={blueprint.image}
                  planNumber={blueprint.plan_number}
                  beds={blueprint.beds}
                  baths={blueprint.baths}
                  sqFt={blueprint.sq_ft}
                  stories={blueprint.stories}
                  garages={blueprint.garages}
                  slug="browsebpbystyle"
                  style={blueprint.style}
                />
              </>
            ))
          )}
        </BrowseAllBlueprintsLayout>
      </motion.div>
    );
  }
}
