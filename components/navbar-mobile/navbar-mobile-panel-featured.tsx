interface NavbarMobilePanelFeaturedProps {
  category: Record<string, any>
}

const NavbarMobilePanelFeatured: React.FC<NavbarMobilePanelFeaturedProps> = ({
  category
}) => {
  return ( 
    <div className="grid grid-cols-2 gap-x-4">
      {category.featured.map((item: any) => (
        <div key={item.name} className="group relative text-sm">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
          </div>
          <a href={item.href} className="mt-6 block font-medium text-gray-900">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {item.name}
          </a>
          <p aria-hidden="true" className="mt-1">
            Shop now
          </p>
        </div>
      ))}
    </div>
  );
}
 
export default NavbarMobilePanelFeatured;
