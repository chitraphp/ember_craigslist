import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
  saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },

    deleteListing(listing) {
        if (confirm('Are you sure you want to delete this listing?')) {
          listing.destroyRecord();
          this.transitionTo('category');
        }
      },

      updateListing(listing, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            listing.set(key,params[key]);
          }
        });
        listing.save();
        this.transitionTo('category');
      }
  }
});
