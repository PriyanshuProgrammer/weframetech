import {Logo} from "./store/logo"
import {Cart} from "./store/logo"
import {Heart} from "./store/logo"
import {Bulb} from "./store/logo"
import {Search} from "./store/logo"
import {Dropdown} from "./store/logo"
import {Menu} from "./store/logo"
import '@fontsource/poppins';
import './custom.css'

export default function Nav() {
    return (
        <>
        {/* // Top section of nav bar */}
        

            <div className="lg:flex md:flex pl-[1.81rem] pr-[1.81rem] flex-shrink-0">
                <div className=" mt-[2.06rem] flex justify-center md:block lg:block">
                    <Logo />
                </div>

                <div className="lg:ml-[10px] flex md:w-[40rem] lg:w-[40rem] md:ml-auto  w-[100%] h-[3.12rem] mt-[1.81rem] mr-10 rounded-md bg-[#F9FAFB] box- justify-between items-center">
                    <input className=" bg-transparent outline-none ml-[15px] text-[#667482] w-[100%]" type="text" placeholder="Rechercher un produit" />
                    <div className="mr-[15px] ml-[15px]">
                        <Search></Search>
                    </div>
                    <div className="mr-5 lg:hidden">
                        <Menu></Menu>
                    </div>
                </div>

                <div className="mg:flex lg:flex hidden ml-auto justify-center items-center gap-[12px] ">
                        <div className="flex justify-center items-center flex-shrink-0">
                            <div style={{fontFamily:'Poppins'}} className="flex gap-[8px] text-[14px] text-center">
                                <Bulb></Bulb>
                                Inspirations
                            </div>
                        </div>


                        <div  className="flex flex-shrink-0 justify-center items-center ">
                            <div style={{fontFamily:'Poppins'}} className="flex gap-[8px] text-[14px] text-center justify-center items-center">
                                <Heart></Heart>
                                Mes favoris
                                <div className="font-[{'Poppins'}] pr-1 pl-1 text-[10px] bg-[#CAD2D5] rounded-full">24</div>
                            </div>
                        </div>


                        <div className="flex-shrink-0 flex justify-center items-center">
                            <button id="panierbutton" className="bg-[#0093D0] border-[1px] border-[#007AAD] flex gap-[2px] ">
                                <Cart></Cart>
                                Panier</button>
                        </div>

                        <div className="flex justify-center items-center ">
                            <div id="userphoto"></div>
                        </div>

                        <div style={{fontFamily:'Poppins'}} className="flex justify-center items-center gap-[8px]">
                            FR
                            <Dropdown></Dropdown>
                        </div>
                </div>
            </div>

            {/* // bottom section of nav bar */}

            <div id="nav2" className="flex text-[14px ] justify-between items-center pl-[1.44rem] pr-[1.44rem] font-[{'Inter'}] mt-[2rem] flex-shrink-0 overflow-x-scroll whitespace-nowrap  border-b-[1px] border-b-[#E5E7E0B]">
                <div className="pb-[1.5rem] text-[#0093D0] font-[700] flex-shrink-0 border-b-[2px] border-b-[#0093D0]">Art de la table</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Mobilier</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Nappage</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Matériel de salle</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Cuisine</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Barbecue</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Tente</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Chauffage</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Podium - Piste de danse</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Son et lumière</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Packs</div>
                <div className="pb-[1.5rem] text-gray-500 flex-shrink-0">Consommables</div>
            </div>

        </>
        
    )
}
     

