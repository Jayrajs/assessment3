# books-app - Solution for Assessment 2

# Question

REQUIREMENTS:

Page 1

1. Search form (mandatory fields) 
    1. Title 
    2. Author 

2. Directory of books 
    1. Display a list of 10 books by default, with the titles in alphabetical order 
    2. Each item in the books list should display the following: 
        1. Thumbnail of the Cover 
        2. Title 
        3. Author 
        4. Edit button (that will lead to Page 2) 

    3. Search result should include all possibilities based on keywords found in Title or Author fields 
    4. You may use GET or POST methods for the search 

Page 2

1. Edit book form (mandatory fields) 
    1. Title 
    2. Author
    3. Save button (saves changes made before returning to the Books List) 
    4. Cancel button (brings you back to the Books List without saving) 

2. Editing a book 
    1. Pre-populate the form with the book’s info (i.e. if you entered this page by clicking on the Edit button of Book 1, the form should display the Title, Author, and Thumbnail Cover of Book 1) 
    2. Saving should be done by the POST method only 
    3. Book List should also reflect the changes made to the book

  
# Points to note

### Do not forget npm init / bower init ###
  
  When you work in a team, everyone should be aware of the packages that you are using and package.json / bower.json tell them what all packages does this project depend on. 
  
### Don't forget to add a .gitignore ###

  Adding unnecessary files to your repo will increase the size of the repo such as node_modules, bower_components, .idea folder etc.
    
    For eg., the `.idea` folder contains meta data related to your project. like.. 
    * data structures to access files quickly & for auto completion
    * local history
    * ... lots of stuff that other's probably don't need!
    
    These will be different for all the people working on the project. And keeping this in repo means you'll have to maintain and merge the changes to files. 
    
    Use any free service to generate a comprehensive gitignore file for you such as https://www.gitignore.io/

### More things to take note of ###
  
1. Avoid using variables without declaring them with `var` - it pollutes the global scope (meaning you'll run out of variable names) and is generally considered bad for memory consumption. Believe us, this _WILL_ come to bite you  in production applications!

2. Check empty form submissions. Generally a good practice and shows that you're thorough with your data validation before submitting to an API.

3. Check if data is received on backend as expected and log any error messages for easier debugging. It does not make sense if you only return a 500 error and don't know why it happened. 

4. `npm install` VS `npm install --save`

5. Always display error messages when encountered in catch callbacks on the front end. 

6. Never expose bower.json / package.json. The world doesn't need to know what packages you're using and neither should you tell them. Move `bower.json` out of the `public` directory and add a static path to the `bower_components` folder in express. 

    `app.use('/bower_components', express.static(__dirname + '/bower_components'));`