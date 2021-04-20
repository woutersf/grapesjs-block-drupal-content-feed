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
          console.log('content feed script', this.model);

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
        fetch(c.feedUrl)
          .then(response => response.json())
          .then(repos => {
            console.log('looping repos');
            const reposList = repos.map(repo => { 
              comps.add(`
            <div data-js="remote content" class="${pfx}-cont">
              ${repo.html_url}
              <h4>
                ${repo.name}
              </h4>
              <div>
                ${repo.description}
              </div>
            </div>
          `);
            });
          })
        .catch(err => console.log(err))

      }
    }),
  });
}
