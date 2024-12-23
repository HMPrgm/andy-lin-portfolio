import HomeSideBar from "./home_sidebar/home_sidebar";
import ProjectGallery from "./project_gallery/project_gallery";
export default function Home() {

  return (
    <div className="flex justify-start gap-32 p-12">
        <div>
            <HomeSideBar/>
        </div>
        <div className="">
            <ProjectGallery/>
        </div>
    </div>
  );
}
