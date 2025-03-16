import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CreditCard, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Personal AI Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Use AI on your terms. Connect your OpenAI API key and only pay for what you actually use.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/signup">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/signin">
                    Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Why Choose Our AI Assistant?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  No subscriptions. No hidden fees. Just powerful AI when you need it.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Your API Key</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Use your own OpenAI API key for complete control and transparency.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Pay Per Use</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  No monthly subscriptions. Only pay for the AI interactions you actually use.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Occasional Use</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Perfect for occasional users who don&apos;t want to commit to expensive subscriptions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} AI Assistant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
