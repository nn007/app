$(document).ready(function() {

	$('.FB_reactions').facebookReactions({

		//postUrl: "save.php"
	});
});

function showImage() {
	
	if(this.files && this.files[0]){

		var obj = new FileReader();
		obj.onload = function(data){
			var image = document.getElementById('image');
			image.src = data.target.result;
			image.style.display = "block";
		}
		obj.readAsDataURL(this.files[0]);
	}
}

$('#button').on('click',function(){

	//set up all the varibles
	var date = new Date();
	var name = $('#name').val();
	var color = $("#color").val();
	var message = $('#message').val();

	//add the variables to the html content
	$("#NAME").text(name);
	$("#MESSAGE").text(message).css({"color": color});
	$("#hours").text(date.getHours());
	$("#minutes").text(':'+date.getMinutes());

	//show the last container when the button is clicked
	$(".container:last").removeClass("hidden");

	

});

$('.like').on('mouseenter',function(){
	$('img').removeClass('hidden');
	$('.icons').css({"background":"white"});
});
$('.like').on('mouseleave',function(){
	$('img').addClass('hidden');
});