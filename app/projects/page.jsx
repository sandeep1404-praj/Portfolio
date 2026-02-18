import ProjectList from "@/components/Projects/ProjectList";

export const metadata = {
  title: "Projects",
  description: "Explore the portfolio of Sandeep Prajapati, featuring innovative software projects, web applications, and technical solutions.",
};

export default function Project() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <ProjectList />
    </div>
  );
}
