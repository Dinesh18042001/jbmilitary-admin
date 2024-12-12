import React from 'react';

export default function DashboardCards() {
  // Array of card data
  const cardData = [
    { id: 1, title: 'Total Products', value: 5000, icon: 'assets/icon/new-product.png', bgColor: '#f8d7da' },
    { id: 2, title: 'Total Sells', value: 3000, icon: 'assets/icon/trade.png', bgColor: '#d1ecf1' },
    { id: 3, title: 'Total Orders', value: 4000, icon: 'assets/icon/tracking.png', bgColor: '#d4edda' },
    { id: 4, title: 'Total Customer', value: 2000, icon: 'assets/icon/customer-service.png', bgColor: '#fff3cd' },
  ];

  return (
    <div className="dashboardcards-section">
      <div className="container mt-3">
        <div className="dashboardcards-section-tittle">
          <h3>Welcome Admin</h3>
        </div>

        <div className="row mt-3">
          {cardData.map((card) => (
            <div key={card.id} className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <div
                className="dashboardcards-main p-3 text-center"
                style={{ backgroundColor: card.bgColor }}
              >
                <div className="icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <h5 className="mt-2">{card.title}</h5>
                <h4 className="mt-2">{card.value}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
