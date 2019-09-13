var masterViewModel = 
{
    test1 : ko.observable("TEST")
};

//Comportamiento de la imagen de perfil en el scroll.
var profilePicScaleOnScroll = () =>{
	let profilePicElement = document.getElementById("cbf-profile-pic");
	let rect;
	let viewPortHeight = $(window).height();
	let halfViewPortHight = viewPortHeight / 2;
	let closeless = viewPortHeight * .3;

	console.log(viewPortHeight, halfViewPortHight, closeless);

	$(document).scroll(()=>{
		rect = profilePicElement.getBoundingClientRect();
		// console.log(rect.top, rect.bottom);
		
		if( halfViewPortHight-rect.top <= closeless && halfViewPortHight-rect.top>=0 )
		{
			console.log("a");
			(!$("#cbf-profile-pic").hasClass("scaled")) ? $(profilePicElement).addClass("scaled") : undefined;
		}
		else
		{
			console.log("b");
			$("#cbf-profile-pic").hasClass("scaled") ? $(profilePicElement).removeClass("scaled") : undefined;
		}
	});
};

$(document).ready(function()
{
	ko.applyBindings( masterViewModel );
	$('.parallax').parallax();


	

	profilePicScaleOnScroll();
	
});