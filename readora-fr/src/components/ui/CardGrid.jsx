import Card08 from "./card/card08";

export default function CardGrid({ items = [], title, subtitle }) {

    if (!items || items.length === 0) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-lg text-zinc-500">
                    No items to display.
                </p>
            </div>
        );
    }

    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">

                {title && (
                    <h2 className="mb-2 text-4xl font-bold">
                        {title}
                    </h2>
                )}

                {subtitle && (
                    <p className="mb-8 text-lg">
                        {subtitle}
                    </p>
                )}

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-10">

                    {items.map((item, index) => (
                        <Card08
                            key={`${item._id || index}`}
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            badge={{ text: "New" }}
                            href={item.href}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
}