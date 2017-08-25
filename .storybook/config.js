import { configure } from '@storybook/react';
function loadStories() {
  // when importing things dynamically, you still have to use require
  require('../src/index.css');
  require('../src/components/MenuItemComponent.story');
  require('../src/components/MenuComponent.story');
  require('../src/components/OrderTableComponent.story');
  require('../src/components/OrderFormComponent.story');
  require('../src/components/OrderPageLayout.story');
  require('../src/components/OrderPage.story');
  // Require your stories here...
}
configure(loadStories, module);
