export default function ModelsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Models</h2>
      </div>
      <div className="grid gap-4">
        {/* Add your models list or grid here */}
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">No models available</h3>
          <p className="text-sm text-gray-500">Start by adding your first model.</p>
        </div>
      </div>
    </div>
  );
}
