import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import fetcher from "../../../Shared/api/axios.config";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  //fetched my orders
  useEffect(() => {
    if (user) {
      (async () => {
        const res = await fetcher.get(`/orders?email=${user.email}`);
        setOrders(res.data);
      })();
    }
  }, [user]);

  //delete or cancel a order
  const handleDeleteItem = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (proceed) {
      const res = fetcher.delete(`/order/${id}`);
      setOrders(res.data);

      const remainingOrders = orders.filter((order) => order._id !== id);
      setOrders(remainingOrders);
    }
  };

  return (
    <div className="mt-5">
      <h1>My Orders: {orders?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Ordered By</th>
              <th>Product Name</th>
              <th>Ordered Quantity</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr>
                <th></th>
                <td>
                  <div>
                    <div className="font-bold">{order.name}</div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.productName}</div>
                    </div>
                  </div>
                </td>
                <td>{order.quantity}</td>
                <td>${order.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteItem(order._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
