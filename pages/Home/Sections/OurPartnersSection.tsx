import SectionHeading from '@/components/SectionHeading';
import React from 'react'

const partnersData = [
  {
    name: "GooglePay",
    url: "#",
    imageURL: "/assets/partners/partner-01.png",
  },
  {
    name: "SamsungPay",
    url: "#",
    imageURL: "/assets/partners/partner-02.png",
  },
  {
    name: "Maestro",
    url: "#",
    imageURL: "/assets/partners/partner-03.png",
  },
  {
    name: "Klarna",
    url: "#",
    imageURL: "/assets/partners/partner-04.png",
  },
  {
    name: "ShopPay",
    url: "#",
    imageURL: "/assets/partners/partner-05.png",
  },
  {
    name: "westernunion",
    url: "#",
    imageURL: "/assets/partners/partner-06.png",
  },
  {
    name: "MoneyGram",
    url: "#",
    imageURL: "/assets/partners/partner-07.png",
  },
  {
    name: "Payoneer",
    url: "#",
    imageURL: "/assets/partners/partner-08.png",
  },
  {
    name: "Visa&mastercard",
    url: "#",
    imageURL: "/assets/partners/partner-09.png",
  },
  {
    name: "mastercard",
    url: "#",
    imageURL: "/assets/partners/partner-10.png",
  },
  {
    name: "Paypal",
    url: "#",
    imageURL: "/assets/partners/partner-11.png",
  },
  {
    name: "CashApp",
    url: "#",
    imageURL: "/assets/partners/partner-12.png",
  },
  {
    name: "Square",
    url: "#",
    imageURL: "/assets/partners/partner-13.png",
  },
  {
    name: "Skrill",
    url: "#",
    imageURL: "/assets/partners/partner-14.png",
  },
  {
    name: "AmazonPay",
    url: "#",
    imageURL: "/assets/partners/partner-15.png",
  },
  {
    name: "ethereum",
    url: "#",
    imageURL: "/assets/partners/partner-16.png",
  },
  {
    name: "Bitcoin",
    url: "#",
    imageURL: "/assets/partners/partner-17.png",
  },
  {
    name: "bitpay",
    url: "#",
    imageURL: "/assets/partners/partner-18.png",
  },
  {
    name: "Discover",
    url: "#",
    imageURL: "/assets/partners/partner-19.png",
  },
  {
    name: "Alipay",
    url: "#",
    imageURL: "/assets/partners/partner-20.png",
  },
  {
    name: "Gumroad",
    url: "#",
    imageURL: "/assets/partners/partner-21.png",
  },
  {
    name: "UnionPay",
    url: "#",
    imageURL: "/assets/partners/partner-22.png",
  },
  {
    name: "metamask",
    url: "#",
    imageURL: "/assets/partners/partner-23.png",
  },
  {
    name: "AmericanExpress",
    url: "#",
    imageURL: "/assets/partners/partner-24.png",
  },
  {
    name: "OpenSea",
    url: "#",
    imageURL: "/assets/partners/partner-25.png",
  },
  {
    name: "ApplePay",
    url: "#",
    imageURL: "/assets/partners/partner-26.png",
  },
];




export default function OurPartnersSection() {
  return (
    <section className="flex flex-col min-w-full mb-20" id="Our-Partners">
      <div className='flex mb-12'>
        <SectionHeading title="Our Partners" />
      </div>
      <div
        className="overflow-hidden 
            w-full max-w-screen-xl h-20 rounded-xl bg-white flex justify-center "
        style={{boxShadow:"0px 4px 100px 0px rgba(168, 85, 247, 0.70)"}}
      >
        <div className="flex gap-10 py-4 animate-infinite-scroll">
          {
            [...partnersData, ...partnersData].map((partner, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="gap-2"
                key={index}
                src={partner.imageURL}
                alt={partner.name}
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}
