import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('indicator-light-bulb', 'Integration | Component | indicator light bulb', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{indicator-light-bulb}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#indicator-light-bulb}}
      template block text
    {{/indicator-light-bulb}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
