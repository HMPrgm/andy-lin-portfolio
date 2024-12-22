import Project from "../interfaces/project";
export default function Home({projects}:{projects:Project[]}) {

  return (
    <div>
        {projects.map(p => <div key={p.id}>{p.title}</div>)}
    </div>
  );
}
