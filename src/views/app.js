var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function() {
    
    this.videos = new Videos();
    console.log(this.videos);
    this.searchView = new SearchView();
    this.videoPlayerView = new VideoPlayerView({});
    this.videoListView = new VideoListView({});
    this.videoListEntryView = new VideoListEntryView({});
    
    
    
    this.listenTo(this.videos, 'change', this.render());
    this.render();
  },


  render: function() {
    console.log(this.videos);
    this.$el.html(this.template(this.videos));
    
    this.$el.append(this.searchView.render().el);
    this.$el.append(this.videoPlayerView.render().el);
    this.$el.append(this.videoListView.render().el);
    this.$el.append(this.videoListEntryView.render().el);


    return this.el;
    
  },
  renderVideo: function() {
    var videoPlayerView = new VideoPlayerView({model: video});
    this.$el.append(videoPlayerView.render());
  },
  

  template: templateURL('src/templates/app.html')

});
