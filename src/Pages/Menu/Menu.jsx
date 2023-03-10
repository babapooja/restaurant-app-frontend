import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import { Tabs } from 'flowbite-react'
import { TbSalad } from 'react-icons/tb';
import { MdEmojiFoodBeverage, MdDinnerDining } from 'react-icons/md';
import { FaCocktail } from 'react-icons/fa';
import './Menu.scss';
import FooterComponent from '../../Components/FooterComponent/Footer';
import { GiWrappedSweet } from 'react-icons/gi';
import { useState } from 'react';

const Menu = () => {

  const [type, setType] = useState('veg');

  const menu = {
    "veg": {
      "appetizers": {
        icon: TbSalad, values: [
          {
            "dishName": "Caprese Skewers",
            "description": "Fresh cherry tomatoes, mini mozzarella balls, fresh basil leaves, balsamic glaze, and olive oil.",
          },
          {
            "dishName": "Bruschetta",
            "description": "Slices of bread, fresh tomatoes, garlic, basil, olive oil, and balsamic vinegar."
          },
          {
            "dishName": "Vegetable Spring Rolls",
            "description": "Rice paper wrappers, shredded carrots, cucumber, bell pepper, vermicelli noodles, mint leaves, and peanut dipping sauce."
          },
          {
            "dishName": "Roasted Red Pepper Hummus",
            "description": "Chickpeas, tahini, roasted red peppers, garlic, lemon juice, and olive oil."
          },
          {
            "dishName": "Baked Zucchini Fritters",
            "description": "Grated zucchini, flour, eggs, garlic, and parmesan cheese."
          }
        ]
      },
      "hotDrinks": {
        icon: MdEmojiFoodBeverage, values: [
          {
            dishName: "Tomato soup",
            description: "This classic soup is made with tomatoes, broth, and often cream. It's typically seasoned with herbs such as basil and oregano."
          },
          {
            dishName: "Lentil soup",
            description: "This soup is made with lentils, vegetables, and spices such as cumin and coriander. It's a hearty and satisfying soup that's perfect for vegetarians."
          },
          {
            dishName: "Mushroom soup ",
            description: "This soup is made with mushrooms, broth, and often cream. It's a rich and earthy soup that's perfect for mushroom lovers."
          },
          {
            dishName: "Tea ",
            description: "This is a classic hot drink that is enjoyed by many vegetarians. There are many different types of tea available, including black, green, herbal, and fruit teas."
          },
          {
            dishName: "Coffee ",
            description: "Coffee is another popular hot drink that is suitable for vegetarians. Just be aware that some coffee shops use syrups or flavorings that contain animal products, so it's always a good idea to ask before ordering."
          }
        ]
      },
      "coldDrinks": {
        icon: FaCocktail,
        values: [
          {
            "dishName": "Shirley Temple",
            "description": "This classic mocktail is made with ginger ale, grenadine syrup, and a maraschino cherry. It's a sweet and fruity drink that's popular with kids"
          },
          {
            "dishName": "Virgin mojito",
            "description": "This mocktail is made with lime juice, sugar, mint leaves, and soda water. It's a refreshing and flavorful drink that's perfect for summer."
          },
          {
            "dishName": "Pina colada mocktail ",
            "description": "This tropical drink is made with pineapple juice, coconut milk, and cream of coconut. It's a creamy and sweet drink that's perfect for a beach vacation."
          },
          {
            "dishName": "Virgin Bloody Mary ",
            "description": "This mocktail is made with tomato juice, Worcestershire sauce, hot sauce, and a variety of seasonings. It's a spicy and savory drink that's perfect for brunch."
          },
          {
            "dishName": "Peach iced tea mocktail",
            "description": "This refreshing drink is made with peach syrup, iced tea, and a splash of lemon juice. It's a sweet and fruity drink that's perfect for sipping on a hot day."
          }
        ]
      },
      "entree": {
        icon: MdDinnerDining, values: [
          {
            dishName: "Eggplant Parmesan",
            description: " Layers of breaded eggplant, tomato sauce, and mozzarella cheese, baked to perfection."
          },
          {
            dishName: "Lentil Shepherd's Pie",
            description: "A vegetarian version of the classic dish made with lentils, mashed potatoes, and mixed vegetables."
          },
          {
            dishName: "Tofu Stir-Fry",
            description: "Crispy fried tofu mixed with colorful vegetables and a savory sauce."
          },
          {
            dishName: "Spinach and Ricotta Stuffed Shells",
            description: " Large pasta shells filled with a mixture of spinach, ricotta cheese, and herbs, baked in a tomato sauce."
          },
          {
            dishName: "Vegetable Curry",
            description: "A delicious and healthy blend of seasonal vegetables cooked in a spicy sauce, served over rice."
          }
        ]
      },
      "desserts": {
        icon: GiWrappedSweet, values: [
          {
            dishName: "Chocolate Chip Cookies",
            description: "A delicious and healthy chocolate chip cookies, served over rice."
          },
          {
            dishName: "Chocolate Avocado Mousse",
            description: "Blend ripe avocados, cocoa powder, vanilla extract, and a sweetener of your choice (such as maple syrup or agave) in a food processor until smooth and creamy."
          },
          {
            dishName: "Vegan Banana Bread",
            description: "Mash ripe bananas, mix with flour, sugar, baking powder, and your choice of dairy-free milk. Bake in a loaf pan until golden brown."
          },
          {
            dishName: "Fruit Sorbet",
            description: "Blend your favorite fruit (such as strawberries, mangoes, or raspberries) with a little water and sugar to taste. Pour the mixture into a container and freeze until solid. Scoop out and serve."
          },
          {
            dishName: "Chia Seed Pudding",
            description: "Mix chia seeds with your choice of milk, vanilla extract, and a sweetener of your choice. Let the mixture sit in the fridge for at least an hour or until the chia seeds absorb the liquid and thicken into a pudding consistency."
          }
        ]
      }

    },
    "non-veg": {
      "appetizers": {
        icon: TbSalad, values: [
          {
            dishName: "Chicken Wings",
            description: "Chicken wings are a classic appetizer that can be baked, grilled, or fried. They are typically served with a dipping sauce such as blue cheese or ranch dressing."
          },
          {
            dishName: "Bacon-Wrapped Scallops",
            description: "This appetizer consists of fresh sea scallops wrapped in bacon and then broiled or grilled until the bacon is crispy and the scallops are cooked through."
          },
          {
            dishName: "Sausage-Stuffed Mushrooms",
            description: "Mushroom caps are stuffed with a mixture of cooked sausage, breadcrumbs, and Parmesan cheese, then baked until golden brown and crispy."
          },
          {
            dishName: "Chicken Satay",
            description: "Chicken satay is a popular Thai appetizer made from marinated chicken skewered and then grilled or broiled until cooked through. It is typically served with a peanut sauce for dipping."
          },
          {
            dishName: "Fried Calamari",
            description: "This appetizer consists of battered and fried squid rings, often served with a marinara sauce for dipping."
          }
        ]
      },
      "hotDrinks": {
        icon: MdEmojiFoodBeverage, values: [{
          dishName: "Butternut squash soup ",
          description: " This soup is made with roasted butternut squash, broth, and seasonings such as cinnamon and nutmeg. It's often served with a dollop of sour cream or yogurt."
        }, {
          dishName: "Chicken noodle soup",
          description: "This soup is made with chicken broth, vegetables, and egg noodles. It's a classic comfort food that's perfect for when you're feeling under the weather."
        }, {
          dishName: "Beef stew ",
          description: " While not technically a soup, beef stew is a hearty and filling dish that's perfect for cold weather. It's typically made with beef, vegetables, and broth"
        }, {
          dishName: "Tom yum soup",
          description: "This spicy Thai soup is made with shrimp or chicken, lemongrass, chili, and lime juice. It's a flavorful and aromatic soup that's perfect for spicy food lovers."
        }, {
          dishName: "Ramen ",
          description: "Ramen is a Japanese noodle soup that's often made with pork broth and includes toppings such as sliced pork, bamboo shoots, and soft-boiled eggs."
        }
        ]
      },
      "coldDrinks": {
        icon: FaCocktail, values: [
          {
            dishName: "Michelada",
            description: "A Mexican beer cocktail made with beer, lime juice, hot sauce, and Worcestershire sauce. Served in a salt-rimmed glass and garnished with a lime wedge."
          },
          {
            dishName: "Caesar",
            description: "A Canadian cocktail similar to a Bloody Mary but made with Clamato juice (a blend of tomato and clam juice), vodka, Worcestershire sauce, hot sauce, and celery salt. Garnished with a celery stalk, lime wedge, and sometimes a skewered shrimp or bacon."
          },
          {
            dishName: "Bacon Bloody Mary",
            description: "A decadent twist on the classic Bloody Mary made with bacon-infused vodka and garnished with a bacon-wrapped shrimp or skewered bacon strip."
          },
          {
            dishName: "Dirty Martini",
            description: "A classic martini made with gin or vodka, vermouth, and a splash of olive brine. Garnished with a green olive or two."
          },
          {
            dishName: "Long Island Iced Tea",
            description: "A potent cocktail made with vodka, gin, rum, tequila, triple sec, lemon juice, and cola. Served in a tall glass over ice and garnished with a lemon wedge."
          }
        ]
      },
      "entree": {
        icon: MdDinnerDining, values: [
          {
            dishName: "Chicken Tikka Masala",
            description: "Grilled chicken pieces simmered in a creamy tomato-based sauce with Indian spices such as cumin, coriander, and garam masala."
          },
          {
            dishName: "Shrimp Scampi",
            description: "Large shrimp sautéed in garlic and butter with lemon juice, white wine, and parsley, served over linguine pasta."
          },
          {
            dishName: "Grilled Salmon with Mango Salsa",
            description: "Fresh salmon fillets grilled to perfection and topped with a sweet and tangy mango salsa made with fresh mango, red onion, jalapeño, lime juice, and cilantro."
          },
          {
            dishName: "Spaghetti and Meatballs",
            description: "Classic Italian dish featuring homemade meatballs made with a blend of ground beef, pork, and veal, served with spaghetti in a tomato-based sauce."
          },
          {
            dishName: "Chicken Parmesan",
            description: "Breaded chicken cutlets topped with tomato sauce, mozzarella cheese, and parmesan cheese, baked until golden and crispy, served over spaghetti."
          }
        ]
      },
      "desserts": {
        icon: GiWrappedSweet, values: [
          {
            dishName: "Tiramisu ",
            description: "Tiramisu is a classic Italian dessert made with layers of ladyfingers soaked in espresso and liqueur, and a rich mascarpone cream. The mascarpone cream is made by combining mascarpone cheese, egg yolks, sugar, and whipped cream."
          },
          {
            dishName: "Panna Cotta ",
            description: "Panna cotta is a classic Italian dessert made with sweetened cream and gelatin. The mixture is chilled until it sets and then topped with fresh fruit or a fruit sauce"
          },
          {
            dishName: "Bread Pudding -",
            description: "Bread pudding is a traditional dessert made with day-old bread, eggs, milk, sugar, and cinnamon. It is often baked with raisins or other dried fruit and topped with a sweet sauce."
          },
          {
            dishName: "Baklava ",
            description: "Baklava is a sweet pastry made with layers of filo pastry, chopped nuts, and honey syrup. It is a popular dessert in many Middle Eastern and Mediterranean countries."
          },
          {
            dishName: "Banoffee Pie",
            description: "Banoffee pie is a British dessert made with a digestive biscuit crust, sliced bananas, toffee sauce, and whipped cream. The toffee sauce is made by boiling condensed milk until it thickens and turns into caramel."
          }
        ]
      }
    }
  }



  return (
    <>
      <NavBar currentPage={window.location.pathname} />
      <div className='h-full flex flex-col items-center w-full px-40 order'>
        <h2 className='pt-10 text-5xl text-white'>Order from the menu below.*</h2>
        <p className='text-sm pb-5 text-gray-200 italic'>*You need to logged in to the application to order.</p>
        <div className='p-5 w-full flex justify-around buttons'>
          <button className='shadow-md' onClick={() => { setType("veg") }}>
            Vegetarian
          </button>
          <button onClick={() => { setType("non-veg") }}>
            Non-Vegetarian
          </button >
        </div>
        <div className='w-full flex justify-center tabs'>
          <Tabs.Group
            aria-label="Tabs with icons"
          >
            {
              Object.keys(menu[type]).map((key, { icon, title }) => {
                return (
                  <Tabs.Item
                    key={key}
                    icon={menu[type][key].icon}
                    title={key}
                    className="tab__details "
                  >
                    <div className='flex flex-col menu__items '>
                      {menu[type][key].values.map(({ dishName, description }, index) => {
                        return (
                          <>
                            <div className={`px-3 pt-${index === 0 ? "1" : "2"} min-w-full max-w-full`} key={index}>
                              <h3 className='text-white text-2xl title'>{dishName}</h3>
                              <p className='italic text-gray-100 text-md text-justify mb-3 '>{description}</p>
                            </div>
                            {index !== menu[type][key].values.length - 1 ? <hr /> : null}
                          </>);
                      })}
                    </div>

                  </Tabs.Item>
                )
              })
            }




          </Tabs.Group>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default Menu;