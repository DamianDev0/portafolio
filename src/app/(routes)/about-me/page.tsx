import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container";
import { CounterServices } from "@/components/counter-services";
import  Timeline  from "@/components/time-line";
import { TransitionPage } from "@/components/transition-page";

 const AboutPage = () => {
    return(
        <>
          <TransitionPage />
          <ContainerPage>
             <Avatar />
            <h1 className="text-2xl leading-tight px-7 mb-5 text-center md:text-left md:text-4xl md:mt-10">My entire{' '} 
                <span className="text-secondary font-bold">professional career</span>
            </h1>
            <CounterServices />
            <Timeline />

          </ContainerPage>

        </>
    )
}

export default AboutPage;