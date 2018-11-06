var vouches = [
        {
        	text: "Vouch ! Assisted me with some website issues, but not only that he helped me night and day till I got what I wanted. I can't believe that for something free he'd sat there for my every need and made sure that everything was all set and I was happy with his work. I'd suggest him to anyone for I've never met such a nice, considerate, and hard-working person in my life. Thanks <3",
        	author: "KrustyKrab"
        },
        {
        	text: "Vouch, made me a site, looks exactly what I wanted it to look like. User was kind and answered all of my questions, didn't hesitate to make any changes and worked well.",
        	author: "Artocus"
        },
        {
        	text: "Vouch for NucleiDev, made my company a nice website.",
        	author: "TricksterPlays"
        },
        {
        	text: "Vouch for NucleiDev, Great young lad, very nice and easy to talk, very well priced. Overall his services is A+, very impressed with his results!",
        	author: "Enahs"
        },
        {
        	text: "Vouch! the portal page he did for me was awesome looking and he even did not mind helping with other stuff, very knowledgeable, and experienced in that he is doing, tysm man.",
        	author: "SkyNationsNetwork"
        }
	  ];
counter = 0;
function testie() {
	var quote = vouches[counter];
	
	document.getElementById("testimonial").innerHTML =
        '<img class="fade-in" src="./assets/images/profilePictures/' + quote.author + '.png">' +
        '<p class="fade-in"><span>&quot;</span>' + quote.text + '<span>&quot;</span></p>' +
		'<h6 class="fade-in">- ' + quote.author + ' -</h6>'
	
	
	counter++;
	if (counter == vouches.length) {
		counter = 0;
	}
    };
testie();
setInterval(testie, 6000);