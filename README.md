# Dependencies

Install the dependencies by running <b> npm i</b> in the terminal

Dependencies List:

<ul>
<li>framer-motion </li>
<li>mui/material </li>
<li>emotion/react </li>
<li>emotion/styled </li>
<li>mui/system </li>
<li>mui/icons-material </li>
</ul>

# Forms Components

<h3> CustomPlanRequest: </h3>
<ul>
<li>
Users who are signed up for an account can request custom blueprints be made for their home project. Users will have to input their name, phone number, the size of their lot, a square footage estimate, select the type of home style(Ranch, Modern, Spanish, Mediterranean, Cottage, etc.), the type of project(New Home Build, Complete Home Renovation, Partial Remodel, etc.), and a message giving quick details about the type of project they're looking to build.
</li>
<li>
This information gets passed into emailjs where it'll be forwarded to the companies email and they can contact the individual to go more in depth about their desired project.
</li>
</ul>

# Cards Components

<h3> BlueprintCard </h3>
<ul>
    <li> Reusable component to be used for displaying the different blueprint options on the browsing pages. It is used in both the pages for browsing through all the plans and for browsing through specific styles.  </li>
    <li> The card needs the following props to be passed:  </li>
    <ul>
        <li>image </li>
        <li>beds</li>
        <li>baths</li>
        <li>stories</li>
        <li>sqFt</li>
        <li>slug </li>
        <li>style </li>
         <li> planNumber </li>
    </ul>

<li>It's important you pass the correct <i>slug, style and plan number </i> to the component in order for the component to link to the correct plan. In this applications example of a slug could be 'browsebpbystyle', a style 'luxury', and planNumber '1007' </li>
</ul>

<h3> ShoppingCartItemCard</h3>
<ul>
<li> Reusable component to be used to display the items passed to the customers shopping cart. The shopping cart will display the main image for the blueprint, the blueprint number, have an overview of the plan details and buttons giving the user the ability to remove the item from their cart, send the item to their favorites or view the items page. </li>
    <li> The card needs the following props to be passed:  </li>
    <ul>
        <li>image </li>
        <li>planNumber </li>
        <li>beds</li>
        <li>baths</li>
        <li>stories</li>
        <li>squareFeet</li>
        <li>garages</li>
    </ul>
</ul>

# Browse Styles Components

<h3>FilterBlueprintsAppBar </h3>
<ul>
<li> FilterBlueprintsAppBar is an app bar component that is imported into the BrowseByStyles layout. It is used to filter blueprints by different categories such as number of beds, baths, stories, sqft, etc. </li>
</ul>
<h3>BrowseStylesLayout: </h3>
<ul>
<li> BrowseStylesLayout is a UI layout used to display blueprint options for a specific style(Spanish, Modern, Etc). To use it you import it into the appropriate file, pass the appropriate StyleName prop and have it wrap around the content you'd like displayed inside the plan selection area. 
</li>
</ul>

# Blueprint Pages Components

<h3>BlueprintItemPageLayout </h3>

<ul>
    <li> BlueprintItemPageLayout is a reusable component to be used as a landing page to display the details of each individual blueprint item for purchase. It will display the details of the blueprint such as the plan number, a photo gallery of images, a description, key features, and a 3D floor plan. It will also allow the user to add the plan to their cart with their preferred purchase options and display the price in USD for that blueprint plan. If the user likes the plan but would like to make customization requests there is a direct link on the page to the custom plan request contact form. </li>
    <li> The card currently needs the following props to be passed:  </li>
    <ul>
        <li> planNumber</li>
        <li> style</li>
    </ul>
    <li> The card still needs to be set up so the following props can be passed:  </li>

 <ul>
        <li> <b> images </b> - <i> Pass the images that correspond to that blueprint for the image gallery </i> </li>
         <li> <b> description </b> - <i> Description should be different for every item. After the description is set up, the <b>style</b> prop should then be removed  </i> </li>
        <li> style</li>
        <li> <b> price </b> - <i> Add price of blueprint </i> </li>
        <li> <b> beds </b> - <i> Number of bedrooms for blueprint </i> </li>
        <li> <b> baths </b> - <i> Number of bathrooms for blueprint </i> </li>
        <li> <b> garages </b> - <i> Number of garages for blueprint </i> </li>
        <li> <b> stories </b> - <i> Number of stories(floors) for blueprint </i> </li>
        <li> <b> squareFeet </b> - <i> Square footage of blueprint </i> </li>
        <li> <b> 3DFloorPlan </b> - <i> Image of the 3D floorplan that is displayed for the client </i> </li>
    </ul>
</ul>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
