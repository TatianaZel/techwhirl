import React from 'react';
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import TextBlock from '../../components/TextBlock/TextBlock';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <TextBlock
                text="Techwhirl is a team of like-minded individuals who share a common vision for the new era of IT products. We strive to bring user experiences to an entirely new level - for the benefit of millions around the globe."
                link="https://linkedin.com"
                icon={faLinkedin}
                title="Turning cutting-edge tech into enjoyable apps"
            />
            <ImageBlock
                src="https://s3-alpha-sig.figma.com/img/9aca/0bb3/ef177c5d9e0f9f14928832ac2a385e42?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OEcSSJuBxKL7pePoDEsk8-IIzbAGgsZ0WyN9Hh6lp1LdlN5291EWysZc1eUH09YvbczxhYpO4H2tOqTaEstdY~MVjAA3YgxRXb4oh6BwHYZhn4Z2xU5tzJDXytPFZvD~UPrZ1oOzyNtpblJOVZSrGy1mjza7ZoCJscQgtLxwtdvuHPh8YOHo6EhuOI9r1bTWE2l6QGSGkAp7j~zITH~l0LOwwTi9eLUxEQRMBfJt4-i1BseVxv5Mw0sxFaBGi-f77yn2mSRlb3wABMIy5bDTwcpHcRupouRnd2ZbCMxPUjzCvf~C0mswKXl-FSDe8SEp-vyjDLBT302yWvBj9YWjAQ__"
                alt="description"
                caption="With the majority of staff based in Ukraine, we're proud to enable local talents to realize their potential at a scale."
            />
        </div>
    );
};

export default HomePage;
