import React, { useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Header from "./Header";
import useTitle from "../../../../Hooks/useTitle";

const team = [
  {
    name: "Rezoanul Hasan",
    image:
      "https://scontent.fird5-1.fna.fbcdn.net/v/t1.6435-1/160099600_3757031334417758_3894304083960476350_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=e4545e&_nc_ohc=e4LZUL6YNxYQ7kNvgHu0lCy&_nc_zt=24&_nc_ht=scontent.fird5-1.fna&_nc_gid=A9vYvTAH-lRE0oDv1gNePv6&oh=00_AYDtsAXM13sScKAIi8LcEZtKudSf4eTdaWvKACfoOAxSXQ&oe=6741D8E7",
    title: "CEO",
    yearsOfExperience: 15,
  },
  {
    name: "Jane Smith",
    image:
      "https://e7.pngegg.com/pngimages/506/881/png-clipart-graphy-black-african-american-african-american-man-public-relations-business-man.png",
    title: "CTO",
    yearsOfExperience: 12,
  },
  {
    name: "Michael Johnson",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/046/319/611/small_2x/confident-businessman-holding-laptop-and-briefcase-on-transparent-background-png.png",
    title: "CFO",
    yearsOfExperience: 10,
  },
  {
    name: "Emily Davis",
    image:
      "https://img.freepik.com/free-photo/young-smiling-businesswoman_329181-11700.jpg?semt=ais_hybrid",
    title: "COO",
    yearsOfExperience: 11,
  },
  {
    name: "Toya Brown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBC-VLorUJJ3CEcr__uIqr8ZGuuuKG1mxyw&s",
    title: "VP of Marketing",
    yearsOfExperience: 9,
  },
  {
    name: "Sarah Wilson",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small/confident-young-businessman-writing-on-a-clipboard-png.png",
    title: "VP of Sales",
    yearsOfExperience: 8,
  },
  {
    name: "James White",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/041/642/170/small/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png",
    title: "Lead Developer",
    yearsOfExperience: 7,
  },
  {
    name: "Sophia Martinez",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUugjtV3srkn0DGrm78J0C4Gy427DkH90SOw&s",
    title: "UX/UI Designer",
    yearsOfExperience: 6,
  },
  {
    name: "Chris Evans",
    image:
      "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png",
    title: "HR Manager",
    yearsOfExperience: 10,
  },
  {
    name: "Olivia Taylor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYcYL3p-YLmi8jrVmuc9dyjHG4d5XVDFOb5-S-mMSQEVj_DpYXmDWK8z6KWOBfI2ufI4&usqp=CAU",
    title: "Project Manager",
    yearsOfExperience: 8,
  },
  {
    name: "Benjamin Anderson",
    image:
      "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png",
    title: "Data Analyst",
    yearsOfExperience: 5,
  },
  {
    name: "Charlotte Lee",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yN19yZWFsaXN0aWNfcGhvdG9fb2Zfc21pbGluZ19oYW5kc29tZV95b3VuZ19pbl8xNWExMTE1ZC0xZTBiLTQ4YjAtOGEyNi01ZDE1ZmE3Njg2MzYucG5n.png",
    title: "Customer Support",
    yearsOfExperience: 4,
  },
];

const OurTeams = () => {
  useTitle("Our Teams");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-6 mt-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center  text-gradient">
          Meet Our Amazing Team
        </h1>
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gradient">
          The Passionate Minds Behind Our Success
        </h1>
        <p className="text-lg text-gray-600 text-center mb-4">
          Our dedicated team is the driving force behind our innovative
          solutions. With diverse expertise and a commitment to excellence, we
          work together to achieve extraordinary results. Meet the talented
          professionals who turn ideas into reality and ensure our growth every
          day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-300"
              />
              <h3 className="text-2xl font-bold text-center">{member.name}</h3>
              <p className="text-center text-indigo-300">{member.title}</p>
              <div className="flex justify-center items-center mt-4">
                <FaRegCalendarAlt className="text-teal-400 mr-2" />
                <p>{member.yearsOfExperience} years of experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
