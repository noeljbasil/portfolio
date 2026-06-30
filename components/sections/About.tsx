import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-8 py-32"
    >
      <h2 className="mb-10 text-4xl font-bold">
        About Me
      </h2>

      <div className="grid gap-10 md:grid-cols-2">

        <div>

          <p className="text-lg leading-9 text-gray-300">
            {portfolio.summary}
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <div className="mb-6 text-5xl font-bold text-cyan-400">
            {portfolio.yearsExperience}+
          </div>

          <div className="text-gray-300">
            Years building production data platforms across
            healthcare, AI and industrial analytics.
          </div>

        </div>

      </div>

    </section>
  );
}