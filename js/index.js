const FIRST_PARALAX_MIN_HEIGHT = 230;

var masterViewModel = 
{
    test1 : ko.observable("TEST")
};

//Comportamiento de la imagen de perfil en el scroll.
var profilePicScaleOnScroll = () =>{
	let animatedElementsIds = ["cbf-section-1", "cbf-section-2", "cbf-section-3", "cbf-section-4"];

	animatedElementsIds.forEach( animatedElementId =>{
		let animatedHtmlElement = document.getElementById(animatedElementId);
		let rect;
		let viewPortHeight = parseInt($(window).height());
		let halfViewPortHight = parseInt(viewPortHeight / 2);
		let closeless = parseInt(viewPortHeight * .35);
		
		$(document).scroll(()=>{
			rect = animatedHtmlElement.getBoundingClientRect();
			// console.log(rect.top, rect.bottom);
			let imagePosition = parseInt((rect.bottom+rect.top)/2);
			
			if( imagePosition>0 && Math.abs(parseInt(halfViewPortHight-imagePosition))<= closeless )
			{
				$(`#${animatedElementId}`).hasClass("hidden") ? $(animatedHtmlElement).removeClass("hidden") : undefined;
			}
			else
			{
				(!$(`#${animatedElementId}`).hasClass("hidden")) ? $(animatedHtmlElement).addClass("hidden") : undefined;
			}
		});
	});
};

var setFirstParallaxHeight = () =>{
	// let viewPortHeight = parseInt($(window).height());
	// let firstSectionHeight = parseInt($("#cbf-section-1").height());
	// let firstParallaxHeight = viewPortHeight - firstSectionHeight;
	
	// firstParallaxHeight = firstParallaxHeight<FIRST_PARALAX_MIN_HEIGHT ? FIRST_PARALAX_MIN_HEIGHT : firstParallaxHeight;

	// $("#cbf-parallax-1").css("height", firstParallaxHeight.toString());
}

$(document).ready(function()
{
	ko.applyBindings( masterViewModel );
	M.AutoInit();


	setFirstParallaxHeight();

	profilePicScaleOnScroll();
	
});