import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Biography */}
            <div className="flex flex-col">
              <h1 className="font-serif text-5xl font-semibold tracking-tight text-black mb-6">
                Tamseel Fatima
              </h1>

              <div className="space-y-2 mb-8">
                <p className="text-lg text-gray-800">Animal and Avian Sciences</p>
                <p className="text-lg text-gray-800">University of Maryland, College Park</p>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-gray-700 mb-8">
                <p>
                  I am a PhD candidate in animal sciences department at the University of Maryland. My PhD is focused on finding how iron availability shapes adipose tissue development and thermogenic signaling. My research combines mouse models, cell systems, omics, and molecular biology to explore influence of nutrient-gene interaction on metabolic function.
                </p>
                <p>
                  This website is a more informal extension of my research life: a place where I share protocols, troubleshooting notes, and blog-style reflections from graduate school and beyond.
                </p>
              </div>

              {/* Get in Touch Section */}
              <div className="border-t border-gray-300 pt-8">
                <h2 className="font-serif text-lg font-semibold text-black mb-4">Get in Touch</h2>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <span className="text-gray-700 font-medium min-w-fit">Email:</span>
                    <a href="mailto:tfatima1@umd.edu" className="text-black hover:text-gray-700 underline underline-offset-2">
                      tfatima1@umd.edu
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-700 font-medium min-w-fit">Location:</span>
                    <span className="text-gray-700">College Park, MD, 20740</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex items-start justify-center lg:sticky lg:top-20">
              <div className="aspect-video w-full overflow-hidden border border-gray-300 bg-gray-50">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-27%20at%208.22.03%20AM-Lj9GpEZUwa45OyeuSgvJ6rC6TaOKpM.jpeg"
                  alt="Tamseel Fatima speaking at a presentation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
