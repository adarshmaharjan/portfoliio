import { FC } from 'react';
import { constantValue } from '../../common/constants';
import { cardData } from './Card/CardData';
import Card from './Card/Card';

const Services: FC = () => {
  return (
    // <section className="bg-base-200 h-[calc(100vh-64px)] py-8">
    <section id="services" title="services" className={`bg-base-200 min-${constantValue.sectionHeight} py-6`}>
      <h2 className="text-5xl font-header font-bold text-center pb-4">Services</h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center xl:justify-evenly ">
          {cardData.map((item, index) => (
            <Card key={index} image={item.image} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
