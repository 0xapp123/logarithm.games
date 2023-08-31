$(function(){
	
	var note = $('#note'),
		ts = new Date(2022, 12, 10, 9, 0, 0),
		newYear = true;
	
	// if((new Date()) > ts){
	// 	// The new year is here! Count towards something else.
	// 	// Notice the *1000 at the end - time must be in milliseconds
	// 	ts = (new Date()).getTime() + 10*24*60*60*1000;
	// 	newYear = false;
	// }
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " дн." + ( days==1 ? '':'' ) + ", ";
			message += hours + " час." + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " мин." + ( minutes==1 ? '':'' ) + " и ";
			message += seconds + " сек." + ( seconds==1 ? '':'' ) + " <br />";
			
			// if(newYear){
			// 	message += "осталось до Нового Года!";
			// }
			// else {
			// 	message += "осталось от текущего момента до окончания 10 дней!";
			// }
			
			// note.html(message);
		}
	});

	$('#count').countdown({
		timestamp	: ts,
		callback	: function(days){
			
			var message = "";
			
			message += days + " дн." + ( days==1 ? '':'' ) + ", ";
			
			// if(newYear){
			// 	message += "осталось до Нового Года!";
			// }
			// else {
			// 	message += "осталось от текущего момента до окончания 10 дней!";
			// }
			
			// note.html(message);
		}
	});
	
});
