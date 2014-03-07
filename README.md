# Meteor Todo Example App

Brian Chu

Hackers@Berkeley

Meteor only runs on Unix OSes (OSX, Linux, etc.)
Make sure to install Meteor with: `curl https://install.meteor.com/ | sh`.

Go to [briantodo.meteor.com](http://briantodo.meteor.com) to view the finished app.

### Documentation:
* [Meteor docs](http://docs.meteor.com/)
* [Handlebars (template language)](http://handlebarsjs.com/)
* [Meteor extensions to Handlebars](https://github.com/meteor/meteor/wiki/Handlebars)
* [MongoDB modifiers](http://docs.mongodb.org/manual/tutorial/modify-documents/#Updating-ModifierOperations)
* [Mongo selectors](http://docs.mongodb.org/manual/reference/operator/)

### Things you can add:
1. Add downvoting
    * You will need to modify the template. The HTML code for a down arrow is ` &darr;`
    * You will need to add an event listener to clicks on the downvote arrow
2. Prevent tasks from being downvoted below 0
    * You will need to expand on the server update code
3. Add a timestamp to tasks
    * This is a bit hard, feel free to skip.
    * You will need to modify the template
    * Look up the JavaScript Date class. (create Date objects with new Date())
4. Let users set their name
    * This is a bit complicated. You will need to add a text input or some kind of prompt for users to add their names.
    * Then you need to associate that with todo objects
    * You also need to change the template

### Advanced things you can add:
1. Being able to edit tasks:
    * You will need to change the todo items to be text input elements

### If you know git:
The `master` branch starts out with the basic outline of the project. The `final` branch has the finished project.

### Steps:
1. View empty site
2. Add collection
3. Add app template
4. Add intial insert
5. Add initial display of todos
6. Add todo event, remove server initial insert
7. Note need for meteor reset
7. Open in another browser
8. Deletion of todos - note data-id
9. Upvote - need to add new fields
10. Note that it doesn't sort
11. Add sorting
12. Show how to hack
13. Insert validation
14. Show how to hack update
15. Update validation
16. Show latency compensation / validation
17. Deploy
18. Next steps