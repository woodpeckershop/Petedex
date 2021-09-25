// import React from "react";
// import "./Home.css";
// import Item from "./Item.jsx";

// const allCategories = ['all', ...new Set(items.map((item) => item.category))];


// function Home() {
//   const [items, setItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);

  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setItems(items);
  //     return;
  //   }
  //   const newItems = items.filter((item) => item.category === category);
  //   setItems(newItems);
  // };

  // return (
  //   <main>
  //     <section className="menu section">
  //       <div className="title">
  //         <h2>our menu</h2>
  //         <div className="underline"></div>
  //       </div>
  //       <Categories categories={categories} filterItems={filterItems} />
  //       <Menu items={Items} />
  //     </section>
  //   </main>
  // );























  return (
    <div className="home">
      <div className="home__container">
      
        <div className="home__row">
          <Item
            id="1"
            title="the lean startup"
            price={29.99}
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            rating={4}
          />
          <Item
            id="2"
            title="the lean startup"
            price={29.99}
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Item
            id="3"
            title="the lean startup"
            price={29.99}
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            rating={4}
          />
          <Item
            id="4"
            title="the lean startup"
            price={29.99}
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            rating={4}
          />
          <Item
            id="5"
            title="the lean startup"
            price={29.99}
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Item
            id="1"
            title="the lean startup"
            price={29.99}
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
