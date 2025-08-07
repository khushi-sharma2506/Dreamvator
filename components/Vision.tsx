// components/Vision.tsx
export default function Vision() {
  return (
    <section className="py-20 px-6 bg-[#0B1F3A] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">How It Works / Vision</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Our step-by-step approach combines transparency, mentorship, and structured guidance to empower aspiring pilots.
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-left max-w-4xl mx-auto">
          <div className="bg-[#122b4d] p-6 rounded-md shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Step-by-Step Approach</h3>
            <p>
              From sign-up to graduation, we provide clear milestones, actionable advice, and continuous support to keep you on track.
            </p>
          </div>
          <div className="bg-[#122b4d] p-6 rounded-md shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Transparency & Mentorship</h3>
            <p>
              We believe in open communication and personalized mentorship from seasoned pilots who have been where you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
