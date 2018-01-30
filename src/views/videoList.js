var VideoListView = Backbone.View.extend({
  // el: '#app',
  select: function() {
    this.on('change', this.render(), this);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
