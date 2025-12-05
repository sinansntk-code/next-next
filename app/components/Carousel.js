"use client";

export default function Carousel() {
  return (
    <div
      id="mainCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // auto slide every 3 seconds
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img 
            src="/image/c-1.jpg" 
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img 
            src="/image/c-2.jpg" 
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img 
            src="/image/c-3.jpg" 
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img 
            src="/image/c-4.jpg" 
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
