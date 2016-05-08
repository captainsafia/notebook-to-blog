define(['base/js/namespace',
    'base/js/dialog',
    'jquery'], function(Jupyter, dialog, $) {
  function publish_to_medium() {
    var content = $('<p/>').html('Provide the information for your post.');
    dialog.modal({
      title: 'Publish to Medium',
      body: content,
      buttons: {
        Cancel: {
          'class': 'btn-danger'
        },
        Publish: {
          'class': 'btn-primary',
          'click': function() {
          }
        }
      }
    });
  }

  function place_ext_button() {
    if (!Jupyter.toolbar) {
      $([Jupyter.events]).on("app_initialized.NotebookApp", place_ext_button);
      return;
    }

    if ($("#publish-to-medium").length === 0) {
      Jupyter.toolbar.add_buttons_group([
        {
          'label': 'Publish to Medium',
          'icon': 'fa-smile-o',
          'callback': publish_to_medium,
          'id': 'publish-to-medium'
        },
      ]);
    }
  }

  function load_ipython_extension() {
    console.log('Loading notebook-to-blog extension...');
    place_ext_button();
  }

  return {
    load_ipython_extension: load_ipython_extension
  };
});
