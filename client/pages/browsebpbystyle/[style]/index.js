import React, { Component, useEffect } from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import Axios from "axios";
import { withRouter } from "next/router";
import { Typography } from "@mui/material";

// TODO fix solution so it works on REFRESH

function NoBlueprintsMessage() {
  return (
    <Typography variant="h4" noWrap component="div">
      No Blueprints Found.
    </Typography>
  );
}

export default withRouter(
  class style extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blueprints: [],
        styleName: props.router.query.style,
        route: `http://localhost:3002/api/get_${props.router.query.style}`,
        bedsFilter: "",
        bathsFilter: "",
        storiesFilter: "",
        sqFtFilter: "",
      };
    }

    componentDidMount() {
      Axios.get(this.state.route).then((response) => {
        try {
          this.setState({ blueprints: response.data });
        } catch (error) {
          alert(error);
        }
      });
    }

    render() {
      let styleNameCapitalized =
        ((this.state.styleName || "").charAt(0) || "").toUpperCase() +
        ((this.state.styleName || "").slice(1) || "");

      // styleNameCapitalized has the code safeized
      // https://stackoverflow.com/questions/55088329/cannot-read-property-charat-of-undefined-in-react-storm

      // childToParentFilterValues is grabbing data from it's child component,
      // BrowseStylesLayout. The BrowseStylesLayout component is grabbing the data
      // from its child component of the FilterBlueprintsAppBar Component
      const childToParentFilterValues = (beds, baths, stories, squareFeet) => {
        this.setState({
          bedsFilter: beds,
          bathsFilter: baths,
          storiesFilter: stories,
          sqFtFilter: squareFeet,
        });
        console.log("Beds: " + this.state.bedsFilter);
        console.log("Baths: " + this.state.bathsFilter);
        console.log("Stories: " + this.state.storiesFilter);
        console.log("Square Feet: " + this.state.sqFtFilter);
      };
      return (
        <BrowseStylesLayout
          StyleName={styleNameCapitalized}
          childToParentFilterValues={childToParentFilterValues}
        >
          {this.state.blueprints.length === 0 ? (
            <NoBlueprintsMessage />
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
        </BrowseStylesLayout>
      );
    }
  }
);
