import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('responsive');
  this.route('buttons', function() {});
  this.route('globalization', function() {
    this.route('scope');
  });
});

export default Router;
