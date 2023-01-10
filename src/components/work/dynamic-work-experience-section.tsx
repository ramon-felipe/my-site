import dynamic from 'next/dynamic';

const DynamicWorkExperienceSection = dynamic(() => 
    import('./work-experience-section'), { ssr: false, });

export default DynamicWorkExperienceSection;