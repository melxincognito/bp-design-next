import React from "react";
import BrowseStylesLayout from "../../../components/browseStyles/BrowseStylesLayout";
import BlueprintCard from "../../../components/cards/BlueprintCard";

export default function cabin() {
  return (
    <BrowseStylesLayout StyleName="Cabin">
      {cabinStyles.map((option, index) => (
        <>
          <BlueprintCard
            key={index}
            image={option.image}
            planNumber={option.planNumber}
            beds={option.beds}
            baths={option.baths}
            sqFt={option.sqFt}
            stories={option.stories}
            slug="browsebpbystyle"
            style="cabin"
          />
        </>
      ))}
    </BrowseStylesLayout>
  );
}

const cabinStyles = [
  {
    planNumber: 1029,
    beds: 2,
    baths: 1,
    sqFt: 1000,
    stories: 1,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  },
  {
    planNumber: 1045,
    beds: 5,
    baths: 2.5,
    sqFt: 5000,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    planNumber: 1003,
    beds: 4,
    baths: 2,
    sqFt: 2000,
    stories: 3,
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    planNumber: 1012,
    beds: 8,
    baths: 2.4,
    sqFt: 1700,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1558969763-1e911dcd91e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    planNumber: 1069,
    beds: 5,
    baths: 2.5,
    sqFt: 5000,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    planNumber: 1066,
    beds: 4,
    baths: 2,
    sqFt: 2000,
    stories: 3,
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    planNumber: 1090,
    beds: 8,
    baths: 2.4,
    sqFt: 1700,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1558969763-1e911dcd91e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    planNumber: 1040,
    beds: 5,
    baths: 2.5,
    sqFt: 5000,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    planNumber: 1030,
    beds: 4,
    baths: 2,
    sqFt: 2000,
    stories: 3,
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    planNumber: 1090,
    beds: 8,
    baths: 2.4,
    sqFt: 1700,
    stories: 2,
    image:
      "https://images.unsplash.com/photo-1558969763-1e911dcd91e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
];