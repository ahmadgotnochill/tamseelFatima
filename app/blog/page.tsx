import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  month: string;
  year: number;
  url: string;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      title: 'Rewind 2021 – The Biotech Advancements At The Beginning Of A New Decade',
      date: 'Dec 2021',
      month: 'December',
      year: 2021,
      url: 'https://the-dna-universe.com/2021/12/23/rewind-2021/',
    },
    {
      title: 'Microarrays Accelerate Blue Biotechnology to The Next Stage',
      date: 'Sep 2021',
      month: 'September',
      year: 2021,
      url: 'https://the-dna-universe.com/2021/09/30/microarrays-accelerate-blue-biotechnology-to-the-next-stage/',
    },
    {
      title: 'The Future of RNA Applications: Diagnostics, Therapeutics and Research',
      date: 'Apr 2021',
      month: 'April',
      year: 2021,
      url: 'https://the-dna-universe.com/2021/04/29/the-future-of-rna-applications-diagnostics-therapeutics-and-research/',
    },
    {
      title: 'Girl\'s and Boy\'s Day 2021: Become The Next Generation of Biologists',
      date: 'Apr 2021',
      month: 'April',
      year: 2021,
      url: 'https://the-dna-universe.com/2021/04/20/girls_and_boys_day_2021/',
    },
    {
      title: 'International Women\'s Day 2021. We Are Celebrating The Women In Biology',
      date: 'Mar 2021',
      month: 'March',
      year: 2021,
      url: 'https://the-dna-universe.com/2021/03/03/international-womens-day-2021/',
    },
    {
      title: 'The history of mRNA applications',
      date: 'Apr 2021',
      month: 'April',
      year: 2021,
      url: 'https://the-dna-universe.com/2021/04/15/the-history-of-mrna-applications/',
    },
    {
      title: 'What Why and How of mRNA Vaccines',
      date: 'Feb 2021',
      month: 'February',
      year: 2021,
      url: 'https://the-dna-universe.com/2021/02/18/what-why-and-how-of-mrna-vaccines/',
    },
    {
      title: 'A Journey Through the History of DNA Sequencing',
      date: 'Nov 2020',
      month: 'November',
      year: 2020,
      url: 'https://the-dna-universe.com/2020/11/02/a-journey-through-the-history-of-dna-sequencing/',
    },
    {
      title: 'Who Won the Race to Solve the DNA Structure?',
      date: 'June 2020',
      month: 'June',
      year: 2020,
      url: 'https://the-dna-universe.com/2020/06/25/who-won-the-race-to-solve-the-dna-structure/',
    },
    {
      title: 'SARS-CoV-2 Genomics Facts',
      date: 'May 2020',
      month: 'May',
      year: 2020,
      url: 'https://the-dna-universe.com/2020/05/07/sars-cov-2-genomics-facts/',
    },
    {
      title: 'Why You Need to Authenticate Your Cell Line – Your Research Could Depend on It',
      date: 'Mar 2020',
      month: 'March',
      year: 2020,
      url: 'https://the-dna-universe.com/2020/03/05/why-you-need-to-authenticate-your-cell-line/',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-black mb-12">Blog</h1>

          {/* Blog Feed */}
          <div className="divide-y divide-gray-300">
            {blogPosts.map((post, index) => (
              <article key={index} className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                  <p className="text-sm font-medium text-gray-600 min-w-fit flex-shrink-0">
                    {post.date}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-3 hover:text-gray-700 transition-colors"
                  >
                    <h2 className="font-serif text-base font-medium text-black group-hover:underline underline-offset-2">
                      {post.title}
                    </h2>
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-600 group-hover:text-gray-800" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
