interface NavbarMobilePanelSectionsProps {
  category: Record<string, any>;
}

const NavbarMobilePanelSections: React.FC<NavbarMobilePanelSectionsProps> = ({
  category
}) => {
  return (
    <div>
      {category.sections.map((section: any) => (
        <div key={section.name} className="mt-10">
          <p className="font-semibold text-gray-900">
            {section.name}
          </p>
          <ul className="mt-6 flex flex-col space-y-6">
            {section.items.map((item: any) => (
              <li key={item.name} className="flow-root">
                <a href={item.href} className="-m-2 block p-2 text-gray-500">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NavbarMobilePanelSections;
