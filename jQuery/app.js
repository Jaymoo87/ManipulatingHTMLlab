$(document).ready(function (){

//-----step 1-----
    //add button to body
$('body').append('<button>Press Me Nicely</button>');

//add message to button when clicked.
$('button').click(function () {

    alert("Oh.. WOW.. that felt very good");
});
//-----step 2-----
// add click event to the submit button for the textbox
$('#msgbtn').click(function (){
    //alert message is the value of the input = #textbox
    alert($('#textbox').val())
});
//-----step 3-----
// styled div as a black block
$('div').css({
    'display': 'block',
    'height': '50px',
    'width': '50px',
    'background-color': 'black',
});

// just coming in clutch all over the place. random color function
function randomColor() {
    const r = [Math.floor(Math.random() * 256)];
    const g = [Math.floor(Math.random() * 256)];
    const b = [Math.floor(Math.random() * 256)];
    
    const headColor = "rgb(" + r + " , " + g + " , " + b + ")"
    return headColor;
    };

    //changes the div to a random color on mouseover
$('div').mouseover(function(){

    $('div').css({'background-color': randomColor()});
});
 
//changes back to black when the cursor leaves
$('div').mouseleave(function(){

    $('div').css({'background-color': 'black'})
})
//-----step 4-----
//add paragraph and the text within it, into the HTML body
$('body').append("<p>'This paragraph loves to get touched. Touch it good. Touch it really good and it might change colors.... mmmmmm.'</p>")

//change to a random text color when click, 
$('p').click(function(){
 
    $('p').css({'color': randomColor(),
                // this is so the user cannot highlight the text, Thanks Luke!
                'user-select': 'none',
    });

});
//-----step 5-----
//creating a <button> and an empty <div> that will add a <span> inside.
$('body').append('<button id="name">Press me with Vigor!</button>');
$('body').append('<div id="namediv"></div>');
   
// used id names (#) to specify the button and div that are referenced.
    $('#name').click(function(){
        //adds <span> to the <div>
     $('#namediv').append('<span>Justin "The Vigorous" Murrah</span>')
    });
//-----step 6-----
    const friends = ['Jen', 'Jamie', 'Emily', 'Tom', 'Sequoya', 'Melissa', 'Kristen', 'Logan', 'Rowan', 'Maximus'];
    let friendcount = 0;
    
    $('#ulbutton').click(function(){

        if (friends[friendcount]) {
        
            $('#friendlist').append('<li>' + friends[friendcount] + '</li>');
           
            friendcount++;
    }});


});






