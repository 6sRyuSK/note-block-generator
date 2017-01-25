$(function(){

  $("select").click(function(){
    var inst = $("[name=inst] option:selected").val();
    var note = $("[name=note] option:selected").val();
    $("span#selinst").text(inst);
    $("span#selnote").text(note);
    if(!inst == ""){
      $("#cmdOut").show();
    } else {
      $("#cmdOut").hide();
    }

  });
});