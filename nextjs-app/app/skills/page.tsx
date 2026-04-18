const skills = [
  "JavaScript / TypeScript",
  "React / Next.JS",
  "Node.js / Express",
  "Tailwind CSS",
  "SQL / MySQL / PostgreSQL",
  "Git / GitHub",
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border rounded-lg p-4 bg-white hover:shadow-sm transition-shadow"
          >
            <p className="text-gray-700 font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
