Meteor.startup(function() {
  Todos.allow({
    'insert': function(userId, entry) {
      return entry.score === 0;
    }
  });
});
