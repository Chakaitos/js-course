$(function () {

  var $root = $('form.new-puppy');

// View Interaction

  $root.on('submit', function (e) {
    // TODO
    e.preventDefault();

    var puppyObj = {
    	name: $(".name", $root).val(),
    	image_url: $(".image", $root).val()
    }

    puppies.create(puppyObj);
  });

});
