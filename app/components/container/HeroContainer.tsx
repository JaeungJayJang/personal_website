import Spline from '@splinetool/react-spline';

const HeroContainer = () => {
    return (
        <div className="h-[calc(100vh+1000px)]">
            <div className="sticky top-0">
                <div className="h-screen">
                    <Spline
                        scene="https://prod.spline.design/0CFsJKSH-WJ2TaVR/scene.splinecode"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroContainer;