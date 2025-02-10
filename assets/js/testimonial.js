let testimonials = [
  {
    author: "Septania",
    rating: 5,
    caption: "kereeen abis loh ini maaaaa...!",
    Image: "ged.png",
  },
  {
    author: "Fawaz Afif",
    rating: 4,
    caption: "mantap tapi kurang sedikit rapi",
    Image: "gedu.jpg",
  },
  {
    author: "Varen Zaviar",
    rating: 3,
    caption: "standar sih sesuai dengan hara ya",
    Image: "mes.PNG",
  },
  {
    author: "Khaira Azzaida",
    rating: 5,
    caption: "bagus banget aku suka, trimaksih kak",
    Image: "g1.jpg",
  },
];

const testimonialsContainer = document.getElementById("testimonialsContainer");

const testimonialsHTML = (daftarTestimoni) => {
  return daftarTestimoni
    .map(
      (testimonial) => `
    <article>
        <img src="assets/images/${testimonial.Image}" alt="testimonial-image">
          <p class="testimonial-item-caption">
            <i>"${testimonial.caption}"</i>
          </p>
          <p style="text-align: right; font-weight: bold;">${testimonial.author}</p>
          <p style="text-align: right; font-weight: bold;">${testimonial.rating}✭</p>
    </article>
    `
    )
    .join("");
};

function showAllTestimonials() {
  testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
}
showAllTestimonials();

function filterTestimonialStar(rating) {
  const filteredTestimonial = testimonials.filter(
    (testimonial) => testimonial.rating === rating
  );
  console.log(filteredTestimonial);

  if (filteredTestimonial.length === 0) {
    return (testimonialsContainer.innerHTML = `<p>No Testimonials.</p>`);
  }

  testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonial);
}
