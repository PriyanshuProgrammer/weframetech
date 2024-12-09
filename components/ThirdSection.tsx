import './custom.css'
import { CarryCase,Dish,Ven,Moniter,Arrow ,Logo,Social} from './store/logo'

export default function ThirdSection(){
    return (
        <>
            <div className="mt-[4rem] mb-[1.32rem] mr-[2.12rem] ml-[2.12rem] bg-gradient-to-b from-[#ee41970a] to-[#FFFFFF] rounded-md">
                <div className='flex justify-center mt-[5rem]'>
                    <h1 className=' text-center text-[35px] text-[#393939]'>On s’occupe de <span className='text-[#5CD2DD] '>tout</span></h1>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-[#9C9C9C] text-center  text-[14px]'>Office ipsum you must be muted. It meeting commitment busy pain.</h1>
                </div>

                <div id="occupeoptions" className='flex justify-center items-center mt-[4rem]'>
                    <IconComponent title="Livraison & Reprise" desc="Selon vos besoins"><CarryCase></CarryCase></IconComponent>
                    <div id="occupelines" className='w-[7rem] h-10 border-t-2 border-slate-300'></div>
                    <IconComponent title="Nettoyage" desc="Selon vos besoins"><Dish></Dish></IconComponent>
                    <div id="occupelines" className='w-[7rem] h-10 border-t-2 border-slate-300'></div>
                    <IconComponent title="Commande Illimitée" desc="Tout est possible"><Ven></Ven></IconComponent>
                    <div id="occupelines" className='w-[7rem] h-10 border-t-2 border-slate-300'></div>
                    <IconComponent title="Transport & Enlèvement" desc="On s’occupe de tout."><Moniter></Moniter></IconComponent>
                    
                </div>

            </div>

            <div id="subscribesection" className='mt-[4rem] mb-[1.32rem] mr-[2.12rem] ml-[2.12rem] flex gap-[3%]'>
                <div className='rounded-xl' id='sofaphoto'></div>
                <div id="subscriptionbutton" className='w-[55%] h-fit pb-5 bg-[#FFF3F9] rounded-xl pl-5 pr-5'>
                    <h1 className='text-[2rem] text-[#393939]'>S’inscrire & économiser <span className='text-[#5CD2DD]'>10%</span></h1>
                    <p className='text-[14px] text-[#BDA2B0]'>Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>

                    <div className='flex gap-6 justify-center items-center mt-5'>
                        <input className='w-full outline-none h-[3rem] rounded-lg pl-2' type="text" placeholder='john@doe.com' />
                        <button className='w-[160px] text-[15px] bg-[#5CD2DD] flex items-center justify-around p-2 pt-3 pb-3 rounded-lg text-white'>S’INSCRIRE <span className='rotate-180'><Arrow></Arrow></span></button>
                    </div>

                </div>
            </div> 

            <div id='finalpage' className='mt-[5rem] mb-[10rem] mr-[2.12rem] ml-[2.12rem] flex gap-6 items-center  '>
                <div><Logo></Logo></div>
                <div className='grid grid-rows-5 grid-flow-col gap-x-10'>
                    <div className='text-md font-bold text-[#393939]'>INFOS PRATIQUES</div>
                    <div className='text-sm text-[#393939]'>À propos</div>
                    <div className='text-sm text-[#393939]'>Livraisons & Reprises</div>
                    <div className='text-sm text-[#393939]'>Mode d’emploi</div>
                    <div className='text-sm text-[#393939]'>F.A.Q</div>

                    <div className='text-md font-bold text-[#393939]' >LÉGAL</div>
                    <div className='text-sm text-[#393939]'>Mentions légales</div>
                    <div className='text-sm text-[#393939]'>CGU</div>
                    <div className='text-sm text-[#393939]'>CGVi</div>
                    <div className='text-sm text-[#393939]'>Politique de confidentialité</div>

                    <div className='text-md font-bold text-[#393939]'>MON COMPTE</div>
                    <div className='text-sm text-[#393939]'>Accéder à mon compte </div>
                    <div className='text-sm text-[#393939]'>Ma liste d’envie</div>
                    <div className='text-sm text-[#393939]'>Créer un compte</div>
                    <div className='text-sm text-[#393939]'>Mot de passe oublié</div>
                </div>

                <div id='social' className='ml-auto'>
                    <Social></Social>
                </div>
            </div> 
        </>
    )
}



function IconComponent({children,title,desc}:{children:React.ReactNode,title:string,desc:string}){
    return (
        <div className=' flex flex-col items-center gap-3 w-[10rem]'>
            {children}
            <h1 className='text-center text-[15px] text-[#393939]'>{title}</h1>
            <h1 className='text-center text-[8px] text-[#9C9C9C]'>{desc}</h1>

        </div>
    )
}

