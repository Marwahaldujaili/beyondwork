import React, { useState, useContext, useEffect } from "react";
import "./MarketPlace.scss";
import MyContext from "../../context/MyContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function MarketPlace() {
  const { isDarkMode } = useContext(MyContext);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`products-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Check out our colleagues Market Place</h1>
      <div className="button-container">
        <button className="btn">Add your Item for sell</button>
      </div>
      <section className="section">
        <section className="cards-section">
          <div className="LikiTrike-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>Liki Trike</h2>
            <h3>category: </h3>
            <p>stroller</p>
            <h3>description:</h3>
            <p>
              The small fold trike is designed to encourage toddlers to explore
              and engage with the world around them with ease and confidence.
              With its 5 different modes of use, Liki will grow along with them
              from 10 to 36 months, as they form their independence and develop
              their motor skills.
            </p>
            <h3>condition: </h3>
            <p>Like new</p>
            <h3>Price: </h3>
            <p>189.99€</p>
          </div>
          <button>contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="EEZY-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>EEZY S TWIST</h2>
            <h3>category: </h3>
            <p>Stroller</p>
            <h3>description:</h3>
            <p>
              With one hand the seat unit and integrated leg rest can be rotated
              360°—from parent-facing to forward-facing and back again. The
              3-in-1 Travel System gives parents multiple options for the
              journey ahead.
            </p>
            <h3>condition: </h3>
            <p>used</p>
            <h3>Price: </h3>
            <p>100.00€</p>
          </div>
          <button>Contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="chair-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>Gray Dining Chairs</h2>
            <h3>category: </h3>
            <p>Chairs</p>
            <h3>description:</h3>
            <p>
              With their striking profile, these Perth chairs are a perfect
              balance of form and function. Their sleek cantilevered legs and
              soft upholstery makes them both stylish and comfy. Pair them with
              a contemporary dining table to make a glamorous statement.
            </p>
            <h3>condition: </h3>
            <p>good</p>
            <h3>Price: </h3>
            <p>34.00€</p>
          </div>
          <button>contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="germanBooks-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>Grammar German Books</h2>
            <h3>category: </h3>
            <p>Books</p>
            <h3>description:</h3>
            <p>
              Grammatik lernen leicht gemacht Die Übungsgrammatik richtet sich
              an fortgeschrittene Lernende, die die deutsche Grammatik von
              Niveau B2 bis C1 wiederholen und vertiefen möchten. Sie eignet
              sich sowohl zum Selbstlernen als auch für den Einsatz im
              DaF-Unterricht. Mit dem Doppelseiten-Prinzip zum Erfolg Die
              Kapitel sind übersichtlich aufgebaut: Auf der linken Seite finden
              Sie die einfachen, visuell gestützten Erklärungen, auf der rechten
              Seite die abwechslungsreichen Übungen mit niveaugerechtem
              Wortschatz. Alle Audios lassen sich über die kostenlose Cornelsen
              PagePlayer-App oder auf cornelsen.de/codes abspielen.
            </p>
            <h3>condition: </h3>
            <p>good</p>
            <h3>Price: </h3>
            <p>10.00€</p>
          </div>
          <button>contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="car-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>Kia Picanto</h2>
            <h3>category: </h3>
            <p>Small Car</p>
            <h3>description:</h3>
            <p>
              A beautiful Kia Picanto Spirit is being sold. - 1 hand - Forward
              collision warning - Drive Assist package Advanced - Backup camera
              - LED taillights - LED daytime running lights -Apple CarPlay &
              Android Auto - Radio & climate package - Anti-theft protection for
              gearboxes!!! Special equipment: Audio navigation system KIA (8
              inches) Metallic paint Induction charging cradle for Smartohone
              Model maintenance Comfort access Keyless Go
            </p>
            <h3>condition: </h3>
            <p>very good</p>
            <h3>Price: </h3>
            <p>13,200€</p>
          </div>
          <button>contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="tickets-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>Taylor Swift Tickets</h2>
            <h3>category: </h3>
            <p>Tickets</p>
            <h3>description:</h3>
            <p>
              Taylor Swift is finally extending her "The Eras" tour to Europe!
              and I cant go... :( and I have 2 Tickets to sell. if you are
              interesting the tickets are for 23 Jul 2024 Tuesday 20:00 in
              Hamburg. Taylor Swift last played on European soil in 2015 as part
              of her "1989 World Tour" - so it's high time! With "Folklore",
              "Evermore" and the most recently released "Midnights", which
              Taylor Swift has released since then, we can be curious which
              tracks the singer will present to us live on her upcoming "The
              Eras" tour alongside old familiar hits.
            </p>
            <h3>condition: </h3>
            <p>New</p>
            <h3>Price: </h3>
            <p>300€</p>
          </div>
          <button>contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="bicycle-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>Mountainbike 26zoll</h2>
            <h3>category: </h3>
            <p>Bicycle</p>
            <h3>description:</h3>
            <p>
              I have my bike for sale since leaving the city soon !! Smooth gear
              changes really good condition overall !! Kept in the basement
              Ready to ride !!
            </p>
            <h3>condition: </h3>
            <p>Used- like new</p>
            <h3>Price: </h3>
            <p>150.00€</p>
          </div>
          <button>contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="sofa-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>3 seater Sofa</h2>
            <h3>category: </h3>
            <p>Sofa</p>
            <h3>description:</h3>
            <p>
              Offering 3 seater sofa in beige The sofa has signs of wear on the
              fabric (see photos), but is otherwise in good condition. Since our
              family is about to grow, we now need a larger sofa. non-smoking
              home with no pets Private sale, hence no warranty or return
            </p>
            <h3>condition: </h3>
            <p>Used</p>
            <h3>Price: </h3>
            <p>74.99€</p>
          </div>
          <button>contact the seller</button>
        </section>

        <section className="cards-section">
          <div className="mobile-card-img">
            <div className="product-images"></div>
          </div>
          <div className="card">
            <h2>Comfee portable air conditioner</h2>
            <h3>category: </h3>
            <p>Clima</p>
            <h3>description:</h3>
            <p>
              Quick set-up. For the use of the device, it is not necessary to
              drill a holes in the wall. The supplied flat nozzle allows the use
              of tilted as well as sliding windows. High performance: The CMK
              2600 from Climia has significantly more performance than air
              conditioning devices without an exhaust hose. Long service life
              and continuous operation are possible with this air conditioner.
              Space-saving air conditioner: The air cooler has a compact
              dimensions of 70 x 34 x 35 cm (H x W x D). The air cooler can be
              used flexibly in the office or at home and is equipped with a max.
              volume of 53 db(A), quieter than a conventional refrigerator.
            </p>
            <h3>condition: </h3>
            <p>New- never used</p>
            <h3>Price: </h3>
            <p>299.99€</p>
          </div>
          <button>contact the seller</button>
        </section>
      </section>
      <div className="scroll-to-top-container">
        {showScrollToTop && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
          </div>
        )}
      </div>
    </div>
  );
}

export default MarketPlace;
