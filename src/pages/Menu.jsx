import { useState } from 'react'

const CATEGORIES = [
  'Appetizer',
  'Meat',
  'Soup',
  'Fish & Seafood',
  'Wok Vegetables',
  'Charcoal Grilled',
  'Rice',
  'Noodles',
  'Dessert',
  'Side Salad',
  'Smoothies',
  'Detox',
  'Mocktail',
  'Shake',
  'Fresh Juice',
  'Iced Tea',
  'Hot Drinks',
  'Soft Drinks',
  'Combo',
]

const MENU = {
  Appetizer: [
    { name: 'Fried Chicken Ball', desc: 'Fried marinated minced chicken balls and chili lime herbs with cucumber', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Tropical Sam Tam Tarts', desc: 'Crispy pastry cups filled with sweet, sour, and savory papaya salad', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Fried Chicken Wings', desc: 'Deep fried marinated wings and lemon grass with sweet and sour chili sauce', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Fried Kang Kong', desc: 'Fried breaded morning glory served with peanut sauce', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Vegetable Spring Roll', desc: 'Fried wrapped mixed vegetables and grass vermicelli with apricot sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Vegetable Tempura', desc: 'Fried breaded mixed vegetables with chili sweet dip', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Prawn Tempura', desc: 'Fried breaded prawns with chili sweet dip', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Prawn Cake', desc: 'Deep fried breaded minced shrimps with sweet chili dip', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Fish Cake', desc: 'Deep fried minced fish in curry paste with sweet chili dip and cucumber', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Beef Satay', desc: 'Grilled marinated beef skewer with peanut sauce and cucumber chili', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Chicken Satay', desc: 'Grilled marinated chicken breast skewer with peanut sauce', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
  ],
  Meat: [
    { name: 'Beef Red Curry', desc: 'Slice beef in red chili paste coconut milk curry', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Mutton Massaman Curry', desc: 'Slow braised lamb shank in massaman coconut curry', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
    { name: 'Chicken Garlic Pepper', desc: 'Stir fried chicken breast with garlic pepper sauce', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Grilled Whole Chicken', desc: 'Grilled whole chicken marinated in herbs with tamarind chili dip', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Sweet & Sour Chicken', desc: 'Stir fried chicken cube, capsicum, onion with sweet and sour sauce', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Thai Fried Chicken', desc: 'Fried breaded marinated half chicken with sweet chili sauce', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Chicken Red Curry', desc: 'Chicken in green chili paste coconut milk curry with eggplant and basil', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
    { name: 'Sizzling Chicken', desc: 'Capsicum, onion, mushroom and soy sauce on cast iron with chicken', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Sizzling Beef', desc: 'Capsicum, onion, mushroom and soy sauce on cast iron with beef', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Beef Hot Basil & Egg', desc: 'Stir fried beef with spicy hot basil, fried egg and steamed rice', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Duck Hot Basil', desc: 'Stir fried duck slice with hot basil, garlic, chili and soy sauce', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
    { name: 'BBQ Duck Red Curry', desc: 'Roasted duck curry and red grape in red curry paste and coconut milk', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
  ],
  Soup: [
    { name: 'Tom Yum Milk Soup', desc: 'Thai spicy-sour soup balanced with a touch of milk', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Tom Yum Goong', desc: 'Authentic Thai spicy and sour prawn soup with herbs and mushrooms', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Tom Yum Seafood Symphony', desc: 'Prawn, mussel, clam and squid soup with herbs and spicy lime chili', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Crab Szechuan Soup', desc: 'Szechuan soup of mushroom, crab meat and chives', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Prawn Wonton In Clear Soup', desc: 'Prawn and wonton soup with mushroom and bok choy', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Spicy Chicken Coconut Milk Soup', desc: 'Coconut milk soup with chicken, lemongrass, kaffir lime, galangal', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Rice Beef Noodles Soup', desc: 'Braised beef and sprout soup with rice noodles', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Spicy Braised Beef Soup', desc: 'Spicy beef soup with lemongrass and lime chili', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
  ],
  'Fish & Seafood': [
    { name: 'Fried Whole Snapper Sweet & Sour', desc: 'Fried whole snapper with pineapple, capsicum and sweet & sour sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Steamed Whole White Snapper', desc: 'Steamed snapper with chili, lemon and coriander in spicy lime sauce', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Steamed Pomfret Lime Chili', desc: 'Steamed whole pomfret with lime chili coriander sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Grilled Snapper', desc: 'Grilled whole snapper with spicy lemon chili dip', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Jumbo Prawn', desc: 'Grilled jumbo prawn with sweet chili tamarind herb dip', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Grilled Squid', desc: 'Grilled marinated squid with spicy green chili dip', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Squid Chili Hot Basil', desc: 'Stir fried squid with spicy hot basil leaf sauce', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
    { name: 'Crab Chili Lime', desc: 'Stir fried crab with chili and lime', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Crab Roasted Yellow Curry', desc: 'Stir fried crab with celery, capsicum and yellow curry sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
  ],
  'Wok Vegetables': [
    { name: 'Wok Mixed Vegetables', desc: 'Stir fried mixed vegetables with oyster sauce', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Wok Fried Bok Choy', desc: 'Stir fried bok choy and mushroom with oyster sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Wok Fried Lady Finger', desc: 'Stir fried lady finger with oyster sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
  ],
  'Charcoal Grilled': [
    { name: 'Grilled Fish In Banana Leaves', desc: 'Grilled snapper in lemongrass and garlic with seafood and tamarind dips', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Grilled Beef Rib Eye', desc: 'Grilled beef ribeye slice with tamarind chili dip', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Grilled Sirloin', desc: 'Grilled beef sirloin with onion, chili, parsley and tamarind sauce', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Grill Beef Duo Sauce', desc: 'Grilled beef with dual house sauces', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
  ],
  Rice: [
    { name: 'Steam Rice', desc: 'Authentic Thai jasmine rice, delicately steamed', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Sticky Rice', desc: 'Soft steamed sticky rice imported from Thailand', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Vegetables Fried Rice', desc: 'Stir fried rice with vegetables and soy sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Chicken Fried Rice', desc: 'Stir fried rice with chicken and soy sauce', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Garlic Egg Fried Rice', desc: 'Stir fried rice with garlic, egg, soy sauce and spring onion', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Pineapple Fried Rice', desc: 'Pineapple, prawn, pea, raisin, onion and carrot in curry powder', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Prawn Fried Rice', desc: 'Stir fried prawn rice with green pea, carrot and spring onion', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Crab Fried Rice', desc: 'Stir fried rice with crab meat, carrot and spring onion', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
    { name: 'Seafood Fried Rice', desc: 'Stir fried rice with mixed seafood', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
  ],
  Noodles: [
    { name: 'Prawn Pad Thai Noodles', desc: 'Tamarind stir-fried noodles with grilled prawns in egg net', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Wok Fried Noodles Seafood', desc: 'Stir fried noodles with mixed seafood and spicy oyster sauce', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Noodle Tamarind', desc: 'Stir fried rice noodles with prawns and tamarind sauce', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Chicken Khao Soi', desc: 'Chicken in red coconut milk curry with yellow noodles', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Beef Khao Soi', desc: 'Beef in coconut curry with noodles', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
  ],
  Dessert: [
    { name: 'Orange Swiss Roll', desc: 'Light fluffy sponge roll filled with smooth orange cream', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Lava Cream', desc: 'Rich, silky-smooth lava cream that melts in every bite', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Red Ruby', desc: 'Crispy water chestnuts in coconut milk with ice cream', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Trio Ice Cream', desc: 'Mango, strawberry, vanilla and chocolate with fruits and cookies', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Mango Sticky Rice (Local)', desc: 'Sticky rice in pandan leaves with seasonal mango', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Mango Sticky Rice (Imported)', desc: 'Sticky rice with imported mango and sweet coconut milk', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
  ],
  'Side Salad': [
    { name: 'Papaya Salad', desc: 'Papaya salad in lime chili and anchovy dressing', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Mango Salad (Local)', desc: 'Local green mango with chili, Thai herbs and sweet-sour dressing', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Mango Salad (Imported)', desc: 'Imported Thai green mangoes with spicy-tangy dressing', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Fruit Salad', desc: 'Seasonal fruits with sweet-sour herb dressing', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Glass Noodle Salad', desc: 'Glass noodles with herbs and Thai dressing', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Mixed Mushroom Salad', desc: 'Mixed mushrooms in lime chili, onion and celery salad', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Poached Eggplant Salad', desc: 'Poached eggplant with shallot, green chili and soft boiled egg', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
  ],
  Smoothies: [
    { name: 'Mango Smoothies', desc: 'Fresh mango blended smoothie', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Raspberry Smoothies', desc: 'Raspberry blended smoothie', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Blueberry Smoothies', desc: 'Blueberry blended smoothie', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
  ],
  Detox: [
    { name: 'Red Garden Breeze', desc: 'Fresh detox blend', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Tropical Harmony Elixir', desc: 'Tropical detox elixir', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
  ],
  Mocktail: [
    { name: 'Yogurt Mocktail', desc: 'Creamy yogurt mocktail', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Passion Fruit Mint Cooler', desc: 'Passion fruit with fresh mint', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Golden Island Nectar', desc: 'Golden tropical nectar', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Exotic Fruit Twist', desc: 'Mixed exotic fruit mocktail', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
    { name: 'Authentic Pina Colada', desc: 'Classic pineapple coconut mocktail', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Guava Spice Delight', desc: 'Guava with a hint of spice', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
  ],
  Shake: [
    { name: 'Strawberry Milk Shake', desc: 'Creamy strawberry milkshake', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Peanut Butter Milk Shake', desc: 'Rich peanut butter milkshake', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Chocolate Milk Shake', desc: 'Classic chocolate milkshake', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
  ],
  'Fresh Juice': [
    { name: 'Passion Chill Sparkling', desc: 'Passion fruit sparkling juice', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Mango Chill Sparkling', desc: 'Mango sparkling juice', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Clean Chili Sparkling', desc: 'Fresh chili sparkling cooler', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
  ],
  'Iced Tea': [
    { name: 'Thai Orange Tea', desc: 'Iced Thai orange tea', img: 'https://silkspoon.com.bd/public/media/menu/tropical-sam-tam-tarts-66.jpeg' },
    { name: 'Thai Sunset Milk Tea', desc: 'Creamy Thai milk tea', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Golden Passion Tea', desc: 'Passion fruit iced tea', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
  ],
  'Hot Drinks': [
    { name: 'Hot Thai Tea', desc: 'Traditional hot Thai tea', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
    { name: 'Hot Coffee', desc: 'Freshly brewed hot coffee', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
  ],
  'Soft Drinks': [
    { name: 'Coca Cola', desc: 'Chilled soft drink', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Sprite', desc: 'Chilled soft drink', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-spring-roll-122.jpg' },
    { name: 'Mineral Water', desc: 'Still or sparkling', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
  ],
  Combo: [
    { name: 'Exclusive Family Meal', desc: 'Fish Cake, Spicy Prawn Soup, Chicken Cashewnut Salad, Seafood Fried Rice, Chicken Red Curry, Steamed Snapper', img: 'https://silkspoon.com.bd/public/media/9-2-6.jpg' },
    { name: 'Family Meal', desc: 'Chicken Satay, Spicy Prawn Soup, Chicken Cashewnut Salad, Vegetables Fried Rice, Chicken Chili Onion, Beef Red Curry', img: 'https://silkspoon.com.bd/public/media/10-4-7.jpg' },
    { name: 'Couple Meal', desc: 'Fish Cake, Spicy Prawn Soup, Nam Tok Salad, Vegetables Fried Rice, Chicken Chili Onion', img: 'https://silkspoon.com.bd/public/media/beef-satay-1.jpeg' },
    { name: 'Lunch Combo - 1', desc: 'Yellow Rice with Chicken Onion Chili, Mixed Salad, Fish Cake, Seasonal Vegetable, Tom Yum Soup', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-wings-68.jpg' },
    { name: 'Lunch Combo - 2', desc: 'Egg & Garlic Fried Rice, Sweet & Sour Chicken, Mixed Salad, Fish Ball, Seasonal Vegetable, Tom Yum Soup', img: 'https://silkspoon.com.bd/public/media/menu/fried-chicken-ball-193.jpg' },
    { name: 'Lunch Combo - 3', desc: 'Steam Rice, Chicken Cashewnuts, Mixed Salad, Egg Cake, Seasonal Vegetable, Tom Yum Soup', img: 'https://silkspoon.com.bd/public/media/menu/vegetable-tempura-94.jpg' },
    { name: 'Lunch Combo - 4', desc: 'Steam Rice, Snapper Fried Fish, Egg Sunny Side, Seasonal Vegetable, Mixed Salad, Tom Yum Soup', img: 'https://silkspoon.com.bd/public/media/menu/fride-kang-kong-90.jpg' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('Appetizer')
  const items = MENU[active] || []

  return (
    <>
      <section className="breadcrumb">
        <div className="container-max">
          <p className="text-silk text-sm mb-2">Signature Thai Restaurant</p>
          <h1>Food Menu</h1>
          <p className="text-white/70 text-sm mt-3 max-w-xl mx-auto" style={{ lineHeight: '1.6' }}>
            Our menu brings together authentic recipes, seasonal ingredients, and modern culinary techniques.
          </p>
        </div>
      </section>

      <section className="padding100" style={{ background: '#F3FDE8' }}>
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={
                  'px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ' +
                  (active === cat
                    ? 'bg-primary text-white border-primary shadow-btn'
                    : 'bg-white text-primary border-primary/30 hover:border-secondary hover:text-secondary')
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 className="font-bricolage text-xl md:text-2xl font-bold text-heading text-center mb-8">
            {active}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((item) => (
              <article
                key={item.name}
                className="card overflow-hidden transition-shadow duration-300 hover:shadow-soft bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden bg-soft">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://silkspoon.com.bd/public/media/silkspoon-logo.png'
                      e.target.className = 'w-full h-full object-contain p-8 opacity-40'
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bricolage font-bold text-heading text-[15px] mb-1 leading-snug">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-primary/80 text-[13px] leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {items.length === 0 && (
            <p className="text-center text-primary/60 py-12">No items in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
