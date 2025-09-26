import profile1 from "../assets/feedback-images/Ellipse 452.png";
import profile2 from "../assets/feedback-images/Ellipse 452 (1).png";
import profile3 from "../assets/feedback-images/Ellipse 452 (2).png";

const Feedback = () => {
  const testimonials = [
    {
      name: "Farzana H.",
      title: "Owner, CleanPro Services",
      quote:
        "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
      image: profile1,
    },
    {
      name: "Ahmed R.",
      title: "Technician",
      quote:
        "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
      image: profile2,
    },
    {
      name: "Rafiq M.",
      title: "Homeowner",
      quote:
        "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
      image: profile3,
    },
  ];

  return (
    <div className="pt-24 sm:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-0 relative">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What Our Users Are Saying
          </h2>
          <p className="mt-6 text-md leading-8 text-gray-600">
            Real stories from clients, employees, and business owners who use{" "}
            <br />
            our app every day.
          </p>
        </div>

        <div className="-top-72 right-5/12 w-[140px] h-[1370px] absolute bg-[#3BA334]/20 rounded-full blur-[200px] transform -rotate-90 -z-10 hidden xl:block" />
        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-[#94aa92]/10 relative z-0"
            >
              {/* Profile Info */}
              <div className="flex items-center gap-4">
                <img
                  className="h-14 w-14 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-6 text-gray-700 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
