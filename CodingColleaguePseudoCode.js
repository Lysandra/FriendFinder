/*

X 1.  home.html
    X -jumbotron
    X -button

X 2. survey.html
    X -10 questions
    X -Scale of 1 to 5 based on how much the user agrees or disagrees with a question.

X 3. server.js
    -npm express
    -npm body-parser
    -npm init (JSON package)
    -npm path

4. htmlRoutes.js
    X -GET route to `/survey` which should display the survey page.
    -A default, catch-all route that leads to `home.html` which displays the home page. 

X 5. apiRoutes.js
    X -GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    X -POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

X 6. app/data/friends.js
    X -Save all application data in this file as an array of objects.
    X -Each of these objects should roughly follow the format below.

    JSON
        {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1]
        }

7. Determine the user's most compatible friend:

    -Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    -With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
        Example: 
            * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
            * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
            * Total Difference: **2 + 1 + 2 =** **_5_**
    -Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
    -The closest match will be the user with the least amount of difference.

8. Most compatible friend:
    -Display the result as a modal pop-up.
    -The modal should display both the name and picture of the closest match.*/


/*Questions:
X 1. survey.html - Should I be using chosen-select with JS? https://harvesthq.github.io/chosen/#standard-select 
2. apiRoutes.js - Need explaination for POST route.name.
X 3. friends.js - Do enter in the friends via the survey.html? Or I POST not sure how this works OR should I but creating  an array of object for use in the friends.js file?
X 4. GitHub Repo - Home page; what are we linking to?
X 5. home.html - survey btn on click need to review on transition to survey.html, is this htmlRoutes.js
6. survey.js - requires path but paths is located in htmlRoutes.js do we need to require the file with that modules export process?
*/