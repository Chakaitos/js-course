(function () {

  var $root = $("#puppy-showcase")
  var puppyTemplate = $("#templates .puppy").html()
  var rankTemplate = $("#templates .rank").html()

// View Interaction

  // Using event delegation on the $root because the
  // because the image is in the template to be rendered.
  $root.on('click', '.vote-image', function (e) {
    // TODO
    puppies.castVote($(this).closest(".puppy").data("id"));
  });


// Model Interaction

  puppies.on("create", function (puppy) {
    console.log('Spawned puppy:', puppy);
    // TODO
    var newPuppyHtml = Robin.render(puppyTemplate, puppy);
    $root.append(newPuppyHtml);
  });

  puppies.on('vote-cast', function (puppy) {
    console.log('Vote cast for:', puppy);
    // TODO    
    var newVoteHtml = Robin.render(rankTemplate, puppy);
    $("[data-id='"+ puppy.id +"'] .vote-count").html(newVoteHtml);
  });

})();
