import React from 'react';
import {
    IconBisHallmark,
    IconTransparency,
    IconGuaranteedBuyback,
    IconLifetimeExchange,
    IconCertifiedDiamond,
    IconCustomizedJewellery,
    IconExpertAdvise,
    IconFreeCleaning,
    IconCustomerFirst,
    IconAstrology,
} from './Icons';

const WhyChooseUs: React.FC = () => {
    const items = [
        { Icon: IconBisHallmark, text: 'HUID & BIS Hallmark' },
        { Icon: IconTransparency, text: '100% Transparency' },
        { Icon: IconGuaranteedBuyback, text: 'Guaranteed Buyback' },
        { Icon: IconLifetimeExchange, text: 'Lifetime Exchange' },
        { Icon: IconCertifiedDiamond, text: 'Certified Diamond' },
        { Icon: IconCustomizedJewellery, text: 'Customized Jewellery' },
        { Icon: IconExpertAdvise, text: 'Expert Advise' },
        { Icon: IconFreeCleaning, text: 'Free Cleaning' },
        { Icon: IconCustomerFirst, text: 'Customer First' },
        { Icon: IconAstrology, text: 'Free Astrology Consultation' },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif text-center mb-12 text-[#6b4b3a]">Why Choose Us?</h2>
                <div className="flex flex-row flex-wrap justify-center items-start gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-28 text-center">
                            <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center mb-3 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                                <item.Icon className="h-10 w-10 text-[#c0844c]" />
                            </div>
                            <p className="text-sm font-medium text-gray-700 leading-tight">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
