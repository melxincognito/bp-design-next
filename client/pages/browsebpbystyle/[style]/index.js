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

      return (
        <BrowseStylesLayout StyleName={styleNameCapitalized}>
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
