/**
 * Created by kinfen on 16/5/24.
 */

var socket;

$(document).ready(function (){
	
	$('[form]').on('submit', submitHandler);
	socket = io("http://localhost:4000");
	socket.on('connect', function(msg){
		console.log('connect success' + msg);
	});
	socket.on('error', function(error){
		console.log('connect fail' + error);
	});
	socket.on('connect_error', function(reason){
		console.log(reason);
	});
	socket.on('ping', function(reason){
		console.log('ping' + reason);
	});
	socket.on('pong', function(reason){
		console.log('ping' + reason);
	});
	console.log('client try connect');
	$('[name=form2]').on('submit', emitMessage);
	socket.on('msg', function(msg){
		console.log(msg);
		
	});
})

function submitHandler(e){
	e.preventDefault();
	var form = e.currentTarget;
	var data = {
			name:form.name.value,
			content:form.content.value,
			author:form.author.value,
		};
	$.ajax({
		url:'/api/GuestMessage',
		type:"POST",
		data:data,
		success:function (data){
			console.log(data);	
		},
		error:function (xhr, err){
			console.log(err);
		},
	});
	return false;
}
function emitMessage(e){
	e.preventDefault();
	var form = e.currentTarget;
	socket.emit('msg', 'client:' + form.content.value);
	return false;
}
