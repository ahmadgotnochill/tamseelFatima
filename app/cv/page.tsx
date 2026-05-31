import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, ExternalLink } from 'lucide-react';

export default function CVPage() {
  const coreSkills = [
    'Molecular Biology',
    'Transcriptomics & Bioinformatics',
    'Histology & Microscopy',
    'Cell culture',
    'Mouse Models',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16">
          {/* Download CV Button */}
          <div className="mb-16 rounded-lg border border-gray-300 bg-gray-50 p-8">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https://blobs.vusercontent.net/blob/CV_Tamseel%20Fatima_Full_April%202026-xQh84uOkbnloB0WLeMtumq1KxNggay.pdf"
                  download
                  className="inline-flex items-center gap-3 font-serif text-lg font-semibold text-black hover:text-gray-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  Download Full CV (PDF)
                </a>
              </div>
              <p className="text-sm text-gray-600">Last updated: April 2026</p>
            </div>
          </div>

          {/* Core Skills Section */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-semibold text-black mb-6">Core Skills</h2>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-black mb-12">Projects</h2>

            {/* PhD Research Subsection */}
            <div className="mb-16">
              <h3 className="font-serif text-xl font-semibold text-black mb-8">PhD Research</h3>
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Column - Project Titles */}
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 tracking-widest mb-2">01</p>
                    <p className="font-serif text-lg font-medium text-black">
                      Role of iron in beiging of iWAT
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 tracking-widest mb-2">02</p>
                    <p className="font-serif text-lg font-medium text-black">
                      Role of iron and iron importer TfR1 in development of iWAT
                    </p>
                  </div>
                </div>

                {/* Right Column - Metabolic Pathway Diagram */}
                <div className="flex items-start">
                  <div className="w-full rounded-lg border border-gray-300 bg-gray-50 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-31%20at%205.44.44%20PM-9WtYcvjpg28ACscUkJfgEvwjSaEDDk.jpeg"
                      alt="Metabolic pathway diagram showing iron and adipose tissue signaling"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Undergraduate Research Subsection */}
            <div className="mt-16 pt-12 border-t border-gray-300">
              <h3 className="font-serif text-xl font-semibold text-black mb-8">Undergraduate Research</h3>
              <div>
                <p className="text-xs font-semibold text-gray-600 tracking-widest mb-2">03</p>
                <p className="font-serif text-lg font-medium text-black">
                  Effect of iron overload and HCV on hepatic and renal functioning in beta-thalassemia patients
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
