import dynamic from 'next/dynamic';

const DynamicLanguageSection = dynamic(() => 
    import('./language-skills-section'), { ssr: false, });

export default DynamicLanguageSection;