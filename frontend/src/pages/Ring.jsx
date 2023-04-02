import React, { useEffect, useState } from "react";
import "./Ring.css";
import { BiRupee } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { FcVideoCall } from "react-icons/fc";
import { getRingData } from "../data";
import { Link } from "react-router-dom";

const Ring = () => {
  const [ringData, setRing] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [filtering, setFiltering] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getRingData();
      // console.log(data);
      setRing(data);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(sortOrder);

  function setData(order) {
    // if(filtering.length ===0 ){
    const sorted = [...ringData].sort((a, b) => {
      if (order === "ascending") {
        console.log("hello asc");
        return a.MRP - b.MRP;
      } else {
        console.log("hello desc");
        return b.MRP - a.MRP;
      }
    });
    setRing(sorted);
    setSortOrder(order);
  }

  const filteredData = () => {
    const filterd = ringData.filter((item) => {
      if (selectedPriceRange === "under5000") {
        return item.MRP < 5000;
      } else if (selectedPriceRange === "between5001and10000") {
        return item.MRP >= 5000 && item.MRP <= 10000;
      } else if (selectedPriceRange === "between10001and15000") {
        return item.MRP > 10000 && item.MRP <= 15000;
      } else if (selectedPriceRange === "between15001and20000") {
        return item.MRP > 15000 && item.MRP <= 20000;
      } else if (selectedPriceRange === "between20001and30000") {
        return item.MRP > 20000 && item.MRP <= 30000;
      } else if (selectedPriceRange === "between30001and40000") {
        return item.MRP > 30000 && item.MRP <= 40000;
      } else if (selectedPriceRange === "between40001and50000") {
        return item.MRP > 40000 && item.MRP <= 50000;
      } else if (selectedPriceRange === "between50001and75000") {
        return item.MRP > 50000 && item.MRP <= 75000;
      } else if (selectedPriceRange === "between75001and100000") {
        return item.MRP > 75000 && item.MRP <= 100000;
      } else if (selectedPriceRange === "between100001and150000") {
        return item.MRP > 100000 && item.MRP <= 150000;
      } else if (selectedPriceRange === "between150001and200000") {
        return item.MRP > 150000 && item.MRP <= 200000;
      } else if (selectedPriceRange === "between200001and250000") {
        return item.MRP > 200000 && item.MRP <= 250000;
      } else if (selectedPriceRange === "over25000") {
        return item.MRP >= 250000;
      }
    });

    // console.log("Filterd data", filterd);

    setFiltering(filterd);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filteredData();
  }, [selectedPriceRange]);

  console.log("ringData data", ringData);
  return (
    <div className="Ring-container">
      <img
        className="bannerImage"
        src="https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp"
        alt="Banner_Image"
      />
      <div>
        <div className="Ring-subNavbar">
          <div className="fetcher-secion">
            <div>All</div>
            <div>Try at Home</div>
            <div>Designs in Store</div>
            <div>Fast Delivery</div>
            <div>New In</div>
          </div>
          <div className="accending-decending">
            <select
              name=""
              id=""
              value={sortOrder}
              onChange={(e) => setData(e.target.value)}
            >
              <option value="">Sort by Price</option>
              <option value="descending">High to Low</option>
              <option value="ascending">Low to High</option>
            </select>
          </div>
        </div>
        <div className="title">
          <p className="bold">Jewellery</p>
          <p> 7302 Designs</p>
        </div>

        <div className="product-container">
          <div className="w-25">
            <div className="filtering-section">
              <h2>Filter By</h2>
              <div className="filter">
                <div className="filter-by-price">
                  <p className="price-title">Price</p>
                  <div className="radioBtn-section">
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "under5000"}
                        onChange={() => setSelectedPriceRange("under5000")}
                        type="radio"
                      />
                      <label htmlFor="">Under 5,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "between5001and10000"}
                        onChange={() =>
                          setSelectedPriceRange("between5001and10000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">5,001 - 10,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "between10001and15000"}
                        onChange={() =>
                          setSelectedPriceRange("between10001and15000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">10,001 - 15,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        type="radio"
                        checked={selectedPriceRange === "between15001and20000"}
                        onChange={() =>
                          setSelectedPriceRange("between15001and20000")
                        }
                      />
                      <label htmlFor="">15,001 - 20,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "between20001and30000"}
                        onChange={() =>
                          setSelectedPriceRange("between20001and30000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">20,001 - 30,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "between30001and40000"}
                        onChange={() =>
                          setSelectedPriceRange("between30001and40000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">30,001 - 40,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "between40001and50000"}
                        onChange={() =>
                          setSelectedPriceRange("between40001and50000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">40,001 - 50,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "between50001and75000"}
                        onChange={() =>
                          setSelectedPriceRange("between50001and75000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">50,001 - 75,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "between75001and100000"}
                        onChange={() =>
                          setSelectedPriceRange("between75001and100000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">75,001 - 1,00,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={
                          selectedPriceRange === "between100001and150000"
                        }
                        onChange={() =>
                          setSelectedPriceRange("between100001and150000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">1,00,001 - 1,50,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={
                          selectedPriceRange === "between150001and200000"
                        }
                        onChange={() =>
                          setSelectedPriceRange("between150001and200000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">1,50,001 - 2,00,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={
                          selectedPriceRange === "between200001and250000"
                        }
                        onChange={() =>
                          setSelectedPriceRange("between200001and250000")
                        }
                        type="radio"
                      />
                      <label htmlFor="">2,00,001 - 2,50,000</label>
                    </div>
                    <div>
                      <input
                        name="radioBtn"
                        checked={selectedPriceRange === "over25000"}
                        onChange={() => setSelectedPriceRange("over25000")}
                        type="radio"
                      />
                      <label htmlFor="">Over 2,50,000</label>
                    </div>
                  </div>
                </div>

                <div className="underLine"></div>

                <div className="filter-by-productType">
                  <p className="productType-title">Product Type</p>
                  <div className="radioBtn-section">
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Earrings</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Rings</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Necklaces</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Pendants</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Bracelets</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Bangles</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Chains</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Sets</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Mangalsutra</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Nose pin</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Nath</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Charms</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Adjustable Rings</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Charm Builders</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Tanmaniya</label>
                    </div>
                    <div>
                      <input name="productType" type="radio" />
                      <label htmlFor="">Baby Bangles</label>
                    </div>
                  </div>
                </div>

                <div className="underLine"></div>

                <div className="filter-by-productType">
                  <p className="productType-title">Weight Ranges</p>
                  <div className="radioBtn-section">
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">0 - 2 g</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">2 - 5 g</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">5 - 10 g</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">10 - 20 g</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">20 - 30 g</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor=""> &gt; 30 g</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Chains</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Sets</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Mangalsutra</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Nose pin</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Nath</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Charms</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Adjustable Rings</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Charm Builders</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Tanmaniya</label>
                    </div>
                    <div>
                      <input name="weightRang" type="radio" />
                      <label htmlFor="">Baby Bangles</label>
                    </div>
                  </div>
                </div>

                <div className="underLine"></div>

                <div className="filter-by-productType">
                  <p className="productType-title">Material</p>
                  <div className="radioBtn-section">
                    <div>
                      <input name="material" type="radio" />
                      <label htmlFor="">Platinum</label>
                    </div>
                    <div>
                      <input name="material" type="radio" />
                      <label htmlFor="">Gold</label>
                    </div>
                    <div>
                      <input name="material" type="radio" />
                      <label htmlFor="">Diamond</label>
                    </div>
                    <div>
                      <input name="material" type="radio" />
                      <label htmlFor="">Gemstone</label>
                    </div>
                    <div>
                      <input name="material" type="radio" />
                      <label htmlFor="">Solitaire</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="show-products">
            {filtering.length === 0 ? (
              <>
                {ringData?.map((ele, index) => (
                  <Link to={`/productpage/${ele._id}`}>
                    <div key={index} className="singleProd">
                      <img src={ele.imglink} alt="" />
                      <h3 className="rupee">
                        <BiRupee />
                        <span>{ele.MRP}</span>
                      </h3>
                      <p className="deliveryDate">
                        Check delivery date{" "}
                        <span>
                          <FaGreaterThan />
                        </span>
                      </p>
                      <p className="Singletitle">{ele.name}</p>
                      <div className="btn">
                        <button>
                          <ImHome3 /> <span>Book Try at Home</span>
                        </button>
                        <button>
                          <FcVideoCall /> <span>Live Video Call</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {filtering?.map((ele, index) => (
                  <Link to={`/productpage/${ele._id}`}>
                    <div key={index}>
                      <img src={ele.imglink} alt="" />
                      <h3 className="rupee">
                        <BiRupee />
                        <span>{ele.MRP}</span>
                      </h3>
                      <p className="deliveryDate">
                        Check delivery date{" "}
                        <span>
                          <FaGreaterThan />
                        </span>
                      </p>
                      <p className="Singletitle">{ele.name}</p>
                      <div className="btn">
                        <button>
                          <ImHome3 /> <span>Book Try at Home</span>
                        </button>
                        <button>
                          <FcVideoCall /> <span>Live Video Call</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ring;
