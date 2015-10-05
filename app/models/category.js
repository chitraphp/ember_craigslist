import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  listings: DS.hasMany('listing', { async: true })

});
