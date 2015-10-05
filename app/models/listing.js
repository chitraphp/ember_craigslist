import DS from 'ember-data';

export default DS.Model.extend({
  owner:DS.attr(),
  text: DS.attr(),
  image: DS.attr(),
  date_added: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
