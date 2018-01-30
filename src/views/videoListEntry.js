var VideoListEntryView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  },
  select: function() {
    this.on('change', this.render(), this);
  },

  template: templateURL('src/templates/videoListEntry.html')

});
