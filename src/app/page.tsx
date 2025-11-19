import Container from "@/components/Container";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  MegaphoneIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24" aria-labelledby="hero">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 id="hero" className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                Ignite Your Future at JBIT College
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                A NAAC-accredited, AICTE-approved institution offering future-ready programs,
                industry partnerships, and a vibrant campus in the foothills of the Himalayas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#admissions"
                  className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
                >
                  Apply Now
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white/10"
                >
                  Explore Programs
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-lg">
                <div>
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-xs text-zinc-500">Placement Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-xs text-zinc-500">Recruiters</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">25 Acre</p>
                  <p className="text-xs text-zinc-500">Green Campus</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto aspect-[4/3] w-full max-w-xl rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-1 shadow-2xl">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/90 dark:bg-zinc-900/80">
                  <div className="grid gap-6 p-8 sm:grid-cols-2">
                    <Feature icon={<AcademicCapIcon className="h-6 w-6" />} title="NAAC Accredited" subtitle="Quality education assured" />
                    <Feature icon={<BuildingLibraryIcon className="h-6 w-6" />} title="AICTE Approved" subtitle="Nationally recognized" />
                    <Feature icon={<TrophyIcon className="h-6 w-6" />} title="Top Placements" subtitle="Leading recruiters" />
                    <Feature icon={<MegaphoneIcon className="h-6 w-6" />} title="Clubs & Fests" subtitle="Vibrant campus life" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16">
        <Container>
          <SectionHeading title="About JBIT" subtitle="Excellence in engineering, management and technology" />
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            JBIT College is committed to nurturing innovative thinkers and industry-ready professionals. With state-of-the-art labs,
            experienced faculty, and strong placement support, we provide a transformative learning experience.
          </p>
        </Container>
      </section>

      {/* Programs */}
      <section id="programs" className="scroll-mt-24 bg-zinc-50 py-16 dark:bg-zinc-950">
        <Container>
          <SectionHeading title="Programs" subtitle="Future-ready courses designed with industry input" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProgramCard title="B.Tech - Computer Science" tags={["AI", "Cloud", "Cybersecurity"]} />
            <ProgramCard title="B.Tech - Electronics" tags={["VLSI", "IoT", "Embedded"]} />
            <ProgramCard title="B.Tech - Mechanical" tags={["CAD/CAM", "Robotics"]} />
            <ProgramCard title="MBA - Management" tags={["Finance", "Marketing", "HR"]} />
            <ProgramCard title="BCA - Computer Applications" tags={["Full-Stack", "Data"]} />
            <ProgramCard title="Diploma Programs" tags={["Polytechnic", "Vocational"]} />
          </div>
        </Container>
      </section>

      {/* Admissions */}
      <section id="admissions" className="scroll-mt-24 py-16">
        <Container>
          <SectionHeading title="Admissions" subtitle="Join a community of achievers" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Step index={1} title="Check Eligibility" desc="Review program-wise criteria and required documents." />
            <Step index={2} title="Apply Online" desc="Submit your application and pay the fee securely." />
            <Step index={3} title="Appear & Confirm" desc="Participate in counseling and confirm your seat." />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Start Application</a>
            <a href="#contact" className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10">Talk to Admissions</a>
          </div>
        </Container>
      </section>

      {/* Campus */}
      <section id="campus" className="scroll-mt-24 bg-zinc-50 py-16 dark:bg-zinc-950">
        <Container>
          <SectionHeading title="Campus Life" subtitle="Learn, innovate and grow on a lush green campus" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Tile title="Innovation Labs" desc="Modern labs for hands-on learning and research." />
            <Tile title="Sports & Fitness" desc="Indoor and outdoor facilities to stay active." />
            <Tile title="Hostels & Dining" desc="Comfortable accommodation and hygienic meals." />
            <Tile title="Clubs & Societies" desc="Technical, cultural and social clubs for everyone." />
            <Tile title="Library & E-Resources" desc="Extensive physical and digital collections." />
            <Tile title="Career Services" desc="Resume, mock interviews, internships and more." />
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-16">
        <Container>
          <SectionHeading title="Contact Us" subtitle="We'd love to hear from you" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
              <h4 className="mb-2 text-lg font-semibold">Reach out</h4>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Phone: +91 99999 99999</li>
                <li>Email: admissions@jbit.edu</li>
                <li>Address: 26 Milestone, Dehradun, Uttarakhand</li>
              </ul>
              <p className="mt-4 text-sm text-zinc-500">Office hours: Mon-Sat, 9:00 AM - 5:00 PM</p>
            </div>
            <form className="grid gap-4 rounded-2xl border border-black/10 p-6 dark:border-white/10">
              <div>
                <label className="mb-1 block text-sm font-medium">Full Name</label>
                <input className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring dark:border-white/10 dark:bg-zinc-900" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input type="email" className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring dark:border-white/10 dark:bg-zinc-900" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <input className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring dark:border-white/10 dark:bg-zinc-900" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea rows={4} className="w-full resize-none rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring dark:border-white/10 dark:bg-zinc-900" />
              </div>
              <button type="button" className="mt-2 w-fit rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Submit</button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}

function Feature({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-zinc-500">{subtitle}</p>
      </div>
    </div>
  );
}

function ProgramCard({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <CursorArrowRaysIcon className="h-5 w-5 text-zinc-400" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-300">
            {t}
          </span>
        ))}
      </div>
      <a href="#admissions" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline">
        Learn more <CheckCircleIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

function Step({ index, title, desc }: { index: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
          {index}
        </span>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{desc}</p>
    </div>
  );
}

function Tile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{desc}</p>
    </div>
  );
}
