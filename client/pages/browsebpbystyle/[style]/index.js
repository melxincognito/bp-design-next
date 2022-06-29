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
        filterOn: false,
        filterBlueprints: [],
        styleName: props.router.query.style,
        route: `http://localhost:3002/api/get_${props.router.query.style}`,
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
      const filteredList = [];
      let styleNameCapitalized =
        ((this.state.styleName || "").charAt(0) || "").toUpperCase() +
        ((this.state.styleName || "").slice(1) || "");

      // styleNameCapitalized has the code safeized
      // https://stackoverflow.com/questions/55088329/cannot-read-property-charat-of-undefined-in-react-storm

      // childToParentFilterValues is grabbing data from it's child component,
      // BrowseStylesLayout. The BrowseStylesLayout component is grabbing the data
      // from its child component of the FilterBlueprintsAppBar Component

      // TODO add square feet filter, don't forget it
      const childToParentFilterValues = (beds, baths, stories, squareFeet) => {
        this.setState({ filter: true });
        this.state.blueprints.forEach((blueprint) => {
          if (
            blueprint.beds === beds &&
            blueprint.baths === baths &&
            blueprint.stories === stories
          ) {
            filteredList.push(blueprint);
          }
          return filteredList;
        });

        this.setState({ filterBlueprints: filteredList });
        console.log("blueprints state" + this.state.blueprints);
      };
      return (
        <BrowseStylesLayout
          StyleName={styleNameCapitalized}
          childToParentFilterValues={childToParentFilterValues}
        >
          {this.state.blueprints.length === 0 &&
          this.state.filterBlueprints.length === 0 ? (
            <NoBlueprintsMessage />
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
        </BrowseStylesLayout>
      );
    }
  }
);
