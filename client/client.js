Template.list.todos = function() {
  return Todos.find({}, {sort: {score: -1}});
};

Template.app.events({
  'click button': function(event) {
    var taskName = event.target.parentElement.querySelector('input').value;
    Todos.insert({name: taskName, score:0});
  }
});

Template.list.events({
  'click .delete': function(event) {
    var id = event.target.parentElement.getAttribute('data-id');
    Todos.remove(id);
  },
  'click .upvote': function(event) {
    var id = event.target.parentElement.getAttribute('data-id');
    Todos.update(id, {$inc: {score: 1}});
  }
});
