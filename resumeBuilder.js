var bio = { 
	"name": "Safia",
	"role": "Designer",
	"contact": {
				"email": "Safia.Benaouda@gmail.com",
				"location": "Venice Beach",
				"phone": "925-785-3183"
				},
	"welcomemessage": "Prepare to be impressed.",
	"skills": ["awesomeness", "graphic design", "photoshop", "InDesign"],
	"image": "images/safia.jpg"
}

var education = {
	"schools": [
		{
		"name": "UC Santa Barbara",
		"degree": "BA",
		"major": "Communication"
		},
		{
		"name": "University Goldsmiths London",
		"degree": "Masters",
		"major": "Digital Media"
		}
	]
}

var work = {
	"jobs": 
		{
		"employer": "Directv",
		"title": "Specialist",
		"location": "El Segundo",
		"dates": "2013 - 2016",
		"description": "Design Specialist and trainer."
		}
}

var projects = {
"projects": [
		{
		"title": "Portfolio",
		"dates": "2016",
		"description": "This killer online portfolio."
		},
		{
		"title": "Portfolio II",
		"dates": "2017",
		"description": "This is my second killer online portfolio."
		}
	]
}

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedimage = HTMLbioPic.replace("%data%",bio.image);
var formattedemail = HTMLemail.replace("%data%",bio.contact.email);
var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);
}

$("#header").prepend(formattedRole).prepend(formattedName);

education.display = function () {
var formattedschoolName = HTMLschoolName.replace("%data%",education.schools.name);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools.degree);
var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools.dates);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools.location);

$("#education").append(formattedschoolName).append(formattedschoolLocation).append(formattedschoolDates).append(formattedschoolDegree);
}
