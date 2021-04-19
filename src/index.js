import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import {
  itemListRef
} from './consts';

export default grapesjs.plugins.add('gjs-component-remoteItemList', (editor, opts = {}) => {
  let c = opts;

  let defaults = {
    blocks: [itemListRef],

    // Default style
    defaultStyle: true,

    // The feedUrl (where to fetch the content)
    feedUrl: '',

    // Countdown label
    labelFeedBlock: 'External Data Feed',

    // Countdown category label
    labelFeedBlockCategory: 'Extra',

    // remoteItemList class prefix
    rilClsPfx: 'remoteItemlist',
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  // Add components
  loadComponents(editor, c);

  // Add components
  loadBlocks(editor, c);

});
