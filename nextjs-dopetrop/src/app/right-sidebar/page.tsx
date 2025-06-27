import Sidebar from "@/components/Sidebar";

export default function RightSidebar() {
  return (
    <div className="container mx-auto py-12 grid md:grid-cols-[1fr_200px] gap-6">
      <article>
        <h1 className="text-2xl font-bold mb-4">Right Sidebar</h1>
        <p>This page demonstrates a layout with the sidebar on the right.</p>
      </article>
      <Sidebar />
    </div>
  );
}
