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

var arr = [
  'img/like.png',
  'img/love.png',
  'img/ha.png',
  'img/oo.png',
  'img/sad.png',
  'img/mad.png'
];
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

	var x = Math.floor(Math.random()*arr.length);
	
	setTimeout(function(){
		var y = $('#commentIcon').attr('src',arr[x]);
	},2000);
});

//add content
$('#button').on('click',function(){

	//set up all the varibles
	var date = new Date();
	var name = $('#name').val();
	var color = $("#color").val().toLowerCase();
	var message = $('#message').val();

	//add the variables to the html content
	$("#my-name").text(name);
	$("#my-message").text(message).css({"color": color});

	if(date.getMinutes()<10){
		$("#minutes").text('0'+date.getMinutes());
	}else{
		$("#minutes").text(date.getMinutes());
	}
	
	$("#hours").text(date.getHours()+":");

	//show the last container when the button is clicked
	$(".container:last").removeClass("hidden");

});
