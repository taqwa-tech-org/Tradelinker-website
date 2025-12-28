import { team } from "../data/Team";

export default function ManagementTeam() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="section-title">Management Team</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
