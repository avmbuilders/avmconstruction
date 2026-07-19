export interface Project {
  id: string;
  siteName: string;
  imageUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    siteName: "Foundation Works",
    imageUrl: "/images/works/works-foundation.jpg",
    category: "Building Construction",
  },
  {
    id: "proj-2",
    siteName: "Concrete Slab Pouring",
    imageUrl: "/images/works/works-slab.jpg",
    category: "Structural Engineering",
  },
  {
    id: "proj-3",
    siteName: "Multi-story Scaffolding",
    imageUrl: "/images/works/works-scaffolding.jpg",
    category: "Residential Apartments",
  },
  {
    id: "proj-4",
    siteName: "Roof Concrete Decking",
    imageUrl: "/images/works/works-roof-concrete.jpg",
    category: "Structural Engineering",
  },
  {
    id: "proj-5",
    siteName: "Exterior Plastering & Finishing",
    imageUrl: "/images/works/works-exterior-plastering.jpg",
    category: "Building Construction",
  },
];
