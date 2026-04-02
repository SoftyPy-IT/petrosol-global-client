interface ManagingBodyCardProps {
  name: string
  role: string
  description: string
}

export default function Managing_Body_Card({
  name,
  role,
  description,
}: ManagingBodyCardProps) {
  return (
    <div className="max-w-80 card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Avatar */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center text-white text-xl font-bold">
        {name.charAt(0)}
      </div>

      {/* Name */}
      <h3 className="text-lg font-heading text-primary-dark">
        {name}
      </h3>

      {/* Role */}
      <p className="text-primary text-sm mb-3">
        {role}
      </p>

      {/* Divider */}
      <div className="w-10 h-1 bg-primary mx-auto mb-3 rounded-full" />

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
