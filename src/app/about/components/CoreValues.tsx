import { values } from "../data/Values";

export default function CoreValues() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="section-title">Our Core Values</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {values.map((value) => (
          <div key={value.title} className="p-6 border rounded-xl">
            <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
