import React, { useState, useEffect } from "react";
import "./App.css";
import Items from "./components/Items";
import AddForm from "./components/AddForm";

let id = 8069;
let itemList = [
    { id: id++, name: "პროდუქტი 1", imgUrl:"https://pbs.twimg.com/profile_images/512070268148129792/mrlDAqg0_400x400.png", categoryId:5432, categoryName:"კატეგორია 1" },
    { id: id++, name: "პროდუქტი 2", imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41B0ec%2BGUaL.jpg", categoryId:5433, categoryName:"კატეგორია 2" },
    { id: id++, name: "პროდუქტი 3", imgUrl:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84b50457-d93d-401a-b0c7-e0f8a0b20b9f/dbjf4v3-adeb75e5-5142-42e7-9402-a3bddc47c27e.jpg/v1/fill/w_600,h_737,q_75,strp/sexy_shrek_by_miuszek_dbjf4v3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM3IiwicGF0aCI6IlwvZlwvODRiNTA0NTctZDkzZC00MDFhLWIwYzctZTBmOGEwYjIwYjlmXC9kYmpmNHYzLWFkZWI3NWU1LTUxNDItNDJlNy05NDAyLWEzYmRkYzQ3YzI3ZS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8jIdgwkX6dFs9cLbhWA9VQWqynjpembdnYtw4kru6XA", categoryId:5435, categoryName:"კატეგორია 4" },
    { id: id++, name: "პროდუქტი 4", imgUrl:"https://assets.change.org/photos/9/yq/ux/RWYquxnYdozJBBz-400x400-noPad.jpg?1484284968", categoryId:5433, categoryName:"კატეგორია 2" },
    { id: id++, name: "პროდუქტი 5", imgUrl:"https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/65963030_679073155889672_8336044620202724250_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=uPPJAiKkQigAX8Rg7f6&oh=087a09b3f85050036aa480b757dd3f23&oe=5EC0EFD8", categoryId:5434, categoryName:"კატეგორია 3" },
    { id: id++, name: "პროდუქტი 6", imgUrl:"https://vignette.wikia.nocookie.net/filthy-frank/images/e/e1/OCHINCHINGADAISUKINANDAYO.jpg/revision/latest?cb=20180203215315", categoryId:5432, categoryName:"კატეგორია 1" },
    { id: id++, name: "პროდუქტი 7", imgUrl:"https://i.ytimg.com/vi/S6bQibFNs2E/maxresdefault.jpg", categoryId:5432, categoryName:"კატეგორია 1" },
];

let cId = 5432;
const catList = [
    { name: "კატეგორია 1", id: cId++ },
    { name: "კატეგორია 2", id: cId++ },
    { name: "კატეგორია 3", id: cId++ },
    { name: "კატეგორია 4", id: cId++ },
    { name: "კატეგორია 5", id: cId++ },
];

function App() {
    const [items, setItems] = useState([]);

    const handleOnSubmit = (name, imgUrl, category) => {
        itemList.push({ id: id++, name:name, imgUrl:imgUrl, categoryId: category, categoryName: catList.find((c) => c.id === category).name});
        setItems([...itemList]);
    };

    const handleRemoval = (currentItem) => {
        const index = items.findIndex((i) => i.id === currentItem.id);
        itemList.splice(index, 1);
        setItems([...itemList]);
    };

    useEffect(() => {
        setItems([...itemList]);
    }, []);

    return (
        <div className="App">
            <div className="itemsHalf">
                <h1>Items</h1>
                <hr />
                <Items items={items} handleRemoval={handleRemoval} />
            </div>
            <div className="formHalf">
                <h1>Add an item</h1>
                <hr />
                <AddForm catList={catList} handleOnSubmit={handleOnSubmit} />
            </div>
        </div>
    );
}

export default App;
