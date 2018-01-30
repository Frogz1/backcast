var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.collection.models[0]));
    
    // '<div class="loading">Please wait...</div>');
    console.log(this.collection.models);
    return this.$el;
  },
  select: function() {
    this.on('change', this.render, this);
  },

  template: templateURL('src/templates/videoPlayer.html')

});
