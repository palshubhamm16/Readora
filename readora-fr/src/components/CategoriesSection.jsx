import Card08 from "@/components/ui/card/card08";
import { categories } from "@/data/mockbooks";

export default function CategoriesSection() {

    return (
        <div className="space-y-16 px-6">

            {categories.map((category) => (

                <div key={category.name}>

                    {/* Category Title */}
                    <h2 className="text-3xl font-bold mb-6 text-black ml-5">
                        {category.name}
                    </h2>

                    {/* Books Row */}
                    <div className="flex flex-wrap gap-x-10 overflow-x-auto pb-2 justify-center">

                        {category.books.map((book, index) => (

                            <Card08
                                key={index}
                                title={book.title}
                                subtitle={book.author}
                                image={book.coverImage}
                                badge={{ text: category.name }}
                                href={`/book/${book.title}`}
                            />

                        ))}

                    </div>

                </div>

            ))}

        </div>
    );
}