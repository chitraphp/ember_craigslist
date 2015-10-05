import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory:false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },
    save() {
      var params = {
        type: this.get('type') ? this.get('type') : "",
      };
      this.set('addNewCategory', false);
      this.sendAction('save', params);
    }
  }
});
