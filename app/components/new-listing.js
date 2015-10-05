import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing() {
      var params = {
        owner: this.get('owner'),
        text: this.get('text'),
        image: this.get('image'),
        title:this.get('title'),
        city:this.get('city'),
        category: this.get('category'),
        date_added: Date.now()
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    },


  }
});
