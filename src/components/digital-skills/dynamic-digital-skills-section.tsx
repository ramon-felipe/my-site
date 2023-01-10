import dynamic from 'next/dynamic';

const DynamicDigitalSkillsSection = dynamic(() => 
    import('./digital-skills-section'), { ssr: false, });

export default DynamicDigitalSkillsSection;