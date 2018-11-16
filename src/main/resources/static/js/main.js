var floorMenu = $('.btn.floorMenu');
var roomTypeArea = $('.roomTypeArea');
var printType = $('#printType');
var roomTypeImg = $('#roomTypeImg');
var printImg = $('#printImg');

$(document).ready(function() {
    floorMenu.click(function() {
		var floor = this.dataset.floor;
		floorMenu.removeClass('active');
		$('#menu-'+floor).addClass('active');
		
		$("#floorPlanImg").fadeOut(200, function() {
            $("#floorPlanImg").attr('src','../images/floorPlan/'+floor+'.jpg');
        }).fadeIn(200);
	  	
	  	activateLink(floor);
	});
	
	roomTypeArea.click(function(){
		var building = this.dataset.building;
		var floor = this.dataset.floor;
		var type = this.dataset.type;
		var price = this.dataset.price;
		
		roomTypeImg.attr('src','../images/floorPlan/'+building+'/'+type+'.jpg');
		printImg.attr('src','../images/floorPlan/'+building+'/'+type+'.jpg');
		$('#price').html(price);
	
		$('#roomTypeModal').modal('toggle');
	});
	
	printType.click(function(){
		$('#roomTypeModal').modal('toggle');
		window.print();
	});
});

function activateLink(floor) {
	$('.linkMapped').hide();
	$('#' + floor + 'LinkMapped').show(100);
	$('#floorPlanImg').attr('usemap', '#' + floor + 'FloorPlanMap');
}