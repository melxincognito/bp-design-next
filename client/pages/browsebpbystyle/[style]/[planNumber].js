import React, { Component } from "react";
import { withRouter } from "next/router";
import BlueprintItemPageLayout from "../../../components/blueprintPages/BlueprintItemPageLayout";
import Axios from "axios";
import { Typography } from "@mui/material";

function ErrorMessage() {
  return (
    <Typography variant="h6" color="error" component="div">
      Error fetching blueprint data
    </Typography>
  );
}

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
        error: false,
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
          this.setState({ error: true });
        }
      });
    }

    render() {
      console.log(this.state.image);
      return (
        <>
          {" "}
          {this.state.error ? (
            <ErrorMessage />
          ) : (
            <BlueprintItemPageLayout
              planNumber={this.state.planNumber}
              description={this.state.description}
              beds={this.state.beds}
              baths={this.state.baths}
              stories={this.state.stories}
              sq_ft={this.state.sq_ft}
              garages={this.state.garages}
              previewImageOne={this.state.image}
              previewImageOneAlt={this.state.planNumber}
            />
          )}
        </>
      );
    }
  }
);
