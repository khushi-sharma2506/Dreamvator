// components/Team.tsx
export default function Team() {
  return (
    <section className="py-20 px-6 bg-[#DEDEDD] text-[#0B1F3A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Team & Collaborators</h2>
        <p className="mb-8">
          DreamVator is powered by a collective of anonymous but highly experienced aviation mentors — commercial pilots, instructors, and passionate professionals who value purpose over publicity.
        </p>

        <div className="space-y-8 max-w-xl mx-auto text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2">The Mentorship Core</h3>
            <p>
              Our pilot-mentors come from diverse aviation backgrounds, committed to guiding future aviators through mentorship, strategy, and honest advice.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Collaborators & Partners</h3>
            <p>
              From test-prep creators to simulator platforms, we collaborate with organizations who share our vision for clarity and excellence in aviation education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
