$(document).ready(function(){


function addtolist(event){
  event.preventDefault();

  //var checkbox = document.createElement('input');
  //checkbox.type = "checkbox";
  // var checkbox= $("#list").html('<input type="checkbox"/>').append();

  var enterfield1= $('#task-name').val();

  var enterfield2= $('#description').val();
  $('#list').append("<li>"+ "<input type='checkbox'class='checkbox'></input>" + enterfield1 + "<br/>" + enterfield2 +"</li>");
  $('#task-name').val("");
  $('#description').val("");

  event.preventDefault();

}

//first clicks add task
$('#savebutton').on("click", addtolist);


//task and descript added to list. But decription is hidden.
$('#list').on("change", ".checkbox", function(){

  $(this).parent().toggleClass("checked");

  console.log("hello", $(this));
})




// ($('.checkbox').on('change')){
//   console.log("hello");
// }


//   document.getElement('terms').onclick = function() {
//     // access properties using this keyword
//     if ( this.checked ) {
//         // if checked ...
//         alert( this.value );
//     } else {
//         // if not checked ...
//     }
//
//
//
// }


});
