import { MinimalistLogo } from '@/components/ui/logos';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full filter blur-3xl"></div>
            
            {/* Logo */}
            <div className="mb-8 inline-block">
              <div className="scale-150 mb-6">
                <MinimalistLogo />
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              <span className="text-gray-900">Deploy ML Models</span>
              <br />
              <span className="relative">
                Like Magic
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none">
                  <path d="M1 5.26C71.0833 2.82667 141.167 1.61 211.25 1.61C281.333 1.61 351.417 2.82667 421.5 5.26" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Transform your ML models into production-ready APIs instantly.
              <br />
              <span className="text-blue-600 font-semibold">No DevOps expertise required.</span>
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Get Started Free
                <span className="ml-2">→</span>
              </button>
              <button className="px-8 py-4 text-gray-700 border-2 border-gray-200 rounded-xl font-semibold hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/20 backdrop-blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-20">
            Everything You Need for{' '}
            <span className="text-blue-600">ML Deployment</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'One-Click Deployment',
                description: 'Deploy your models to production with a single click. No complex configurations needed.',
                icon: '🚀',
              },
              {
                title: 'Auto-Generated APIs',
                description: 'Get instant REST APIs for your models. Test and integrate them right away.',
                icon: '⚡',
              },
              {
                title: 'Monitoring & Scaling',
                description: 'Monitor performance and scale automatically based on your needs.',
                icon: '📊',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
                <div className="text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-20">
            Deploy in{' '}
            <span className="text-blue-600">Three Simple Steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-blue-200 transform -translate-y-1/2 hidden md:block"></div>
            {[
              {
                step: '01',
                title: 'Upload Your Model',
                description: 'Upload your trained ML model in any popular format.',
              },
              {
                step: '02',
                title: 'Configure API',
                description: 'Customize your API endpoints and authentication.',
              },
              {
                step: '03',
                title: 'Go Live',
                description: 'Your model is now live and ready to serve predictions.',
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 mx-auto
                  border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-20 px-8">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Simplify Your ML Deployment?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of developers who deploy ML models with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Deploying Now
              </button>
              <a href="#" className="text-white hover:text-gray-200 transition-colors flex items-center gap-2">
                Schedule a Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
