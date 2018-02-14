
$(document).on("click", '#home', function(event) { 
  $('#bodyContainer').load('home.html');
});
$(document).on("click", '#meetings', function(event) { 
  $('#bodyContainer').load('meeting.html');
});
$(document).on("click", '#events', function(event) { 
  $('#bodyContainer').load('events.html');
});
$(document).on("click", '#transport', function(event) { 
  $('#bodyContainer').load('transport.html');
});
$(document).on("click", '#info', function(event) { 
  $('#bodyContainer').load('info.html');
});
$(document).on("click", '#back', function(event) { 
  $('#bodyContainer').load('home.html');
});
$(document).on("click", '#btn-a-g', function(event) { 
  $('#ajaxContainer').load('cat-a-g.html');
});
$(document).on("click", '#btn-h-n', function(event) { 
  $('#ajaxContainer').load('cat-h-n.html');
});
$(document).on("click", '#btn-o-t', function(event) { 
  $('#ajaxContainer').load('cat-o-t.html');
});
$(document).on("click", '#btn-u-z', function(event) { 
  $('#ajaxContainer').load('cat-u-z.html');
});
$(document).on("click", '#btn-0-9', function(event) { 
  $('#ajaxContainer').load('cat-0-9.html');
});


$(document).on("click", '.cat-a-g', function(event) { 
      $('#ajaxContainer').load('assets/companies/'+ $(this).attr('id')+'.html');
});

$(document).on("click", '.cat-h-n', function(event) { 
      $('#ajaxContainer').load('assets/companies/'+ $(this).attr('id')+'.html');
});
$(document).on("click", '.cat-o-t', function(event) { 
      $('#ajaxContainer').load('assets/companies/'+ $(this).attr('id')+'.html');
});
$(document).on("click", '.cat-u-z', function(event) { 
      $('#ajaxContainer').load('assets/companies/'+ $(this).attr('id')+'.html');
});
$(document).on("click", '.cat-0-9', function(event) { 
      $('#ajaxContainer').load('assets/companies/'+ $(this).attr('id')+'.html');
});

//DEBUG
$(document).on("click", '#ajaxContainer', function(event) { 
  var id=$(this).attr('id');
  console.log("ID:"+id);
});
