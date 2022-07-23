import { Box, Card, Typography, CardContent, Paper } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import FeaturedBlueprintCard from "../components/cards/FeaturedBlueprintCard";
import MobileFeaturedBlueprintCard from "../components/cards/MobileFeaturedBlueprintCard";
// TODO: ACCESSIBILITY: NAV BAR: review EVERYTHING in nav bar to make sure it's accessible by screen readers & the sorts
// TODO: ACCESSIBILITY: PAGE: change divs to have the right HTML semantics for each content
// TODO: PAGE: take off the motion divs. it's causing too much commotion. Change it to one motion div to slowly fade in content on page load.
// TODO: FeaturedBlueprintCard: have them link to actual plans that exist in the database
// TODO: ACCESSIBILITY: CustomPlanRequest Tile: Reword it to include the fact they can accept entire custom home requests + add directions on how to get to the page to submit their request

// TODO: MOBILE DISPLAY - mobile-custom-blueprint-request-promotion-container - LINK - change the pink link to a better color. Something w good contrast.

// TODO: ACCESSIBILITY/COLOR PALLET - Check what colors colorblind people don't typically see.

function BuildHouseTile({ backgroundColor, stepNumber, title, description }) {
  const cardStyles = {
    display: "flex",
    height: "13rem",
    width: "300px",
    padding: 1,
    boxShadow: "0px 1px 15px 5px rgba(0,0,0,0.12)",
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h4" color="#0b03b0">
            {" "}
            {stepNumber}{" "}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "grid" }}>
          <Typography variant="h6"> {title} </Typography>
          <Typography variant="body1" color="primary.light">
            {" "}
            {description}{" "}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default function Home() {
  // desktop styles variables
  const desktopContainerStyles = {
    display: { xs: "none", md: "grid" },
    gridTemplateRows: "auto auto auto auto auto",
    justifyItems: "center",
    gap: "4rem",
    padding: "0 2rem",
  };

  const headerImageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.50)",
  };

  const pictureBannerContainerStyles = {
    position: "absolute",
    width: "1300px",
    height: "20%",
    top: "57%",
    backgroundColor: "rgba(255, 255, 255, 0.56)",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "inset 5px 5px 15px 5px rgba(0,0,0,0.50)",
  };
  const textContentContainerStyles = {
    backgroundColor: "primary.main",
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    padding: "4rem",
    borderRadius: 3,
    boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.50)",
  };

  // mobile styles variables
  const mobileContainerStyles = {
    display: { xs: "grid", md: "none" },
    gap: "2rem",
  };

  const mobileHeaderImageContainerStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.49)",
  };

  const mobileHeaderImageBannerContainerStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.56)",
    width: "100%",
    position: "absolute",
    top: "40%",
    textAlign: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.29)",
  };

  const mobileCredentialsPaperStyles = {
    backgroundColor: "primary.main",
    color: "white",
    textAlign: "center",
    padding: "2rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.49)",
  };

  const mobileFeaturedBlueprintsContainerStyles = {
    backgroundColor: "primary.light",
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
    color: "white",
    padding: "2rem",
    gap: "1rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.49)",
  };

  const mobileFeaturedBlueprintsSelectionsContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
    justifyItems: "center",
  };

  return (
    <motion.div
      transition={{ delay: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/*Desktop page view */}
      <Box className="desktop-container" sx={desktopContainerStyles}>
        <Box className="header-image-container" sx={headerImageContainerStyles}>
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832"
            height="600px"
            width="1300px"
            layout="fixed"
            alt="Backyard of a Luxury Spanish home with a pool, jacuzzi and a deck"
          />
          <div
            id="picture-banner-container"
            style={pictureBannerContainerStyles}
          >
            <Typography variant="h4"> BP Design Studio </Typography>
            <Typography variant="h4">
              Over 25 years of experience designing custom Luxury homes{" "}
            </Typography>
          </div>{" "}
        </Box>

        <Box sx={textContentContainerStyles} className="container2">
          <Typography variant="h6">
            {" "}
            From Spanish Colonial to Modern Style, we have a wide variety of
            options to choose from. Browse through our blueprint designs to find
            the perfect home for you and your family.
          </Typography>
        </Box>

        <div
          className="container3-featured-blueprints"
          style={{
            display: "grid",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            alignContent: "center",
            gap: "1rem",
          }}
        >
          <div>
            <Typography variant="h4"> Featured Floor Plans</Typography>
            <hr width="90%" />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {featuredPlans.map((plan) => (
              <>
                {" "}
                <FeaturedBlueprintCard
                  key={plan.index}
                  planNumber={plan.planNumber}
                  image={plan.planImage}
                  style={plan.planStyle}
                  beds={plan.beds}
                  baths={plan.baths}
                  sqFt={plan.sqFt}
                  stories={plan.stories}
                  garages={plan.garages}
                />{" "}
              </>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h4"> How to plan a new home build: </Typography>
          <hr width="90%" />
          <Box
            className="buildHouseSteps"
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {buildHouseSteps.map((step) => (
              <>
                <BuildHouseTile
                  key={step.index}
                  stepNumber={step.step}
                  title={step.title}
                  description={step.description}
                  backgroundColor={step.color}
                />
              </>
            ))}
          </Box>
        </div>

        <div className="container4">
          <Box sx={textContentContainerStyles}>
            <Typography variant="h6">
              Found a plan you like but want to fix a few details? We can help
              with that! We offer our customers the ability to submit a custom
              plan request to our team. We'll review your request and get back
              to you to go over the details so we can help create the perfect
              home.
            </Typography>
          </Box>{" "}
        </div>
      </Box>

      {/*Mobile page view */}
      <Box className="mobile-container" sx={mobileContainerStyles}>
        <div
          className="mobile-header-image-container"
          style={mobileHeaderImageContainerStyles}
        >
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832"
            width="800px"
            height="500px"
            alt="Backyard of a Luxury Spanish home with a pool, jacuzzi and a deck"
          />

          <Paper
            className="mobile-header-image-banner-container"
            sx={mobileHeaderImageBannerContainerStyles}
          >
            <Typography variant="h4"> BP Design Studio </Typography>
          </Paper>
        </div>
        <div className="mobile-credentials-container">
          <Paper
            className="mobile-credentials-paper"
            sx={mobileCredentialsPaperStyles}
          >
            <Typography variant="h6">
              Our studio has over 25 years of experience designing custom luxury
              homes. From Spanish Colonial to Modern Style, we have a wide
              variety of options to choose from. Browse through our blueprint
              designs to find the perfect home for you and your family!
            </Typography>
          </Paper>
        </div>
        <div className="mobile-featured-blueprints-container">
          <Paper sx={mobileFeaturedBlueprintsContainerStyles}>
            <Box>
              <Typography variant="h4"> Featured Floor Plans</Typography>
            </Box>
            <hr width="90%" />
            <Box
              className="mobile-featured-blueprints-selections-container"
              sx={mobileFeaturedBlueprintsSelectionsContainerStyles}
            >
              {featuredPlans.map((plan, index) => {
                return (
                  <>
                    <MobileFeaturedBlueprintCard
                      key={index}
                      planNumber={plan.planNumber}
                      image={plan.planImage}
                      beds={plan.beds}
                      baths={plan.baths}
                      sqFt={plan.sqFt}
                      stories={plan.stories}
                      garages={plan.garages}
                    />
                  </>
                );
              })}
            </Box>
          </Paper>
        </div>

        <div className="mobile-plan-custom-home-tips-container">
          <Paper
            sx={{
              backgroundColor: "primary.main",
              display: "grid",
              justifyContent: "center",
              justifyItems: "center",
              color: "white",
              gap: "1rem",
              boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.49)",
              padding: "1rem",
            }}
          >
            <Typography
              sx={{ margin: "1rem", textAlign: "center" }}
              variant="h4"
            >
              Planning a new home build:{" "}
            </Typography>
            <hr width="90%" />

            {buildHouseSteps.map((step, index) => (
              <>
                <Box
                  key={index}
                  sx={{
                    backgroundColor: `${step.color} `,
                    width: "95%",
                    padding: "1rem",
                    color: "black",
                    boxShadow: " inset 0px 0px 15px 5px rgba(0,0,0,0.29)",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      textDecoration: "underline",
                    }}
                  >
                    {step.step}
                    {"."} {step.title}
                  </Typography>
                  <Box className="assess-content" sx={{ paddingLeft: "2rem" }}>
                    <Typography variant="body1">{step.description}</Typography>
                  </Box>
                </Box>
              </>
            ))}
          </Paper>
        </div>
        <div className="mobile-popular-blueprint-plans-container">
          <Paper
            sx={{
              backgroundColor: "highlight.dark",
              display: "grid",
              justifyContent: "center",
              justifyItems: "center",
              textAlign: "center",
              color: "white",
              padding: "2rem",
              gap: "1rem",
              boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.49)",
            }}
          >
            <Box>
              <Typography variant="h4"> Most Popular Floor Plans</Typography>
            </Box>
            <hr width="90%" />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              {featuredPlans.map((plan, index) => {
                return (
                  <>
                    <MobileFeaturedBlueprintCard
                      key={index}
                      planNumber={plan.planNumber}
                      image={plan.planImage}
                      beds={plan.beds}
                      baths={plan.baths}
                      sqFt={plan.sqFt}
                      stories={plan.stories}
                      garages={plan.garages}
                    />
                  </>
                );
              })}
            </Box>
          </Paper>
        </div>

        <div className="mobile-custom-blueprint-request-promotion-container">
          <Paper sx={mobileCredentialsPaperStyles}>
            <Typography variant="h6">
              Like a floor plan but want to change a few details? Not a problem!
              Our team welcomes{" "}
              <a
                href="/customplanrequest"
                target="_blank"
                style={{ color: "magenta" }}
              >
                {" "}
                customization requests{" "}
              </a>{" "}
              where we can alter any existing plans to suit your needs. We're
              also able to take custom plan requests for entire blueprints if
              you're looking for a 100% personalized home!
            </Typography>
          </Paper>
        </div>
      </Box>
    </motion.div>
  );
}

const featuredPlans = [
  {
    index: 0,
    planNumber: 1017,
    planStyle: "spanish",
    planImage:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    beds: 2,
    baths: 3,
    sqFt: 1000,
    stories: 3,
    garages: 4,
  },
  {
    index: 1,
    planNumber: 1234,
    planStyle: "spanish",
    planImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2675&q=80",
    beds: 3,
    baths: 3,
    sqFt: 2000,
    stories: 3,
    garages: 4,
  },
  {
    index: 2,
    planNumber: 1040,
    planStyle: "ranch",
    planImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    beds: 4,
    baths: 3,
    sqFt: 4000,
    stories: 3,
    garages: 4,
  },
  {
    index: 3,
    planNumber: 1013,
    planStyle: "ranch",
    planImage:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    beds: 7,
    baths: 3,
    sqFt: 7000,
    stories: 3,
    garages: 4,
  },
];

const buildHouseSteps = [
  {
    index: 0,
    step: 1,
    title: "Assess",
    color: "rgb(155, 155, 155)",
    description:
      "Asses your current needs, financial situation, location and future plans.",
  },

  {
    index: 1,
    step: 2,
    title: "Plan",
    color: "rgb(127, 127, 127)",
    description:
      "Decide on factors like number of beds/baths, style preferences, budget and lot location options.",
  },

  {
    index: 2,
    step: 3,
    title: "Select",
    color: "rgb(155, 155, 155)",
    description:
      "Select the floor plans that best fit your needs, budget and location.",
  },
  {
    index: 3,
    step: 4,
    title: "Build",
    color: "rgb(127, 127, 127)",
    description: "Build the perfect home suited to fit your needs.",
  },
];
