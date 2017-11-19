
$(function() {

	$("#submit").on("click", function(event){
		event.preventDefault();
		var curBurger = $("#newBurger").val().trim()
		var newBurgerObj = {
			newBurger:curBurger
		}

			console.log(newBurger)
		$.ajax("/burgers/add", {
	      type: "POST",
	      data: newBurgerObj
	    }).then(
	      function() {
	        console.log("created new newBurger");
	        // Reload the page to get the updated list
	        location.reload();
	    });
	});

	$(".btn-primary").on("click", function(event){
		var id = $(this).data("id");
		console.log(id)
		var update ={
			devoured: 1
		}
		//console.log(id)
		$.ajax("/burgers/" + id, {
	      type: "PUT",
	      data: update
	    }).then(
	      function() {
	        console.log("Burger Devoured!!!")
	        // Reload the page to get the updated list
	        location.reload();
	    });
	})
	$(".btn-danger").on("click", function(event){
		var id = $(this).data("id");
		console.log(id)
		var deletion ={
			delete: 1
		}
		$.ajax("/burgers/" + id, {
	      type: "DELETE",
	      data: deletion
	    }).then(
	      function() {
	        console.log("Burger Deleted!!!")
	        // Reload the page to get the updated list
	        location.reload();
	    });
	})
});

