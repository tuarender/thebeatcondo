var floorMenu = $('.btn.floorMenu');
var roomTypeArea = $('.roomTypeArea');
var printType = $('#printType');
var priceSpan = $('#price');
var roomTypeImg = $('#roomTypeImg');
var printImg = $('#printImg');
var printPrice = $('#printPrice');

$(document).ready(function() {
    floorMenu.click(function() {
		var floor = this.dataset.floor;
		floorMenu.removeClass('active');
		$('#menu-'+floor).addClass('active');

		$(".floorPlanImg").fadeOut(0);
		$("#floorPlanImg"+floor).fadeIn(200)
	  	activateLink(floor);
	});
	
	roomTypeArea.click(function(){
		var building = this.dataset.building;
		var floor = this.dataset.floor;
		var type = this.dataset.type;
		var price = this.dataset.price;
		
		roomTypeImg.attr('src','../images/floorPlan/'+building+'/'+type+'.jpg');
		printImg.attr('src','../images/floorPlan/'+building+'/'+type+'.jpg');
		priceSpan.html(price);
		printPrice.html(price);
	
		$('#roomTypeModal').modal('toggle');
	});
	
	printType.click(function(){
		$('#roomTypeModal').modal('toggle');
		window.print();
	});
});

function activateLink(floor) {
	$('.linkMapped').hide();
	$('#' + floor + 'LinkMapped').fadeIn(200);
	$('#floorPlanImg').attr('usemap', '#' + floor + 'FloorPlanMap');
}