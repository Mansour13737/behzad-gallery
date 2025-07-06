"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-10 md:px-20 font-display font-light">
      <h1 className="text-4xl font-light mb-2">
        About{" "}
        <span className="text-[#be9858]">
          Behzad Khodadadi
        </span>
      </h1>
      <p className="text-lg text-white/70 mb-10 leading-relaxed">
        Member of the Industrial, Advertising, and Commercial Photographers Association
        <br />
        Photographer & Videographer | Born 1989 | Based in Tehran | Married
      </p>

      {/* Who I Am */}
      <section className="mb-10">
        <h2 className="text-2xl font-light text-[#be9858] mb-2">Who I Am</h2>
        <p className="text-white/70 leading-relaxed">
          I am a professional commercial photographer and videographer with strong focus on jewelry, industrial and advertising visuals.
          My journey began in 2018 as a freelancer, and since then, I have built a solid reputation for creating high-quality, impactful content
          that elevates brands and products. I’ve worked with renowned experts and have developed a strong artistic vision and professional discipline.
        </p>
      </section>

      {/* What I Do */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-light text-[#be9858] mb-2">What I Do</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Jewelry & Commercial Photography</li>
            <li>Photo Editing & Retouching</li>
            <li>Outdoor & Fashion Photography</li>
            <li>Architectural, News & Event Photography</li>
            <li>Cinematic & Commercial Videography</li>
            <li>Lighting Design for Advertising</li>
            <li>Sound Design, Filmmaking & Teaser Production</li>
            <li>Social Media & Web Content Creation</li>
            <li>Creative Direction for Visual Campaigns</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-light text-[#be9858] mb-2">What I Value</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Strong team player & effective communicator</li>
            <li>Excellent time management & leadership skills</li>
            <li>Creative mindset with a passion for visual excellence</li>
            <li>AI aware & problem solver</li>
            <li>Adept at working under pressure</li>
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section className="mb-10">
        <h2 className="text-2xl font-light text-[#be9858] mb-4">Tools & Software</h2>
        <div className="space-y-3 text-white/70">
          {[
            { name: "Adobe Photoshop", value: 80 },
            { name: "Adobe Premiere", value: 70 },
            { name: "Adobe Lightroom", value: 80 },
            { name: "Adobe Camera Raw", value: 80 },
            { name: "Adobe Audition", value: 75 },
          ].map((tool) => (
            <div key={tool.name}>
              <div className="flex justify-between">
                <span>{tool.name}</span>
                <span>{tool.value}%</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded overflow-hidden">
                <div
                  className="h-full bg-[#be9858]"
                  style={{ width: `${tool.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-light text-[#be9858] mb-4">Work Experience</h2>
        <div className="text-white/70 space-y-3">
          <div>
            <h3 className="font-light">Studio Manager</h3>
            <p>Bani Tejarat Ariana (Standkala) — Apr 2021 – Present</p>
          </div>
          <div>
            <h3 className="font-light">Commercial & Industrial Photographer</h3>
            <p>Bani Tejarat Ariana (Standkala) — Mar 2018 – Apr 2021</p>
          </div>
          <div>
            <h3 className="font-light">Project Planning Expert</h3>
            <p>Kabel Sazi Nak — Dec 2015 – Jul 2018</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-light text-[#be9858] mb-2">Let’s Work Together</h2>
        <p className="text-white/70 mb-2 leading-relaxed">
          I’m always open to creative collaborations, commercial projects, and visual storytelling opportunities in the world of jewelry, luxury, and industry.
        </p>
        <p className="text-white/70">📩 behbiin@gmail.com</p>
        <p className="text-white/70">📞 +98 912 068 7097</p>
      </section>
    </div>
  );
}