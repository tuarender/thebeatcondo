var floorMenu = $('.btn.floorMenu');
var roomTypeArea = $('.roomTypeArea');
var printType = $('#printType');
var reservedIcon = $('#reservedIcon');
var roomTypeImg = $('#roomTypeImg');
var printImg = $('#printImg');

$(document).ready(function() {
    floorMenu.click(function() {
		var floor = this.dataset.floor;
		floorMenu.removeClass('active');
		$('#menu-'+floor).addClass('active');
	  	$('#floorPlanImg').attr('src','../images/floorPlan/'+floor+'.jpg');
	  	
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
		setReservedIcon(building, floor, type);
		
		$('#roomTypeModal').modal('toggle');
	});
	
	printType.click(function(){
		$('#roomTypeModal').modal('toggle');
		window.print();
	});
	
	reservedIcon.click(function(){
		var building = this.dataset.building;
		var floor = this.dataset.floor;
		var type = this.dataset.type;
		var localStorageKey = building + '-' + floor + '-' + type;
		
		var reserved = getReserved(localStorageKey);
		if (reserved !== null && reserved === "true") {
			removeReserved(localStorageKey);
		}
		else{
			setReserved(localStorageKey);
		}
	});
});

function setReservedIcon(building, floor, type) {
	var localStorageKey = building + '-' + floor + '-' + type;
	var reserved = getReserved(localStorageKey);

	if (reserved !== null && reserved === "true") {
		setReserved(localStorageKey);
	} else {
		removeReserved(localStorageKey);
	}
	
	reservedIcon.attr('data-building', building);
	reservedIcon.attr('data-floor', floor);
	reservedIcon.attr('data-type', type);
}

function setReserved(localStorageKey){
	localStorage.setItem(localStorageKey, "true");
	reservedIcon.removeClass("far").addClass("fas").addClass("reserved");
}

function removeReserved(localStorageKey){
	localStorage.setItem(localStorageKey, "false");
	reservedIcon.removeClass("reserved").removeClass("fas").addClass("far");
}

function getReserved(localStorageKey){
	return localStorage.getItem(localStorageKey);
}

function activateLink(floor) {
	$('.linkMapped').hide();
	$('#' + floor + 'LinkMapped').show(100);
	$('#floorPlanImg').attr('usemap', '#' + floor + 'FloorPlanMap');
}