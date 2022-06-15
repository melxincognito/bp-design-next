import React, { Component, useEffect } from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";
import Axios from "axios";
import { withRouter } from "next/router";

// TODO fix solution so it works on REFRESH and capitalize styleName

export default withRouter(
  class index extends Component {
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
      return (
        <BrowseStylesLayout StyleName={this.state.styleName}>
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
