'use client';

import { useState } from "react"; // ✅ Needed for useState
import Masonry from "react-masonry-css";
import Image from "next/image";
import "./projectgallery.css";

// Additions
import room_addition1 from "../../public/images/img1.jpg";
// Remodels
import kitchen_remodel1 from "../../public/images/img1.jpg";
// Custom Homes
import customhome1 from "../../public/images/img1.jpg";
import customhome2 from "../../public/images/img1.jpg";
import customhome3 from "../../public/images/img1.jpg";

const projectData = [
  { id: 1, title: "Kitchen Remodel", image: kitchen_remodel1 },
  { id: 2, title: "Room Addition", image: room_addition1 },
  { id: 3, title: "Deck build", image: customhome1 },
  { id: 4, title: "Custom Home", image: customhome2 },
  { id: 5, title: "Exterior Upgrade", image: customhome3 },
  { id: 6, title: "Bathroom Remodel", image: kitchen_remodel1 },
  { id: 7, title: "Living Room Addition", image: room_addition1 },
  { id: 8, title: "Patio Construction", image: customhome1 },
  { id: 9, title: "Custom Cabin", image: customhome2 },
  { id: 10, title: "Outdoor Deck", image: customhome3 },
];

export default function ProjectGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(projectData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = projectData.slice(startIndex, startIndex + itemsPerPage);

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    900: 2,
    600: 1,
  };

  return (
    <main style={{ paddingTop: "80px" }}>
      <section className="project-gallery">
        <h1 className="why-h1">Our Recent Projects</h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {selectedItems.map((project) => (
            <div key={project.id} className="gallery-card">
              {/* Use Next.js Image for optimization */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}      // adjust as needed
                height={300}     // adjust as needed
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
              <div className="info-bar">{project.title}</div>
            </div>
          ))}
        </Masonry>

        {/* Pagination Buttons */}
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
