var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo('click', this.model.select());
  },
  render: function() {
    
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  

  template: templateURL('src/templates/videoListEntry.html')

});
