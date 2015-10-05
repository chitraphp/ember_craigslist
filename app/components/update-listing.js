import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    updateListing(listing) {
      var params = {
        owner: this.get('owner'),
        text: this.get('text'),
        image: this.get('image'),
        city: this.get('city'),
        title: this.get('title')
      };
      this.set('updateListingForm', false);
      this.sendAction('updateListing', listing, params);
    }

  }
});
