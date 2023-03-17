import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";
const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "dashboards",
  },
  {
    id: 3,
    text: "design",
  },
  {
    id: 4,
    text: "python",
  },
  {
    id: 5,
    text: "gateways",
  },
];

const allData = [
  {
    "id": 1,
    "title": "Kwik Funnels",
    "category": "dashboards",
    "image": "images/works/dashboard/kf/dashboard.png",
    "popupLink": ['images/works/dashboard/kf/dashboard.png', 'images/works/dashboard/kf/apps.png', 'images/works/dashboard/kf/integration.png', 'images/works/dashboard/kf/products.png']
  },
  {
    "id": 2,
    "title": "Lookhype Media",
    "category": "dashboards",
    "image": "images/works/dashboard/lh/home.png",
    "popupLink": ['images/works/dashboard/lh/home.png']
  },
  {
    "id": 3,
    "title": "Webly Technolab",
    "category": "dashboards",
    "image": "images/works/dashboard/wt/dashboard.png",
    "popupLink": ['images/works/dashboard/wt/dashboard.png', 'images/works/dashboard/wt/login.png', 'images/works/dashboard/wt/invoice.png', 'images/works/dashboard/wt/invoicep.png']
  },
  {
    "id": 4,
    "title": "Chhappan Bhog",
    "category": "design",
    "image": "images/works/designs/cb/home.png",
    "popupLink": ['images/works/designs/cb/home.png', 'images/works/designs/cb/shop.png', 'images/works/designs/cb/about.png', 'images/works/designs/cb/contact.png']
  },
  {
    "id": 5,
    "title": "Milk And Honey",
    "category": "design",
    "image": "images/works/designs/mh/home.png",
    "popupLink": ['images/works/designs/mh/home.png', 'images/works/designs/mh/brownie.png', 'images/works/designs/mh/cakes.png', 'images/works/designs/mh/chocolates.png', 'images/works/designs/mh/cookies.png', 'images/works/designs/mh/about.png', 'images/works/designs/mh/pastry.png']
  },
  {
    "id": 6,
    "title": "Kaps Food",
    "category": "design",
    "image": "images/works/designs/kf/home.png",
    "popupLink": ['images/works/designs/kf/home.png', 'images/works/designs/kf/shop.png', 'images/works/designs/kf/contact.png']
  },
  {
    "id": 7,
    "title": "Olive Venture Partners",
    "category": "design",
    "image": "images/works/designs/ovp/home.png",
    "popupLink": ['images/works/designs/ovp/home.png', 'images/works/designs/ovp/services.png', 'images/works/designs/ovp/teams.png', 'images/works/designs/ovp/whoweare.png', 'images/works/designs/ovp/contact.png']
  },
  {
    "id": 8,
    "title": "Links Flix",
    "category": "design",
    "image": "images/works/designs/lf/home.png",
    "popupLink": ['images/works/designs/lf/home.png', 'images/works/designs/lf/about.png', 'images/works/designs/lf/services.png', 'images/works/designs/lf/news.png', 'images/works/designs/lf/contact.png']
  },
  {
    "id": 9,
    "title": "Bulk Product Importer From Excel Multisite",
    "category": "python",
    "image": "images/works/python.png",
    "popupLink": ['images/works/python.png']
  },
  {
    "id": 10,
    "title": "Product Cover Generator Woocommerce",
    "category": "python",
    "image": "images/works/python.png",
    "popupLink": ['images/works/python.png']
  },
  {
    "id": 11,
    "title": "Wordpress Order to To Automate Printing & Shipping",
    "category": "python",
    "image": "images/works/python.png",
    "popupLink": ['images/works/python.png']
  },
  {
    "id": 12,
    "title": "Image Scrapper From Google",
    "category": "python",
    "image": "images/works/python.png",
    "popupLink": ['images/works/python.png']
  },
  {
    "id": 13,
    "title": "2c2p Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/2c2p.png",
    "popupLink": ['images/works/payment-gateways/2c2p.png']
  },
  {
    "id": 14,
    "title": "authorize Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/authorize.jpg",
    "popupLink": ['images/works/payment-gateways/authorize.jpg']
  },
  {
    "id": 15,
    "title": "billplz Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/billplz.webp",
    "popupLink": ['images/works/payment-gateways/billplz.webp']
  },
  {
    "id": 16,
    "title": "Cashfree Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/Cashfree.png",
    "popupLink": ['images/works/payment-gateways/Cashfree.png']
  },
  {
    "id": 17,
    "title": "clover Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/clover.png",
    "popupLink": ['images/works/payment-gateways/clover.png']
  },
  {
    "id": 18,
    "title": "coinbase Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/coinbase.png",
    "popupLink": ['images/works/payment-gateways/coinbase.png']
  },
  {
    "id": 19,
    "title": "coingate Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/coingate.png",
    "popupLink": ['images/works/payment-gateways/coingate.png']
  },
  {
    "id": 20,
    "title": "flutterwave Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/flutterwave.png",
    "popupLink": ['images/works/payment-gateways/flutterwave.png']
  },
  {
    "id": 21,
    "title": "instamojo Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/instamojo.jpg",
    "popupLink": ['images/works/payment-gateways/instamojo.jpg']
  },
  {
    "id": 22,
    "title": "mollie Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/mollie.webp",
    "popupLink": ['images/works/payment-gateways/mollie.webp']
  },
  {
    "id": 23,
    "title": "nowpayments Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/nowpayments.png",
    "popupLink": ['images/works/payment-gateways/nowpayments.png']
  },
  {
    "id": 24,
    "title": "omise Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/omise.jpg",
    "popupLink": ['images/works/payment-gateways/omise.jpg']
  },
  {
    "id": 25,
    "title": "paymongo Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/paymongo.png",
    "popupLink": ['images/works/payment-gateways/paymongo.png']
  },
  {
    "id": 26,
    "title": "paypal Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/paypal.jpg",
    "popupLink": ['images/works/payment-gateways/paypal.jpg']
  },
  {
    "id": 27,
    "title": "paytm Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/paytm.jpg",
    "popupLink": ['images/works/payment-gateways/paytm.jpg']
  },
  {
    "id": 28,
    "title": "payu Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/payu.jpg",
    "popupLink": ['images/works/payment-gateways/payu.jpg']
  },
  {
    "id": 29,
    "title": "rapyd Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/rapyd.webp",
    "popupLink": ['images/works/payment-gateways/rapyd.webp']
  },
  {
    "id": 30,
    "title": "razorpay Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/razorpay.jpg",
    "popupLink": ['images/works/payment-gateways/razorpay.jpg']
  },
  {
    "id": 31,
    "title": "square Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/square.png",
    "popupLink": ['images/works/payment-gateways/square.png']
  },
  {
    "id": 32,
    "title": "stripe Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/stripe.jpg",
    "popupLink": ['images/works/payment-gateways/stripe.jpg']
  },
  {
    "id": 33,
    "title": "toyyibpay Payment Gateway",
    "category": "gateways",
    "image": "images/works/payment-gateways/toyyibpay.png",
    "popupLink": ['images/works/payment-gateways/toyyibpay.png']
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
