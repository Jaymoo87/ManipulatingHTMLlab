document.addEventListener("DOMContentLoaded", function (){

//create button with "nice" text content.
let button = document.createElement('button');
btntext = document.createTextNode('Press Me Nicely');
//add "nice" button to HTML
button.appendChild(btntext);
document.body.appendChild(button);

//create and insert div into the HTML
let div = document.createElement('div')
div.id = "colordiv"
document.body.appendChild(div)

div.addEventListener('mouseover', function(){

    div.style.backgroundColor = randomColor();
});


div.addEventListener('mouseleave', function(){

    div.style.backgroundColor = 'black';
});

//activates an alert window with a "nice?" message.
    button.addEventListener('click', function () {

                window.alert("Oh.. WOW.. that felt very good")
    });

    
    
    //gets button from HTML
    let msgbtn = document.getElementById("msgbtn");
    
    //click event to the submit button
    msgbtn.addEventListener('click', function(e) {
        
        // gets the value of the input (#textbox) element. (**.value**)
        let msgtext = document.getElementById("textbox").value;
        // alert window with #textbox value
        window.alert(msgtext);
        
        
    });
    function randomColor() {
        const r = [Math.floor(Math.random() * 256)];
        const g = [Math.floor(Math.random() * 256)];
        const b = [Math.floor(Math.random() * 256)];
        
        const headColor = "rgb(" + r + " , " + g + " , " + b + ")"
        return headColor;
    };
    //create a <p> element and a textNode to fill it
    let p = document.createElement('p');
    let ptext = document.createTextNode('This paragraph loves to get touched. Touch it good. Touch it really good and it might change colors.... mmmmmm.');
    
    //puts paragraph in the HTML and the text inside the paragraph. 
    document.body.appendChild(p);
    p.appendChild(ptext);

    // same ol' randomColor function with the variables and event changed to the proper functionality.
    p.addEventListener('click', function(){

        p.style.color = randomColor();

    });
//create and append a button and a div below it.
const listbutton = document.createElement('button');
let buttext = document.createTextNode('Press me with Vigor!')
const butdiv = document.createElement('div');
listbutton.appendChild(buttext)
document.body.appendChild(listbutton);
document.body.appendChild(butdiv);
    
    //adds event listener to the listbutton to run a function on click.
    listbutton.addEventListener('click', function (){

        // creates a <span> element and enters my name into it. 
        let span = document.createElement('span');
        //added id for preferential css styling :).
        span.id = 'name';
        let myName = document.createTextNode("Justin 'The Vigorous' Murrah");

        //adds a <span> inside the <div> in the HTML
        span.appendChild(myName);
        butdiv.appendChild(span);
    });

    let friendbtn = document.getElementById('ulbutton')
    let ul = document.getElementById('friendlist')

    //array of 10.... ahem... "friends".
    const friends = ['Jen', 'Jamie', 'Emily', 'Tom', 'Sequoya', 'Melissa', 'Kristen', 'Logan', 'Rowan', 'Maximus'];
    let friendcount = 0;
        
        // add click event listener to the friend button
        friendbtn.addEventListener('click', function(){
            //references the friends array with the defined value of 0 (position 1 of the array).
         if (friends[friendcount]) {


            // list item created
             let li = document.createElement('li');
             //create textNode with the value ([array position]) of the count of the friends array
             let friendlist = document.createTextNode(friends[friendcount]);
             //append friend name to list item and <li> to <ul>.
             li.appendChild(friendlist);
             ul.appendChild(li);
             // order of operations... add to friendcount last!!!
             friendcount++;
         }
       });
    });
    
    
    //for (var i = 0; i > friends.length; i++) {