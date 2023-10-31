const imageList = [{ src: "photos/20231027_154808.jpg", alt: "image" }, { src: "photos/20231027_154537.jpg", alt: "image" }, { src: "photos/20231027_154518.jpg", alt: "image" }, { src: "photos/20231027_154343.jpg", alt: "image" }, { src: "photos/20230813_162958.jpg", alt: "image" }, { src: "photos/20230723_122700.jpg", alt: "image" }, { src: "photos/20230707_224048.jpg", alt: "image" }, { src: "photos/20230707_223036.jpg", alt: "image" }, { src: "photos/20230707_222934.jpg", alt: "image" }, { src: "photos/20230707_222659.jpg", alt: "image" }, { src: "photos/20230707_200841.jpg", alt: "image" }, { src: "photos/20200801_153246.jpg", alt: "image" }, { src: "photos/20200424_195558.jpg", alt: "image" }, { src: "photos/20191105_130837.jpg", alt: "image" }, { src: "photos/20190919_141304.jpg", alt: "image" }, { src: "photos/20190916_170547.jpg", alt: "image" }, { src: "photos/20190425_214316.jpg", alt: "image" }, ];
// Create three columns
for (let i = 0; i < 3; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
}

// Distribute images into the columns
for (let index = 0; index < imageList.length; index++) {
    const columnIndex = index % 3;
    const column = document.querySelectorAll(".column")[columnIndex];

    const img = document.createElement("img");
    img.src = imageList[index].src;
    img.alt = imageList[index].alt;

    img.addEventListener("click", () => {
        lightbox.innerHTML = `<img src="${imageList[index].src}" alt="${imageList[index].alt}" loading="lazy">`;
        lightbox.style.display = "block";
    });

    column.appendChild(img);
}

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

