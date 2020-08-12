/*---------------------------------Home/About/skill/Here me------------------------------- */
$(document).ready(function() {-
	$("#head1").click(function(){
		$("#article").show();
		$("#aboutMinhaj").show();
		$("#skill").show();
		$("#pol").show();
		$(".hereMe").show();
		$("footer").show();
	});
	$("#head2").click(function(){
		$("#htmlMain").hide();
		$("#article").hide();
		$("#aboutMinhaj").show();
		$("#skill").hide();
		$("#pol").hide();
		$(".hereMe").hide();
		$("footer").show();
	});
	$("#head3").click(function(){
		$("#htmlMain").hide();
		$("#article").hide();
		$("#aboutMinhaj").hide();
		$("#skill").hide();
		$("#pol").hide();
		$(".hereMe").show();
		$("footer").show();
	});
	$("#head4,#skillBtn").click(function(){
		$("#htmlMain").hide();
		$("#article").hide();
		$("#aboutMinhaj").hide();
		$("#skill").show();
		$("#pol").hide();
		$(".hereMe").hide();
		$("footer").show();
	});
});
/*---------------------------------------------Navigation Bar---------------------------------------------*/
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function validation(){
	var name=document.forms["myForm"]["fname"].value;
	var phone= document.myForm.phone.value;
	var email= document.myForm.email.value;
	var message=document.myForm.message.value;

	if(name==""){
		alert("Name can not be blank");
		return false;
	}
}