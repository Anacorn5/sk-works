// ---------------------------------------------------------
// Generic slideshow function
// ---------------------------------------------------------
function createSlideshow(images, imgElement, titleElement = null, yearElement = null, isRandom = true) {
  let index = 0;

  // Shuffle helper
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
    return array;
  }

  // HIER NEU: Entscheidung, ob gemischt wird oder nicht
  // Wenn isRandom wahr ist, mischen wir. Wenn nicht, nehmen wir die Original-Reihenfolge.
  let slides = isRandom ? shuffle([...images]) : [...images];

  function showNext() {
    // Wenn wir am Ende der Liste sind:
    if (index >= slides.length) {
      // HIER NEU: Nur neu mischen, wenn isRandom auch an ist!
      if (isRandom) {
        slides = shuffle([...images]);
      }
      index = 0; // Zurück zum Anfang
    }

    const image = slides[index];
    imgElement.src = image.src;

    // Dynamic alt text
    imgElement.alt = [image.title, image.year].filter(Boolean).join(" ");

    // Optional title/year elements
    if (titleElement) titleElement.textContent = image.title || "";
    if (yearElement) yearElement.textContent = image.year || "";

    index++;
  }

  imgElement.addEventListener("click", showNext);
  window.addEventListener("load", showNext);
}

// ---------------------------------------------------------
// MAIN SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
 {
        src: 'img/main/sk-img-0059.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-0069.jpg',
        title: 'Encounters – ',
        year: '2023'
      },
      {
        src: 'img/main/sk-img-0774.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-0832.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-0895.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-0909.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
            {
        src: 'img/main/sk-img-1168.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-1213.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-1319.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-1391.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-1537.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-1597.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-1744.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-1789.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-1863.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-1870.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-1925.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-2029.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-2116.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-2170.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-2562.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-2567.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
       {
        src: 'img/main/sk-img-2589.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
       {
        src: 'img/main/sk-img-2679.jpg',
        title: 'BIS Competition – w/ HGS',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-2725.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-2730.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-3118.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-3163.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-3407.jpg',
        title: 'Encounters – ',
        year: '2023'
      },
      {
        src: 'img/main/sk-img-3444.jpg',
        title: 'Encounters – ',
        year: '2024'
      },
      {
        src: 'img/main/sk-img-3610.jpg',
        title: 'Encounters – ',
        year: '2024'
      },
      {
        src: 'img/main/sk-img-3918.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-4709.jpg',
        title: 'Encounters – ',
        year: '2023'
      },
      {
        src: 'img/main/sk-img-5004.jpg',
        title: 'Encounters – ',
        year: '2023'
      },
      {
        src: 'img/main/sk-img-5015.jpg',
        title: 'Encounters – ',
        year: '2023'
      },
      {
        src: 'img/main/sk-img-6163.jpg',
        title: 'Encounters – ',
        year: '2019'
      },
      {
        src: 'img/main/sk-img-6579.jpg',
        title: 'Encounters – ',
        year: '2019'
      },
      {
        src: 'img/main/sk-img-6604.jpg',
        title: 'Encounters – ',
        year: '2019'
      },
      {
        src: 'img/main/sk-img-6608.jpg',
        title: 'Encounters – ',
        year: '2019'
      },
      {
        src: 'img/main/sk-img-6833.jpg',
        title: 'Encounters – ',
        year: '2023'
      },
      {
        src: 'img/main/sk-img-8189.jpg',
        title: 'Helgoland – ',
        year: '2020'
      },
      {
        src: 'img/main/sk-img-9107.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-9139.jpg',
        title: 'Encounters – ',
        year: '2022'
      },
      {
        src: 'img/main/sk-img-9146.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-9402.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
      {
        src: 'img/main/sk-img-9824.jpg',
        title: 'Encounters – ',
        year: '2021'
      },
  ],
  document.getElementById("slideshow-image"),
  document.getElementById("image-title"),
  document.getElementById("image-year")
);


// ---------------------------------------------------------
// PROJECT 1 SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
    { src: "img/projects/p1/sk-img-p1-1.jpg", title: " sk – ", year: "2019" },
    { src: "img/projects/p1/sk-img-p1-2.jpg", title: " sk – ", year: "2019" },
    { src: "img/projects/p1/sk-img-p1-3.jpg", title: " sk – ", year: "2019" },
    { src: "img/projects/p1/sk-img-p1-4.jpg", title: " sk – ", year: "2019" },
    { src: "img/projects/p1/sk-img-p1-5.jpg", title: " sk – ", year: "2019" },
    { src: "img/projects/p1/sk-img-p1-6.jpg", title: " sk – ", year: "2019" },
    { src: "img/projects/p1/sk-img-p1-7.jpg", title: " sk – ", year: "2019" }
  ],
  document.getElementById("slideshow1-image"),
  document.getElementById("image-title-p1"),
  document.getElementById("image-year-p1"),
  false // Random OFF //
);

// ---------------------------------------------------------
// PROJECT 2 SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
    { src: "img/projects/p2/sk-img-p2-1.jpg", title: " sk – ", year: "2022" },
    { src: "img/projects/p2/sk-img-p2-2.jpg", title: " sk – ", year: "2022" },
    { src: "img/projects/p2/sk-img-p2-3.jpg", title: " sk – ", year: "2022" },
    { src: "img/projects/p2/sk-img-p2-4.jpg", title: " sk – ", year: "2022" },
    { src: "img/projects/p2/sk-img-p2-5.jpg", title: " sk – ", year: "2022" },
    { src: "img/projects/p2/sk-img-p2-6.jpg", title: " sk – ", year: "2022" },
    { src: "img/projects/p2/sk-img-p2-7.jpg", title: " sk – ", year: "2022" },
  ],
  document.getElementById("slideshow2-image"),
  document.getElementById("image-title-p2"),
  document.getElementById("image-year-p2"),
  false  // Random OFF //
);

// ---------------------------------------------------------
// PROJECT 3 SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
    { src: "img/projects/p3/sk-img-p3-1.jpg", title: " sk w/ HGS – ", year: "2022" },
    { src: "img/projects/p3/sk-img-p3-2.jpg", title: " sk w/ HGS – ", year: "2022" },
    { src: "img/projects/p3/sk-img-p3-3.jpg", title: " sk w/ HGS – ", year: "2022" },
    { src: "img/projects/p3/sk-img-p3-4.jpg", title: " sk w/ HGS – ", year: "2022" },
    { src: "img/projects/p3/sk-img-p3-5.jpg", title: " sk w/ HGS – ", year: "2022" },
    { src: "img/projects/p3/sk-img-p3-6.jpg", title: " sk w/ HGS – ", year: "2022" },
    { src: "img/projects/p3/sk-img-p3-7.jpg", title: " sk w/ HGS – ", year: "2022" },
  ],
  document.getElementById("slideshow3-image"),
  document.getElementById("image-title-p3"),
  document.getElementById("image-year-p3"),
  false  // Random OFF //
);

// ---------------------------------------------------------
// PROJECT 4 SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
    { src: "img/projects/p4/sk-img-p4-1.jpg", title: " sk – ", year: "2023" },
    { src: "img/projects/p4/sk-img-p4-2.jpg", title: " sk – ", year: "2023" },
    { src: "img/projects/p4/sk-img-p4-3.jpg", title: " sk – ", year: "2023" },
    { src: "img/projects/p4/sk-img-p4-4.jpg", title: " sk – ", year: "2023" },
    { src: "img/projects/p4/sk-img-p4-5.jpg", title: " sk – ", year: "2023" },
    { src: "img/projects/p4/sk-img-p4-6.jpg", title: " sk – ", year: "2023" },
  ],
  document.getElementById("slideshow4-image"),
  document.getElementById("image-title-p4"),
  document.getElementById("image-year-p4"),
  false  // Random OFF //
);

// ---------------------------------------------------------
// PROJECT 5 SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
    { src: "img/projects/p5/sk-img-p5-1.jpg", title: " sk w/ Truwant + Rodet + – ", year: "2024" },
    { src: "img/projects/p5/sk-img-p5-2.jpg", title: " sk w/ Truwant + Rodet + – ", year: "2024" },
    { src: "img/projects/p5/sk-img-p5-3.jpg", title: " sk w/ Truwant + Rodet + – ", year: "2024" },
    { src: "img/projects/p5/sk-img-p5-4.jpg", title: " sk w/ Truwant + Rodet + – ", year: "2024" },
    { src: "img/projects/p5/sk-img-p5-5.jpg", title: " sk w/ Truwant + Rodet + – ", year: "2024" },
    { src: "img/projects/p5/sk-img-p5-6.jpg", title: " sk w/ Truwant + Rodet + – ", year: "2024" },
  ],
  document.getElementById("slideshow5-image"),
  document.getElementById("image-title-p5"),
  document.getElementById("image-year-p5"),
  false  // Random OFF //
);

// ---------------------------------------------------------
// PROJECT 6 SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
    { src: "img/projects/p6/sk-img-p6-1.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p6/sk-img-p6-2.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p6/sk-img-p6-3.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p6/sk-img-p6-4.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p6/sk-img-p6-5.jpg", title: " sk – ", year: "2025" },
  ],
  document.getElementById("slideshow6-image"),
  document.getElementById("image-title-p6"),
  document.getElementById("image-year-p6"),
  false  // Random OFF //
);

// ---------------------------------------------------------
// PROJECT 7 SLIDESHOW
// ---------------------------------------------------------
createSlideshow(
  [
    { src: "img/projects/p7/sk-img-p7-1.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-2.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-3.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-4.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-5.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-6.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-7.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-8.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-9.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-10.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-11.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-12.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-13.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-14.jpg", title: " sk – ", year: "2025" },
    { src: "img/projects/p7/sk-img-p7-15.jpg", title: " sk – ", year: "2025" },

  ],
  document.getElementById("slideshow7-image"),
  document.getElementById("image-title-p7"),
  document.getElementById("image-year-p7"),
  false  // Random OFF //
);

// ---------------------------------------------------------
// Disable right-click context menu on the entire document
// ---------------------------------------------------------
document.addEventListener('contextmenu', event => {
  event.preventDefault();
});
