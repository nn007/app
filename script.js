//facebook reaction plugin
$(document).ready(function() {

	$('.FB_reactions').facebookReactions({});
	$('body, html').css({
		'opacity': 1,
		'display': 'block',
		'transition': 'all 1s ease'
	});
	//use mouse or enter 
	$('#button').keypress(function (e) {
		e.preventDefault();
	  if (e.which == 13) {
	    $(this).click();
	    return false;    
	  }
	});
	$('#add').keypress(function (x) {
		x.preventDefault();
	  if (x.which == 13) {
	    $(this).click();
	    return false;    
	  }
	});
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

//take screenshot
function screenshot(box){
	//copy the webpage
	var restorpage  = document.body.innerHTML;
	//get the specific content that you want to print
	var content = document.getElementById('box').innerHTML;
	//body gets only the specific content
	document.body.innerHTML = content;
	//run the window print
	window.print();
	//restore the body webpage after the print
	document.body.innerHTML = restorpage;
}

//add content and validation
$('#button').on('click',function(){

	//set up all the varibles
	var name = $('#name').val();
	var color = $("#color").val();
	var message = $('#message').val();
	var file = $('#file').val();
	var date = new Date();

	if(name && color && message && file){
		
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
	}
	else{
		alert("Toate campurile sunt necesare :)");
	}

});

//show input comment when the 'comment' is clicked
$('#comment').on('click',function(a){
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

	//take a random image from array
	var x = Math.floor(Math.random()*arr.length);

	//take all the values and create all the elemnts
	var myText = $('#text').val();
	var target = $('#content');
	var li = $('<li></li>');
	var image = $('<img/>');

	//wait 2s before image reaction is added
	setTimeout(function(){
		//set the source to image
		image.attr('src',arr[x]);
		image.attr('alt',"");
		
	},2000);

	//append content to the list item
	li.text(myText).append(image);

	//append everything to the specific target
	target.append(li);
	
	document.getElementById("text").value='';
	$('.comment-section').addClass('hidden');
});


