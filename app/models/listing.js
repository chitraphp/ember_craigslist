import DS from 'ember-data';

export default DS.Model.extend({
  owner:DS.attr(),
  text: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
