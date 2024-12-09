import { Hearbig } from "./store/logo"
import './custom.css'
import { Arrow } from "./store/logo"
import { ReactHTMLElement } from "react"

export default function Articles() {
    return (
        <>
            <Wrapper title={"Articles similaires"} arrows={true}>
                <div className=" overflow-x-scroll whitespace-nowrap">
                    <Items width={20.6}></Items>
                    <Items width={20.6}></Items>
                    <Items width={20.6}></Items>
                    <Items width={20.6}></Items>
                    <Items width={20.6}></Items>
                    <Items width={20.6}></Items>
                    <Items width={20.6}></Items>
                    <Items width={20.6}></Items>
                </div>
            </Wrapper>

            <Wrapper title={"Ces produits pourraient vous intéresser"} arrows={false}>
                <div id="produitsboxes" className="flex justify-evenly">
                        <Items width={25}></Items>
                        <Items width={25}></Items>
                        <Items width={25}></Items>
                </div>
            </Wrapper>
        </>
    )
}



function Items({width}:{width:number}) {
    return (
        <div style={{
            width:`${width}rem`
        }} className={`p-5 mr-5 border-4 border-[#F9F7F5] rounded-md  inline-block`}>
            <div className="flex justify-between">
                <Hearbig></Hearbig>
                <p className="text-[10px] p-1 rounded-full bg-[#F1F4F6]">Art de la table</p>
            </div>
            <div className="w-[100%] flex justify-center items-center">
                <div id="ArticleItemImage"></div>
            </div>

            <div style={{
                fontFamily: "Playfair Display",
            }} className="flex justify-between  text-[24px]">
                <h1>Title</h1>
                <h1 className="relative">0<span className="absolute top-0 h-[50%] text-[15px]">€</span></h1>
            </div>

            <div className="flex justify-between ">
                <h1 className="text-[14px] text-[#9C9C9C]">0,35€/Pièce · <span className="text-[10px]">RÉF : VABGN5</span></h1>
                <h1 className="text-[#546A7D] p-1 rounded-full bg-[#F1F4F6]">20 pièces</h1>
            </div>
        </div>
    )
}

function Wrapper({ children, arrows, title }: { children: React.ReactNode,arrows:boolean,title:string }) {
    return (
        <div className="mt-[4rem] mb-[1.32rem] mr-[2.12rem] ml-[2.12rem]">
            <h1 id="ArticlesHeading" className="flex justify-center items-center text-[35px] text-[#393939]">{title}
                <span className="ml-auto underline text-[#393939] text-[16px]">Voir toute la collection</span>
            </h1>

            <div className="relative">

                {children}

                {
                    arrows &&
                    <>
                        <div className="absolute p-4 bg-[#5CD2DD] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                            <Arrow></Arrow>
                        </div>
                        <div className="absolute p-4 bg-[#5CD2DD] top-[50%] right-0 translate-y-[-50%] translate-x-[50%] rotate-180">
                            <Arrow></Arrow>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
