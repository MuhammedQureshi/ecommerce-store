interface NavbarCategoryFeaturedProps {
  item: Record<string, any>;
}

const NavbarCategoryFeatured: React.FC<NavbarCategoryFeaturedProps> = ({
  item,
}) => {
  return ( 
    <div key={item.name} className="group relative text-base sm:text-sm">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="object-cover object-center"
        />
      </div>
      <a href={item.href} className="mt-6 block font-medium text-gray-900">
        {item.name}
      </a>
      <p className="mt-1">
        Shop now
      </p>
    </div>
  );
};
 
export default NavbarCategoryFeatured;
