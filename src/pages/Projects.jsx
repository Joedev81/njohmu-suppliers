import React from "react";

const projects = [
    {
        name: "Construction Site",
        location: "Kitengela, Yukos",
        equipment: ["Excavator", "Shovels", "Concrete Mixer"],
        status: "Completed",
        image: "/images/project1.jpg",
    },

    {
        name: "Road Project",
        location: "Nairobi",
        equipment: ["Bulldozer", "Dump Truck"],
        status: "Completed",
        image: "/images/project2.jpg",
    },

    {
        name: "Material Digging",
        location: "Portland (Athi-River)",
        equipment: ["Excavator", "Lorrys"],
        status: "Ongoing",
        image: "/images/project3.jpg",
    },
];

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl ont-bold text-gray-800 mb-8">OUR PROJECT</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow p-6">
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                        )}
                        <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                        <p className="text-gray-600">Location: {project.location}</p>
                        <p className="text-gray-600">
                            Equipment: {project.equipment.join(", ")}
                        </p>
                        <p className={`mt-2 font-semibold ${project.status === "Ongoing" ? "text-red-600" : "text-green-600"}`}>
                            Status: {project.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}