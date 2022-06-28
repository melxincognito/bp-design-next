import React, { Component } from "react";
import { withRouter } from "next/router";
import BlueprintItemPageLayout from "../../../components/blueprintPages/BlueprintItemPageLayout";
import Axios from "axios";

export default withRouter(
  class PlanDeets extends Component {
    constructor(props) {
      super(props);
      this.state = {
        planNumber: props.router.query.planNumber,
        description: "",
        beds: "",
        baths: "",
        stories: "",
        image: "",
        sq_ft: "",
        garages: "",
      };
    }

    componentDidMount() {
      Axios.get(
        `http://localhost:3002/api/get_item_${this.state.planNumber}`
      ).then((response) => {
        try {
          this.setState({
            description: response.data[0].description,
            beds: response.data[0].beds,
            baths: response.data[0].baths,
            stories: response.data[0].stories,
            image: response.data[0].image,
            sq_ft: response.data[0].sq_ft,
            garages: response.data[0].garages,
          });
        } catch (error) {
          alert(error);
        }
      });
    }

    render() {
      console.log(this.state.image);
      return (
        <BlueprintItemPageLayout
          planNumber={this.state.planNumber}
          description={this.state.description}
          beds={this.state.beds}
          baths={this.state.baths}
          stories={this.state.stories}
          sq_ft={this.state.sq_ft}
          garages={this.state.garages}
        />
      );
    }
  }
);
