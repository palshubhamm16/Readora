import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "../src/models/Book.js";

dotenv.config();

const seedBooks = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Book.deleteMany();

        const books = [

            /* ================= FICTION ================= */

            {
                title: "The Silent Patient",
                about: "A psychological thriller",
                author: "Alex Michaelides",
                description: "Alicia Berenson’s life is perfect—until she shoots her husband and stops speaking. This gripping psychological thriller unravels secrets, obsession, and the shocking truth behind silence.",
                category: "Fiction",
                price: 399,
                stock: 40,
                isbn: "9781250301697",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770863/40097951.jpg_cj8tjl.png"
            },
            {
                title: "It Ends With Us",
                about: "A story about love and resilience",
                author: "Colleen Hoover",
                description: "Lily Bloom navigates love, heartbreak, and difficult choices in this emotional story about strength and resilience. A powerful exploration of relationships and self-worth.",
                category: "Fiction",
                price: 349,
                stock: 50,
                isbn: "9781501110368",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770829/MV5BYzM2NGMzNGQtZjNhMi00MTVkLTg2ZGQtN2M4OTllYzU1Y2Y0XkEyXkFqcGc_._V1_.jpg_fu0d78.jpg"
            },
            {
                title: "The Alchemist",
                about: "A journey of self-discovery",
                author: "Paulo Coelho",
                description: "Follow Santiago’s journey as he searches for treasure and discovers his destiny. A timeless story about dreams, purpose, and listening to your heart.",
                category: "Fiction",
                price: 299,
                stock: 60,
                isbn: "9780061122415",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770818/617lxveUjYL.jpg_obir4b.jpg"
            },
            {
                title: "1984",
                about: "Dystopian classic",
                author: "George Orwell",
                description: "A haunting tale of surveillance, control, and lost freedom. Orwell’s dystopian vision remains one of the most powerful warnings about totalitarianism.",
                category: "Fiction",
                price: 250,
                stock: 35,
                isbn: "9780451524935",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770829/807969106309685.5f8d702ac48d8_j57h7q.png"
            },
            {
                title: "Harry Potter and the Philosopher's Stone",
                about: "Magical adventure",
                author: "J.K. Rowling",
                description: "Harry discovers he is a wizard and begins his magical journey at Hogwarts. A story filled with friendship, courage, and wonder that has enchanted millions.",
                category: "Fiction",
                price: 499,
                stock: 70,
                isbn: "9780747532699",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773747207/hp1_irasfs.jpg"
            },

            /* ================= SELF HELP ================= */

            {
                title: "Atomic Habits",
                about: "Build better habits",
                author: "James Clear",
                description: "A practical guide to building good habits and breaking bad ones. Learn how tiny changes can lead to remarkable results in life and productivity.",
                category: "Self Help",
                price: 450,
                stock: 80,
                isbn: "9780735211292",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770818/9789366110851.jpg_niecmd.jpg"
            },
            {
                title: "Deep Work",
                about: "Focus in a distracted world",
                author: "Cal Newport",
                description: "Learn how to master focus in a distracted world. Deep Work shows how concentration can create success and produce meaningful results.",
                category: "Self Help",
                price: 399,
                stock: 45,
                isbn: "9781455586691",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773437/28383248.jpg_oiamh5.jpg"
            },
            {
                title: "Think and Grow Rich",
                about: "Success mindset",
                author: "Napoleon Hill",
                description: "A classic guide to achieving success through mindset and persistence. This book reveals principles followed by the world’s most successful individuals.",
                category: "Self Help",
                price: 300,
                stock: 60,
                isbn: "9781585424337",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770819/61IxJuRI39L._AC_UF1000_1000_QL80_.jpg_ar5tpt.jpg"
            },
            {
                title: "Ikigai",
                about: "Find your purpose",
                author: "Hector Garcia",
                description: "Discover the Japanese concept of Ikigai—your reason for being. A guide to living a longer, happier, and more meaningful life.",
                category: "Self Help",
                price: 350,
                stock: 55,
                isbn: "9780143130727",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770820/81l3rZK4lnL._AC_UF1000_1000_QL80_.jpg_yvd89i.jpg"
            },
            {
                title: "The Power of Now",
                about: "Live in the present",
                author: "Eckhart Tolle",
                description: "A spiritual guide to mindfulness and presence. Learn how to free yourself from overthinking and live fully in the present moment.",
                category: "Self Help",
                price: 420,
                stock: 40,
                isbn: "9781577314806",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770817/61Ij8nLooNL._UF1000_1000_QL80_.jpg_zan4la.jpg"
            },

            /* ================= SCIENCE ================= */

            {
                title: "Brief History of Time",
                about: "Cosmology explained",
                author: "Stephen Hawking",
                description: "Stephen Hawking explains complex concepts like black holes and the origin of the universe in a way that is accessible to everyone.",
                category: "Science",
                price: 500,
                stock: 30,
                isbn: "9780553380163",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770820/91ebghaV-eL._AC_UF1000_1000_QL80_.jpg_quwkj2.jpg"
            },
            {
                title: "Cosmos",
                about: "Universe exploration",
                author: "Carl Sagan",
                description: "A journey through space and time that explores the wonders of the universe and humanity’s place within it.",
                category: "Science",
                price: 480,
                stock: 35,
                isbn: "9780345539434",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770819/91W_Ff1W4ZL._AC_UF1000_1000_QL80_.jpg_sk4xsl.jpg"
            },
            {
                title: "The Selfish Gene",
                about: "Evolution theory",
                author: "Richard Dawkins",
                description: "An influential book on evolution that explains how genes drive natural selection and shape behavior.",
                category: "Science",
                price: 420,
                stock: 25,
                isbn: "9780198788607",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770819/91HsMWgJW5L._AC_UF1000_1000_QL80_.jpg_pbmwgr.jpg"
            },
            {
                title: "Astrophysics for People",
                about: "Space simplified",
                author: "Neil Tyson",
                description: "Neil deGrasse Tyson breaks down complex astrophysics concepts into easy-to-understand insights for curious readers.",
                category: "Science",
                price: 450,
                stock: 30,
                isbn: "9780393609394",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770834/32191710.jpg_ubo2p5.jpg"
            },
            {
                title: "The Gene",
                about: "Genetics explained",
                author: "Siddhartha Mukherjee",
                description: "A fascinating history of genetics, exploring how genes define identity and influence the future of medicine.",
                category: "Science",
                price: 520,
                stock: 20,
                isbn: "9781476733524",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770821/61K90ESHFyL._UF1000_1000_QL80_.jpg_dfsx4s.jpg"
            },
            /* ================= BUSINESS ================= */

            {
                title: "Zero to One",
                about: "Startup mindset",
                author: "Peter Thiel",
                description: "Zero to One reveals how to build innovative companies that create new markets instead of competing in existing ones. A must-read for entrepreneurs looking to think differently.",
                category: "Business",
                price: 450,
                stock: 40,
                isbn: "9780804139298",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773438/715b-x0mrzL._UF894_1000_QL80_.jpg_xkre8n.jpg"
            },
            {
                title: "Rich Dad Poor Dad",
                about: "Financial literacy",
                author: "Robert Kiyosaki",
                description: "A personal finance classic that contrasts two mindsets about money. Learn how to build wealth, invest wisely, and achieve financial independence.",
                category: "Business",
                price: 399,
                stock: 60,
                isbn: "9781612680194",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773439/91lHXEv3LfL._UF1000_1000_QL80_.jpg_t3kejr.jpg"
            },
            {
                title: "The Lean Startup",
                about: "Build startups smartly",
                author: "Eric Ries",
                description: "A revolutionary approach to building startups using continuous innovation and validated learning. Perfect for founders and product builders.",
                category: "Business",
                price: 420,
                stock: 45,
                isbn: "9780307887894",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773438/71sxTeZIi6L.jpg_hkvn7u.jpg"
            },
            {
                title: "Start With Why",
                about: "Leadership insights",
                author: "Simon Sinek",
                description: "Discover how great leaders inspire action by focusing on their purpose. This book explains why starting with 'why' leads to long-term success.",
                category: "Business",
                price: 380,
                stock: 50,
                isbn: "9781591846444",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773774636/start_with_why_kdkkfg.jpg"
            },
            {
                title: "Good to Great",
                about: "Business growth",
                author: "Jim Collins",
                description: "Based on years of research, this book explains how companies transition from being good to becoming truly great through disciplined leadership and strategy.",
                category: "Business",
                price: 500,
                stock: 35,
                isbn: "9780066620992",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773435/76865.jpg_frctbj.jpg"
            },

            /* ================= TECHNOLOGY ================= */

            {
                title: "Clean Code",
                about: "Code quality",
                author: "Robert C. Martin",
                description: "A must-read for developers, Clean Code teaches how to write readable, maintainable, and efficient code that stands the test of time.",
                category: "Technology",
                price: 700,
                stock: 25,
                isbn: "9780132350884",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773438/71T7aD3EOTL._UF1000_1000_QL80_.jpg_rtd48h.jpg"
            },
            {
                title: "System Design",
                about: "Scalable systems",
                author: "Alex Xu",
                description: "Learn how to design scalable systems with real-world examples. A great resource for developers preparing for system design interviews.",
                category: "Technology",
                price: 650,
                stock: 30,
                isbn: "9781736049112",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773774637/sys_des_ckuapd.jpg"
            },
            {
                title: "You Don't Know JS",
                about: "JavaScript deep dive",
                author: "Kyle Simpson",
                description: "A deep dive into JavaScript fundamentals, helping developers truly understand how the language works under the hood.",
                category: "Technology",
                price: 550,
                stock: 40,
                isbn: "9781491904244",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773774637/js_kyle_g7mynl.jpg"
            },
            {
                title: "Design Patterns",
                about: "Software design",
                author: "GoF",
                description: "The classic book on reusable software design patterns. Essential reading for developers looking to build scalable and maintainable systems.",
                category: "Technology",
                price: 800,
                stock: 20,
                isbn: "9780201633610",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773436/71sjeQGh7VL._AC_UF1000_1000_QL80_.jpg_czorzm.jpg"
            },
            {
                title: "Refactoring",
                about: "Improve code",
                author: "Martin Fowler",
                description: "Learn how to improve existing code without changing its behavior. A practical guide to writing cleaner and more efficient software.",
                category: "Technology",
                price: 750,
                stock: 25,
                isbn: "9780201485677",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773436/71vEr0oyt-L._AC_UF1000_1000_QL80_.jpg_q6sevu.jpg"
            },

            /* ================= HISTORY ================= */

            {
                title: "Sapiens",
                about: "Human history",
                author: "Yuval Noah Harari",
                description: "A groundbreaking exploration of human history, from the Stone Age to the modern era, examining how biology and culture shaped humanity.",
                category: "History",
                price: 550,
                stock: 50,
                isbn: "9780062316097",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773445/9780099590088-2.jpg_f687za.jpg"
            },
            {
                title: "Guns, Germs & Steel",
                about: "Civilization analysis",
                author: "Jared Diamond",
                description: "An insightful analysis of how geography and environment shaped civilizations and determined global power dynamics.",
                category: "History",
                price: 480,
                stock: 30,
                isbn: "9780393317558",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773435/51682KD6NWL._AC_UF1000_1000_QL80_.jpg_gza8rw.jpg"
            },
            {
                title: "The Silk Roads",
                about: "Global history",
                author: "Peter Frankopan",
                description: "A fresh perspective on world history, focusing on the importance of trade routes and cultural exchange across civilizations.",
                category: "History",
                price: 520,
                stock: 35,
                isbn: "9781101912379",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773436/91JV3d9G8cL._AC_UF1000_1000_QL80_.jpg_ork7cn.jpg"
            },
            {
                title: "World War II",
                about: "War history",
                author: "Antony Beevor",
                description: "A detailed and gripping account of World War II, covering major battles, strategies, and the human cost of the conflict.",
                category: "History",
                price: 600,
                stock: 25,
                isbn: "9780316023740",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773436/81BykdgDlvL._AC_UF1000_1000_QL80_.jpg_rianze.jpg"
            },
            {
                title: "India After Gandhi",
                about: "Modern India",
                author: "Ramachandra Guha",
                description: "A comprehensive history of India after independence, exploring political, social, and economic transformations.",
                category: "History",
                price: 650,
                stock: 30,
                isbn: "9780060958589",
                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773436/91lwJUV5OWL._AC_UF1000_1000_QL80_.jpg_yccqi6.jpg"
            }

        ];
        await Book.insertMany(books);

        console.log("✅ Books Seeded Successfully");
        process.exit();

    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
};

seedBooks();