var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function() {
    
    this.videos = new Videos(window.exampleVideoData);
    // console.log(this.videos);
    this.listenTo(this.videos, 'change', this.render());

  },


  render: function() {
    // console.log(this.videos);
    this.$el.html(this.template());
    
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
    
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    // this.$el.append(this.searchView.render().el);
    // this.$el.append(this.videoPlayerView.render().el);
    // this.$el.append(this.videoListView.render().el);
    // this.$el.append(this.videoListEntryView.render().el);


    return this.el;
    
  },
  renderVideo: function() {
    // var videoPlayerView = new VideoPlayerView({model: video});
    this.$el.append(videoPlayerView.render());
  },
  

  template: templateURL('src/templates/app.html')

});
