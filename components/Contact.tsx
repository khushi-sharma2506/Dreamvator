// components/Contact.tsx
export default function Contact() {
  return (
    <footer className="py-20 px-6 bg-[#0B1F3A] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Connect with DreamVator</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Let’s collaborate, grow, and help more aviators take flight.
        </p>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto text-left">
          <a
            href="https://www.instagram.com/dreamvator?igsh=NXRqZGQ0cmZ3eWlw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122b4d] p-6 rounded-md shadow-sm hover:bg-[#0a1730] transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">Instagram</h3>
            <p>Follow us for updates and behind-the-scenes content.</p>
          </a>
          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#122b4d] p-6 rounded-md shadow-sm hover:bg-[#0a1730] transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">YouTube</h3>
            <p>Subscribe for tutorials, tips, and aviation insights.</p>
          </a>
          <a
            href="mailto:team@dreamvator.com"
            className="bg-[#122b4d] p-6 rounded-md shadow-sm hover:bg-[#0a1730] transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">Email Us</h3>
            <p>Get in touch for collaborations or inquiries.</p>
          </a>
        </div>

        <p className="text-sm opacity-70 mt-12">© {new Date().getFullYear()} DreamVator. All rights reserved.</p>
      </div>
    </footer>
  );
}
