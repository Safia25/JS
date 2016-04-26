var bio = {
    "name": "Safia Benaouda",
    "role": "Designer",
    "contact": {
        "email": "Safia.Benaouda@gmail.com",
        "location": "Venice Beach",
        "phone": "925-785-3183"
    },
    "welcomemessage": "Prepare to be impressed.",
    "skills": ["love", "graphic design", "photoshop", "InDesign"],
    "image": "images/safia.jpg"
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedimage = HTMLbioPic.replace("%data%", bio.image);
    var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
    var formattedphone = HTMLmobile.replace("%data%", bio.contact.phone);
    var formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
    var formattedskills = HTMLskills.replace("%data%", bio.skills);



    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedphone);
    $("#topContacts").prepend(formattedlocation);
    $("#topContacts").prepend(formattedimage);
    $("#topContacts").prepend(formattedmessage);
    $("#topContacts").append(formattedskills);

}

var education = {
    "schools": [{
            "name": "UC Santa Barbara",
            "degree": "BA",
            "major": ["Communication"],
            "city": "Santa Barbara, CA",
            "date": 2009,
            "url": "http://www.ucsb.edu/"
        },

        {
            "name": "Goldsmiths, University of London",
            "degree": "MA",
            "major": ["Digital Media"],
            "city": "London",
            "date": 2010,
            "url": "http://www.gold.ac.uk/"
        }
    ],
    "onlineCourse": [{
            "title": "Front End Web Developer",
            "school": "Udacity",
            "date": 2016,
            "url": "https://www.udacity.com/"
        }

    ]
}


var work = {
    "jobs": [{
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
}

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[jobs].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(
            formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "2016",
            "description": "This is a killer online portfolio.",
            "image": "http placeholder"
        },

        {
            "title": "Portfolio II",
            "dates": "2017",
            "description": "This is my second killer online portfolio.",
            "image": "http placeholder"
        }
    ]
}


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }

        }

    }
}


bio.display();
projects.display();

for (var i = 0; i < 9; i++) {
    console.log(i);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
