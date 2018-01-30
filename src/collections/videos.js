var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {
    
    this.on('change', this.render, this);
  }
  
  

});
