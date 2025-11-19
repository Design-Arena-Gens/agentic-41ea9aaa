import Container from "@/components/Container";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white/80 py-12 text-sm dark:border-white/10 dark:bg-black/60">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-gradient-to-tr from-purple-500 to-indigo-500" />
              <span className="text-base font-semibold">JBIT College</span>
            </div>
            <p className="max-w-sm text-zinc-600 dark:text-zinc-400">
              A premier institution for engineering, management and technology, shaping future-ready leaders.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><MapPinIcon className="mt-0.5 h-5 w-5" /> 26 Milestone, Dehradun, Uttarakhand</li>
              <li className="flex items-start gap-2"><PhoneIcon className="mt-0.5 h-5 w-5" /> +91 99999 99999</li>
              <li className="flex items-start gap-2"><EnvelopeIcon className="mt-0.5 h-5 w-5" /> admissions@jbit.edu</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:underline">Programs</a></li>
              <li><a href="#admissions" className="hover:underline">Admissions</a></li>
              <li><a href="#campus" className="hover:underline">Campus Life</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Accreditations</h4>
            <p className="text-zinc-600 dark:text-zinc-400">AICTE Approved ? NAAC Accredited ? Affiliated to State University</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-zinc-500 sm:flex-row dark:border-white/10">
          <p>? {new Date().getFullYear()} JBIT College. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-200">Privacy</a>
            <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-200">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
