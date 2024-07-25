import { useState } from 'react';

function BookList({textInputs}) {
    // keep an array of elements that have been added.
    // use that array to create a list of links here.
    let favorites = [];
    let ellipsis = <li>...</li>;
    let i = 0;

    textInputs.forEach((input) => {
        favorites.push(
            <li key={input + i++}>{input}</li>
        );
    });
    console.log(favorites);

    return(
        <>
            <ul>{favorites.length > 0 ? favorites : ellipsis}</ul>
        </>
    )
}

function EntryBar({textInputs, onClickSubmit}) {
    return (
        <>
            <input 
                id="textEntryBar"
                type="text" 
                placeholder="Enter a book title..." />
            <button
                onClick={e => {
                    let submitted = document.getElementById("textEntryBar").value;
                    if (submitted != '') {
                        document.getElementById("textEntryBar").value = '';
                        onClickSubmit(textInputs.toSpliced(textInputs.length, 0, submitted));
                    }
                }}>
                Submit
            </button>
        </>
    );
}

function Title() {
    return <h1>My Favorite Books</h1>;
}

function BookTracker() {
    let [textInputs, setTextInputs] = useState([]);
    
    return(
    <>
        <Title />
        <EntryBar textInputs={textInputs} onClickSubmit={setTextInputs}/>
        <BookList textInputs={textInputs}/>
    </>);
}

export default function App() {
    return <BookTracker />
}

/*

import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

*/