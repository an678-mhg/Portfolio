/*!
 * Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

const my_project = [
  {
    name: "Shop ecommerce",
    description:
      "The project is built with e-commerce in mind, </br> about project technology using ReactJs on the </br> front-end, and JsonServer on the back-end",
    image:
      "https://res.cloudinary.com/annnn/image/upload/v1649146595/Screenshot_2022-04-05_151440_k8it9p.png",
    technology: ["ReactJs", " JsonServer"],
    demo: "https://shopapp7.netlify.app/",
    git_responsotory: "https://github.com/an678-mhg/Shoping-App",
  },
  {
    name: "Phim Moi",
    description:
      "The project is built with the purpose of promoting </br> movies, helping users to watch movies at the highest </br> quality on project technology using ReactJs in front-end",
    image:
      "https://res.cloudinary.com/annnn/image/upload/v1649147876/Screenshot_2022-04-05_153657_eaylhj.png",
    technology: ["ReactJs", " Zustand", " Swiper", " Firebase"],
    demo: "https://phimmoizzz.netlify.app/",
    git_responsotory: "https://github.com/an678-mhg/PhimMoi",
  },
  {
    name: "A-Social",
    description:
      "The project is a social networking website that </br> allows users to log in, post articles, chat realtime </br> with firebase",
    image:
      "https://res.cloudinary.com/annnn/image/upload/v1649148383/Screenshot_2022-04-05_154543_rvej6k.png",
    technology: ["ReactJs", " Zustand", " TailwindCSS", " Firebase"],
    demo: "https://a-social-app.vercel.app/",
    git_responsotory: "https://github.com/an678-mhg/Social-Media-App",
  },
  {
    name: "A-Tube",
    description:
      "The project is a video sharing website like youtube, </br> users can login to share videos, like, subscribe, edit profiles, </br> manage channels, search by channel name, by video title.",
    image:
      "https://res.cloudinary.com/annnn/image/upload/v1649148789/Screenshot_2022-04-05_155223_qfumrf.png",
    technology: [
      "ReactJs",
      " Redux | Redux Toolkit",
      " TailwindCSS",
      " Formik",
      " NodeJs",
      " ExpressJs",
      " Mongodb",
    ],
    demo: "https://a-tube.vercel.app/",
    git_responsotory: "https://github.com/an678-mhg/Youtube-clone-client",
  },
];

const myProjectElement = document.querySelector(".my-project");

function renderProject() {
  const html = my_project.map((p) => {
    return `
            <div
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
            >
                <div class="flex-grow-1">
                    <h3 class="mb-3">${p.name}</h3>
                    <p>
                            ${p.description}
                        </p>
                   
                    <a href=${p.demo} target="_blank" class="image-project">
                            <img src=${p.image} />
                    </a>
                        
                   
                     <div class="flex-shrink-0 list-technology">
                        ${p.technology.map((item) => {
                          return `<span class="text-primary">${item}</span>`;
                        })}
                    </div>

                    <div class="action-button">
                        <a href=${
                          p.git_responsotory
                        } target="_blank" class="link-to-git">
                            Github
                        </a>
                    </div>
                </div>
          </div>
    `;
  });

  myProjectElement.innerHTML = html.join("");
}

renderProject();
