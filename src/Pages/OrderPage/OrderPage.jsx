import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shered/Cover/Cover";
import coverImg from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import OrderTab from "./OrderTab/OrderTab";
import useMenu from "../../hooks/useMenu";

const OrderPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover img={coverImg} title={"Order Page"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px"}}>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
           <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
           <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
           <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
           <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
