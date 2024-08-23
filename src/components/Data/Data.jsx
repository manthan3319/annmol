// src/data/products.js
import { Tuver, wheat, Moong, Sesame, desi_chana, peanuts } from '../Images/Images';

export const products = [
    {
        id: 1,
        name: 'White Sesame Seeds',
        image: Tuver,
        description: 'Nutritional Facts & Benefits',
        specification: [
          { Parameter: "Admixture", Level: "1% Max (0.05%)" },
          { Parameter: "Purity", Level: "99% Max (99.95%)" },
          { Parameter: "Oil content", Level: "48% Min" },
          { Parameter: "FFA", Level: "2% Max" },
          { Parameter: "Moisture", Level: "6% Max" },
          { Parameter: "Salmonella", Level: "Absent/25g" },
          { Parameter: "Pesticide Residues", Level: "Within EU Regulations" }
        ],
        PackagingInformation: [
          { detail: "Bag Type: Laminated" },
          { detail: "Bag Weight: 60 Gms" },
          { detail: "Weight Capacity: Up to 25 Kgs Material" },
          { detail: "Colour: Natural, White" }
        ],
        fetureFeatures: [
          "Nutritional Facts: White sesame seeds are an excellent source of healthy fats, proteins, and essential minerals...",
          "Benefits: Incorporating white sesame seeds into your diet can support bone health..."
        ],
      },
    {
        id: 2,
        name: 'Wheat',
        image: wheat,
        description: 'Nutritional Facts & Benefits',
        fetureFeatures: [
            "Nutritional Facts: Wheat is a major source of carbohydrates and dietary fiber, and it also provides essential vitamins and minerals such as B vitamins, iron, and magnesium. The fiber content in wheat aids in digestion and promotes a healthy gut.",
            "Benefits: Including wheat in your diet provides sustained energy and supports digestive health. The high fiber content aids in maintaining a healthy weight by promoting satiety and regulating blood sugar levels. Wheat’s essential nutrients contribute to overall well-being and energy levels.",
        ],
    },
    {
        id: 3,
        name: 'Green Moong (Green Gram)',
        image: Moong,
        description: 'Nutritional Facts & Benefits',
        fetureFeatures: [
            "Nutritional Facts: Green moong is a nutrient-dense legume that offers high levels of protein, fiber, antioxidants, and essential vitamins. It is low in fat and provides a substantial amount of energy, making it a great option for maintaining a healthy diet.",
            "Benefits: Green moong supports cardiovascular health, aids in weight management, and enhances skin health. Its high fiber content helps with digestion and promotes a feeling of fullness, which can assist in managing weight. The antioxidants in green moong help protect the body from harmful free radicals.",
        ],
    },
    {
        id: 4,
        name: 'Black Sesame Seeds',
        image: Sesame,
        description: 'Nutritional Facts & Benefits',
        specification: [
            { Parameter: "Admixture", Level: "1% Max (0.05%)" },
            { Parameter: "Purity", Level: "99% Max (99.95%)" },
            { Parameter: "Oil content", Level: "48% Min" },
            { Parameter: "FFA", Level: "2% Max" },
            { Parameter: "Moisture", Level: "6% Max" },
            { Parameter: "Salmonella", Level: "Absent/25g" },
            { Parameter: "Pesticide Residues", Level: "Within EU Regulations" }
          ],
          PackagingInformation: [
            { detail: "Bag Type: Laminated" },
            { detail: "Bag Weight: 60 Gms" },
            { detail: "Weight Capacity: Up to 25 Kgs Material" },
            { detail: "Colour: Natural, White" }
          ],
        fetureFeatures: [
            "Nutritional Facts: Black sesame seeds are packed with antioxidants, dietary fiber, and high-quality protein. They are also rich in essential nutrients like calcium, magnesium, and iron. The oil content in black sesame seeds is slightly lower than in white sesame seeds but still provides numerous health benefits.",
            "Benefits: Black sesame seeds are known for their anti-aging properties due to their antioxidant content. They support cardiovascular health, promote hair growth, and improve skin elasticity. Additionally, the seeds aid in digestion and help maintain overall health by providing essential nutrients.",
        ]
    },
    {
        id: 5,
        name: 'Desi Chana (Bengal Gram)',
        image: desi_chana,
        description: ' Nutritional Facts & Benefits',
        fetureFeatures: [
            " Nutritional Facts: Desi chana is a rich source of protein, fiber, iron, and various vitamins and minerals. It provides a substantial amount of energy and helps in meeting daily nutritional requirements.",
            " Benefits: Desi chana helps improve digestion due to its high fiber content, supports heart health, and aids in weight management. Its protein content makes it beneficial for muscle maintenance and overall vitality. Additionally, the iron in desi chana supports healthy blood and energy levels.",
        ],
    },
    {
        id: 6,
        name: 'Toor  (Pigeon Pea)',
        image: peanuts,
        description: 'Nutritional Facts & Benefits',
        fetureFeatures: [
            "Nutritional Facts: Toor dal is a powerhouse of protein and dietary fiber, making it an excellent addition to a balanced diet. It is also rich in iron, folic acid, and other essential vitamins and minerals that are vital for maintaining good health.",
            "Benefits: Consuming toor dal can support heart health by providing necessary nutrients and fiber. It helps manage diabetes by stabilizing blood sugar levels and aids in digestion. The high protein content makes it a valuable food for muscle maintenance and overall vitality.",
        ],
    },
];
