
type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

export default function Career() {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Marketing Executive",
      department: "Marketing",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "We are looking for a skilled Marketing Executive with experience in Marketing and Business Development.",
    },
    {
      id: 2,
      title: "HR Manager",
      department: "Human Resources",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "Responsible for managing recruitment, employee relations, and organizational development.",
    },
    {
      id: 3,
      title: "Operations Executive",
      department: "Operations",
      location: "On-site",
      type: "Full-time",
      description:
        "Handle daily operational activities including logistics, coordination, and support services.",
    },
  ];
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-[var(--border)] shadow-theme rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>

            <div className="mt-2 text-sm text-gray-500 space-y-1">
              <p><span className="font-medium">Department:</span> {job.department}</p>
              <p><span className="font-medium">Location:</span> {job.location}</p>
              <p><span className="font-medium">Type:</span> {job.type}</p>
            </div>

            <p className="mt-3 text-sm text-[var(--text-dark)]">
              {job.description}
            </p>

            <button className="mt-4 w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:bg-[var(--primary-dark)] transition">
              Apply Now
            </button>
          </div>
        ))}

      </div>
  )
}
