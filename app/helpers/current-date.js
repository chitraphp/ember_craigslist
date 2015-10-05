import Ember from 'ember';

export function currentDate() {
  return moment().calendar();
}

export default Ember.Helper.helper(currentDate);
