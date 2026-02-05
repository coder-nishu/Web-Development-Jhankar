import React from "react";

export default function ProductTable({ products, setProducts }) {
  return (
    <div>
      <h2>Product Table</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product price</th>
            <th>Product quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><button>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={() => setProducts([])}>Delete all</button>
    </div>
  );
}
