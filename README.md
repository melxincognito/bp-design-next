## Overview

## Getting Started

### 1. Clone the repository and install the dependencies in the client directory <b>AND</b> the server directory.

```
git clone https://github.com/melxincognito/bp-design-next.git
cd bp-design-next
cd client
npm i
cd ../
cd server
npm i
```

### 2. Create a .env file in the server folder to configure your local environment

```
touch .env
```

### 3. Configure the following keys in your local environment:

```
MY_SQL_HOST
MY_SQL_USER
MY_SQL_PASSWORD
MY_SQL_DATABASE
```

### 4. Start the application

To run the application locally, you'll need to open two terminals.
In the first terminal, assuming your in the main folder, change to the client directory
and run the following:

```
cd client
npm run dev
```

In the second terminal, change to the server directory and run the following:

```
cd server
npm run devStart
```

### 5. View application locally

Open your browser to localhost:3000 to view the application locally

# CLIENT SIDE DOCUMENTATION

## Dependencies

Dependencies List:

<ul>
<li>framer-motion </li>
<li>mui/material </li>
<li>emotion/react </li>
<li>emotion/styled </li>
<li>mui/system </li>
<li>mui/icons-material </li>
<li>axios </li>
<li>next 12.1.6 </li>
<li>react 18.1.0 </li>
<li>react-dom 18.1.0 </li>
</ul>

<ins><i> App wont load data correctly if you don't have the database running at the same time. Scroll down and read Server Side documentation for instructions on how to run it locally. </i></ins>

## Cards Components

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
         <li> description </li> - <i> The description isn't shown on the card but it's needed to be passed to the other databases if a user wants to add the item to their cart or their favorites.</i>
         <li>favorite </li> - <i> Favorite is a state used to display if the card is saved in the users favorites or no. The default value is set to false but should be passed as a prop and set to true when this card is used for the favorites page </i>
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
        <li>description </li>
        <li>style</li>
    </ul>
     <li>The ShoppingCartItemCard component is imported into the <b>ShoppingCartDialog</b> component in the <i>navigation</i> folder </li>
</ul>

<h3> FavoriteItemCard</h3>
<ul>
<li> Reusable component to be used to display the items passed to the customers favorites. The favorites dialog will display the main image for the blueprint, the blueprint number, have an overview of the plan details and buttons giving the user the ability to remove the item from their favorites, send the item to their cart or view the items page. </li>
    <li> The card needs the following props to be passed:  </li>
    <ul>
        <li>image </li>
        <li>planNumber </li>
        <li>beds</li>
        <li>baths</li>
        <li>stories</li>
        <li>squareFeet</li>
        <li>garages</li>
        <li>description </li>
        <li>style</li>
    </ul>
    <li>The FavoriteItemCard component is imported into the <b>FavoritesDialog</b> component in the <i>navigation</i> folder </li>
</ul>

## Navigation Components

<h3> FavoritesDialog</h3>
<ul>
<li> Dialog component used to display the items in a users favorite database. The component is imported into the <b>NavBar</b> to be displayed when the user clicks on the favorites border icon.</li>
<li> The component needs the following props to be passed:</li>
<ul>
<li> open - <i> should be set to a boolean of <b>TRUE</b> or <b>FALSE</b>. This state determines if the component is visible or not. It's default is set to <b> FALSE</b>.</i></li> 
</ul>
</ul>

<h3> ShoppingCartDialog</h3>
<ul>
<li> Dialog component used to display the items in a users shopping cart database. The component is imported into the <b>NavBar</b> to be displayed when the user clicks on the shopping cart icon.</li>
<li> The component needs the following props to be passed:</li>
<ul>
<li> open - <i> should be set to a boolean of <b>TRUE</b> or <b>FALSE</b>. This state determines if the component is visible or not. It's default is set to <b> FALSE</b>.</i></li> 
</ul>
</ul>

## Browse Styles Components

<h3>FilterBlueprintsAppBar </h3>
<ul>
<li> FilterBlueprintsAppBar is an app bar component that is imported into the BrowseByStyles layout. It is used to filter blueprints by different categories such as number of beds, baths, stories, sqft, etc. </li>
</ul>
<h3>BrowseStylesLayout: </h3>
<ul>
<li> BrowseStylesLayout is a  UI layout used to display blueprint options for a specific style(Spanish, Modern, Etc). To use it you import it into the appropriate file, pass the appropriate <b> StyleName </b> prop and have it wrap around the content you'd like displayed inside the plan selection area. 
</li>
</ul>

## Blueprint Pages Components

<h3>BlueprintItemPageLayout </h3>

<ul>
    <li> BlueprintItemPageLayout is a reusable component to be used as a landing page to display the details of each individual blueprint item for purchase. It will display the details of the blueprint such as the plan number, a photo gallery of images, a description, key features, and a 3D floor plan. It will also allow the user to add the plan to their cart with their preferred purchase options and  have the price displayed in USD for that blueprint plan. If the user likes the plan but would like to make customization requests there is a direct link on the page to the custom plan request contact form. </li>
    <li> The card currently needs the following props to be passed:  </li>
    <ul>
        <li> planNumber</li>
        <li> description</li>
        <li> beds</li>
        <li> baths</li>
        <li> stories</li>
        <li> sq_ft</li>
        <li> garages</li>
    </ul>
    <li> The card still needs to be set up so the following props can be passed:  </li>

 <ul>
        <li> <b> images </b> - <i> Pass the images that correspond to that blueprint for the image gallery </i> </li>
        <li> <b> price </b> - <i> Add price of blueprint </i> </li>
        <li> <b> 3DFloorPlan </b> - <i> Image of the 3D floorplan that is displayed for the client </i> </li>
    </ul>
</ul>

<h3> ImageGallery</h3>
<ul>
<li> ImageGallery is a reusable component that is to be imported into the BlueprintItemPageLayout to render the images that are uploaded for the specified plan number. This image gallery is to be used for <b>DESKTOP</b> view, it doesn't look good on mobile.</li>
<li> The CSS file that styles this component is <b>ImageGallery.module.css </b></li>
</ul>

<h3> ImageGalleryMobile</h3>
<ul>
<li> ImageGalleryMobile is a reusable component that is to be imported into the BlueprintItemPageLayout to render the images that are uploaded for the specified plan number. This image gallery is to be used for <b>MOBILE</b> view, it doesn't look good on desktop.</li>
<li> The CSS file that styles this component is <b>ImageGalleryMobile.module.css </b></li>
</ul>

## Forms Components

<h3> CustomPlanRequest: </h3>
<ul>
<li>
Users who are signed up for an account can request custom blueprints be made for their home project. Users will have to input their name, phone number, the size of their lot, a square footage estimate, select the type of home style(Ranch, Modern, Spanish, Mediterranean, Cottage, etc.), the type of project(New Home Build, Complete Home Renovation, Partial Remodel, etc.), and a message giving quick details about the type of project they're looking to build.
</li>
<li>
This information gets passed into emailjs where it'll be forwarded to the companies email and they can contact the individual to go more in depth about their desired project.
</li>
</ul>

<h3> FilterBlueprintsForm</h3>

<ul>
<li>
This form is to be placed on the landing page. There are inputs for a user to select their preferred number of bedrooms, bathrooms, stories, garages and square footage for a home floor plan. Once the user puts their selections and clicks on 'browse blueprints', it should take the user to the allBlueprints page and filter the selections shown based off the users indicated preferences. 
</li>

</ul>

<h3> ForgotPasswordForm</h3>

<ul>
<li>
This form is to be imported into the forgotpassword page. It is for users who forgot their password and need to get back into their account by having a reset password link sent to their registered email.
</li>

</ul>

<h3> LoginForm </h3>

<ul>
<li>
This form is to be imported into the login page. It is for registered users to log into their account by using their email and password.
</li>

</ul>

<h3> SignUpForm </h3>

<ul>
<li>
This form is to be imported into the  signup page. It is for unregistered users to sign up for an account. In order for users to perform actions like make purchases or submit custom plan requests, they will need to register for an account. To make an account, users are required to by submit their first name, last name, email, password and confirm password. There is an optional field for a company name if the user is registering on behalf of a company. 
</li>

</ul>

## Navigation Components

<h3> ShoppingCartDialog</h3>

<ul>
<li>This dialog is imported into the NavBar component and displays the items in a users cart. The user can view key details about the plan on the screen, add the item to their favorites, remove the item from their cart and go to the checkout page to purchase their items.</li>
</ul>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# SERVER SIDE DOCUMENTATION

## Dependencies

Dependencies List:

<ul>
<li>body-parser </li>
<li>cors </li>
<li>dotenv </li>
<li>express </li>
<li>mysql</li>
<li>nodemon </li>

</ul>

## API ROUTES

<h3> <b>I</b> - app.get - <i>/api/get</i> </h3>

<ul>
<li> This API route is grabbing all the blueprint data from the database so we can render every item for users to browse through on the <b>Browse All Blueprints</b> page. The API route is used in the <i>client</i> folder under <i>client/pages/allBlueprints/index.js</i> </li>
</ul>

<h3> <b>II</b> - app.delete - <i>/api/delete_cart/:planNumber</i> </h3>

<ul>
<li> This API route is used to delete a particular blueprint in a users cart. It uses the plan number to dynamically delete the matching plan in the database. </li>
<li>
When a user is browsing through the items in their cart and they click on the trash can icon in the upper right, the api call is triggered and the item is removed the cart items database. 
 </li>

<li> The API route is used in the <i>client</i> folder under <i>client/components/cards/ShoppingCartItemCard.js</i> </li>
</ul>

<h3> <b>III</b> - app.delete - <i>/api/delete_favorites/:planNumber</i> </h3>

<ul>
<li> This API route is used to delete a particular blueprint in a users favorites. It uses the plan number to dynamically delete the matching plan in the database. </li>
<li>
When a user is browsing through their favorites, if the item is in their favorites database the icon will appear as a heart filled icon. When a user clicks on the heart filled icon, the api call is triggered and the item is removed the favorites database. 
 </li>

<li> The API route is used in the <i>client</i> folder under <i>client/components/cards/BlueprintCard.js</i> <b>AND</b> <i>client/components/cards/ShoppingCartItemCard.js</i></li>
</ul>

<h3> <b>IV</b> - app.get - <i>/api/get_item_:planNumber</i> </h3>

<ul>
<li> This API route is used to to grab the information for a particular blueprint in the all blueprints database. It uses the plan number to dynamically grab all the information it needs by matching the planNumber in the database. </li>

<li> The API route is used in the <i>client</i> folder under <i>client/pages/browsebpbystyle/[style]/[planNumber].js</i> <b>AND</b> <i> NavBar.js</i></li>
<li> In <b>NavBar.js</b>, the API call is used to search the entire database by plan number. If the plan # exists in the database, the <i>planNumber</i> and <i>style</i> are returned. These are used to route to the blueprint page for this item. </li>
</ul>
