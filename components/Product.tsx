import { url } from 'inspector'
import './custom.css'
import { Ellipse } from './store/logo'
import './store/product.jpg'

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

                <div className='flex justify-between items-center'>   
                    <div id="productimage">
                        
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

