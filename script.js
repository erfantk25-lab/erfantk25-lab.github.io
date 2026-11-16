(() => {
  "use strict";

  const translations = {
    sv: {
      title: "Erfan Tahmasebi | MLOps Engineer Student",
      description: "Erfan Tahmasebi — MLOps Engineering-student på Nackademin i Stockholm. Projektarbete inom ML serving, CI/CD, Docker och Kubernetes. Söker LIA 1, 8 februari–21 maj 2027.",
      skip: "Hoppa till innehåll", homeAria: "Erfan Tahmasebi – startsida", navAria: "Huvudnavigering",
      navHome: "Hem", navAbout: "Om", navSkills: "Kompetens", navProjects: "Projekt", navLab: "MLOps Lab", navJourney: "Läranderesa", navCv: "CV", navContact: "Kontakt", menu: "Meny",
      heroTitle: "Bygger tillförlitliga ML-system — från <em>experiment till drift.</em>",
      heroLead: "Jag är Erfan Tahmasebi, MLOps Engineering-student på Nackademin i Stockholm. Jag är intresserad av systemen runt maskininlärning: datakvalitet, modellutveckling, automation och infrastruktur som gör ML-lösningar reproducerbara och möjliga att driftsätta.",
      ctaProjects: "Utforska projekt", ctaContact: "Kontakta mig", liaLabel: "SÖKER LIA 1", liaDates: "8 februari – 21 maj 2027",

      aboutEyebrow: "01 / OM MIG", aboutTitle: "Maskininlärning är bara <em>början.</em>",
      aboutP1: "Jag studerar MLOps Engineering på Nackademin (2025–2028) och söker en LIA-plats där jag kan utvecklas tillsammans med ett engineeringteam. Mitt intresse ligger i systemen runt modellerna: data som går att lita på, automatiserade flöden, containerisering, CI/CD och tydlig leverans.",
      aboutP2: "Genom utbildnings- och projektarbete har jag arbetat praktiskt med bland annat FastAPI, MLflow, datavalidering, Docker och GitHub Actions. Jag tycker om att förstå hur delarna hänger ihop, dokumentera tekniska beslut och förbättra lösningar steg för steg.",
      aboutNote: "Min erfarenhet är huvudsakligen akademisk och projektbaserad. Jag skiljer tydligt på individuella bidrag och grupprojekt.",
      focusEyebrow: "TEKNISKT FOKUS",
      skillsEyebrow: "02 / KOMPETENS", skillsTitle: "Praktisk grund, <em>pågående fördjupning.</em>",
      skillsIntro: "Teknikerna nedan är sådant jag har använt i utbildning och projekt. Nivå och sammanhang framgår av respektive projekt.",
      skill1Title: "Programmering & data", skill1Note: "Projekt- och kursbaserad användning",
      skill2Title: "Machine Learning", skill2Note: "Modellträning och experiment i utbildningsprojekt",
      skill3Title: "MLOps & backend", skill3Note: "Projektbaserad erfarenhet",
      skill4Title: "DevOps & containers", skill4Note: "Kubernetes: individuellt utbildningsprojekt med Deployments, Services, probes och rolling updates",
      skill5Title: "Test & kvalitet", skill5Note: "Automatiserade kontroller i projektpipelines",
      skill6Title: "Data & visualisering", skill6Note: "Använt i individuella uppgifter och grupprojekt",
      skill7Title: "Integration & messaging", skill7Note: "Kurs- och demoprojekt",
      skill8Title: "Cloud & infrastruktur", skill8Note: "Cloud infrastructure och produktionsövervakning är områden jag vill fördjupa mig inom",
      projectsEyebrow: "03 / UTVALDA PROJEKT", projectsTitle: "Byggt för att <em>granskas.</em>", githubProfile: "Se GitHub-profil ↗",
      teamProjectTag: "GRUPPROJEKT · CI/CD",
      teamProjectDesc: "En utbildningsmiljö för kundbortfallsprognoser där teamet byggde ett ML-flöde med fokus på kvalitet och leverans. Mina fem mergade pull requests omfattade statistisk datadrift, leveransverifiering, multi-stage Docker-byggen, layer caching, smoke tests, GHCR-publicering, modellmetadata/lineage och Ruff i CI.",
      metricImage: "mindre Docker-image", metricBuild: "snabbare uppmätt build",
      teamProjectNote: "Detta är rapporterade teamresultat, inte resultat som ska tillskrivas enbart mitt arbete.",
      openTeamRepo: "Öppna teamets repository ↗", contributionSummary: "Läs om mina fem individuella pull requests ↗",
      architectureEyebrow: "TEKNISK ARKITEKTUR / CI-CD-FLÖDE",
      architectureAlt: "Arkitekturdiagram för teamets CI/CD-pipeline.",
      architectureCaption: "Förenklad visualisering av workflowets jobb och beroenden. GHCR-publicering sker endast vid push till main; kundscoring körs separat.",
      openSvg: "Öppna SVG i full storlek ↗",
      project2Desc: "FastAPI, MLflow, datavalidering och Docker. Repositoryt dokumenterar även mitt individuella Kubernetes-mini-projekt med kind, probes och rolling updates. Churn-pipelinen är grupparbete.",
      project3Desc: "Jag utvecklade applikationen individuellt med separat FastAPI-backend och Streamlit-frontend. Projektet använder scikit-learn, OpenRouteService för ruttdata och Folium för interaktiv kartvisning.",
      project4Desc: "Grupprojekt för miljöövervakning med Raspberry Pi Pico W, MicroPython, MQTT, TimescaleDB, Docker Compose och Grafana.",
      project5Desc: "Kursdemo som utforskar Model Context Protocol, verktygsanslutning och integration.",
      project6Desc: "Kursprojekt som utforskar mönster för LLM-applikationer med LangChain.",
      studyBuddyDesc: "Ett samarbetsbaserat fullstack-RAG-projekt byggt av ett team på fyra personer. Förvandlar föreläsningstranskriptioner till en interaktiv studieassistent med kursfrågor, quiz, flashcards och PDF-export.",
      churnDesc: "En MLOps-pipeline för kundbortfallsprognoser med datakvalitetskontroller, modellträning och utvärdering, artefaktintegritet, inference-API och Docker-leverans.",
      taxiDesc: "En individuell applikation som kombinerar en regressionsmodell, ett prediktions-API och ett interaktivt geografiskt gränssnitt för att uppskatta taxipriser.",
      edgeDesc: "Ett gemensamt edge-IoT-projekt med Raspberry Pi Pico W för miljöövervakning, lokala larm och telemetri till en containeriserad monitoreringsstack.",
      repository: "Repository ↗", liveCi: "Live CI-status ↗",
      labEyebrow: "04 / MLOPS LAB", labTitle: "Tekniska experiment, <em>öppet dokumenterade.</em>",
      labIntro: "Ett urval av praktiska områden från mina utbildnings- och projektarbeten. Länkarna går till kod och dokumentation så att detaljerna kan granskas.",
      lab1Desc: "Utforska ett containeriserat FastAPI-flöde för modellservering, med tester, datavalidering och MLflow i projektmiljön.",
      lab2Desc: "Mina dokumenterade bidrag i teamets pipeline omfattar linting, datadrift, modell-lineage, Docker smoke tests och leverans via GHCR.",
      lab3Desc: "Ett individuellt projekt som kopplar samman en FastAPI-backend, Streamlit-gränssnitt och modellbaserad prediktion.",
      inspectImplementation: "Granska implementationen ↗", readEngineeringNotes: "Läs tekniska anteckningar ↗", inspectRepository: "Granska repository ↗",
      journeyEyebrow: "05 / LÄRANDERESA", journeyTitle: "Utvecklas genom att <em>bygga.</em>",
      journeyIntro: "En översikt över min utbildning, projektbaserade lärande och nästa steg.",
      journey1Title: "MLOps Engineering · Nackademin",
      journey1Desc: "Pågående utbildning med fokus på maskininlärning och tekniken runt utveckling, leverans och drift av ML-system.",
      journey2Date: "PROJEKTBASERAT LÄRANDE", journey2Title: "Bygga, testa och dokumentera",
      journey2Desc: "Praktiskt arbete med ML-serving, Docker, CI/CD, Kubernetes i utbildningsmiljö, dataflöden och LLM-integrationer. Se projekten för verifierbara detaljer.",
      journey3Title: "LIA 1 · Söker praktikplats",
      journey3Desc: "Jag söker en LIA-plats där jag kan bidra, lära av erfarna kollegor och utvecklas inom MLOps, AI-infrastruktur och ML engineering.",
      cvEyebrow: "06 / CV", cvTitle: "En tydlig bild av min <em>bakgrund.</em>",
      cvDesc: "Ett uppdaterat CV med samma fyra projekt, samma ordning och samma tekniska identitet som på min GitHub-profil. Välj svensk eller engelsk version.",
      cvButton: "Öppna svenskt CV ↗", cvEnglishButton: "English CV ↗",
      contactEyebrow: "07 / KONTAKT", contactTitle: "Låt oss bygga något <br><em>meningsfullt.</em>",
      location: "Stockholm, Sverige",
      contactDesc: "Jag är intresserad av att komma i kontakt med team som arbetar med AI, Machine Learning, Cloud och MLOps. Jag söker LIA 1 från 8 februari till 21 maj 2027.",
      emailButton: "Skicka e-post", footerRole: "MLOps Engineer Student"
    },
    en: {
      title: "Erfan Tahmasebi | MLOps Engineer Student",
      description: "Erfan Tahmasebi — MLOps Engineering student at Nackademin in Stockholm. Project work in ML serving, CI/CD, Docker and Kubernetes. Seeking LIA 1, 8 February–21 May 2027.",
      skip: "Skip to content", homeAria: "Erfan Tahmasebi – home", navAria: "Main navigation",
      navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navLab: "MLOps Lab", navJourney: "Learning journey", navCv: "CV", navContact: "Contact", menu: "Menu",
      heroTitle: "Building reliable ML systems — from <em>experiments to deployment.</em>",
      heroLead: "I'm Erfan Tahmasebi, an MLOps Engineering student at Nackademin in Stockholm. I'm interested in the systems around machine learning: data quality, model development, automation and infrastructure that make ML solutions reproducible and deployable.",
      ctaProjects: "Explore projects", ctaContact: "Contact me", liaLabel: "SEEKING LIA 1", liaDates: "8 February – 21 May 2027",

      aboutEyebrow: "01 / ABOUT", aboutTitle: "Machine learning is only the <em>beginning.</em>",
      aboutP1: "I study MLOps Engineering at Nackademin (2025–2028) and am looking for an internship placement where I can grow alongside an engineering team. My interest is in the systems around models: trustworthy data, automated workflows, containerisation, CI/CD and reliable delivery.",
      aboutP2: "Through coursework and project work, I have gained hands-on experience with technologies including FastAPI, MLflow, data validation, Docker and GitHub Actions. I enjoy understanding how the pieces fit together, documenting technical decisions and improving solutions step by step.",
      aboutNote: "My experience is primarily academic and project-based. I clearly distinguish individual contributions from team projects.",
      focusEyebrow: "TECHNICAL FOCUS",
      skillsEyebrow: "02 / SKILLS", skillsTitle: "Practical foundations, <em>continuing to grow.</em>",
      skillsIntro: "The technologies below are tools I have used in coursework and projects. The context is described in the corresponding project entries.",
      skill1Title: "Programming & data", skill1Note: "Used in coursework and projects",
      skill2Title: "Machine learning", skill2Note: "Model training and experiments in educational projects",
      skill3Title: "MLOps & backend", skill3Note: "Project-based experience",
      skill4Title: "DevOps & containers", skill4Note: "Kubernetes: individual educational project covering Deployments, Services, probes and rolling updates",
      skill5Title: "Testing & quality", skill5Note: "Automated checks in project pipelines",
      skill6Title: "Data & visualisation", skill6Note: "Used in individual assignments and team projects",
      skill7Title: "Integration & messaging", skill7Note: "Coursework and demo projects",
      skill8Title: "Cloud & infrastructure", skill8Note: "Cloud infrastructure and production monitoring are areas I aim to develop further",
      projectsEyebrow: "03 / SELECTED PROJECTS", projectsTitle: "Built to be <em>reviewed.</em>", githubProfile: "View GitHub profile ↗",
      teamProjectTag: "TEAM PROJECT · CI/CD",
      teamProjectDesc: "An educational customer-churn prediction environment in which the team built an ML workflow focused on quality and delivery. My five merged pull requests covered statistical data drift, delivery verification, multi-stage Docker builds, layer caching, smoke tests, GHCR publishing, model metadata/lineage and Ruff in CI.",
      metricImage: "smaller Docker image", metricBuild: "faster measured build",
      teamProjectNote: "These are reported team-level results and should not be attributed to my work alone.",
      openTeamRepo: "Open team repository ↗", contributionSummary: "Read about my five individual pull requests ↗",
      architectureEyebrow: "TECHNICAL ARCHITECTURE / CI-CD WORKFLOW",
      architectureAlt: "Architecture diagram of the team's CI/CD pipeline.",
      architectureCaption: "Simplified view of the workflow jobs and dependencies. GHCR publishing is limited to pushes to main; customer scoring runs separately.",
      openSvg: "Open full-size SVG ↗",
      project2Desc: "FastAPI, MLflow, data validation and Docker. The repository also documents my individual Kubernetes mini-project using kind, probes and rolling updates. The churn pipeline is team work.",
      project3Desc: "I developed this application individually, with a separate FastAPI backend and Streamlit frontend. The project uses scikit-learn, OpenRouteService for route data and Folium for interactive map visualisation.",
      project4Desc: "A team environmental-monitoring project using Raspberry Pi Pico W, MicroPython, MQTT, TimescaleDB, Docker Compose and Grafana.",
      project5Desc: "A course demo exploring the Model Context Protocol, tool connections and integration.",
      project6Desc: "A course project exploring patterns for LLM applications with LangChain.",
      studyBuddyDesc: "A collaborative full-stack RAG application built by a team of four. It turns lecture transcriptions into an interactive study assistant for course questions, quiz and flashcard generation, and PDF exports.",
      churnDesc: "An MLOps pipeline for customer churn prediction, combining data quality checks, model training and evaluation, artifact integrity, an inference API and Docker delivery.",
      taxiDesc: "An individual application combining a regression model, prediction API and interactive geographic interface to estimate taxi fares from trip details.",
      edgeDesc: "A collaborative edge-IoT project using a Raspberry Pi Pico W to monitor environmental conditions, trigger local alerts and stream telemetry to a containerized monitoring stack.",
      repository: "Repository ↗", liveCi: "Live CI status ↗",
      labEyebrow: "04 / MLOPS LAB", labTitle: "Engineering experiments, <em>documented openly.</em>",
      labIntro: "A selection of practical areas from my coursework and projects. Links point to code and documentation so the implementation can be reviewed.",
      lab1Desc: "Explore a containerised FastAPI model-serving workflow, with tests, data validation and MLflow in the project environment.",
      lab2Desc: "My documented contributions to the team pipeline include linting, data drift, model lineage, Docker smoke tests and delivery through GHCR.",
      lab3Desc: "An individual project connecting a FastAPI backend, Streamlit interface and model-based predictions.",
      inspectImplementation: "Review the implementation ↗", readEngineeringNotes: "Read engineering notes ↗", inspectRepository: "Review repository ↗",
      journeyEyebrow: "05 / LEARNING JOURNEY", journeyTitle: "Growing by <em>building.</em>",
      journeyIntro: "An overview of my education, project-based learning and next step.",
      journey1Title: "MLOps Engineering · Nackademin",
      journey1Desc: "Ongoing programme focused on machine learning and the engineering around developing, delivering and operating ML systems.",
      journey2Date: "PROJECT-BASED LEARNING", journey2Title: "Build, test and document",
      journey2Desc: "Hands-on work with ML serving, Docker, CI/CD, Kubernetes in an educational environment, data workflows and LLM integrations. See the projects for verifiable details.",
      journey3Title: "LIA 1 · Seeking an internship",
      journey3Desc: "I am looking for an internship where I can contribute, learn from experienced colleagues and develop in MLOps, AI infrastructure and machine learning engineering.",
      cvEyebrow: "06 / CV", cvTitle: "A clear view of my <em>background.</em>",
      cvDesc: "An updated CV with the same four projects, order and technical identity as my GitHub profile. Choose the Swedish or English version.",
      cvButton: "Open Swedish CV ↗", cvEnglishButton: "English CV ↗",
      contactEyebrow: "07 / CONTACT", contactTitle: "Let's build something <br><em>meaningful.</em>",
      location: "Stockholm, Sweden",
      contactDesc: "I am interested in connecting with teams working in AI, machine learning, cloud and MLOps. I am seeking LIA 1 from 8 February to 21 May 2027.",
      emailButton: "Send an email", footerRole: "MLOps Engineer Student"
    }
  };

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("#site-nav");
  const languageButton = document.querySelector(".language-toggle");
  const year = document.getElementById("year");

  function setLanguage(language) {
    const lang = language === "en" ? "en" : "sv";
    const dictionary = translations[lang];

    document.documentElement.lang = lang;
    document.title = dictionary.title;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = dictionary[element.dataset.i18nHtml];
      if (typeof value === "string") element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAlt];
      if (typeof value === "string") element.alt = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAria];
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary.description);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", lang === "en"
      ? "Building reliable machine learning systems through automation, infrastructure and engineering."
      : "Bygger tillförlitliga ML-system genom automation, infrastruktur och engineering.");

    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.setAttribute("content", lang === "en" ? "en_GB" : "sv_SE");

    if (languageButton) {
      languageButton.textContent = lang === "sv" ? "EN" : "SV";
      languageButton.setAttribute("aria-label", lang === "sv" ? "Switch language to English" : "Byt språk till svenska");
      languageButton.setAttribute("aria-pressed", String(lang === "en"));
    }

    document.querySelectorAll(".language-toggle").forEach((button) => {
      button.title = lang === "sv" ? "Switch to English" : "Byt till svenska";
    });

    try {
      localStorage.setItem("portfolio-language", lang);
    } catch (_) {
      // Language switching still works when browser storage is unavailable.
    }
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      setLanguage(document.documentElement.lang === "sv" ? "en" : "sv");
    });
  }

  if (year) year.textContent = String(new Date().getFullYear());

  let preferredLanguage = "sv";
  try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage === "en" || savedLanguage === "sv") preferredLanguage = savedLanguage;
  } catch (_) {
    // Swedish is the default when browser storage is unavailable.
  }
  setLanguage(preferredLanguage);

  const sectionLinks = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')) : [];
  if ("IntersectionObserver" in window && sectionLinks.length) {
    const sections = sectionLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }
})();
