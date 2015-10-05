import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: true,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing() {
      var params = {
        owner: this.get('owner'),
        text: this.get('text'),
        image: this.get('image'),
        category: this.get('category'),
        date_added: Date.now()
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
