import dynamic from 'next/dynamic';

const DynamicPersonalSection = dynamic(() => 
    import('./personal-section'), { ssr: false, });

export default DynamicPersonalSection;