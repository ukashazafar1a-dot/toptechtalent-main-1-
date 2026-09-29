import Link from "next/link"

const LinksSection = () => {
  const footerData = {
    services: {
      title: "Services",
      links: ["Browse Jobs", "Get Hired Talent", "Permanent Talent", "Consulting Services"],
    },
    expertise: {
      title: "Areas of Expertise",
      links: [
        "Finance & Accounting",
        "Technology",
        "Marketing & Creative",
        "Administration & Customer Support",
        "Legal",
      ],
    },
    resources: {
      title: "Resources & Tools",
      links: ["Discover Insights", "Invoice", "Job Directory", "Salary Guide", "Time Reports", "Contact Us"],
    },
    about: {
      title: "About",
      links: [
        "About Robert Half",
        "Leadership",
        "Career With Us",
        "Locations",
        "Investor Center",
        "Our Brands",
        "Supplier Advantage",
      ],
    },
  }

  return (
    <footer className="bg-primary text-white page-width index-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{footerData.services.title}</h3>
            <ul className="space-y-2">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Expertise Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{footerData.expertise.title}</h3>
            <ul className="space-y-2">
              {footerData.expertise.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Tools Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{footerData.resources.title}</h3>
            <ul className="space-y-2">
              {footerData.resources.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{footerData.about.title}</h3>
            <ul className="space-y-2">
              {footerData.about.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default LinksSection;