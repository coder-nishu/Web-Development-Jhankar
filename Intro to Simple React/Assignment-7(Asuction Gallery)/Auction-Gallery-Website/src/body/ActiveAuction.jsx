import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./activeauction.css";
import { ToastContainer, toast } from "react-toastify";

export default function ActiveAuction() {
  const [item, setItem] = useState([]);
  const [favItems, setFavItem] = useState([]);
  const [totalBid, setTotalBid] = useState(0);

  const handleToast = (message) => {
    toast.success(message);
  };
  const handleFavItem = (bidItem) => {
    setFavItem([...favItems, bidItem]);
  };
  const handleTotalBid = (action, bidAmount) => {
    const posBidAmount = totalBid + bidAmount;
    const negBidAmount = totalBid - bidAmount;

    action === "+" ? setTotalBid(posBidAmount) : setTotalBid(negBidAmount);
  };
  const handleRemoveFavourites = (removeitem) => {
    const newfavItem = favItems.filter((favItem) => favItem !== removeitem);
    setFavItem(newfavItem);
    handleTotalBid("-", removeitem.currentBid);
  };
  console.log(favItems);
  useEffect(() => {
    fetch("../items.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  const isItemIsFav = (item) => favItems.includes(item);
  return (
    <div className="bg-[#EBF0F5] p-24">
      <div className="flex gap-6 justify-between items-start">
        <div className="bg-white rounded-4xl">
          <div className="p-8">
            <table className="table border-1 border-black">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Current Bid</th>
                  <th>time left</th>
                  <th>Favourites</th>
                </tr>
              </thead>
              {item.map((item) => (
                <tr key={item.id} className="border-black border-y-2">
                  <td className="flex gap-2 ">
                    <span>
                      <img className="w-12 h-12" src={item.imageUrl} alt="" />
                    </span>
                    {item.itemName}
                  </td>
                  <td>${item.currentBid}</td>
                  <td>{item.timeLeft}</td>
                  <td className="text-center">
                    <button
                      disabled={isItemIsFav(item) ? true : false}
                      className={
                        isItemIsFav(item) ? "disable-cursor" : "click-cursor"
                      }
                      onClick={() => {
                        handleFavItem(item);
                        handleTotalBid("+", item.currentBid);
                        handleToast("Item Added Successfully");
                      }}
                    >
                      {isItemIsFav(item) ? (
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ color: "#ff0000" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ color: "5f6368" }}
                        />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="bg-white h- rounded-4xl ">
          <div className="w-96 h-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-center">
                    <FontAwesomeIcon icon={faHeart} /> Favorite Items
                  </th>
                </tr>
              </thead>
              <tr>
                {favItems.length <= 0 ? (
                  <td className="flex flex-col justify-center items-center p-10">
                    <p className="text-2xl font-semibold">No Favourites yet</p>
                    <br />
                    <p className="w-52 text-center">
                      Click the heart icon on any item to add it to your
                      favorites
                    </p>
                  </td>
                ) : (
                  favItems.map((fav) => (
                    <td className="flex flex gap-4 justify-start items-center px-10">
                      <img className="w-14 h-14" src={fav.imageUrl} alt="" />
                      <div>
                        <div className="flex gap-7">
                          <p className="text-sm font-semibold">
                            {fav.itemName}
                          </p>
                          <button
                            onClick={() => {
                              handleRemoveFavourites(fav);
                              handleToast("Item Removed");
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M18.0001 5.99994C17.8125 5.81247 17.5582 5.70715 17.2931 5.70715C17.0279 5.70715 16.7736 5.81247 16.5861 5.99994L12.0001 10.5859L7.41406 5.99994C7.22653 5.81247 6.97223 5.70715 6.70706 5.70715C6.4419 5.70715 6.18759 5.81247 6.00006 5.99994C5.81259 6.18747 5.70728 6.44178 5.70728 6.70694C5.70728 6.9721 5.81259 7.22641 6.00006 7.41394L10.5861 11.9999L6.00006 16.5859C5.81259 16.7735 5.70728 17.0278 5.70728 17.2929C5.70728 17.5581 5.81259 17.8124 6.00006 17.9999C6.18759 18.1874 6.4419 18.2927 6.70706 18.2927C6.97223 18.2927 7.22653 18.1874 7.41406 17.9999L12.0001 13.4139L16.5861 17.9999C16.7736 18.1874 17.0279 18.2927 17.2931 18.2927C17.5582 18.2927 17.8125 18.1874 18.0001 17.9999C18.1875 17.8124 18.2928 17.5581 18.2928 17.2929C18.2928 17.0278 18.1875 16.7735 18.0001 16.5859L13.4141 11.9999L18.0001 7.41394C18.1875 7.22641 18.2928 6.9721 18.2928 6.70694C18.2928 6.44178 18.1875 6.18747 18.0001 5.99994Z"
                                fill="black"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm">
                          ${fav.currentBid}{" "}
                          <span className="pl-6">Bids: {fav.bidNumber}</span>
                        </p>
                      </div>
                    </td>
                  ))
                )}
              </tr>
              <tr>
                <td className="flex flex justify-between items-center p-10 text-xl font-semibold">
                  <p>Total Bids Amount</p>
                  <p>${totalBid}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
