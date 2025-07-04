import {ArrowDown} from 'lucide-react';

// Used Resource 1

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi! I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Tony</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Wu :)</span>
                </h1>
                <p className="text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    SFU Computing Science/BBA Student 
                </p> 

                <div className="flex justify-center gap-4 opacity-0 animate-fade-in-delay-2">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                    >
                        View Resume
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center px-4 py-2 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                    >
                        Contact
                    </a>
                </div>


            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                Scroll to learn more about me
            </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>

    </section>
}