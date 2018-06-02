$(document).ready(function() {

	$('.FB_reactions').facebookReactions({});
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
//comment button
$('#comment').on('click',(a)=>{
	a.preventDefault();
	$('.comment-section').toggleClass('hidden');	
});

//add comment
$('#add').on('click',(e)=>{
	e.preventDefault();
	var text = $('#text').val();
	var target = $('#content');
	var li = $('<li></li>');
	li.text(text);
	target.append(li);
	document.getElementById("text").value='';
	$('.comment-section').addClass('hidden');	
});

//add content
$('#button').on('click',function(){

	//set up all the varibles
	var date = new Date();
	var name = $('#name').val();
	var color = $("#color").val();
	var message = $('#message').val();

	//add the variables to the html content
	$("#Name").text(name);
	$("#Message").text(message).css({"color": color});
	if(date.getHours()<10){
		$("#hours").text('0'+date.getHours());
	}else{
		$("#hours").text(date.getHours());
	}
	
	$("#minutes").text(':'+date.getMinutes());

	//show the last container when the button is clicked
	$(".container:last").removeClass("hidden");


});
