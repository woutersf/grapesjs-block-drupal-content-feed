import {
  itemListRef
} from './consts';

export default function(editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  const pfx = c.rilClsPfx;
  const style = c.defaultStyle ? `<style>
    .${pfx} {
      text-align: center;
      font-family: Helvetica, serif;
    }

    .${pfx}-block {
      display: inline-block;
      margin: 0 10px;
      padding: 10px;
    }

  </style>` : '';
  console.log("feedUrl", c.feedUrl);

  if (c.blocks.indexOf(itemListRef) >= 0) {
    bm.add(itemListRef, {
      label: c.labelFeedBlock,
      category: c.labelFeedBlockCategory,
      category: 'cat',
      attributes: {class:'fa fa-rss-square'},
      content: `
        <div class="${pfx}" data-gjs-type="remoteItemList"></div>
        ${style}
      `
    });
  }
}
