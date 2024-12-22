import Project from "./interfaces/project";
import Home from "./home/home";
export default function Main() {

  const projects:Project[] = [
    {
      id: '1',
      image: 'Rome1.jpg',
      year: 2024,
      month: 12,
      title: "The collasium",
    }
  ]



  return (
    <Home projects={projects}></Home>
  );
}
