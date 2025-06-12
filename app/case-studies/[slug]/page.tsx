import GetQuestions from "@/app/components/home/get-question";
import CaseHeroSection from "@/app/components/shared/common/case-hero-section";
import CaseStudyDetail from "@/app/components/shared/common/case-study-details";


interface PageProps {
    params: Promise<{ slug: string }>;
}

const CaseStudyPage = async ({ params }: PageProps) => {
    const { slug } = await params;

    return (
        <div>
            <CaseHeroSection/>
            <CaseStudyDetail slug={slug} />
            <GetQuestions
                heading1="Call to Action"
                description="Looking to elevate your product listings with detailed, cinematic 3D visuals? Let’s bring your product to life in 3D."
                buttonText="Get Started"
                buttonLink="/contact"
            />
        </div>
    );
};

export default CaseStudyPage;

