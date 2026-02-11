function BusRent() {
  const autobusi = [
    {
      image: "/BusuBildes/Setra_415_GT_HD_48.JPG",
      title: "Setra 415 GT-HD, 48 pasažieru vietas",
      description:
        "AC, DVD, video, CD, audio, WC, virtuve, navigācija, galdiņi, mikrofons",
    },
    {
      image: "/BusuBildes/Setra_415_HD_44.jpg",
      title: "Setra 415 HD, 44 pasažieru vietas",
      description:
        "AC, audio, DVD, WC, virtuve, 220V, navigācija, galdiņi, mikrofons",
    },
    {
      image: "/BusuBildes/Setra_415_HD_49.jpg",
      title: "Setra 415 HD, 49 pasažieru vietas",
      description:
        "AC, video, audio, DVD, WC, virtuve, 220V, navigācija, galdiņi, mikrofons",
    },
    {
      image: "/BusuBildes/Setra_416_GT-HD_53.jpg",
      title: "Setra 416 GT-HD, 53 pasažieru vietas",
      description:
        "AC, DVD, CD, WC, virtuve, navigācija, galdiņi, mikrofons, 220V",
    },
    {
      image: "/BusuBildes/Setra_515_HD_49.jpg",
      title: "SETRA 515 HD, 49 pasažieru vietas",
      description:
        "AC, CD, DVD, WC, virtuve, ledusskapis, 220V, navigācija, galdiņi, mikrofons",
    },
    {
      image: "/BusuBildes/Setra_516_HD_53.JPG",
      title: "Setra 516 HD, 53 pasažieru vietas",
      description:
        "AC, CD, DVD, WC, virtuve, ledusskapis, 220V, navigācija, galdiņi, mikrofons",
    },
    {
      image: "/BusuBildes/VW_Crafter.jpg",
      title: "VW Crafter, 19 pasažieru vietas",
      description: "...",
    },
  ];

  return (
    <>
      <h1 className="nomas-virsraksts">Pieejamie autobusi</h1>

      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          {autobusi.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {autobusi.map((bus, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <img src={bus.image} className="d-block w-100" alt={bus.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="busu-nosaukums">{bus.title}</h5>
                <p className="busu-apraksts">{bus.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
}

export default BusRent;
