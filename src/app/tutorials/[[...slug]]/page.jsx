import Title from "@/components/Title";

const TutorialPage = async ({ params }) => {
const {slug} = await params
const [technology, topic, , page_no, subject] = slug || [];

// console.log(technology,topic,page_no, subject, slug);
console.log(slug);


  
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Page Title */}
      <Title>{technology} Tutorials</Title>

      {/* Topic */}
      <h2 className="text-2xl font-semibold mt-4 capitalize">{topic}</h2>

      <hr className="my-4" />

      {/* Content Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <h3 className="text-xl font-bold capitalize">{subject}</h3>

        <p className="text-gray-600">
          Page No: <span className="font-semibold">{page_no}</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
        <p>
          This tutorial covers the topic of <strong>{subject}</strong> in{" "}
          <strong>{technology}</strong>. You will learn core concepts, best
          practices, and real-world usage examples.
        </p>

        <p>
          Understanding <strong>{topic}</strong> is essential for building
          scalable and high-performance applications.
        </p>
      </div>
    </div>
  );
};

export default TutorialPage;
