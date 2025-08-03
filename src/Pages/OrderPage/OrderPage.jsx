// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Cover from "../../Shered/Cover/Cover";
// import coverImg from "../../assets/shop/banner2.jpg";
// import { useState } from "react";
// import OrderTab from "./OrderTab/OrderTab";
// import useMenu from "../../hooks/useMenu";
// import { useParams } from "react-router";

// const OrderPage = () => {
//   const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
//   const {category} = useParams();
//   console.log("Category from URL:", category);
//   const initialIndex = categories.indexOf(category);

//   const [tabIndex, setTabIndex] = useState(initialIndex);
//   const [menu] = useMenu();

//   const drinks = menu.filter((item) => item.category === "drinks");
//   const desserts = menu.filter((item) => item.category === "dessert");
//   const pizzas = menu.filter((item) => item.category === "pizza");
//   const salads = menu.filter((item) => item.category === "salad");
//   const soups = menu.filter((item) => item.category === "soup");

//   return (
//     <div>
//       <Cover img={coverImg} title={"Order Page"}></Cover>
//       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//         <TabList style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px"}}>
//           <Tab>SALAD</Tab>
//           <Tab>PIZZA</Tab>
//           <Tab>SOUP</Tab>
//           <Tab>DESSERTS</Tab>
//           <Tab>DRINKS</Tab>
//         </TabList>
//         <TabPanel>
//           <OrderTab items={salads}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//            <OrderTab items={pizzas}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//            <OrderTab items={soups}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//            <OrderTab items={desserts}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//            <OrderTab items={drinks}></OrderTab>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default OrderPage;



import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shered/Cover/Cover";
import coverImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";

const OrderPage = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  useEffect(() => {
    if (category && menu.length > 0) {
      const index = categories.indexOf(category.toLowerCase());
      setTabIndex(index !== -1 ? index : 0);

      const tabEl = document.getElementById("tabs-section");
      if (tabEl) {
        tabEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [category, menu]);

  const handleTabSelect = (index) => {
    setTabIndex(index);
    navigate(`/orderPage/${categories[index]}`);
  };

  const filterItems = (cat) => menu.filter((item) => item.category === cat);

  const drinks = filterItems("drinks");
  const desserts = filterItems("dessert");
  const pizzas = filterItems("pizza");
  const salads = filterItems("salad");
  const soups = filterItems("soup");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Cover img={coverImg} title={"Order Page"} />

      {/* Tabs section with padding */}
      <div
        id="tabs-section"
        className="pt-10 bg-white rounded-lg shadow-lg p-6"
      >
        <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
          <TabList className="flex justify-center gap-6 border-b-2 border-orange-400">
            {categories.map((cat, i) => (
              <Tab
                key={cat}
                className={`cursor-pointer px-6 py-2 rounded-t-lg text-lg font-semibold transition-all duration-300
                  ${
                    tabIndex === i
                      ? "bg-orange-500 text-white scale-110 shadow-lg"
                      : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                  }
                `}
              >
                {cat.toUpperCase()}
              </Tab>
            ))}
          </TabList>

          {/* TabPanels */}
          <TabPanel>
            <OrderTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderPage;
