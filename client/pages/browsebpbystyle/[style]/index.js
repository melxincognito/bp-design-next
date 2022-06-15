import React, { Component, useEffect } from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import Axios from "axios";
import { withRouter } from "next/router";

// TODO fix solution so it works on REFRESH

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
        this.setState({ blueprints: response.data });
      });
    }

    render() {
      // StyleName prop is having the first letter capitalized for the title of the page
      return (
        <BrowseStylesLayout
          StyleName={
            this.state.styleName.charAt(0).toUpperCase() +
            this.state.styleName.slice(1)
          }
        >
          {this.state.blueprints.map((blueprint, index) => (
            <>
              <BlueprintCard
                key={index}
                image={blueprint.image}
                planNumber={blueprint.plan_number}
                beds={blueprint.beds}
                baths={blueprint.baths}
                sqFt={blueprint.sq_ft}
                stories={blueprint.stories}
                slug="browsebpbystyle"
                style={blueprint.style}
              />
            </>
          ))}
        </BrowseStylesLayout>
      );
    }
  }
);
