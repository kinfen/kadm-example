/**
 * Created by kinfen on 16/5/24.
 */
$(document).ready(function (){
	$('form').on('submit', submitHandler);
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
