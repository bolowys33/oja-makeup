import { CATEGORIES } from "../constants/categories";

const Categories = () => {
    return (
        <>
            {CATEGORIES.map((cat) => (
                <div key={cat.name} className="my-4">
                    <h4 className="font-krona mb-2">{cat.name}</h4>
                    <ul className="ml-4 space-y-2">
                        {cat.subCategories.map((subCat) => (
                            <li
                                key={subCat}
                                className={`cursor-pointer hover:text-yellow font-medium`}>
                                {subCat}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default Categories;
