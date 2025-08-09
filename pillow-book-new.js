// The Pillow Book: Material Culture Exploration
// Pairing Sei Shōnagon's observations with Heian period artifacts

// Chronological array of all passages as they appear in the book
const ALL_PASSAGES = [
    {
        id: "new_year_delights",
        title: "Especially Delightful Is the First Day",
        text: "Especially delightful is the first day of the First Month, when the mists so often shroud the sky. Everyone pays great attention to his appearance and dresses with the utmost care... This is the day when members of the nobility who live outside the Palace arrive in their magnificently decorated carriages to admire the blue horses. As the carriages are drawn over the ground-beam of the Central Gate, there is always a tremendous bump, and the heads of the women passengers are knocked together; the combs fall out of their hair, and may be smashed to pieces if the owners are not careful... Some of them were not properly powdered; here and there their skin showed through unpleasantly like the dark patches of earth in a garden where the snow has begun to melt.",
        japanese: "一日は、つとめて、霧いと深くて、後涼殿の遣戸の音聞こゆるに...",
        theme: "New Year court ceremonies and their material culture",
        tags: ["court", "seasons", "lists"],
        artifacts: [
            {
                id: "MET-45377",
                title: "Imperial Carts (Gosho guruma)",
                date: "Edo period (1615–1868)",
                period: "Edo period (showing Heian continuity)",
                medium: "Painted handscroll depicting ox-drawn carriages",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP-17329-001.jpg",
                url: "https://www.metmuseum.org/art/collection/search/45377",
                museum: "Metropolitan Museum of Art",
                connection: "magnificently decorated carriages",
                description: "These ox-drawn carriages with bamboo blinds are exactly the 'magnificently decorated carriages' Sei Shōnagon describes arriving at the Palace for New Year ceremonies. The gosho guruma provided elegant transport for court aristocracy, complete with privacy screens for noble passengers."
            },
            {
                id: "MET-60608",
                title: "Japanese Hair Ornament (Traditional Style)",
                date: "Edo period (1615–1868), preserving ancient traditions",
                period: "Later period, but representing Heian-era styling traditions",
                medium: "Silver and silver gilt",
                image: "https://images.metmuseum.org/CRDImages/as/original/30_46_2_O.JPG",
                url: "https://www.metmuseum.org/art/collection/search/60608",
                museum: "Metropolitan Museum of Art",
                connection: "combs fall out of their hair",
                description: "This delicate silver and silver gilt hair ornament represents the type of precious accessories that Heian court ladies wore. The fine craftsmanship shows exactly the fragility Sei Shōnagon observed - these valuable ornaments could 'fall out of their hair, and may be smashed to pieces' when carriages bumped over palace gates. Such elegant pieces were essential to aristocratic appearance and status."
            },
            {
                id: "MET-40348",
                title: "Box for Personal Accessories (Tebako) with Shells and Seaweed Design",
                date: "Edo period (1615–1868)",
                period: "Edo period (preserving Heian court culture)",
                medium: "Lacquered wood with maki-e gold powder and mother-of-pearl inlay",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP704172.jpg",
                url: "https://www.metmuseum.org/art/collection/search/40348",
                museum: "Metropolitan Museum of Art",
                connection: "not properly powdered",
                description: "This elegant cosmetic box (tebako) would have contained the white face powder (oshiroi) that court aristocrats applied daily. When Sei Shōnagon noticed men who were 'not properly powdered,' she was observing failures in this essential court grooming ritual. The sophisticated maki-e gold decoration shows the luxury surrounding even basic toiletries."
            }
        ]
    },
    {
        id: "birds",
        title: "Birds",
        text: "The parrot does not belong to our country, but I like it very much. I am told that it imitates whatever people say. The hototogisu, the water-rail, and the snipe; the starling, the siskin, and the fly-catcher. They say when the copper pheasant cries for its mate it can be consoled if one puts a mirror before it — a very moving thought. What misery these birds must suffer if they are separated from each other by a gorge or a ravine! If I were to write down all my thoughts about the crane, I should become tiresome. How magnificent when this bird lets out its cry, which reaches up to the very heavens! Among water fowl it is the mandarin duck that affects me most. How charming to think that the drake and his mate take turns in brushing the frost from each other's wings! The poets have extolled the uguisu as a splendid bird, and so indeed it is; for both its voice and its appearance are most elegant and beautiful.",
        japanese: "鳥は、鸚鵡。いとはかなげにうつくしげなり。人の語を学びてよく言ふ。霍公鳥。水鶏。鴫。翡翠。鶯。ひわ。ひたき。つり。ところどり。雁はいとをかし。...",
        theme: "Sei Shōnagon's observations on bird behavior and beauty",
        tags: ["lists"],
        artifacts: [
            {
                id: "MET-45338",
                title: "Haguro Mirror with Birds, Flowers, and Butterflies",
                date: "12th century",
                period: "Heian period (794–1185)",
                medium: "Bronze with decorative relief",
                image: "https://images.metmuseum.org/CRDImages/as/original/LC-1975_268_160_001.jpg",
                url: "https://www.metmuseum.org/art/collection/search/45338",
                museum: "Metropolitan Museum of Art",
                connection: "puts a mirror before it",
                description: "This Heian period mirror depicts the very birds Sei Shōnagon writes about. The delicate birds cast in bronze reflect her aesthetic sensibility. The mirror directly connects to her observation about the copper pheasant being 'consoled if one puts a mirror before it' when separated from its mate."
            },
            {
                id: "MET-829405",
                title: "Hototogisu (Japanese Cuckoo)",
                date: "Early 19th century (1800-1820)",
                period: "Edo period (1615-1868)",
                medium: "Hanging scroll; ink and color on silk",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP-23443-002.jpg",
                url: "https://www.metmuseum.org/art/collection/search/829405",
                museum: "Metropolitan Museum of Art",
                connection: "The hototogisu",
                description: "This painting by Kubo Shunman depicts the hototogisu, the Japanese cuckoo that Sei Shōnagon mentions first among her beloved birds. In Japanese culture, the hototogisu is deeply associated with summer and poetic expression - exactly the kind of refined aesthetic observation that characterizes her writing about birds and their behaviors."
            },
            {
                id: "HAM-1942.243",
                title: "Cranes (Hanging Scroll)",
                date: "Edo period, 17th-18th century",
                period: "Edo period (1615-1868)",
                medium: "Hanging scroll; ink and color on silk",
                image: "https://nrs.harvard.edu/urn-3:HUAM:VRS19922_dynmc",
                url: "https://harvardartmuseums.org/collections",
                museum: "Harvard Art Museums",
                connection: "How magnificent when this bird lets out its cry",
                description: "This elegant crane painting by Kano Tsunenobu captures exactly what Sei Shōnagon found so moving about cranes. She wrote: 'How magnificent when this bird lets out its cry, which reaches up to the very heavens!' The graceful brushwork reflects the refined aesthetic she brought to observing nature."
            },
            {
                id: "HAM-210275",
                title: "Mandarin Ducks",
                date: "19th century",
                period: "Edo period (1615-1868)",
                medium: "Woodblock print, ink and color on paper",
                image: "https://nrs.harvard.edu/urn-3:HUAM:VRS33674_dynmc",
                url: "https://harvardartmuseums.org/collections/object/210275",
                museum: "Harvard Art Museums",
                connection: "mandarin duck that affects me most",
                description: "This woodblock print by Utagawa Hiroshige depicts mandarin ducks, exactly the waterfowl that 'affects me most' according to Sei Shōnagon. She found it charming 'to think that the drake and his mate take turns in brushing the frost from each other's wings!' Hiroshige's delicate rendering captures this tender mutual care between the paired birds."
            },
            {
                id: "HAM-178075",
                title: "Warbler on Plum Branch",
                date: "Edo period (1615-1868)",
                period: "Edo period",
                medium: "Woodblock print, ink and color on paper",
                image: "https://nrs.harvard.edu/urn-3:HUAM:VRS36760_dynmc",
                url: "https://harvardartmuseums.org/collections/object/178075",
                museum: "Harvard Art Museums",
                connection: "uguisu as a splendid bird",
                description: "This Hiroshige print shows a warbler (uguisu) on a plum branch, perfectly capturing what Sei Shōnagon loved about this bird. She wrote: 'The poets have extolled the uguisu as a splendid bird, and so indeed it is; for both its voice and its appearance are most elegant and beautiful.' The plum branch setting reflects the spring season when the uguisu's song was most treasured."
            }
        ]
    },
    {
        id: "summer_noon",
        title: "It Is Noon on a Summer Day",
        text: "It is noon on a summer day and the weather is so hot that one does not know what to do with oneself. One keeps waving one's fan, but there is not a breath of cool air; then, just as one is hurrying to put one's hands in a bowl of iced water, a letter arrives. It is written on a sheet of fine, brilliantly red paper and attached to a Chinese pink in full bloom. Without thinking, one lays aside one's fan (which was not doing much good in any case) and imagines how deeply one's friend must feel to have taken all this trouble on such a suffocating day.",
        japanese: "夏の日の正午ばかりに、いとあつきころ、いかにせまほしく思ふべきものぞ。扇を使ひあがれど、風もせず...",
        theme: "Summer heat and the ritual of correspondence", 
        tags: ["seasons", "court"],
        artifact: {
            id: "Kyoto-Womens-Hiogi",
            title: "Cypress Slat Folding Fan (Hiōgi) - Authentic Replica",
            date: "Heian period style (original period: 794-1185)",
            period: "Heian period reconstruction",
            medium: "Cypress wood (traditional materials)",
            image: "https://lh3.googleusercontent.com/ci/AL18g_Qxxr15xd0RXBLNu5Fk_u1XTDKMZSTp0hRc29VgT54JVFYgWskk06DlAV_dH9RItztwPV2lv72p",
            url: "https://artsandculture.google.com/asset/cypress-slat-folding-fan-hi%C5%8Dgi-heian-period-costumes/mgFcZeJr28faWw?hl=en",
            museum: "Kyoto Women's University, Lifestyle Design Laboratory",
            connection: "This authentic Heian period hiōgi (cypress fan) is exactly what Sei Shōnagon would have been 'waving' during the suffocating summer heat she describes. These folding fans made of cypress wood slats were essential court accessories - by the mid-Heian period, cypress fans in winter and paper fans in summer were codified parts of aristocratic costume. The fact that she 'lays aside' her fan when the letter arrives shows how central these elegant implements were to daily court life, where even the simple act of staying cool required beautiful, carefully crafted objects that symbolized social status and refined taste."
        }
    },
    {
        id: "changed_people",
        title: "People Who Have Changed as much as if They had been Reborn",
        text: "Someone who has been serving as a mere maid-of-honour is appointed to be the nurse of an Imperial Prince. She no longer bothers with a Chinese jacket or a formal skirt, and, weaving a simple white dress, she lies down next to the young prince and stays with him inside his curtain-dais. Summoning her former colleagues, she sends them to her room with messages or gives them letters to deliver. Words do not suffice to describe her behaviour. What a splendid thing it is for a Subordinate Official in the Emperor's Private Office when he is promoted to the rank of Chamberlain! One cannot believe that he is the same man who last year in the Eleventh Month had to carry a zither during the Special Festival. When one sees him walking along in the company of young noblemen, one really wonders where he can have sprung from.",
        japanese: "生まれ変わったかと思われるもの。女房などして、宮の御乳母にたつ人。唐衣も着ず、裳も着ねば、白き衣一つを着て、若宮の御側に臥し、几帳の内にあり。",
        theme: "Social transformation and court hierarchy changes",
        tags: ["court", "lists"],
        artifacts: [
            {
                id: "Kyoto-Womens-Kicho",
                title: "Room-Dividing Standing Curtain (Kichō) - Authentic Reconstruction",
                date: "Heian period style (original period: 794-1185)",
                period: "Heian period reconstruction",
                medium: "Silk, wooden frame",
                image: "https://lh3.googleusercontent.com/ci/AL18g_TgyiYnhsbpogHpDfsOB-AXHqAzZmDdU03A21KkW5A7CEz0TK4eZu0kf5fDVlmORnxylbWN",
                url: "https://artsandculture.google.com/asset/room-dividing-standing-curtain-kich-heian-period-costumes/qwFwxqF2EMZaMQ",
                museum: "Kyoto Women's University, Lifestyle Design Laboratory",
                connection: "stays with him inside his curtain-dais",
                description: "This authentic Heian period kichō (curtain-dais) is exactly the type of portable privacy screen mentioned in the passage. When the former maid-of-honour becomes an Imperial Prince's nurse, she 'stays with him inside his curtain-dais' - the kichō provided essential privacy and status separation in aristocratic spaces. These elegant silk-and-wood structures were crucial furniture pieces that defined social boundaries and created intimate spaces within the formal court environment."
            },
            {
                id: "MET-502124",
                title: "Hawk-shaped Koto",
                date: "Late 19th century",
                period: "Meiji period (1868-1912)",
                medium: "Paulownia wood, metal strings",
                image: "https://images.metmuseum.org/CRDImages/mi/original/midp89.4.1549.jpg",
                url: "https://www.metmuseum.org/art/collection/search/502124",
                museum: "Metropolitan Museum of Art",
                connection: "carry a zither during the Special Festival",
                description: "This unique hawk-shaped koto represents the type of court musical instrument that the Subordinate Official had to 'carry during the Special Festival' before his promotion. While this Meiji period example shows European influences (which would not have existed in Sei Shōnagon's time), it demonstrates the continuing ceremonial importance of koto in Japanese court culture. The dramatic social transformation she describes - from carrying musical instruments to walking with young noblemen - illustrates the rigid hierarchy and dramatic status changes possible in Heian court society."
            }
        ]
    },
    {
        id: "flowering_trees",
        title: "Flowering Trees",
        text: "Plum blossoms, whether light or dark, and in particular red plum blossoms, fill me with happiness. I also like a slender branch of cherry blossoms, with large petals and dark red leaves. How graceful is the wisteria as its branches bend down covered with whorls of delicately coloured petals! The u no hana is a more modest plant and deserves no special praise; yet it flowers at a pleasant time of the year, and I enjoy thinking that a hototogisu may be hiding in its shade. At the end of the Fourth Month and the beginning of the Fifth the orange trees have dark green leaves and are covered with brilliant white flowers. The purple blossoms of the paulownia are also delightful. Besides, it is this tree that provides the wood for the zithers from which come so many beautiful sounds. The melia tree is ugly, but I find its flowers very pretty indeed.",
        japanese: "花の木ならば、桜の、花びら大きく、色濃く咲きたる、いとおもしろし。梅は、濃きも薄きも、紅梅などもをかし。",
        theme: "Aesthetic appreciation of seasonal flowering trees",
        tags: ["seasons", "lists"],
        artifacts: [
            {
                id: "MET-845083",
                title: "Poems about Plum Blossoms (Sekido-bon Version)",
                date: "Heian period (794-1185)",
                period: "Heian period (794-1185)",
                medium: "Calligraphy on paper",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP-25909-002.jpg",
                url: "https://www.metmuseum.org/art/collection/search/845083",
                museum: "Metropolitan Museum of Art",
                connection: "plum blossoms, whether light or dark",
                description: "This authentic Heian period calligraphy represents the very poetry tradition that Sei Shōnagon participated in. Traditionally attributed to Fujiwara no Yukinari, these plum blossom poems capture the same aesthetic discrimination between light and dark varieties that she celebrates. The refined calligraphy shows how plum blossoms were central to court literary culture and seasonal appreciation."
            },
            {
                id: "MET-53408",
                title: "White Plum Blossoms and Moon (Itō Jakuchū)",
                date: "1755",
                period: "Edo period",
                medium: "Ink and color on silk",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP-12232-273.jpg",
                url: "https://www.metmuseum.org/art/collection/search/53408",
                museum: "Metropolitan Museum of Art",
                connection: "light plum blossoms",
                description: "This elegant painting by Itō Jakuchū shows the light variety of plum blossoms that 'fill me with happiness' according to Sei Shōnagon. Created as one of Jakuchū's earliest dated works, it captures the subtle beauty and resilience of white plum blossoms against the winter moon - exactly the refined seasonal observation that characterized Heian court aesthetic sensibility."
            },
            {
                id: "MET-53423",
                title: "Blossoming Cherry Trees (Sakai Hōitsu)",
                date: "Edo period (1615-1868)",
                period: "Edo period",
                medium: "Folding screens",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP704936.jpg",
                url: "https://www.metmuseum.org/art/collection/search/53423",
                museum: "Metropolitan Museum of Art",
                connection: "slender branch of cherry blossoms, with large petals",
                description: "These elegant folding screens by Sakai Hōitsu capture exactly what Sei Shōnagon admired - cherry blossoms with 'large petals and dark red leaves.' The Rinpa style presentation shows the graceful branching and substantial blooms that distinguished the finest cherry varieties in Japanese aesthetic tradition, preserving the same seasonal beauty that enchanted Heian court observers."
            },
            {
                id: "MET-56941",
                title: "Bird and Wisteria (Utagawa Hiroshige)",
                date: "Edo period (1615-1868)",
                period: "Edo period",
                medium: "Woodblock print",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP120481.jpg",
                url: "https://www.metmuseum.org/art/collection/search/56941",
                museum: "Metropolitan Museum of Art",
                connection: "wisteria as its branches bend down covered with whorls of delicately coloured petals",
                description: "Hiroshige's print perfectly captures Sei Shōnagon's vision of wisteria's grace. The accompanying poem reads 'Pendulous down from the eaves droop the wisteria blossoms' - exactly matching her observation of how 'graceful is the wisteria as its branches bend down covered with whorls of delicately coloured petals.' This shows the continuing poetic tradition of appreciating wisteria's distinctive cascading beauty."
            },
            {
                id: "MET-45275",
                title: "Fourth Month from Birds and Flowers of the Twelve Months (Ogata Kenzan)",
                date: "Edo period (1615-1868)",
                period: "Edo period",
                medium: "Ceramic with painted decoration",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP221668.jpg",
                url: "https://www.metmuseum.org/art/collection/search/45275",
                museum: "Metropolitan Museum of Art",
                connection: "u no hana is a more modest plant",
                description: "Kenzan's ceramic depicts u no hana (deutzia) flowers with the accompanying poem: 'Robes of white cloth should be aired out, they say, just when summer arrives and deutzia flowers in bloom cause the hedge to droop.' This perfectly captures Sei Shōnagon's observation of u no hana as a 'modest plant' that flowers at a 'pleasant time of year' when she imagines a hototogisu bird hiding in its shade."
            },
            {
                id: "Cleveland-1986.2.1",
                title: "Phoenixes and Paulownia Screen",
                date: "Momoyama period",
                period: "Momoyama period",
                medium: "Ink, color, and gold on paper (byōbu screen)",
                image: "https://openaccess-cdn.clevelandart.org/1986.2.1/1986.2.1_web.jpg",
                url: "https://www.clevelandart.org/art/1986.2.1",
                museum: "Cleveland Museum of Art",
                connection: "purple blossoms of the paulownia",
                description: "This magnificent screen shows towering paulownia trees with their distinctive purple blossoms alongside heraldic phoenixes. Sei Shōnagon writes that paulownia is where 'that grandiose and famous bird of China makes its nest' and provides wood for koto zithers. The imperial associations and magnificent scale capture exactly why she calls paulownia not merely 'delightful' but 'magnificent.'"
            },
            {
                id: "MET-65008",
                title: "Robe (Kosode) with Mandarin Orange Tree and Auspicious Characters",
                date: "Second half of 18th century",
                period: "Edo period (1615-1868)",
                medium: "Dyed and embroidered silk crepe with couched gold-wrapped threads",
                image: "https://images.metmuseum.org/CRDImages/as/original/2002.325.jpg",
                url: "https://www.metmuseum.org/art/collection/search/65008",
                museum: "Metropolitan Museum of Art",
                connection: "orange trees have dark green leaves and are covered with brilliant white flowers",
                description: "This elegant kosode features an auspicious mandarin orange tree (tachibana) bearing both fruit and flowers, exactly as Sei Shōnagon describes orange trees with 'dark green leaves and covered with brilliant white flowers' where the fruit stands out 'like golden spheres among the flowers.' The robe includes characters reading 'manzai-raku' (enjoying comfort for ten thousand years), reflecting the tachibana's symbolism of longevity and prosperity in Japanese culture."
            },
            {
                id: "MET-36734",
                title: "Pear Blossoms and Swallows (Utagawa Hiroshige)",
                date: "Edo period (1615-1868)",
                period: "Edo period",
                medium: "Woodblock print",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP121516.jpg",
                url: "https://www.metmuseum.org/art/collection/search/36734",
                museum: "Metropolitan Museum of Art",
                connection: "blossom of the pear tree is the most prosaic, vulgar thing",
                description: "This Hiroshige print depicts the pear blossoms that Sei Shōnagon initially dismissed as 'the most prosaic, vulgar thing in the world.' However, she later reconsiders when learning that Chinese poets compared pear blossoms to Yang Kuei-fei's tear-stained face - 'a spray of pear blossom in spring, covered with drops of rain.' Hiroshige's delicate rendering shows how even 'vulgar' flowers can achieve artistic beauty through skilled interpretation."
            }
        ]
    },
    {
        id: "trees",
        title: "Trees",
        text: "The maple and the five-needled pine, the willow and the orange tree. The Chinese hawthorn has a rather vulgar name (Side Tree); but, when all the other trees have lost their blossoms, its dark red leaves shine out impressively from the green surroundings. I shall say absolutely nothing about the spindle tree. I particularly enjoy the sakaki on occasions like the Imperial sacred dances at the special festivals. Among all the trees in the world this is the one that people have always regarded as the tree of the Divine Presence - a very pleasant thought. The maple is an insignificant tree in itself; but its red-tinged leaves, all spread in the same direction, look very pretty on the branches, and there is something charming about its flowers, which seem as fragile as dried-up insects. The yuzuriha has an abundance of pretty leaves, all green and glossy; but its stem is quite different from what one would expect, for it is red and glittering. The common oak is a magnificent tree. To think that the God of Leaves lives there! It is also fascinating that Captains and Lieutenants of the Middle Palace Guards should be named after this tree.",
        japanese: "木は、楓、五葉の松、柳、橘。そば木は、いと憎げなる名なれど、花もなき頃、紅葉の色づきて、青きに映えてみゆるは、をかし。",
        theme: "Aesthetic appreciation of trees and their seasonal beauty",
        tags: ["seasons", "lists"],
        artifacts: [
            {
                id: "MET-57250",
                title: "Autumn Maple (Shibata Zeshin)",
                date: "Late 19th century (1867-1891)",
                period: "Meiji period (1868-1912)",
                medium: "Hanging scroll; color on silk",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP-37460-002.jpg",
                url: "https://www.metmuseum.org/art/collection/search/57250",
                museum: "Metropolitan Museum of Art",
                connection: "its red-tinged leaves, all spread in the same direction",
                description: "This elegant hanging scroll by Shibata Zeshin perfectly captures what Sei Shōnagon found charming about maple trees. She writes that 'the maple is an insignificant tree in itself; but its red-tinged leaves, all spread in the same direction, look very pretty on the branches.' Zeshin's masterful use of color on silk shows exactly this quality - the way autumn maple leaves create beauty through their unified directional growth and brilliant red coloring."
            },
            {
                id: "FREER-F1901.120",
                title: "Tea Bowl with Yuzuriha Design (Koto Ware)",
                date: "Mid 19th century (1842-1862)",
                period: "Edo period (1615-1868)",
                medium: "Porcelain with cobalt underglaze and white slip",
                image: "https://ids.si.edu/ids/iiif/FS-7329_10/full/500,/0/default.jpg",
                url: "https://asia.si.edu/explore-art-culture/collections/search/edanmdm:fsg_F1901.120/",
                museum: "Freer Gallery of Art, Smithsonian Institution",
                connection: "yuzuriha has an abundance of pretty leaves",
                description: "This elegant Koto ware tea bowl features the yuzuriha leaves that Sei Shōnagon describes as having 'an abundance of pretty leaves, all green and glossy.' The yuzuriha symbolizes the hope that fathers will not pass away before their sons become adults able to succeed them. This New Year symbolism perfectly captures the spiritual significance Sei Shōnagon found in trees that connected to both aesthetic beauty and deeper cultural meaning."
            },
            {
                id: "RITUAL-SAKAKI",
                title: "Sakaki Branch for Shinto Rituals",
                date: "Traditional use from Heian period onwards",
                period: "Heian period tradition (794-1185)",
                medium: "Sacred evergreen branches with paper streamers (shide)",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Tamagushi_at_Itsukushima_Shrine.jpg/640px-Tamagushi_at_Itsukushima_Shrine.jpg",
                url: "https://en.wikipedia.org/wiki/Tamagushi",
                museum: "Traditional Shinto Practice (Representative Example)",
                connection: "I particularly enjoy the sakaki on occasions like the Imperial sacred dances",
                description: "The sakaki (Cleyera japonica) that Sei Shōnagon admired during 'Imperial sacred dances at the special festivals' remains central to Shinto ritual practice. She notes that 'among all the trees in the world this is the one that people have always regarded as the tree of the Divine Presence.' These sacred evergreen branches, prepared as tamagushi with white paper streamers, embody the spiritual connection between nature and the divine that she found so moving."
            },
            {
                id: "ARCHITECTURE-HINOKI",
                title: "Hinoki Cypress in Traditional Architecture",
                date: "Heian period architectural tradition",
                period: "Heian period (794-1185)",
                medium: "Hinoki cypress wood construction",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Horyu-ji_National_Treasure_World_heritage_国宝・世界遺産_法隆寺31.JPG/640px-Horyu-ji_National_Treasure_World_heritage_国宝・世界遺産_法隆寺31.JPG",
                url: "https://en.wikipedia.org/wiki/Horyu-ji",
                museum: "Horyu-ji Temple (UNESCO World Heritage Site)",
                connection: "the palace of three ridges, four ridges was built with the wood of this tree",
                description: "The hinoki cypress that Sei Shōnagon mentions was used to build 'the palace of three ridges, four ridges' refers to the traditional Japanese palace architecture of her time. Hinoki wood was prized for its durability, fragrance, and resistance to decay. She notes that 'in the Fifth Month it gives a pleasant imitation of the sound of rain' - a poetic reference to how hinoki structures respond to seasonal weather. Horyu-ji Temple, shown here, exemplifies this ancient building tradition using hinoki wood that has lasted over 1,300 years."
            },
            {
                id: "CULTURAL-OAK",
                title: "Oak Tree and Middle Palace Guards",
                date: "Heian period court tradition",
                period: "Heian period (794-1185)",
                medium: "Cultural institution and naming tradition",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Quercus_dentata_2.jpg/640px-Quercus_dentata_2.jpg",
                url: "https://en.wikipedia.org/wiki/Quercus_dentata",
                museum: "Traditional Cultural Practice",
                connection: "Captains and Lieutenants of the Middle Palace Guards should be named after this tree",
                description: "Sei Shōnagon finds it 'fascinating that Captains and Lieutenants of the Middle Palace Guards should be named after this tree.' The common oak (kashiwa) she references was indeed central to court hierarchy - the Middle Palace Guards (Emonfu) had ranks named after the oak tree. She declares it 'a magnificent tree' and notes that 'the God of Leaves lives there!' This connection between the natural world and court bureaucracy reflects the deep integration of nature symbolism in Heian court culture."
            },
            {
                id: "MET-65603",
                title: "Aged Pines (Suzuki Shōnen)",
                date: "Late 19th century (1867-1899)",
                period: "Meiji period (1868-1912)",
                medium: "Pair of six-panel folding screens; ink on gold-leaf",
                image: "https://images.metmuseum.org/CRDImages/as/original/DP107331.jpg",
                url: "https://www.metmuseum.org/art/collection/search/65603",
                museum: "Metropolitan Museum of Art",
                connection: "The maple and the five-needled pine",
                description: "These magnificent folding screens by Suzuki Shōnen showcase the five-needled pine that Sei Shōnagon lists first alongside the maple. The artist's masterful use of ink on gold leaf captures the enduring strength and aesthetic appeal of pine trees that made them central to Japanese artistic tradition. The monumental scale and elegant brushwork reflect the same refined appreciation for natural beauty that characterizes Sei Shōnagon's observations."
            },
            {
                id: "FREER-F1902.274",
                title: "Heron and Willow (Hanabusa Itcho)",
                date: "Late 17th century",
                period: "Edo period (1615-1868)",
                medium: "Ink and color on paper",
                image: "https://ids.si.edu/ids/deliveryService?id=FS-7810_05",
                url: "https://asia.si.edu/object/F1902.274/",
                museum: "Freer Gallery of Art, Smithsonian Institution",
                connection: "the willow and the orange tree",
                description: "Hanabusa Itcho's elegant painting pairs a heron with the willow tree that Sei Shōnagon mentions alongside the maple and pine. The willow's graceful, drooping branches and delicate leaves embody the refined aesthetic sensibility she brought to observing trees. This classical pairing of bird and willow reflects the same attention to natural beauty and seasonal awareness that characterizes her writing."
            },
            {
                id: "MET-65008",
                title: "Robe with Mandarin Orange Tree and Auspicious Characters",
                date: "Second half of 18th century (1750-1799)",
                period: "Edo period (1615-1868)",
                medium: "Dyed and embroidered silk crepe with couched gold-wrapped threads",
                image: "https://images.metmuseum.org/CRDImages/as/original/2002.325.jpg",
                url: "https://www.metmuseum.org/art/collection/search/65008",
                museum: "Metropolitan Museum of Art",
                connection: "the willow and the orange tree",
                description: "This luxurious kosode features the tachibana (mandarin orange tree) that Sei Shōnagon lists among her favored trees. The embroidered design shows the tree bearing both fruit and flowers, capturing exactly the kind of aesthetic appeal she found in orange trees. In Japanese culture, tachibana symbolizes longevity and good fortune - qualities that align with her appreciation for trees that offered both visual beauty and cultural significance."
            }
        ]
    },
    {
        id: "spring_dawn",
        title: "In Spring It Is the Dawn",
        text: "In spring it is the dawn that is most beautiful. As the light creeps over the hills, their outlines are dyed a faint red and wisps of purplish cloud trail over them.",
        japanese: "春はあけぼの。やうやう白くなりゆく山ぎは、少し明かりて、紫だちたる雲の細くたなびきたる。",
        theme: "The fleeting beauty of dawn moments",
        tags: ["seasons"],
        artifact: {
            id: "MET-36935",
            title: "Hara: Mount Fuji in the Morning (Hara, Asa no Fuji)",
            date: "ca. 1833–34",
            period: "Edo period (1615–1868)",
            medium: "Polychrome woodblock print; ink and color on paper",
            image: "https://images.metmuseum.org/CRDImages/as/original/DP122187.jpg",
            url: "https://www.metmuseum.org/art/collection/search/36935",
            museum: "Metropolitan Museum of Art",
            description: "Hiroshige's masterful print captures exactly what Sei Shōnagon found most beautiful about spring dawns - the gentle morning light illuminating mountain peaks with subtle colors. The soft gradations from dark to light in the sky perfectly embody her observation that 'In spring it is the dawn that is most beautiful... the faintly colored mountains.' This artwork shows how Japanese artists continued to celebrate the same ephemeral dawn beauty that enchanted Heian court observers centuries earlier."
        }
    },
    {
        id: "summer_nights",
        title: "In Summer the Nights",
        text: "In summer the nights. Not only when the moon shines, but on dark nights too, as the fireflies flit to and fro, and even when it rains, how beautiful it is!",
        japanese: "夏は夜。月のころはさらなり、闇もなほ、蛍の多く飛びちがひたる。また、ただ一つ二つなど、ほのかにうち光て行くもをかし。",
        theme: "Nocturnal summer beauty and illumination",
        tags: ["seasons"],
        artifact: {
            id: "MET-36630",
            title: "Catching fireflies (Hotaru gari)",
            date: "ca. 1796–97",
            period: "Edo period (1615–1868)",
            medium: "Triptych of polychrome woodblock prints; ink and color on paper",
            image: "https://images.metmuseum.org/CRDImages/as/original/DP144584.jpg",
            url: "https://www.metmuseum.org/art/collection/search/36630",
            museum: "Metropolitan Museum of Art",
            description: "Utamaro's enchanting triptych perfectly captures the summer night magic that Sei Shōnagon describes. The print shows elegant figures catching fireflies in the darkness, bringing to life her words about how beautiful it is when 'fireflies flit to and fro' on summer nights. This artwork demonstrates how the seasonal pleasure of hotaru-gari (firefly viewing) remained a cherished Japanese tradition, embodying the same appreciation for ephemeral natural beauty that characterized Heian court aesthetics."
        }
    },
    {
        id: "elegant_things",
        title: "Elegant Things",
        text: "A white coat worn over a violet waistcoat. Duck eggs. Shaved ice mixed with liana syrup and put in a new silver bowl. A rosary of rock crystal. Wisteria blossoms. Plum blossoms covered with snow. A pretty child eating strawberries.",
        japanese: "をかしきもの。白き衣に、紫の袴、白き単衣。薄色の単衣に、白き袴。",
        theme: "Court aesthetics and refined objects",
        tags: ["court", "lists"],
        artifact: {
            id: "CMA-1969.124",
            title: "Writing Box with Pine, Camellia, and Bamboo",
            date: "1400s (Muromachi period)",
            period: "Muromachi period (1392–1573)", 
            medium: "Lacquered wood with gold and silver sprinkled powder (maki-e)",
            image: "https://openaccess-cdn.clevelandart.org/1969.124/1969.124_web.jpg",
            url: "https://clevelandart.org/art/1969.124",
            museum: "Cleveland Museum of Art",
            connection: "This writing box represents the type of refined craftsmanship that Sei Shōnagon appreciated in her list of 'elegant things.' The lacquered surface and precious materials reflect the court's sophisticated aesthetic sensibilities that valued both beauty and function in daily objects."
        }
    },
    {
        id: "young_bachelor",
        title: "A Young Bachelor",
        text: "A young bachelor of an adventurous nature comes home at dawn, having spent the night in some amorous encounter... Presently he performs his ablutions and changes into a white Court cloak, which he wears without any trousers. Thus attired, he starts reciting the sixth scroll of the Lotus Sutra from memory. A pious gentleman indeed - or so one might think, except that at just this moment the messenger returns and nods encouragingly to his master, who thereupon instantly interrupts his recitation and, with what might strike one as sinful haste, transfers his attention to the lady's reply.",
        japanese: "若き男の、物の心知りて...ありつるさまにて、法華経の六の巻をいとなまめがたに読みたまふ。",
        theme: "Buddhist devotion intersecting with courtly love",
        tags: ["religious", "court"],
        artifact: {
            id: "HAM-303456",
            title: "Lotus Sutra Fragment (Chapter 23)",
            date: "c. 1150 (Late Heian period)",
            period: "Heian period (794–1185)",
            medium: "Paper with gold and silver decoration",
            image: "https://ids.lib.harvard.edu/ids/iiif/446439501/full/full/0/default.jpg",
            url: "https://harvardartmuseums.org/collections/object/303456",
            museum: "Harvard Art Museums",
            connection: "This is exactly the type of Lotus Sutra scroll that Sei Shōnagon's young bachelor would have been reciting! She specifically mentions 'the sixth scroll of the Lotus Sutra' which he recites from memory while distracted by thoughts of his love letter. The elaborate gold and silver decoration on this fragment reflects the luxury of court life where Buddhist devotion and romantic pursuits intertwined."
        }
    }
];

let currentPassageIndex = 0;
let filteredPassages = ALL_PASSAGES;
let currentFilter = 'all';

function initializePage() {
    updatePassageCounter();
    displayCurrentPassage();
    updateNavigationButtons();
}

function displayCurrentPassage() {
    const passage = filteredPassages[currentPassageIndex];
    
    const contentArea = document.getElementById('contentArea');
    
    // Handle both single artifact and multiple artifacts
    const artifacts = passage.artifacts || [passage.artifact];
    const isMultiArtifact = passage.artifacts && passage.artifacts.length > 1;
    
    let artifactHTML = '';
    
    if (isMultiArtifact) {
        // Multiple artifacts - create a gallery
        artifactHTML = `
            <div class="artifacts-gallery">
                <div class="gallery-header">
                    <div class="gallery-title">Material Traces</div>
                    <div class="gallery-count">${artifacts.length} objects</div>
                </div>
                ${artifacts.map((artifact, index) => `
                    <div class="artifact-card" data-connection="${artifact.connection}" style="animation-delay: ${index * 0.1}s">
                        <div class="artifact-image-small" style="background-image: url('${artifact.image}')"></div>
                        <div class="artifact-info">
                            <div class="artifact-title-small">${artifact.title}</div>
                            <div class="artifact-connection-tag">"${artifact.connection}"</div>
                            <div class="artifact-details-small">
                                ${artifact.date}<br>
                                ${artifact.medium}
                            </div>
                            <div class="artifact-description">${artifact.description}</div>
                            <a href="${artifact.url}" target="_blank" class="museum-link-small">
                                ${artifact.museum} →
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        // Single artifact - original display
        const artifact = artifacts[0];
        artifactHTML = `
            <div class="artifact-panel">
                <div class="artifact-image" style="background-image: url('${artifact.image}')"></div>
                <div class="artifact-title">${artifact.title}</div>
                <div class="artifact-details">
                    ${artifact.date} • ${artifact.period}<br>
                    ${artifact.medium}
                </div>
                
                <div class="artifact-connection">
                    <div class="connection-title">Literary Connection</div>
                    ${artifact.connection || artifact.description}
                </div>
                
                <a href="${artifact.url}" target="_blank" class="museum-link">
                    View in ${artifact.museum} →
                </a>
            </div>
        `;
    }
    
    // Create enhanced passage text with highlighted quotes
    let enhancedText = passage.text;
    if (isMultiArtifact) {
        artifacts.forEach((artifact, index) => {
            const connection = artifact.connection;
            if (enhancedText.includes(connection)) {
                enhancedText = enhancedText.replace(
                    connection, 
                    `<span class="quotable-text" data-artifact-index="${index}">${connection}</span>`
                );
            }
        });
    }
    
    // Audio feature temporarily disabled
    let audioControlsHTML = '';

    contentArea.innerHTML = `
        <div class="passage-panel">
            <div class="passage-title">${passage.title}</div>
            ${audioControlsHTML}
            <div class="passage-text">${enhancedText}</div>
            <div class="passage-text japanese">${passage.japanese}</div>
            
            <div class="passage-tags">
                ${passage.tags.map(tag => `<span class="passage-tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        ${artifactHTML}
    `;
    
    // Add interactive highlighting events
    if (isMultiArtifact) {
        setupHighlightingInteractions();
    }
}

function nextPassage() {
    if (currentPassageIndex < filteredPassages.length - 1) {
        stopAllAudio();
        currentPassageIndex++;
        displayCurrentPassage();
        updatePassageCounter();
        updateNavigationButtons();
    }
}

function previousPassage() {
    if (currentPassageIndex > 0) {
        stopAllAudio();
        currentPassageIndex--;
        displayCurrentPassage();
        updatePassageCounter();
        updateNavigationButtons();
    }
}

function updatePassageCounter() {
    document.getElementById('passageNumber').textContent = currentPassageIndex + 1;
    document.getElementById('totalPassages').textContent = filteredPassages.length;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentPassageIndex === 0;
    nextBtn.disabled = currentPassageIndex === filteredPassages.length - 1;
    
    prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
}

function setupHighlightingInteractions() {
    const quotableTexts = document.querySelectorAll('.quotable-text');
    const artifactCards = document.querySelectorAll('.artifact-card');
    
    // Add hover events for quotable text spans
    quotableTexts.forEach((textElement) => {
        const artifactIndex = textElement.getAttribute('data-artifact-index');
        const correspondingCard = document.querySelector(`.artifact-card:nth-child(${parseInt(artifactIndex) + 2})`); // +2 because of header
        
        textElement.addEventListener('mouseenter', () => {
            textElement.classList.add('highlighted-text');
            if (correspondingCard) {
                correspondingCard.classList.add('highlighted');
            }
        });
        
        textElement.addEventListener('mouseleave', () => {
            textElement.classList.remove('highlighted-text');
            if (correspondingCard) {
                correspondingCard.classList.remove('highlighted');
            }
        });
    });
    
    // Add hover events for artifact cards with pre-computed matching
    artifactCards.forEach((card, cardIndex) => {
        const matchingText = document.querySelector(`[data-artifact-index="${cardIndex}"]`);
        
        card.addEventListener('mouseenter', () => {
            card.classList.add('highlighted');
            if (matchingText) {
                matchingText.classList.add('highlighted-text');
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('highlighted');
            if (matchingText) {
                matchingText.classList.remove('highlighted-text');
            }
        });
    });
}

function toggleFilters() {
    const filterTags = document.getElementById('filterTags');
    filterTags.style.display = filterTags.style.display === 'none' ? 'flex' : 'none';
}

function filterByTag(tag) {
    currentFilter = tag;
    
    // Update active tag button
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tag="${tag}"]`).classList.add('active');
    
    // Filter passages
    if (tag === 'all') {
        filteredPassages = ALL_PASSAGES;
    } else {
        filteredPassages = ALL_PASSAGES.filter(passage => passage.tags.includes(tag));
    }
    
    // Reset to first passage in filtered set
    currentPassageIndex = 0;
    
    updatePassageCounter();
    displayCurrentPassage();
    updateNavigationButtons();
    
    // Hide filter menu
    document.getElementById('filterTags').style.display = 'none';
}

// Audio control functions
function toggleGagaku() {
    const audio = document.getElementById('gagakuAudio');
    const button = document.getElementById('gagakuToggle');
    
    if (audio && button) {
        if (audio.paused) {
            audio.play().then(() => {
                button.textContent = '⏸️ Stop Ceremonial Gagaku';
                button.classList.add('playing');
            }).catch(error => {
                console.error('Error playing audio:', error);
                button.textContent = '🔇 Audio Loading...';
                // Try alternative: suggest user interaction
                setTimeout(() => {
                    button.textContent = '🎵 Try Again (Click Twice)';
                }, 2000);
            });
        } else {
            audio.pause();
            audio.currentTime = 0;
            button.textContent = '🎵 Play Ceremonial Gagaku';
            button.classList.remove('playing');
        }
    }
}

// Stop audio when changing passages
function stopAllAudio() {
    const audio = document.getElementById('gagakuAudio');
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        previousPassage();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextPassage();
    }
});

// Initialize page when DOM loads
document.addEventListener('DOMContentLoaded', initializePage);