export default function(editor, opt = {}) {
  const c = opt;
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const textType = domc.getType('text');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const textModel = textType.model;
  const textView = textType.view;
  const pfx = c.rilClsPfx;
  const TYPE = 'remoteItemList';

  domc.addType(TYPE, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        script: function() {
          console.log('content feed script');
        }
      },
    }, {
      isComponent(el) {
        if(el.getAttribute &&
          el.getAttribute('data-gjs-type') == TYPE) {
          return {
            type: TYPE
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:startfrom change:endText', this.updateScript);
        const comps = this.model.get('components');
        for (let i = 0; i < 10; i++) {
          comps.add(`
            <div data-js="remote content" class="${pfx}-cont">
              IMAGE

              TITLE

              CONTENT

            </div>
            
          `);
        }
        // Add a basic countdown template if it's not yet initialized
        // if (!comps.length) {
        //   comps.reset();
          
        // }

      }
    }),
  });
}
