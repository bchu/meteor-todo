Template.list.todos = function() {
  return Todos.find();
};

Template.app.events({
  'click button': function(event) {
    var taskName = event.target.parentElement.querySelector('input').value;
    Todos.insert({name: taskName});
  }
});

Template.list.events({
  'click .delete': function(event) {
    var id = event.target.parentElement.getAttribute('data-id');
    Todos.remove(id);
  }
});
