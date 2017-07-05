/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
    "jobs": [
        {
            "employer": "Web", 
            "title": "工作", 
            "location": "San", 
            "dates": "2016", 
            "description": "这是工作"
        }, 
        {
            "employer": "Web", 
            "title": "网站", 
            "location": "sun", 
            "dates": "2018", 
            "description": "建立一个网站"
        }
    ]
}

var projects ={
    "projects": [
        {
            "title": "动物交换卡", 
            "dates": "2017", 
            "description": "这是一份动物交换卡，通过这个项目让我更加熟练地掌握了HTML和CSS。在这虽然是一个非常简单的小项目，但是却非常考验基本。", 
            "images": [
                "images/cat.jpg"
            ]
        }, 
        {
            "title": "项目集", 
            "dates": "2017", 
            "description": "这是一份项目集，这是我第一次亲手写的代码比较多的一个项目，期间也遇到了很多的问题，不过通过前几次的小项目，让我学会了如何处理问题。", 
            "images": [
                "images/dog.jpg"
            ]
        }
    ]
}

var bio = {
    "name": "梁飞飞", 
    "role": "前端", 
    "welcomeMessage": "欢迎访问我的电子简历", 
    "biopic": "images/fry.jpg", 
    "contacts": {
        "mobile": "5588411", 
        "emaile": "1277784157@qq.com", 
        "githubName": "Liang feifei", 
        "location": "贵阳"
    }, 
    "skills": [
        "计算机", 
        "数学", 
        "编程"
    ]
}

var education = {
    "school": [
        {
            "name": "贵州理工学院", 
            "location": "贵阳", 
            "degree": "学士", 
            "dates": 2017, 
            "url": "http//", 
            "majors": [
                "机械设计"
            ]
        }
    ], 
    "onlineCourses": [
        {
            "name": "Udacity", 
            "location": "贵阳", 
            "degree": "纳米基础学位", 
            "dates": 2017, 
            "url": "http://www.Udacity.com", 
            "majors": [
                "cs"
            ]
        }
    ]
}

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var NewName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(NewName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").prepend(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.emaile);
    $("#topContacts").append(formattedEmail);

    var formattedgithubName = HTMLgithub.replace("%data%", bio.contacts.githubName);
    $("#topContacts").append(formattedgithubName);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcome);

    var formattedbIopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbIopic);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        };
    }
}

bio.display();

work.displayWork = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var firmattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(firmattedDescription);

    }
}

work.displayWork();

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }

        }

    }
}

projects.display();

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var sch = 0; sch < education.school.length; sch++) {
        var formattedname = HTMLschoolName.replace("%data%", education.school[sch].name);
        $(".education-entry:last").append(formattedname);

        var formatteddates = HTMLschoolDates.replace("%data%", education.school[sch].dates);
        $(".education-entry:last").append(formatteddates);

        if (education.school[sch].majors.length > 0) {
            for (var major = 0; major < education.school[sch].majors.length; major++) {
                var formattedmajors = HTMLschoolMajor.replace("%data%", education.school[sch].majors[major]);
                $(".education-entry:last").append(formattedmajors);
            }
        }
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.school[sch].degree);
        $(".education-entry:last").append(formatteddegree);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var inlineedu = 0; inlineedu < education.onlineCourses.length; inlineedu++) {
        var formattedinlinename = HTMLonlineTitle.replace("%data%", education.onlineCourses[inlineedu].name);
        $(".education-entry:last").append(formattedinlinename);

        var formattedInlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[inlineedu].dates);
        $(".education-entry:last").append(formattedInlineDates);

        if (education.onlineCourses[inlineedu].majors.length > 0) {
            for (var major = 0; major < education.onlineCourses[inlineedu].majors.length; major++) {
                var formattedmajors = HTMLschoolMajor.replace("%data%", education.onlineCourses[inlineedu].majors[major]);
                $(".education-entry:last").append(formattedmajors);
            }
        }
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[inlineedu].degree);
        $(".education-entry:last").append(formatteddegree);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[inlineedu].url);
        $(".education-entry:last").append(formattedUrl);
    }
}

education.display();

$("#mapDiv").append(googleMap);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").prepend(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.emaile);
$("#footerContacts").append(formattedEmail);

var formattedgithubName = HTMLgithub.replace("%data%", bio.contacts.githubName);
$("#footerContacts").append(formattedgithubName);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);