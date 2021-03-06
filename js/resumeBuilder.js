var bio = {
    "name": "Safia Benaouda",
    "role": "Designer",
    "contact": {
        "email": "Safia.Benaouda@gmail.com",
        "location": "Venice Beach",
        "github" : "Safia25",
        "phone": "925-785-3183"
    },

    "welcomemessage": "Prepare to be impressed.",
    "skills": ["Graphic Design", "Photoshop", "& InDesign"],
    "image": "images/safia.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedimage = HTMLbioPic.replace("%data%", bio.image);
    var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
    var formattedphone = HTMLmobile.replace("%data%", bio.contact.phone);
    var formattedgit = HTMLgithub.replace("%data%",bio.contact.github);
    var formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
    var formattedskillsheader = HTMLskillsStart;
    var formattedskills = HTMLskills.replace("%data%", bio.skills);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedphone);
    $("#topContacts").prepend(formattedlocation);
    $("#topContacts").append(formattedgit);
    $("#header").append(formattedimage);
    $("#header").append(formattedmessage);
    $("#header").append(formattedskillsheader);
    $("#header").append(formattedskills);

    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedphone);
    $("#footerContacts").append(formattedlocation);
    $("#footerContacts").append(formattedgit);

};

var education = {
        "schools": 
                [

                    {
                        "name": "UC Santa Barbara - BA",
                        "major": ["Communication"],
                        "location": "Santa Barbara, CA",
                        "dates": 2009,
                        "url": "http://www.ucsb.edu/"
                    },
                    {
                        "name": "Goldsmiths, University of London - MA",
                        "major": ["Digital Media"],
                        "location": "London",
                        "dates": 2010,
                        "url": "http://www.gold.ac.uk/"
                    },
                ],

    "onlineCourses":
                 [
                    {
                        "school": "Udacity",
                        "title": "Front End Web Developer",
                        "dates": 2016,
                        "url": "http://www.udacity.com"
                    },
                    {
                        "school": "Udacity",
                        "title": "Intro to HTML and CSS",
                        "dates": 2016,
                        "url": "http://www.udacity.com"
                    }
                ]
            };

education.display = function() {
    'use strict';

        $("#education").append(HTMLschoolStart);
        
        for (var school in education.schools) {
                
                var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
                $(".education-entry:last").append(formattedName);

                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedDates);

                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedLocation);

                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
                $(".education-entry:last").append(formattedMajor);
            }

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        for (var onlineCourse in education.onlineCourses) {
                
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
                $(".education-entry:last").append(formattedTitle);

                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
                $(".education-entry:last").append(formattedSchool);

                var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
                $(".education-entry:last").append(formattedURL);
            }
        }; 

var work = {
    "jobs": [
                {
                    "employer": "Directv",
                    "title": "Specialist",
                    "location": "El Segundo",
                    "dates": "2013 - Future",
                    "description": "I am the premier design specialist that creates eye catching designs to increase brand awareness."
                },

                {
                    "employer": "Americhip",
                    "title": "Project Manager",
                    "location": "Torrance",
                    "dates": "2010 - 2012",
                    "description": "I worked with the largest brands and advertising agencies in the country to execute prototypes for various clients."
                }
            ]
        };


work.display = function() {

    for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    };


var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "2016",
            "description": "This is a killer online portfolio.",
            "image": ["images/blue.png"]
        },

        {
            "title": "Portfolio II",
            "dates": "2017",
            "description": "This is my second killer online portfolio.",
            "image": ["images/orange.jpg"]
        }
    ]
};


projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].image.length > 0) {
            for (var i in projects.projects[project].image) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[i]);
                $(".project-entry:last").append(formattedImage);
            }

        }

    }
};

bio.display();
work.display();
projects.display();
education.display();

for (var i = 0; i < 9; i++) {
    console.log(i);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);