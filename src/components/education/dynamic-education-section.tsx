import dynamic from 'next/dynamic';

const DynamicEducationSection = dynamic(() => 
    import('./education-section'), { ssr: false, });

export default DynamicEducationSection;