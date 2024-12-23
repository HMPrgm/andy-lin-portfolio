export default interface Project {
    id: string;
    image: string;
    year: number;
    month: number;
    title: string;
}

const projects:Project[] = [
    {
      id: '1',
      image: '/Rome1.jpg',
      year: 2024,
      month: 12,
      title: "The collasium",
    },
    {
      id: '2',
      image: '/Zurich1.jpg',
      year: 2022,
      month: 6,
      title: "The river in Zurich",
    },
    {
      id: '3',
      image: '/Amsterdam1.jpg',
      year: 2023,
      month: 4,
      title: "The houses in amsterdam",
    },
    {
      id: '4',
      image: '/Milan1.jpg',
      year: 2021,
      month: 7,
      title: "The cathedral in Milan",
    },
    {
      id: '5',
      image: '/Warsaw1.jpg',
      year: 2024,
      month: 4,
      title: "The houses in warsaw",
    },
    {
      id: '6',
      image: '/Barcelona1.jpg',
      year: 2024,
      month: 7,
      title: "The cathedral in Barcelona",
    },
  ];

export const getProjects = ():Project[] => {
    return projects;
}