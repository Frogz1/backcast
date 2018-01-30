var VideoListView = Backbone.View.extend({
  el: '.video-list',
  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
  },
  select: function() {
    this.on('change', this.render(), this);
  },
  render: function() {
    this.$el.children().detach();
    console.log(this.collection);
    this.collection.forEach(
      this.renderVideo, this);
    // this.$el.html(this.template(this.model));
    return this.$el;
  },
  renderVideo: function(video) {
    var videoListEntry = new VideoListEntryView({model: video });

    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
