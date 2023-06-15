import { filters } from "@/constants";

import FilterItem from "./filter-item";

const Filters = () => {
  return ( 
    <div className="hidden lg:block space-y-10 divide-y divide-gray-200">
      {filters.map((section, sectionIdx) => (
        <div key={section.name} className={sectionIdx === 0 ? '' : 'pt-10'}>
          <div>
            <p className="block text-lg font-bold text-gray-900">{section.name}</p>
            <div className="space-y-3 pt-6">
              {section.options.map((option) => (
                <FilterItem
                  key={option.value}
                  option={option} 
                  section={section}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default Filters;
