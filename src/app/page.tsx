import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full filter blur-3xl"></div>
            
            {/* Logo */}
            <div className="mb-8 inline-block animate-float">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-xl transform -rotate-3 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">A</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold gradient-text">axian</h2>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 text-stroke">
              <span className="gradient-text">Deploy ML Models</span>
              <br />
              <span className="relative">
                Like Magic
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none">
                  <path d="M1 5.26C71.0833 2.82667 141.167 1.61 211.25 1.61C281.333 1.61 351.417 2.82667 421.5 5.26" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="3.61" x2="421.5" y2="3.61" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1"/>
                      <stop offset="1" stopColor="#3B82F6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Transform your ML models into production-ready APIs instantly.
              <br />
              <span className="text-indigo-600 font-semibold">No DevOps expertise required.</span>
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn-primary">
                Get Started Free
                <span className="ml-2">→</span>
              </button>
              <button className="px-8 py-4 text-gray-700 border-2 border-gray-200 rounded-xl font-semibold 
                hover:border-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
            <span className="gradient-text">ML Deployment</span>
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
              <div key={index} className="card group">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-600 transition-colors">
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
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 transform -translate-y-1/2 hidden md:block"></div>
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
                  border-2 border-indigo-500 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold gradient-text">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-indigo-600 transition-colors">
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
        <div className="absolute inset-0 gradient-animate"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl py-20 px-8">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Simplify Your ML Deployment?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of developers who deploy ML models with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold 
                hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
