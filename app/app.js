define(['components/aura/lib/aura'], function(Aura) {
  Aura()
    .use('extensions/aura-awesome-extension')
    .use('extensions/aura-backbone')
    .start({ widgets: 'body' }).then(function() {
      console.warn('Aura started...');
    });
});