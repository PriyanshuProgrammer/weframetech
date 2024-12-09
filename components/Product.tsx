import { url } from 'inspector'
import './custom.css'
import { Ellipse } from './store/logo'
import { Scale } from './store/logo'
import { Cancel } from './store/logo'
import { Hearbig } from './store/logo'

export default function Product(){
    return (
        <>
            <div className='mt-[1.32rem] mb-[1.32rem] mr-[2.12rem] ml-[2.12rem]'>
                <div className='flex justify-left items-center gap-[10px] font-[{"Geist"}] font-[500]'>
                    Home
                    <Ellipse></Ellipse>
                    <span className='text-[#9C9C9C]'>
                    Art de la table
                    </span>
                </div>

                <div id="productcontent" className='flex justify-between'> 

                    <div className='relative'>
                        <div className='absolute flex flex-col gap-5 top-10 left-3'>
                            <div id="tableimagesmall"></div>
                            <div className='opacity-[0.5]'>
                                <div id="tableimagesmall"></div>
                            </div>
                            <div className='opacity-[0.5]'>
                                <div id="tableimagesmall"></div>
                            </div>
                            <div className='opacity-[0.5]'>
                                <div id="tableimagesmall"></div>
                            </div>
                        </div>

                        <div id="productimage">
                        </div>
                    </div>  

                    <div className='flex flex-col'>
                        <h1 style={{fontFamily:"Playfair Display"}} className='flex items-center font-[400] text-[1.87rem]'>Cheese – appareil à raclette 1/2 roue <span className='ml-auto'><Hearbig></Hearbig></span> </h1>
                        <h1  className='border-b-[0.5px] pb-2 border-b-[#9C9C9C] font-[400] text-[24px]'>39,50€ <span  className='text-[#9C9C9C] font-[400] text-[14px]'>/pièce</span></h1>
                        

                        <div className='flex gap-3 items-center pt-3 pb-3 border-b-[0.5px] border-b-[#9C9C9C] '>
                            
                            <Scale></Scale>
                           
                            <span className='relative h-[100%] mr-3'>20<span className='absolute top-0 text-[12px]'>cm</span></span>
                            <Cancel></Cancel>
                
                            <span className='relative h-[100%]'>50<span className='absolute top-0 text-[12px]'>cm</span></span>
                            
                            <span style={{fontFamily:"Geist"}} className='ml-auto font-[12px] text-[#9C9C9C] '>RÉF : VABGN5</span>
                        </div>

                        <div className='md:w-[60%] lg:w-[60%] w-[100%] mt-4'>
                            <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue
                            Réglable en hauteur
                            Appareil à raclette professionnel
                            Boîtier de chauffe horizontal réglable en hauteur
                             </p>
                        </div>

                        <div style={{fontFamily:"Geist"}}  className='flex flex-col text-[#9C9C9C] text-[14px] mt-4'>
                            <span>220V</span>
                            <span>900W</span>
                        </div>

                        <div className='flex gap-2 lg:mt-auto mt-[50px] border-t-[1px] border-b-[#9C9C9C] pt-[20px]'>
                            <div className='w-[25%] border-[0.5px] border-[#9C9C9C] rounded-md flex justify-between p-2'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>

                            <div className='w-full text-center border-[0.5px] bg-[#5CD2DD] text-[#FFFFFF] rounded-md p-2'>
                            Ajouter au panier
                            </div>
                            
                        </div>

                    </div>
                </div>


                <div id="productdescriptions" className='flex mt-10'>
                    <div className='w-[48vw] pr-[2vw] box-content '>
                        <h1  className='text-[20px] mb-4 text-[#393939]'>Description produit</h1>  
                        <p className='text-[14px]  text-[#9C9C9C]'>Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
                    </div>

                    <div  className=' w-[40vw] '>
                        <div className='flex justify-between items-center bg-[#FBF9F899] pl-4 pr-4 pt-2 pb-2 mb-3 rounded-md'>
                        <span className='text-[16px] text-[#393939]' >Livraisons</span>
                            <span className='text-[30px] text-[#9C9C9C]'>+</span>
                        </div>

                        <div className='flex justify-between items-center bg-[#FBF9F899] pl-4 pr-4 pt-2 pb-2 rounded-md'>
                            <span className='text-[16px] text-[#393939]'>Questions</span>
                            <span  className='text-[30px] text-[#9C9C9C]'>+</span>
                            

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

