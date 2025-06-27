import Sidebar from "@/components/Sidebar";

export default function LeftSidebar() {
  return (
    <div className="container mx-auto py-12 grid md:grid-cols-[200px_1fr] gap-6">
      <Sidebar />
      <article>
        <h1 className="text-2xl font-bold mb-4">Left Sidebar</h1>
        <p>This page demonstrates a layout with the sidebar on the left.</p>
      </article>
    </div>
  );
}
