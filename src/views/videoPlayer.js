var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model));
    // '<div class="loading">Please wait...</div>');
    return this;
  },
  select: function() {
    this.on('change', this.render, this);
  },

  template: templateURL('src/templates/videoPlayer.html')

});
