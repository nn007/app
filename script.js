//facebook reaction plugin
$(document).ready(function() {

	$('.FB_reactions').facebookReactions({});
});

//load image from the user PC
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

//add content
$('#button').on('click',function(){

	//set up all the varibles
	var date = new Date();
	var name = $('#name').val();
	var color = $("#color").val();
	var message = $('#message').val();

	//add the variables to the html content
	$("#Name").text(name);
	$("#my-message").text(message).css({"color": color});
	if(date.getMinutes()<10){
		$("#minutes").text(': 0'+date.getMinutes());
	}else{
		$("#minutes").text(': '+date.getMinutes());
	}
	
	$("#hours").text(date.getHours());

	//show the last container when the button is clicked
	$(".container:last").removeClass("hidden");

});

//show input comment when the 'comment' is clicked
$('#comment').on('click',(a)=>{
	a.preventDefault();
	$('.comment-section').toggleClass('hidden');	
});

//array with the rection faces
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

	//take a random image from array
	var x = Math.floor(Math.random()*arr.length);
	//wait 2s before image reaction is added
	setTimeout(function(){
		var y = $('#commentIcon').attr('src',arr[x]);
	},2000);
});
