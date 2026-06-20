$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Muhammad Rouhan | AI Systems Engineer";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
if (document.querySelector(".typing-text") && typeof Typed !== 'undefined') {
    var typed = new Typed(".typing-text", {
        strings: ["LLMs", "RAG Pipelines", "AI Systems", "Deep Learning"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
}
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    try {
        let response
        type === "skills" ?
            response = await fetch("skills.json")
            :
            response = await fetch("https://api.github.com/users/gitInfinity/repos?sort=updated&per_page=10")
        if (!response.ok) throw new Error('Fetch failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(`Failed to fetch ${type}:`, error);
        if (type === "skills") {
            // Fallback: inline the skills data so the section always renders
            return [
                { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
                { name: "TensorFlow", icon: "https://img.icons8.com/color/48/000000/tensorflow.png" },
                { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
                { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
                { name: "Firebase", icon: "https://img.icons8.com/color/48/000000/firebase.png" },
                { name: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" },
                { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
                { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
                { name: "Flutter", icon: "https://img.icons8.com/color/48/000000/flutter.png" },
                { name: "Kotlin", icon: "https://img.icons8.com/color/48/000000/kotlin.png" },
                { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" }
            ];
        }
        return [];
    }
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

async function getPriorityList() {
    try {
        const res = await fetch('/projects.json');
        if (!res.ok) throw new Error('No projects.json');
        const json = await res.json();
        if (Array.isArray(json)) return json;
        if (json && Array.isArray(json.priority)) return json.priority;
    } catch (err) {
        // fallback priority list
        return ["Nexus", "MedlinePlus-Chatbot"];
    }
}

async function showProjects(projects) {
    let projectsContainer = document.querySelector("#work-container");
    let projectHTML = "";

    // Filter out forks
    const originalProjects = projects.filter(p => !p.fork);

    // Client-side priority list: read from /projects.json (fallback to built-in)
    const priorityNames = await getPriorityList();

    // Build an ordered list with priority items first, then the rest
    const remaining = [...originalProjects];
    const prioritized = [];
    priorityNames.forEach(name => {
        const idx = remaining.findIndex(p => p.name && p.name.toLowerCase() === name.toLowerCase());
        if (idx > -1) {
            prioritized.push(remaining[idx]);
            remaining.splice(idx, 1);
        }
    });

    // Final ordered list — take top 4 to display, rest available via View All
    const originalProjectsOrdered = prioritized.concat(remaining).slice(0, 4);

    if (originalProjectsOrdered.length === 0) {
        // Fallback: show placeholder cards if API fails
        projectsContainer.innerHTML = `
        <div class="box">
          <div class="content">
            <div class="tag">
              <h3>AI / ML Projects</h3>
              <span class="code-comment">// coming soon</span>
            </div>
            <div class="desc">
              <p>Projects are being loaded from GitHub. Visit my GitHub profile to see the latest work.</p>
              <div class="btns">
                <a href="https://github.com/gitInfinity" class="btn" target="_blank">View GitHub <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>`;
        return;
    }

    originalProjectsOrdered.forEach(project => {
        const langTag = project.language
            ? `<span class="tech-tag">${project.language}</span>`
            : '';

        projectHTML += `
        <div class="box tilt">
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
              <span class="code-comment">// ${project.language || "repo"}</span>
            </div>
            <div class="desc">
              <p>${project.description || "No description available."}</p>
              <div class="tech-tags">
                ${langTag}
              </div>
              <div class="btns">
                ${project.homepage ? `<a href="${project.homepage}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>` : ''}
                <a href="${project.html_url}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
        </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // removed duplicate VanillaTilt/ScrollReveal init here — global init handles it

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 5,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'bottom',
    distance: '20px',
    duration: 400,
    reset: false,
    opacity: 0,
    easing: 'ease'
});

/* SCROLL HOME */
srtop.reveal('.home .content h1', { delay: 200 });
srtop.reveal('.home .content p', { delay: 300 });
srtop.reveal('.home .content .btn', { delay: 400 });
srtop.reveal('.home .socials', { delay: 500 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 300 });
srtop.reveal('.about .content .box-container', { delay: 400 });
srtop.reveal('.about .content .resumebtn', { delay: 400 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 100 });
srtop.reveal('.skills .container .bar', { delay: 200 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 100 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 200 });
srtop.reveal('.experience .timeline .container', { interval: 200 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 200 });
srtop.reveal('.contact .container .form-group', { delay: 300 });
