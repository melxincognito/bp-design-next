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
        <li>planNumber </li>
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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
