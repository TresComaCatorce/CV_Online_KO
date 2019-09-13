const FIRST_PARALAX_MIN_HEIGHT = 230;

var masterViewModel = 
{
    test1 : ko.observable("TEST")
};

//Comportamiento de la imagen de perfil en el scroll.
var profilePicScaleOnScroll = () =>{
	let profilePicElement = document.getElementById("cbf-section-1");
	let rect;
	let viewPortHeight = parseInt($(window).height());
	let halfViewPortHight = parseInt(viewPortHeight / 2);
	let closeless = parseInt(viewPortHeight * .5);
	
	// console.log(viewPortHeight, halfViewPortHight, closeless);
	
	$(document).scroll(()=>{
		rect = profilePicElement.getBoundingClientRect();
		// console.log(rect.top, rect.bottom);
		let imagePosition = parseInt((rect.bottom+rect.top)/2);
		
		if( imagePosition>0 && Math.abs(parseInt(halfViewPortHight-imagePosition))<= closeless )
		{
			$("#cbf-section-1").hasClass("hidden") ? $(profilePicElement).removeClass("hidden") : undefined;
		}
		else
		{
			(!$("#cbf-section-1").hasClass("hidden")) ? $(profilePicElement).addClass("hidden") : undefined;
		}
	});
};

var setFirstParallaxHeight = () =>{
	let viewPortHeight = parseInt($(window).height());
	let firstSectionHeight = parseInt($("#cbf-section-1").height());
	let firstParallaxHeight = viewPortHeight - firstSectionHeight;
	
	firstParallaxHeight = firstParallaxHeight<FIRST_PARALAX_MIN_HEIGHT ? FIRST_PARALAX_MIN_HEIGHT : firstParallaxHeight;

	$("#cbf-parallax-1").css("height", firstParallaxHeight.toString());
}

$(document).ready(function()
{
	ko.applyBindings( masterViewModel );
	$('.parallax').parallax();
	$('.tooltipped').tooltip();


	setFirstParallaxHeight();

	profilePicScaleOnScroll();
	
});