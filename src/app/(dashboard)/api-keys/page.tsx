export default function ApiKeysPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">API Keys</h2>
      </div>
      <div className="grid gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Manage API Keys</h3>
          <p className="text-sm text-gray-500">Create and manage your API keys here.</p>
          {/* Add API key management UI components here */}
        </div>
      </div>
    </div>
  );
}
