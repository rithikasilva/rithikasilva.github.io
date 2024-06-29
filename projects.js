var projects = [
    {
        "Name": "This Site", 
        "Description": "It's gone over a couple iterations through the years", 
        "Technologies": "HTML/CSS/JavaScript", 
        "ImageStyle": "",
        "Link": "https://github.com/rithikasilva/rithikasilva.github.io"
    },
    {
        "Name": "My Dotfiles", 
        "Description": "Eternally changing :)", 
        "Technologies": "Lua/Python/Bash", 
        "ImageStyle": "background-image: url(https://raw.githubusercontent.com/rithikasilva/.dotfiles/fedora/dotfiles-main.png); background-size: 42em; background-position: top left;",
        "Link": "https://github.com/rithikasilva/.dotfiles"
    },
    {
        "Name": "README Profile LoL Stats", 
        "Description": "GitHub Action to display your League of Legends statistics on your README profile", 
        "Technologies": "Python", 
        "ImageStyle": "background-image: url(./project-assets/lol-stats.jpg); background-size: 10em;",
        "Link": "https://github.com/rithikasilva/readme-lol-stats"
    },
    {
        "Name": "Lambda Calculus Interpretor", 
        "Description": "Normal order reduction, variable capture avoiding, and custom expressions", 
        "Technologies": "Go", 
        "ImageStyle": "background-image: url(./project-assets/lambda-calc.png); background-size: 13em;",
        "Link": "https://github.com/rithikasilva/go-lambda-calc"
    },
    {
        "Name": "Catppuccin - Blink", 
        "Description": "Soothing pastel theme for Blink Shell", 
        "Technologies": "JavaScript", 
        "ImageStyle": "background-image: url(./project-assets/catppuccin-banner.webp);",
        "Link": "https://github.com/catppuccin/blink"
    },
    {
        "Name": "Obelisk API and Slifer Mobile Client", 
        "Description": "Personal tasks and statistics management API and mobile-first webapp", 
        "Technologies": "Go + Flask/HTML/CSS/PostgreSQL", 
        "ImageStyle": "background-image: url(./project-assets/slifer_vs_obelisk_by_kraus_illustration_dc09ca2-pre.jpg);",
        "Link": "https://github.com/rithikasilva/project-list"
    },
    {
        "Name": "usportspy", 
        "Description": "Python package for USPORTS Data", 
        "Technologies": "Python", 
        "ImageStyle": "",
        "Link": "https://github.com/uwaggs/usportspy"
    },
    {
        "Name": "WatchDog", 
        "Description": "CLI tool to monitor files for changes and run commands", 
        "Technologies": "Go", 
        "ImageStyle": "",
        "Link": ""
    },
    {
        "Name": "G14mon", 
        "Description": "CLI tool to monitor my ASUS G14's systems details", 
        "Technologies": "Go", 
        "ImageStyle": "",
        "Link": ""
    },
    {
        "Name": "chenv", 
        "Description": "CLI tool to manage environment variables, and manage profiles", 
        "Technologies": "Go", 
        "ImageStyle": "",
        "Link": ""
    },
    {
        "Name": "Jean the Generative Art Bot", 
        "Description": "Twitter bot to manipulate images from Unplash algorithmically to produce generative art. NOT AI ART.", 
        "Technologies": "Python", 
        "ImageStyle": "background-image: url(./project-assets/jean.JPG);",
        "Link": ""
    },
    {
        "Name": "CC3K", 
        "Description": "Rogue-like dungeon crawler (for CS246)", 
        "Technologies": "C++", 
        "ImageStyle": "",
        "Link": ""
    },
    {
        "Name": "Canuck", 
        "Description": "FRC 1305's robot for the 2020/2021 season(s)", 
        "Technologies": "Java", 
        "ImageStyle": "background-image: url(./project-assets/canuck.jpg); background-size: 44em; background-position: 0 -26em;",
        "Link": "https://www.vmcdn.ca/f/files/baytoday/images/education/canuck-2020-team-1305.jpg"
    },
    {
        "Name": "WLP4 Compiler", 
        "Description": "Compiler for Waterloo's WLP4 language (for CS241)", 
        "Technologies": "C++", 
        "ImageStyle": "",
        "Link": ""
    },
    {
        "Name": "NearNorthBot", 
        "Description": "Twitter, FaceBook, and NNDSB scraping Discord bot for news", 
        "Technologies": "Python", 
        "ImageStyle": "background-image: url(./project-assets/nndsb.png); background-size: 45em; background-position: 0 -12em;",
        "Link": ""
    },
];

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("projects");

    projects.forEach(function(project) {
        var link = document.createElement("a");
        link.href = project.Link;
        link.style.textDecoration = "none";
        
        var div = document.createElement("div");
        // div.className = "card clickable";
        div.className = "card clickable";
       
        var banner = document.createElement("div");
        banner.className = "banner";
        banner.style = project.ImageStyle;
        var bannerContent = document.createElement("div");
        bannerContent.style.marginTop = "1em";
        var spanHover = document.createElement("span");
        spanHover.className = "hover-text";
        spanHover.textContent = project.Description;
        bannerContent.appendChild(spanHover);
        banner.appendChild(bannerContent);
        div.appendChild(banner);

        var cardText = document.createElement("div");
        cardText.className = "card-text";
        var spanOriginal = document.createElement("span");
        spanOriginal.className = "original-text";
        spanOriginal.textContent = project.Name;
        var spanHoverText = document.createElement("span");
        spanHoverText.className = "hover-text";
        spanHoverText.textContent = project.Technologies;
        cardText.appendChild(spanOriginal);
        cardText.appendChild(spanHoverText);
        div.appendChild(cardText);

        link.appendChild(div);
        container.appendChild(link);
    });
});
