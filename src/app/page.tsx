/*
Project: LibisSweet
Tech Stack: Next.js 14, Tailwind CSS
Language: Hebrew
*/

// File: app/page.tsx (Home Page)

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-neutral-100 to-neutral-200">
        <h1 className="text-5xl font-bold mb-4">ברוכים הבאים ל־LibisSweet 🍰</h1>
        <p className="text-xl">עוגות וקינוחים בעבודת יד לכל אירוע</p>
        <Link href="#order">
          <button className="mt-6 bg-rose-400 text-white py-2 px-6 rounded-full shadow-lg hover:bg-rose-500 transition">
            בצעו הזמנה
          </button>
        </Link>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">היצירות שלנו</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src={`/cakes/cake${num}.jpg`}
                alt={`עוגה ${num}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="order" className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-8">השאירו פרטים או בצעו הזמנה</h2>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="השם שלך"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="האימייל שלך"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="ההודעה שלך או בקשה מיוחדת..."
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="bg-neutral-700 text-white py-2 px-6 rounded-lg hover:bg-neutral-800 transition"
          >
            שלח בקשה
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-neutral-100 text-neutral-700">
        &copy; {new Date().getFullYear()} LibisSweet.shop. כל הזכויות שמורות.
      </footer>
    </main>
  );
}
