import Image from "next/image"

export function Testimonial({ name, role, content, image }: { name: any; role: any; content: any; image: any; }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image src={image || "/placeholder.svg"} alt={name} width={60} height={60} className="rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

export function FAQ({ question, answer }: { question: any; answer: any; }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  )
}

export function PricingTier({ name, price, features }: { name: any; price: any; features: any; }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-4xl font-bold mb-6">${price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="block w-full bg-blue-600 text-white text-center font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Enroll Now
      </a>
    </div>
  )
}

