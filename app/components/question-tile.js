import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('delete question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
