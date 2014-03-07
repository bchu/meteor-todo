Meteor.startup(function() {
  Todos.allow({
    'insert': function(userId, entry) {
      return entry.score === 0;
    },
    'update': function(userId, entry, fieldNames, modifier) {
      return modifier.$inc && modifier.$inc.score && modifier.$inc.score == 1;
    }
  });
});
